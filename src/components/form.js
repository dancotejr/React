import { Component } from "react";
class Form extends Component{
    state={
        FirstName: "",
        LastName: "",
    }
    handleChange = (event) => {
        this.setState({
            FirstName: event.target.value,
        })

    
    }
    handlechange = (event) => {
        this.setState({
            LastName: event.target.value,
        })

    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log({
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        })
    }
 

    render(){
        return(
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <h3>Enter FirstName</h3>
                <input type="text" value={this.state.FirstName} onChange={this.handleChange}></input><br></br>
                <h3>Enter LastName</h3>
                <input type="text" value={this.state.LastName} onChange={this.handlechange}></input><br></br>
                <button type="submit">Submit</button> 
                <button type="clear">clear</button> 
                {/* <p><b>{this.state.FirstName}</b></p>
                <p><b>{this.state.LastName}</b></p> */}
                </form>
            </div>
        )
    }
}
export default Form;