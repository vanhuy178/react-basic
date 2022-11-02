import React from 'react'

class ChildHello extends React.Component {
    state = {
        showJobs: false
    }
    render() {
        const { name, age, address, job, arrayJobs } = this.props;
        const { showJobs } = this.state;
        const check = showJobs === true ? 'showJobs: true' : 'showJobs: false';
        console.log(check);
        const handleShowHide = () => {
            this.setState(
                {
                    showJobs: !this.state.showJobs
                }
            )
        }
        return (
            <>
                <div>
                    My name is {name}, {age} tuổi, công việc chính là {job}, hiện tại đang sống ở {address}
                </div>

                <div>
                    {showJobs === false
                        ?
                        <div>
                            <button onClick={handleShowHide}>Show</button>
                        </div>

                        :
                        <>
                            <div className='jobs-list'>Danh sách công việc và mức lương:
                                {
                                    arrayJobs.map((job, index) => {
                                        return (
                                            <div key={index}>
                                                {job.title}- {job.salary} $
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button onClick={handleShowHide}>Hide</button>
                            </div>
                        </>
                    }
                </div>
            </>
        )
    }
}
export default ChildHello;

