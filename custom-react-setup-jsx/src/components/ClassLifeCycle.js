import React from "react";
class ClassLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "lala",
    };
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("componentDidMout");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  component;
  render() {
    console.log("render Method");
    return (
      <>
        <h1>See console for life cycle</h1>
        <h4>State: {this.state.text}</h4>
        <button onClick={()=>this.setState({text:'State updated'})}>Update state</button>
      </>
    );
  }
}
export default ClassLifeCycle;
