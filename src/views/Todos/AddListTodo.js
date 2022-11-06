import React from "react";

class AddListTodo extends React.Component {
    state = {
        title: ''
    }
    handleChangeTodo = (event) => {
        //console.log(">>> render onchange:", event.target.value)
        this.setState(
            {
                title: event.target.value
            }
        )
    }
    handleSumit = (event) => {
        //console.log(this.state)
        event.preventDefault();

        this.props.addNewTodo(
            {

                title: this.state.title
            }
        )
    }
    render() {
        return (
            <>
                <h1 className='heading'>
                    Todo Apps
                </h1>
                <div className='add-todo'>
                    <input
                        className='add-todo-input'
                        type='text'
                        placeholder='typing here...'
                        // value={this.state.title}
                        onChange={(event) => this.handleChangeTodo(event)}
                    />
                    <button
                        className='btn-add'
                        type="submit"
                        onClick={(event) => this.handleSumit(event)}>
                        Add
                    </button>
                </div>
            </>
        )
    }
}
export default AddListTodo;