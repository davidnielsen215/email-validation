import React, { Component } from 'react'

export class Form extends Component {
    state = {
        username: ''
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Email API validation</h1>
                <input placeholder='username' onChange={this.handleChange('username')}></input> 
                <button>submit</button>
            </div>
        )
    }
}

export default Form
