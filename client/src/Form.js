import React, { Component } from 'react'
import Axios from 'axios'
// import Validate from './Validate'

export class Form extends Component {
    state = {
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

    onSubmit = () => {
        
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
    

        onSubmit2 = () => {
        
            Axios({
                method: 'post', 
                url: `http://localhost:5000/api/user`,
                data: {
                    name: `${this.state.username}`,
                }
                
            }).then(res => {
                console.log(res.data)
                this.setState({
                    postStatus: `Succesfully posted: ${this.state.username}`
                })
                this.setState({
                    postId: `id: ${res.data._id}`
                })
            }).catch(err => {
                console.log('Failed to post contact')
                this.setState({
                    postStatus: `Failed to post: ${this.state.username}`
                })
                console.log(err)
            })
            }

            onSubmit3 = () => {
        
                Axios({
                    method: 'put', 
                    url: `http://localhost:5000/api/user`,
                    data: {
                        name: `${this.state.editUser}`,
                    }
                    
                }).then(res => {
                    console.log(res.data)
                    this.setState({
                        validationStatus: 'Succesfully validated user'
                    })
                    this.setState({
                        validate:  `isValidated: ${res.data.isValidated}`
                    })
                }).catch(err => {
                    console.log('Failed to post contact')
                    this.setState({
                        validationStatus: 'Failed to validate, make sure contact exists'
                    })
                    console.log(err)
                })
                }
 
    render() {

        return (
            <>
                <h1 style={{backgroundColor: 'black', height: '6vh', padding: '15px'}}>Email API validation</h1>
            <div className='app'>
                <div className='container'>
                    <h2>Retrieve Contact ID</h2>
                    <input placeholder='username' onChange={this.handleChange('userSearch')} className='input'></input> 
                    <br/>
                    <button className='button' onClick={this.onSubmit}>RETRIEVE</button>
                    {/* <h3 style={{color: 'red'}}>{this.state.retrieveErr}</h3>  */}
                    <h3>{this.state.retrieveName}</h3>
                    <h3>{this.state.retrieveID}</h3>
                    <h3>{this.state.retrieveStatus.toString()}</h3>
                </div>
                
                <div className='container'>
                    <h2>Submit Contact</h2>
                    <input placeholder='username' onChange={this.handleChange('username')} className='input'></input> 
                    <br/>
                    <button className='button' onClick={this.onSubmit2}>POST</button>
                    <h3>{this.state.postStatus}</h3>
                    <h3>{this.state.postId}</h3>
                </div>
                <div className='container'>
                    <h2>Validate Customer</h2>
                    <input placeholder='username' onChange={this.handleChange('editUser')} className='input'></input> 
                    <br/>
                    <button className='button' onClick={this.onSubmit3}>VALIDATE</button>
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
