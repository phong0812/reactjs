import React from "react";
import Input from "../form/input";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }

    render() {
        return (
            <div>
                <input type="radio" id="contactChoice1"
                       name="contact" value="1" onClick={() => this.props.handleFilter(1)}/>
                <label htmlFor="contactChoice1">All</label>

                <input type="radio" id="contactChoice2"
                       name="contact" value="2" onClick={() => this.props.handleFilter(2)}/>
                <label htmlFor="contactChoice2">Complete</label>

                <input type="radio" id="contactChoice3"
                       name="contact" value="3" onClick={() => this.props.handleFilter(3)}/>
                <label htmlFor="contactChoice3">Incomplete</label>
            </div>
        );
    }
}

export default Filter;
