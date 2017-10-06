import React  ,{ Component} from 'react';
import  { Router , Route , Link} from 'react-router';
import HeaderMenu from './HeaderMenu';


export default class Master  extends Component{



   render(){
         const currentLocation = this.props.location.pathname;
                console.log(currentLocation);

       return(
           <div className="container">
                <HeaderMenu  currentLocation={currentLocation} />

                <div>
                    {this.props.children}
                </div>
           </div>
       )

       
   }
}