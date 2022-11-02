import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJobs: '',
        salary: '',
    }
    handleChangetitleJobs = (event) => {
        this.setState({
            titleJobs: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
    }
    render() {
        return (
            <>
                <form>
                    <label>Your jobs:</label>
                    <br />
                    <input type="text"
                        value={this.state.titleJobs}
                        readonly
                        onChange={(event) => this.handleChangetitleJobs(event)}
                    />
                    <br />
                    <label>Your salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <div></div>
                    <button type="submit" onClick={(event) => this.handleSubmit(event)}>submit</button>
                </form>
            </>
        )
    }
}

export default AddComponent;
