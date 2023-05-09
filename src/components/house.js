
import { Component } from "react";
class Houses extends Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <h2>I am a {this.state.color} House!</h2>;
    }
}

export default Houses;