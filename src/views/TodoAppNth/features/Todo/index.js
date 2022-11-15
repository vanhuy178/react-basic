import React from "react";
class Todo extends React.Component {


    renderTodoValue() {
        if (this.props.PassingTodo.completed)
            return <s>{this.props.PassingTodo.value}</s>;
        else
            return this.props.PassingTodo.value;
    }
    render() {
        const index = this.props.index
        const PassingTodo = this.props.PassingTodo
        const PassingHandleDelete = this.props.PassingHandleDelete;
        const PassingHandleDone = this.props.PassingHandleDone
        //console.log(index);
        return (
            <>
                <td>
                    {index}
                </td>

                <td>
                    <input type='checkbox'
                        //defaultChecked={PassingTodo.completed}
                        onChange={() => PassingHandleDone(PassingTodo)} />
                </td>

                <td>
                    {
                        this.renderTodoValue()
                    }
                </td>

                <td>
                    <button onClick={() => PassingHandleDelete(PassingTodo.id)}

                    >Delete</button>
                </td>
            </>
        )
    }
}
export default Todo;
