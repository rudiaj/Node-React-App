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
                <h1>jobs</h1>
                {jobItems}
            </div>
        )
            }
}

export default Jobs;
// export default class UserList extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {person: []};
//     }
//
//     componentDidMount() {
//         this.UserList();
//     }
//
//     UserList() {
//         $.getJSON('https://randomuser.me/api/')
//             .then(({ results }) => this.setState({ person: results }));
//     }
//
//     render() {
//         const persons = this.state.person.map((item, i) => (
//             <div>
//                 <h1>{ item.name.first }</h1>
//                 <span>{ item.cell }, { item.email }</span>
//             </div>
//         ));
//
//         return (
//             <div id="layout-content" className="layout-content-wrapper">
//                 <div className="panel-list">{ persons }</div>
//             </div>
//         );
//     }
// }