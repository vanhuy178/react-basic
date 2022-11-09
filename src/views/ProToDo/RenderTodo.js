import React from "react";
import ListTodo from "./components/ListTodo";
import Todo from "./components/Todo";
import './RenderList.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faCheck, faEdit)

class RenderList extends React.Component {
    state = {
        items: []
    }
    handleAddNewTodo = (todoItem) => {
        console.log(todoItem);
        this.setState(
            { items: [...this.state.items, todoItem] }
        )
    }
    handleDeleteTodoItem = (todoItem) => {
        //console.log(todoItem.key)
        const curentTodoItems = this.state.items;
        const resultOfCurrentTodoItems = curentTodoItems.filter(itemKey =>
            itemKey.key !== todoItem.key
        )
        this.setState(
            {
                items: resultOfCurrentTodoItems
            }
        )
    }
    render() {

        return (
            <>
                <div className="container">
                    <Todo handleAddNewTodo={this.handleAddNewTodo} />
                    <ListTodo
                        items={this.state.items}
                        handleDeleteTodoItem={this.handleDeleteTodoItem} />
                </div>
            </>
        )
    }
}
export default RenderList;

// Just import it into App.js and use it