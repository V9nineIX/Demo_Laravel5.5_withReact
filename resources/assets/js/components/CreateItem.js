import  React  from 'react'; 

export default  class CreateItem extends  React.Component{
    render(){
        return(
            <div>
                <h1>Create  Item  </h1>
                <form>
                <div className="row">
                    <div className="col-md-6">
                       <label>Item Name </label>
                       <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                       <label>Item Price: </label>
                       <input type="text" className="form-control" />
                    </div>
                </div>
                <br/>
                <div className="form-group">
                    <button className="btn btn-primary" >Add Iten </button>
                </div>
                </form>



            </div>
        )
    }

}