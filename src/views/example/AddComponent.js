import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    handleChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNewJobs(
            {
                id: Math.floor(Math.random() * 11),
                title: this.state.title,
                salary: this.state.salary
            }
        )
    }
    render() {
        return (
            <>
                <form>
                    <label>Title's job:</label>
                    <br />
                    <input type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangetitle(event)}
                    />
                    <br />
                    <label>Your salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <div>
                        <button type="submit" onClick={(event) => this.handleSubmit(event)}>submit</button>
                    </div>
                </form>
            </>
        )
    }
}

export default AddComponent;
