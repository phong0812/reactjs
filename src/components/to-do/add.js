import React from "react";
import Input from "../form/input";

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);


    }

    handleChange(event) {
        this.setState({
          ...this.state, inputValue: event.target.value
        });
    }
    onSave() {
        this.props.addItem(this.state.inputValue);
    }


    render() {
        return (
            <div>
                <button type="button" onClick={this.onSave}>Add</button>
                <input type="text" ref={(c) => this.state.inputValue} onChange={this.handleChange}></input>
            </div>
        );
    }
}

export default Add;
