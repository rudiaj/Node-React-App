import React, { Component } from 'react';
import Jobs from './components/Jobs';

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

        render()
        {
            return (
                <div>
                    <h1>hello worldd</h1>
                    <Jobs jobs={this.state.jobs} />
                </div>
            )
        }
}

export default App;