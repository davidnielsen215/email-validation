import React, { Component } from 'react'
import Axios from 'axios'
import Validate from './Validate'

export class Form extends Component {
    state = {
        username: '',
        num: 123
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    onSubmit = () => {
        
        Axios({
            method: 'post', 
            url: `http://localhost:5000/api/user`,
            data : {
                'name' : `${this.state.username}`,
                'num': `${this.state.id}`
            }
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log('Failed to post contact')
            console.log(err)
        })
        }
 
    render() {
        const {username, id} = this.state
        const user = {username, id}
        return (
            <div>
                <h1>Email API validation</h1>
                <input placeholder='username' onChange={this.handleChange('username')}></input> 
                <button onClick={this.onSubmit}>submit</button>
                <Validate user={user}/>
            </div>
        )
    }
}

export default Form
