import React from "react";
import List from './list';
import Add from './add';
import _map from 'lodash/map';
import Filter from "./filter";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
  import Page1 from '../router/page-1';
  import Page2 from '../router/page-2';
  import Page3 from '../router/page-3';
    


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
            filter: 1,

        };
        this.removeRow = this.removeRow.bind(this);
        this.addItem = this.addItem.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);

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
    changeStatus(id) {
        const todos = this.state.todos;
        let change = todos.map(function (item) {
            return item.id === id ? item.status = !item.status : item.status;
        })

        this.setState({
            change
        });
    };
    addItem(name) {
        console.log(name);
        const todos = this.state.todos;
        let ids = _map(todos, 'id');
        let max = Math.max(...ids);
        todos.push({
            id: max+1,
            name: name,
            completed: false
        });
        console.log(todos);

        this.setState({todos});
    };
    handleFilter() {
        const todos = this.state.todos;
        const filter = this.state.filter;
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
            // <div>
            //     <Filter handleFilter={this.onChangeFilter}></Filter>
            //     <div className="list">
            //         <List list={this.handleFilter()} removeRow={this.removeRow} changeStatus={this.changeStatus}></List>
            //     </div>
            //     <Add addItem={item => this.addItem(item)}></Add>
            // </div>  

            <Router>
            <div>
              <ul>
                <li>
                <NavLink exact to="/" activeStyle={{background: "red"}}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/about" activeStyle={{background: "red"}}>About</NavLink>
                </li>
                <li>
                <NavLink to="/dashboard" activeStyle={{background: "red"}}>Dashboard</NavLink>
                </li>
              </ul>
        
              <hr />
        
              <Switch>
                {/* let page1 = useRouteMatch("/");
                let page2 = useRouteMatch("/about");
                let page3 = useRouteMatch("/dashboard"); */}
                <Route exact path="/">
                  <Page1 />
                </Route>
                <Route path="/about">
                  <Page2 />
                </Route>
                <Route path="/dashboard">
                  <Page3 />
                </Route>
              </Switch>
            </div>
          </Router>
        
        );
    }
}

export default Todo;
