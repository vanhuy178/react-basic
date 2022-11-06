import React from 'react'
import AddListTodo from './AddListTodo';
import RenderList from './RenderList'


class ListTodo extends React.Component {
    state = {
        listTodo: [
            {
                id: 1,
                title: 'doing homework'
            },
            {
                id: 2,
                title: 'sweeping'
            },
            {
                id: 3,
                title: 'dish washing'
            },
            {
                id: 4,
                title: 'fixing bugs'
            }
        ]
    }
    addNewTodo = (todo) => {
        this.setState(
            { listTodo: [...this.state.listTodo, todo] }
        )
        console.log(todo);
    }
    deleteTodo = (todoElement) => {
        console.log('>>> Xóa cc', todoElement.id);

        const currentTodo = this.state.listTodo;


        const resultOfCurrentTodo = currentTodo.filter(itemId =>
            itemId.id !== todoElement.id
        )
        this.setState(
            {
                listTodo: resultOfCurrentTodo
            }
        )
    }
    render() {
        return (
            <>
                <AddListTodo
                    addNewTodo={this.addNewTodo}
                />
                <RenderList
                    listTodo={this.state.listTodo}
                    deleteTodo={this.deleteTodo}
                />
            </>
        )
    }
}
export default ListTodo;