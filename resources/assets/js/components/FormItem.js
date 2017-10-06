import React from 'react';
import axios from 'axios';
import  {browserHistory} from 'react-router';

export default class FormItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            productName: '',
            productPrice: '',
            formTitle: 'Create Item'
        }
        
         this.handleChangeItemName = this.handleChangeItemName.bind(this);
         this.handleChangeItemPrice = this.handleChangeItemPrice.bind(this);
         this.handleAddData = this.handleAddData.bind(this);

    }

    componentDidMount(){
      
        if(this.props.params.itemId){
         this.getItem();
        }
    
    }

    // when swicth from edit to create reset form
    componentWillReceiveProps(nextProps, nextState){

        this.setState({
            id: '',
            productName: '',
            productPrice: '',
            fromTitle: 'Create Item'
        });
    
    }

    

    getItem() {


        let uri = "http://"+window.location.hostname+(location.port ? ':'+location.port: '')+"/api/find-item/"+this.props.params.itemId
        axios.get(uri).then(res =>  {
        
            this.setState({ 
                            id  : res.data.id ,
                            productName : res.data.name , 
                            productPrice : res.data.price ,
                            formTitle: 'Edit Item'
                        }); 
        });

    }

     handleChangeItemName(e) {this.setState({ productName: e.target.value });}
     handleChangeItemPrice(e){this.setState({ productPrice: e.target.value });}
     handleAddData(e) {
        e.preventDefault();
        let product = {
            name : this.state.productName,
            price : this.state.productPrice
        };

        if(this.state.id != ""){
            this.updateData(product);
        }else{
            this.addData(product);
        }
       

    }

    

    addData(product){
         let uri = "/api/item";
        axios.post(uri , product).then( res => {
             browserHistory.push('/');
        });

    }

    updateData(product){
        let uri = "/api/item/"+this.state.id;
        axios.put(uri, product).then(res => {
            browserHistory.push('/');
        });
    }

  



    render() {
        return (
            <div>
                <h1>{ this.state.formTitle }</h1>
                <form>
                    <input type="hidden" value={this.state.id} />
                    <div className="row">
                        <div className="col-md-6">
                            <label>Item Name </label>
                            <input type="text" 
                            onChange={this.handleChangeItemName} 
                            value={this.state.productName}
                            className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Item Price: </label>
                            <input type="text"
                             onChange={this.handleChangeItemPrice}
                             value={this.state.productPrice}
                            className="form-control" />
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="btn btn-primary"  onClick={this.handleAddData} >Save </button>
                    </div>
                </form>



            </div>
        )
    }

}