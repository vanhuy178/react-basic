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
    addNewTodo = (job) => {
        this.setState(
            { listTodo: [...this.state.listTodo, job] }
        )
    }
    deleteTodo = (todoElement) => {
        const currentTodo = this.state.listTodo;
        const resultOfCurrentTodo = currentTodo.filter(itemId => {
            return itemId.id !== todoElement.id
        })
        this.setState(
            {
                listTodo: resultOfCurrentTodo
            }
        )
    }
    //     deleteJob = (job) => {
    //     let currentJobs = this.state.arrayJobs
    //     currentJobs = currentJobs.filter(itemId => {
    //         return itemId.id !== job.id
    //     })
    //     this.setState(
    //         { arrayJobs: currentJobs }
    //     )
    // }
    render() {
        return (
            <>
                <AddListTodo addNewTodo={this.addNewTodo} />
                <RenderList
                    listTodo={this.state.listTodo}
                    deleteTodo={this.deleteTodo}

                />
            </>
        )
    }
}
export default ListTodo;