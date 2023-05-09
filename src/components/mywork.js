import { Component } from "react";

class House extends Component {

date =()=>{
   alert('Hello Timing Events \n Its fun here ')

}


   render(){
   return(
   <div>

<h2>This is a Timing Click event </h2>
<button onClick={()=>this.date()}>Click me</button>
   </div>

   )
    }
   }
export default House;