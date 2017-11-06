import React, { Component } from 'react';
import Jobs from './components/Jobs';
import AddJob from './components/AddJob';

class App extends Component {
    constructor (){
        super();
        this.state = {}
    };


    handleAddJob(job){
        console.log('job iz main appa koji sma prosljedio', job);
        fetch('http://localhost:3000/api/jobs',{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(job) ,
            })
            .catch((res)=>{
                console.log(res)
            })
    }

        render() {
            return (
                <div>
                    <h1>jobs app</h1>
                    <Jobs  />
                    <br/>
                    <AddJob addJob={this.handleAddJob.bind(this)} />
                </div>
            )
        }
}

export default App;