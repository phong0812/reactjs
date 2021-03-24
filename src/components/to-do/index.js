import React from "react";
import List from './list';
import Add from './add';
import Input from '../form/input';
import _map from 'lodash/map';



class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:
            [
                {id: 1, name: 'Test1', status: false},
                {id: 2, name: 'Test2', status: false}
            ],
            addStatus: false,

        };
        this.removeRow = this.removeRow.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeRow = this.removeRow.bind(this);
    }
    removeRow(key) {
        console.log(key);
        let array = [...this.state.todos];
        let filtered = array.filter(function(item) {
            return item.id != key;
        })
        this.setState({
            todos: filtered
        });
        // console.log(filtered);
    };
    changeAddStatus() {
        // this.setState({...this.state, addStatus: !this.state.addStatus});        
    };
    addItem(name) {
        console.log(name);
        const todos = this.state.todos;
        let ids = _map(todos, 'id');
        console.log(ids);
        let max = Math.max(...ids);
        console.log(max);
        todos.push({
            id: max+1,
            name: name,
            completed: false
        });
        console.log(todos);

        this.setState({todos});

    }
    removeRow(key) {
        console.log(key);
        let array = [...this.state.todos];
        let filtered = array.filter(function(item) {
            return item.id != key;
        })
        this.setState({
            todos: filtered
        });
        // console.log(filtered);
    };


    //() => this.removeRow(todo.id) work
    // this.removeRow(todo.id) don't work

    render() {
        return (
            <div>
                <div className="list">
                    <List list={this.state.todos} removeRow={this.removeRow}></List>
                </div>
                <Add addItem={this.addItem}></Add>
            </div>  
        );
    }
}

export default Todo;