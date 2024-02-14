import React from "react";
class ClassBasedCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        const { title } = this.props;
        const { count } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <h2>Count: {count}</h2>
                <button onClick={()=>{this.setState({count:count+1})}}>Increase</button>
                <button onClick={()=>{this.setState({count:count-1})}}>Decrease</button>
            </div>
        )
    }
}

export default ClassBasedCount;