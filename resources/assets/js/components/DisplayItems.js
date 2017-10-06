import React from 'react';
import axios from 'axios';
import { Link } from 'react-router'



class DisplayItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsList: []
        }
        this.handleDeleteData = this.handleDeleteData.bind(this);
    }

    componentDidMount() {

        let uri = "api/item";
        axios.get(uri).then(res => {
            this.setState({ itemsList: res.data });
        });
    }


    handleDeleteData(id) {
        let uri = "/api/item/" + id;

        axios.delete(uri).then( res => {
            console.log(res);

            this.setState({
                itemsList : this.state.itemsList.filter( item => item.id !== id )
            }) 
        });
    }


    render() {
        return (
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Product name </th>
                            <th>Product price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.itemsList.map((item, idx) => {
                            return (
                                <tr key={idx} >
                                    <td>{idx + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <div className="form-group">
                                            <Link to={'/edit/' + item.id} >
                                                <button className="btn btn-primary">Edit</button>
                                            </Link>
                                            <button 
                                            onClick={ e => this.handleDeleteData(item.id)}
                                            className="btn btn-danger " >

                                                Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        )
    }

} //  end class

export default DisplayItems
