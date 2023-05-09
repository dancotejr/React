import { Component } from "react";
class Myitems extends Component{
    state={
        Item: "",
    }
    co
    trackChanges=(item)=>{
        this.setState({
            Item: item.target.value,
        })

    }

    handleSubmit=(item)=>{
       item.preventDefault();
        console.log({
       item: this.state.Item,
       
        })
    }

    clear(){
        this.setState({
            item: this.state.Item = (" "),
        })
    }
render(){
    return(
<div>

    <form onSubmit={this.handleSubmit}>
        <h1></h1>
        <input type="text" value={this.state.Item} onChange={this.trackChanges}></input><br></br>
        <button type="submit">ADD ITEM</button>
    
    </form>
</div>
    
    )
}
}
export default Myitems;