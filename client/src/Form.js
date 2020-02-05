import React, { Component } from 'react'
import Axios from 'axios'
// import Validate from './Validate'

export class Form extends Component {
    state = {
        username: '',
        userSearch: '',
        retrieveName: '',
        retrieveID: '',
        retrieveStatus: '',
        retrieveErr: '',
        postStatus: '',
        postId: '',
        editUser: '',
        validationStatus: '',
        validation: ''
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    retrieveUserApi = () => {
        
        Axios({
            method: 'post', 
            url: `http://localhost:5000/api/user/retrieve`,
            data: {
                name: `${this.state.userSearch}`
            }
            
        })
        .then(res => {
            console.log(res.data[0])
            this.setState({
                retrieveName: `Name: ${res.data[0].name}`
            })
            this.setState({
                retrieveID: `ID: ${res.data[0]._id}`
            })
            this.setState({
                retrieveStatus: `isValidated: ${res.data[0].isValidated}`
            })
        }).catch(err => {
            this.setState({
                retrieveErr: 'Failed to find contact'
            })
            console.log(err)
        })
    }
    

        createUserApi = () => {
            const port = process.env.Port || 5000

            const recipient = this.state.username
                    const sender = 'test@bestdealretailer.com'
                    const subject = 'Validate your Email'
                    const text = 'Thank you for signing up with Best Deal Retailer. Please click the link and follow the instructions to validate your account'
                    fetch(`http://127.0.0.1:${port}/send-email?recipient=${recipient}&sender=${sender}&topic=${subject}&text=${text}`) //query string url
                    .then(console.log('succesfully sent email'))
                      .catch(err => console.error(err))
        
            Axios({
                method: 'post', 
                url: `http://localhost:5000/api/user`,
                data: {
                    name: `${this.state.username}`,
                }
                
            }).then(res => {
                console.log(res.data)
                if(res.data === 'invalid: empty string'){

                this.setState({
                    postStatus: `Posted: False`
                })
                }else{
                    this.setState({
                        postStatus: `Posted: ${this.state.username}`
                    })
                this.setState({
                    postId: `ID: ${res.data._id}`
                })}
            }).catch(err => {
                console.log('Failed to post contact')
                this.setState({
                    postStatus: `Failed to post: ${this.state.username}`
                })
                console.log(err)
            })
            }

            validateUserApi = () => {
        
                Axios({
                    method: 'put', 
                    url: `http://localhost:5000/api/user`,
                    data: {
                        name: `${this.state.editUser}`,
                    }
                
                }).then(res => {
                    console.log(res.data)
                    this.setState({
                        validate:  `isValidated: ${res.data.isValidated}`
                    })
                    this.setState({
                        validationStatus: 'Succesfully validated user'
                    })
                      
                }).catch(err => {
                    console.log('Failed to post contact')
                    this.setState({
                        validationStatus: 'Failed to validate, make sure contact exists'
                    })
                    console.log(err)
                })
                }

                sendEmail = () => {
                    
                  }
 
    render() {

        return (
            <>
                <h1 style={{backgroundColor: 'black', height: '6vh', padding: '15px'}}>Email API validation</h1>
            <div className='app'>
                <div className='container'>
                    <h2>Create Contact</h2>
                    <input placeholder='username' onChange={this.handleChange('username')} className='input'></input> 
                    <br/>
                    <button className='button' onClick={this.createUserApi}>POST</button>
                    <h3>{this.state.postStatus}</h3>
                    <h3>{this.state.postId}</h3>
                </div>
                <div className='container'>
                    <h2>Retrieve Contact Properties</h2>
                    <input placeholder='username' onChange={this.handleChange('userSearch')} className='input'></input> 
                    <br/>
                    <button className='button' onClick={this.retrieveUserApi}>RETRIEVE</button>
                    <h3>{this.state.retrieveName}</h3>
                    <h3>{this.state.retrieveID}</h3>
                    <h3>{this.state.retrieveStatus.toString()}</h3>
                </div>
                
                <div className='container'>
                    <h2>Validate Contact</h2>
                    <input placeholder='username' onChange={this.handleChange('editUser')} className='input'></input> 
                    <br/>
                    <button className='button' onClick={this.validateUserApi}>VALIDATE</button>
                    <h3>{this.state.validationStatus}</h3>
                    <h3>{this.state.validate}</h3>
                </div>

                {/* <Validate user={user}/> */}
            </div>
            </>
        )
    }
}

export default Form
