import React from 'react';
import axios from 'axios';

export default class CreateItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            producName: '',
            productPrice: ''
        }
        
         this.handleChangeItemName = this.handleChangeItemName.bind(this);
         this.handleChangeItemPrice = this.handleChangeItemPrice.bind(this);
         this.handleAddData = this.handleAddData.bind(this);
    }

     handleChangeItemName(e) {this.setState({ producName: e.target.value });}
      handleChangeItemPrice(e){this.setState({ productPrice: e.target.value });}
    handleAddData(e) {
        e.preventDefault();
        const product = {
            name : this.state.producName,
            price : this.state.productPrice
        };

        let uri = "/api/test";
        axios.post(uri , product).then( res => {
            console.log(res);
        });

    } 



    render() {
        return (
            <div>
                <h1>Create  Item  </h1>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Item Name </label>
                            <input type="text" onChange={this.handleChangeItemName}  className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Item Price: </label>
                            <input type="text"
                             onChange={this.handleChangeItemPrice}
                            className="form-control" />
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="btn btn-primary"  onClick={this.handleAddData} >Add Iten </button>
                    </div>
                </form>



            </div>
        )
    }

}