import { useState } from "react";
const ConditionalRendering =()=>{
    const [display, setDisplay] = useState(true)
    let output;
//     if(display){
//     return(
//         <div>
//             <h1>Display is true hence it is displayed</h1>
//         </div>
//     )
//     }
// else{
//     return(
//         <div>
//             <h1>Display is false: </h1>
//         </div>
//     )
// }
    //Ternary conditional
    // return display ?(
    //     <div>
    //         <h1>Display is true hence it is displayed</h1>
    //     </div>
    // ):(
    //     <div>
    //     <h1>Display is false: </h1>
    // </div>
    // );

    if (display){
        output= <h1>Display is true hence it is displayed</h1>
    }else{
        output = <h1>Display is false: </h1>
    

}
return output;
}
export default ConditionalRendering;