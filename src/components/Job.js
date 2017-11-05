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
        <div>
            {this.props.index}
            <br/>
            {this.props.job._id} - {this.props.job.message}
            <button onClick={this.delete.bind(this)}>delete</button>
        </div>
        )
    }
}

export default Job;