import React from "react";
import '../style/ListTodo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class ListTodo extends React.Component {
    state = { editTodo: [] }

    handleDeleteItems = (item) => {
        this.props.handleDeleteTodoItem(item)
    }

    handleEditTodoItem = (todo) => {

        const { editTodo } = this.state;
        const { items } = this.props
        const isEmptyObject = Object.keys(editTodo).length === 0;

        //when click save
        if (isEmptyObject === false && editTodo.key === todo.key) {

            const listTodoClone = [...items]
            const objIndex = listTodoClone.findIndex((item => item.key === todo.key));

            listTodoClone[objIndex].text = editTodo.text;
            this.setState({
                items: listTodoClone,
                editTodo: {}
            });
            return;
        }
        // when click edit
        this.setState(
            { editTodo: todo }
        )
    }
    handleChangeEditTodo = (event) => {
        const editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.text = event.target.value
        this.setState(
            { editTodo: editTodoCopy }
        )
        console.log(editTodoCopy);
    }
    render() {
        const { items } = this.props;
        const { editTodo } = this.state;
        const isEmptyObject = Object.keys(editTodo).length === 0;

        // console.log(items);
        //console.log(isEmptyObject);
        return (
            <>
                {items.map((item, index) => {
                    return (
                        <div className="list" key={index}>
                            {isEmptyObject ?
                                <p>{item.text}</p>
                                :
                                <>
                                    {editTodo.key === item.key
                                        ?
                                        <p>
                                            <input
                                                className="add-todoEdit"
                                                value={editTodo.text}
                                                onChange={(event) => this.handleChangeEditTodo(event)}
                                            />
                                        </p>
                                        :
                                        <p>{item.text}</p>
                                    }
                                </>
                            }
                            <>
                                <div>
                                    <span onClick={() => this.handleEditTodoItem(item)}>
                                        {isEmptyObject === false && item.key === editTodo.key
                                            ?
                                            <FontAwesomeIcon className="fa-icons" icon='check'
                                            />
                                            :
                                            <FontAwesomeIcon className="fa-icons"
                                                icon='edit'
                                            />}
                                    </span>
                                    <FontAwesomeIcon
                                        className='fa-icons-delete'
                                        icon='trash'
                                        onClick={() => this.handleDeleteItems(item)}
                                    />
                                </div>
                            </>
                        </div>
                    )
                })}
            </>
        )
    }
}
export default ListTodo;