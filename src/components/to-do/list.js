import React from "react";
import Row from './row'

class List extends React.Component {
    constructor(props) {
        super(props);

    }

    //() => this.removeRow(todo.id) work
    // this.removeRow(todo.id) don't work

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.list.map((todo) =>
                            <Row
                                key={todo.id}
                                id={todo.id}
                                removeRow={() => this.props.removeRow(todo.id)}
                                name={todo.name}
                                changeStatus={() => this.props.changeStatus(todo.id)}
                            ></Row>
                        )
                    }
                </ul>
            </div>

        );
    }
}

export default List;
