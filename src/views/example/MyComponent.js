import React from "react";
import AddComponent from "./AddComponent";
import ChildHello from "./ChildHello";

class MyComponent extends React.Component {
    /*
        JSX cho phép js trả ra html, return a block
    */
    state = {

        arrayJobs: [
            { id: 1, title: 'Developer', salary: 400 },
            { id: 2, title: 'Tester', salary: 300 },
            { id: 3, title: 'Project Manager', salary: 1000 }
        ]
    }
    addNewJobs = (job) => {
        this.setState(
            {
                arrayJobs: [...this.state.arrayJobs, job]
            }
        )
        console.log('check job from parent: ', job);
    }
    deleteJob = (job) => {
        let currentJobs = this.state.arrayJobs
        currentJobs = currentJobs.filter(itemId => {
            return itemId.id !== job.id
        })
        this.setState(
            { arrayJobs: currentJobs }
        )
    }
    render() {
        // console.log('re-render: ', this.state);
        return (
            <>
                <AddComponent
                    addNewJobs={this.addNewJobs} />
                <ChildHello
                    arrayJobs={this.state.arrayJobs}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}
export default MyComponent;