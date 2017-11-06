import React, {Component} from 'react';

class AddJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newJob: {}
        }
    }

    handleSubmit(e) {
        if (this.refs.message.value === '') {
            alert('requiered')
        }
        else {
            this.setState({
                newJob: {
                    message: this.refs.message.value,
                    time: this.refs.time.value,
                    channel: this.refs.channel.value,
                    status: this.refs.status.value,
                }
            }, () => {
                console.log(this.state);
                this.props.addJob(this.state.newJob);
            });
        }

        e.preventDefault();
    }

    render() {
        return (
            <div className="add-job-container">
                <h2>Add new job</h2>
                <form class="form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-wrapper">
                        <label htmlFor="job-message">Message</label>
                        <input className="input-element" id="job-message" type="text" ref="message"/>
                    </div>
                    <div  className="input-wrapper">
                        <label htmlFor="job-time">time</label>
                        <input className="input-element" id="job-time" type="text" ref="time"/>
                    </div>
                    <div  className="input-wrapper">
                        <label htmlFor="job-channel">channel</label>
                        <input  className="input-element" id="job-channel" type="text" ref="channel"/>
                    </div>
                    <div  className="input-wrapper">
                        <label htmlFor="job-status">status</label>
                        <input  className="input-element" id="job-status" type="text" ref="status"/>
                    </div>
                    <div  className="input-wrapper">
                        <input className="button" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddJob;