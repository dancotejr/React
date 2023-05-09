import { Component } from "react";
class Counter extends Component {
    constructor(){
        super();
        this.state={
            counter:0,
        };
    }



incriment=()=>{
    this.setState({
        counter: this.state.counter +1,

    })
}

decriment=()=>{
    this.setState({
        counter: this.state.counter -1,
    

    })
}
clear=()=>{
    this.setState({
    counter: this.state.counter =0,
})
}

render(){
    return(
        <div>
            <h1>Counter Value: {this.state.counter}</h1>
            <button onClick={this.incriment} color="red">ICRIMENT</button>
            <button onClick={this.decriment}>DECRIMENT</button>
    
            <button onClick={this.clear}>Start</button>
            
        </div>
    )
}

}
export default Counter;