import React, {Component} from 'react';

class AddJob extends Component {

    // static defaultProps = {}

    handleSubmit(e) {
        console.log(this.refs.title.value);
        e.preventDefault();

    }



    render() {

        return (
            <div>
                <h2>Add new job</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="title"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default AddJob;