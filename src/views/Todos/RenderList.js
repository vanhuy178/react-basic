import React from 'react'
import './Style.scss'
class RenderList extends React.Component {
    state = {
        showTodos: false,
        editTodo: []
    }
    handleClickDelete = (todoElement) => {
        this.props.deleteTodo(todoElement)
    }

    handleEditTodo = (todo) => {
        const { editTodo } = this.state;
        const { listTodo } = this.props;
        const isEmptyObject = Object.keys(editTodo).length === 0;

        //when click save
        if (isEmptyObject === false && editTodo.id === todo.id) {

            const listTodoClone = [...listTodo]
            const objIndex = listTodoClone.findIndex((item => item.id === todo.id));

            listTodoClone[objIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoClone,
                editTodo: {}
            });
            return;
        }
        // when click edit
        this.setState(
            { editTodo: todo }
        )
    }
    handleOnchangeEditTodo = (event) => {
        const editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState(
            { editTodo: editTodoCopy }
        )
    }
    render() {
        const { showTodos, editTodo } = this.state
        const { listTodo } = this.props
        const isEmptyObject = Object.keys(editTodo).length === 0;
        const handleShowHide = () => {
            this.setState(
                {
                    showTodos: !this.state.showTodos
                }
            )
        }
        return (
            <>
                {showTodos === false
                    ?
                    <div>
                        <button
                            className='btn-show'
                            onClick={handleShowHide}>Show</button>
                    </div>
                    :
                    <div className='list-todo-container'>

                        <div className='list-todo-content'>
                            {listTodo.map((todoElement, index) => {
                                const { title } = todoElement
                                return (
                                    <>
                                        <div key={index} className='list-todo-content-item'>
                                            {isEmptyObject ?
                                                <span className='list-todo-content-desc'>{`${index + 1} - ${title}`}</span>
                                                :
                                                <>
                                                    {editTodo.id === todoElement.id ?
                                                        <span>
                                                            <span>{index + 1}</span>-<input
                                                                className='add-todo-input-span'
                                                                value={editTodo.title}
                                                                onChange={(event) => {
                                                                    this.handleOnchangeEditTodo(event)
                                                                }} />
                                                        </span>
                                                        :
                                                        <span className='list-todo-content-desc'>{`${index + 1} - ${title}`}</span>
                                                    }
                                                </>
                                            }

                                            <button className='list-todo-content-btn-edit'
                                                onClick={() => this.handleEditTodo(todoElement)}
                                            >
                                                {
                                                    isEmptyObject === false && editTodo.id === todoElement.id ? 'Save' : 'Edit'
                                                }
                                            </button>

                                            <button
                                                className='list-todo-content-btn-delete'
                                                onClick={() => this.handleClickDelete(todoElement)}
                                            >Delete</button>
                                        </div>
                                    </>
                                )
                            })}
                            <div >
                                <button className='btn-hide' onClick={handleShowHide}>Hide</button>
                            </div>
                        </div>

                    </div>
                }
            </>
        )
    }
}

export default RenderList;
