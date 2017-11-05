import React, {Component} from 'react';

class AddJob extends Component {
    constructor(props){
        super(props);
        this.state = {
            newJob:{}
        }
    }

    handleSubmit(e) {
        if(this.refs.message.value === ''){
            alert('requiered')
        }
        else{
            this.setState({
                newJob:{
                    message: this.refs.message.value,
                    time: this.refs.time.value,
                    channel: this.refs.channel.value,
                    status: this.refs.status.value,
                }
            },()=>{
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
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="message"/>
                    <input type="text" ref="time"/>
                    <input type="text" ref="channel"/>
                    <input type="text" ref="status"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default AddJob;