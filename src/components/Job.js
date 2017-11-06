import React, { Component } from 'react';

class Job extends Component {
    constructor(props){
        super(props);
    }

    delete(){
        this.props.removeJob(this.props.index);
    }

    render() {
        return (
        <div className="card">
            <div className="card-body">
                <span>{this.props.index}</span>
                <span>{this.props.job.time}</span>
                <span>{this.props.job.message}</span>
                 <span>{this.props.job.channel}</span>
                <span>{this.props.job.status}</span>
            </div>

            <button className="button" onClick={this.delete.bind(this)}>delete</button>
        </div>
        )
    }
}

export default Job;