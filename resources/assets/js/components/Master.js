import React  ,{ Component} from 'react';
import  { Router , Route , Link} from 'react-router';

export default class Master  extends Component{
   render(){
       return(
           <div className="container">
                <nav className="navbar  navbar-default" >
                  <div className="container-fluid" >
                     <a className="navbar-brand" href="#">Laravel  react</a> 
                  </div>
                
                   <ul  className="nav  navbar-nav">
                      <li className="active"><a href="#">Home</a></li>
                        <li><a  href="/create"> Add Item</a></li>
                        <li><a  href="#"> Page 2</a></li>
                        <li><a  href="#"> Page 3</a></li>
                   </ul>
                  
                </nav>

                <div>
                    {this.props.children}
                </div>
           </div>
       )

       
   }
}