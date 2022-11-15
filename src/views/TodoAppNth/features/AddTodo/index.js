import React from "react";
class AddTodo extends React.Component {

    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        //Updating local component state
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Clear existing value in input
        document.getElementById("todoValue").value = "";

        //Updating local component state
        this.setState({ value: "" });
    }

    addTodo = (e) => {
        e.preventDefault()
        //Call method reference in Todos component using props
        this.props.PassingHandleAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        //console.log(this.state.value);
        return (
            < >
                <input type="text"
                    id="todoValue"
                    placeholder="Typing here"
                    onChange={this.handleChange} />


                <div >
                    <button onClick={(e) => this.addTodo(e)} type="button">Add New ToDo</button>
                </div>
            </>
        );
    }
}
export default AddTodo;
