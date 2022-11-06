import React from "react";

class AddListTodo extends React.Component {
    state = {
        id: 5,
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
    handleSumit = () => {
        if (!this.state.title) {
            alert('Missing title')
            return;
        }
        console.log('Xin nhẹ cái id cái thằng lol: ', this.state.id);
        this.props.addNewTodo(
            {
                id: this.state.id++,
                title: this.state.title
            }
        )
        this.setState(
            { title: '' }
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
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTodo(event)}
                    />
                    <button
                        className='btn-add'
                        type="submit"
                        onClick={() => this.handleSumit()}>
                        Add
                    </button>
                </div>
            </>
        )
    }
}
export default AddListTodo;