import React, { useState } from 'react';
import List from './list';
import Add from './add';
// import Input from '../form/input';
import _map from 'lodash/map';
import Filter from "./filter";
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  removeRow,
  addItem,
} from '../../features/to-do/toDoSlice';
import { connect } from "react-redux";

const mapDispatchToProps ={
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
    removeRow,
    addItem
  };

const mapStateToProps = (state) => ({
    todo: state.toDo
  });
  
class Todo extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     todos:
        //     [
        //         {id: 1, name: 'Test1', status: false},
        //         {id: 2, name: 'Test2', status: false}
        //     ],
        //     addStatus: false,
        //     filter: 1,

        // };

        // const count = useSelector(selectCount);
        // const dispatch = useDispatch();
        // const [incrementAmount, setIncrementAmount] = useState('2');
      
        // this.removeRow = this.removeRow.bind(this);
        // this.addItem = this.addItem.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);

    }
    // removeRow(key) {
    //     console.log(key);
    //     let array = [...this.props.todo.todos];
    //     let filtered = array.filter(function(item) {
    //         return item.id != key;
    //     })
    //     this.setState({
    //         todos: filtered
    //     });
    // };
    changeStatus(id) {
        const todos = this.state.todos;
        let change = todos.map(function (item) {
            return item.id === id ? item.status = !item.status : item.status;
        })

        this.setState({
            change
        });
    };
    // addItem(name) {
    //     console.log(name);
    //     const todos = this.state.todos;
    //     let ids = _map(todos, 'id');
    //     let max = Math.max(...ids);
    //     todos.push({
    //         id: max+1,
    //         name: name,
    //         completed: false
    //     });
    //     console.log(todos);

    //     this.setState({todos});
    // };
    handleFilter() {
        console.log(this.props);
        const todos = this.props.todo.todos;
        const filter = this.props.todo.filter;
        switch (filter) {
            case 2:
                return todos.filter(function (item) {
                    return item.status === true
                });
            case 3:
                return todos.filter(function (item) {
                    return item.status === false
                });
            default:
                return todos;
        }
    };
    onChangeFilter(filter) {
        this.setState({filter})
    }

    //() => this.removeRow(todo.id) work
    // this.removeRow(todo.id) don't work

    render() {
        return (
            <div>
                <Filter handleFilter={this.onChangeFilter}></Filter>
                <div className="list">
                    <List list={this.handleFilter()} removeRow={this.props.removeRow} changeStatus={this.changeStatus}></List>
                </div>
                <Add addItem={this.props.addItem}></Add>
            </div>  
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
