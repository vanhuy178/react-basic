import React from "react";
import ChildHello from "./ChildHello";

class Hello extends React.Component {
    /*
        JSX cho phép js trả ra html, return a block
    */
    state = {
        fname: '',
        job: '',
        arrayJobs: [
            { id: 1, title: 'Developer', salary: '400$' },
            { id: 2, title: 'Tester', salary: '300$' },
            { id: 3, title: 'Project Manager', salary: '1000$' }
        ]
    }
    handleChangeFname = (event) => {
        this.setState({
            fname: event.target.value
        })
    }
    handleChangeJob = (event) => {
        this.setState({
            job: event.target.value
        })
    }
    handleClick = () => {
        alert("Your full name is: " + this.state.fname + this.state.lname)
    }
    render() {
        console.log('re-render: ', this.state);
        return (
            <>
                <form>
                    <label>Your name:</label>
                    <br />
                    <input type="text"
                        value={this.state.fname}
                        readonly
                        onChange={(event) => this.handleChangeFname(event)}
                    />
                    <br />
                    <label>Your job:</label><br />
                    <input
                        type="text"
                        value={this.state.lname}
                        onChange={(event) => this.handleChangeJob(event)}
                    />
                </form>
                <button className="btn" onClick={() => this.handleClick()}>
                    Click me!
                </button>

                <ChildHello
                    name={this.state.fname}
                    job={this.state.job}
                    age={'21'}
                    address={"Ho Chi Minh city"}
                    arrayJobs={this.state.arrayJobs}
                />
            </>
        )
    }
}
export default Hello;