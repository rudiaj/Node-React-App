import React, { Component } from 'react';
import Jobs from './components/Jobs';
import AddJob from './components/AddJob';

class App extends Component {
    constructor (){
        super();
        this.state = {
            jobs:[
                {
                    title:'job title 1',
                    name:'job name 1'
                },
                {
                    title:'job title 2',
                    name:'job name 2'
                },
                {
                    title:'job title 3',
                    name:'job name 3'
                },
            ]
        }
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
            .then((res)=>{
                console.log(res)
            })
            .catch((res)=>{
                console.log(res)
            })
    }

        render() {
            return (
                <div>
                    <h1>hello worldd</h1>
                    <Jobs  />
                    <br/>
                    <AddJob addJob={this.handleAddJob.bind(this)} />
                </div>
            )
        }
}

export default App;