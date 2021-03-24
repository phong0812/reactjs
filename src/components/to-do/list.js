import React from "react";
import Row from './row'

class List extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     todos:
        //     [
        //         {id: 1, name: 'Test1', status: false},
        //         {id: 2, name: 'Test2', status: false}
        //     ],

        // };
        // this.removeRow = this.removeRow.bind(this);


    }

    //() => this.removeRow(todo.id) work
    // this.removeRow(todo.id) don't work

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.list.map((todo) =>
                            <Row key={todo.id} id={todo.id} removeRow={() => this.props.removeRow(todo.id)} name={todo.name}></Row>
                        )
                    }
                </ul>
            </div>

        );
    }
}

export default List;