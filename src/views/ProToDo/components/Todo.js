import React from "react";
import '../style/Todo.scss'
class Todo extends React.Component {
    state = {
        key: '',
        text: ''
    }
    handleChangeTodoItems = (event) => {
        //console.log(event.target.value);
        this.setState(
            {
                key: Date.now(),
                text: event.target.value
            }
        )
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.text) {
            alert('Mising data...')
        }
        //console.log('Xin nhẹ cái key di thằng lol', this.state.key, '>>> text: ', this.state.text)

        this.props.handleAddNewTodo({
            key: this.state.key,
            text: this.state.text
        })
        this.setState(
            { text: '' }
        )
    }
    render() {
        return (
            <>
                <header>
                    <form className="to-do-form">
                        <input
                            type='text'
                            placeholder="Typing here..."
                            value={this.state.text}
                            onChange={(event) => this.handleChangeTodoItems(event)}
                        />
                        <button type="submit" onClick={(event) => this.handleSubmit(event)}>Add</button>
                    </form>
                </header>
            </>
        )
    }
}
export default Todo;
