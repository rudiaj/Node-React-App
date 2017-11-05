import React, { Component } from 'react';
import Job from './Job';


class Jobs extends Component {

    constructor(props){
        super(props);
        this.getJobs();
    }

    getJobs(){
        fetch('http://localhost:3000/api/jobs')
            .then((res)=>{
            console.log(res.json())
            })
            .catch((res)=>{
            console.log(res)
            })
    }

    render() {
        let jobItems;
        if(this.props.jobs){
            jobItems = this.props.jobs.map(job =>{
                console.log(job)
                return(
                    <Job key={job.title} job={job}/>
                )
            });
        }

        return (
            <div>
                <h1>jobs</h1>
                {jobItems}
            </div>
        )
    }
}

export default Jobs;