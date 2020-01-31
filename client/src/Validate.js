import React, { Component } from 'react'
import Axios from 'axios'

export class Validate extends Component {
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    onSubmit = () => {
        const {user} = this.props
        Axios({
            method: 'put', 
            url: `http://localhost:5000/api/user/${user.num}`,
        }).then(res => {
            console.log(res.data)
            console.log(user.num)
        }).catch(err => {
            console.log('Failed to validate contact')
            console.log(err)
        })
        }
 
    render() {
        return (
            <div>
                <h1>Email API validation</h1>
                <h2>Press validate to validate your account</h2>
                <button onClick={this.onSubmit}>validate</button>
            </div>
        )
    }
}

export default Validate
