import { useState } from "react";
const FunctionalCounter =() =>{

const[counter, setCounter] = useState(0);

const Icrement = () => {
    setCounter(counter +1)
}

const Dicrement = () => {
    setCounter(counter -1)
}

return(

    <div>

<h1>The counter value is: {counter} </h1>
<button onClick={Icrement}>Icrement</button> 

<button onClick={Dicrement}>Dicrement</button>


    </div>
)






}
export default FunctionalCounter