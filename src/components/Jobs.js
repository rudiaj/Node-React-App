import React, { Component } from 'react';
import Job from './Job';
import AddJob from './AddJob';

class Jobs extends Component {

    constructor(props){
        // let httpConf = { method: 'GET',
        //     cache: 'default'
        // };
        super(props);
        this.getJobs();

    }

    getJobs(){
        fetch('http://localhost:3000/api/jobs')
            .then((res)=>{
                console.log('uso u then, evo ga i response', res.json())
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
                <br/>
                <AddJob/>
            </div>
        )
    }
}

export default Jobs;