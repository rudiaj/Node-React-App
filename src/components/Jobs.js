import React, {Component} from 'react';
import Job from './Job';


class Jobs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allJobs: []

        }
    }

    componentDidMount() {
        this.getJobs();
    }

    getJobs() {
        fetch('http://localhost:3000/api/jobs')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    allJobs:data
                })
                console.log(this.state.allJobs)
            })
            .catch((res) => {
                console.log(res)
            })
    }

    deleteJob(job,index){
        console.log(job._id)
        fetch(`http://localhost:3000/api/jobs/${job._id}`, {method: 'DELETE'})
            .then((res) => {
            this.updateState(index);
               console.log(res)
            })
            .catch((res) => {
                console.log(res)
            })
    }

    updateState(index){
        let array = this.state.allJobs;
        array.splice(index,1);
        this.setState({allJobs:array});
    }

    render() {
        const jobItems = this.state.allJobs.map((job,i) => {
            return(
                <Job key={i} index={i} job={job} removeJob={this.deleteJob.bind(this, job, i)} />
            )
        });
        return (
            <div>
                <h2>jobs</h2>
                <div className="jobs-container">
                    {jobItems}
                </div>

            </div>

        )
    }
}

export default Jobs;