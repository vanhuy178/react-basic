import React from 'react'

class ChildHello extends React.Component {
    render() {
        console.log(this.props);
        const { name, age, address, job, arrayJobs } = this.props
        return (
            <div>
                My name is {name}, {age} tuổi, công việc chính là {job}, hiện tại đang sống ở {address}
                <div>Danh sách công việc và mức lương:

                    {
                        arrayJobs.map((job, index) => {
                            return (
                                <div key={index}>
                                    {job.title}- {job.salary}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default ChildHello;

