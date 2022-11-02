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

    render() {
        // console.log('re-render: ', this.state);
        return (
            <>
                <AddComponent />
                <ChildHello
                    arrayJobs={this.state.arrayJobs}
                />

            </>
        )
    }
}
export default MyComponent;