import React from "react";
import './styles/index.scss'
import Todo from "../Todo/index";
import AddTodo from '../AddTodo/index'

class Todos extends React.Component {
    state = {
        addTodoValue: '',
        todos: [
            { id: 1, value: 'todo 1', completed: false },
            { id: 2, value: 'todo 2', completed: false },
            { id: 3, value: 'todo 3', completed: false }
        ]
    }

    // Local method to get date for random id of todos
    getTimeFromDate = () => {
        const date = new Date();
        const takeTimeOfDate = date.getTime()
        return takeTimeOfDate;
    }

    handleDelete = idtodo => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== idtodo
        });
        this.setState({ todos })
    }
    handleDone = todo_para => {
        const todos = [...this.state.todos];
        todos.map(todo => {
            if (todo.id === todo_para.id) {
                todo.completed = !todo.completed
            }
            //console.log(todo);
            return todo
        })
        this.setState({ todos })
    }
    handleAddTodo = value_para => {
        if (value_para) {
            const newTodos = [...this.state.todos]
            newTodos.push(
                {
                    id: this.getTimeFromDate(),
                    value: value_para,
                    completed: false
                }
            );
            this.setState({ addTodoValue: '', todos: newTodos })
        }
        else {
            alert('Please add todo text')
        }

    }

    render() {
        const addTodoValue = this.state.addTodoValue;
        //console.log(this.state.todos)
        //console.log(addTodoValue);
        return (
            <>

                <table className="tableTodo">
                    <tr className="">
                        <th>STT</th>
                        <th>TTITLE</th>
                        <th>COMPLETED</th>
                        <th>DELETE</th>
                    </tr>

                    {this.state.todos.map((todo, index) => (
                        <tr key={todo.id} className='tableTodo-body-list'>
                            <Todo
                                index={index + 1}
                                PassingTodo={todo}
                                PassingHandleDelete={this.handleDelete}
                                PassingHandleDone={this.handleDone}
                            />
                        </tr>
                    ))}


                </table>
                <div className="tableTodo-input">
                    <AddTodo
                        PassingHandleAddTodo={this.handleAddTodo}
                        addTodoValue={addTodoValue}
                    />
                </div>
            </>
        )
    }
}
export default Todos;
