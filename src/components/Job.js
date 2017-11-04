import React, { Component } from 'react';

class Job extends Component {

    render() {
        return (
        <li>
            {this.props.job.title} - {this.props.job.name}
        </li>
        )
    }
}

export default Job;