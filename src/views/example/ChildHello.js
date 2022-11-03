import React from 'react'

class ChildHello extends React.Component {
    state = {
        showJobs: false
    }
    handleClickDelete = (job) => {

        this.props.deleteJob(job)
    }
    render() {
        const { arrayJobs } = this.props;
        const { showJobs } = this.state;
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
                                            <>
                                                <div key={index} className='job-list-element'>
                                                    <div>
                                                        {job.title}- {job.salary} $
                                                    </div>
                                                    <button onClick={() => this.handleClickDelete(job)}>x</button>
                                                </div>
                                            </>

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

