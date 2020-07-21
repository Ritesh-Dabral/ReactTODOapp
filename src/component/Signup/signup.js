import React from 'react';
import '../common.css';
import { Link } from 'react-router-dom';
import {auth,db} from '../Firebase/firebase'

class Signup extends React.Component{

    state = {
        username:'',
        email:'',
        password:'',
        errorMessage:null
    }

    handleChange = e => this.setState({[e.currentTarget.name]:e.currentTarget.value});  
 
    setFireData = e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(function(newUser){
            db.collection('todos').doc(newUser.user.uid).set({
                allTodo:[]
            }).catch((err)=>{
                console.log(err);
            })
            this.setState({
                username:'',
                email:'',
                password:'',
                errorMessage : ''
            });
        })
        .catch(error=>{
                this.setState({
                    username:'',
                    email:'',
                    password:'',
                    errorMessage : error.message
                });
        });
    }

    render(){
        return(
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Application<br/> Registration Page</h2>
                        <p><Link to="/login">Login</Link> or register from here to access.</p>
                    </div>
                </div>

                <div className="main">
                    <div className="message">
                        <span>{this.state.errorMessage}</span>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                        <form onSubmit ={this.setFireData}>
                            <div className="form-group">
                                <label>User Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="User Name" 
                                    onChange={this.handleChange} 
                                    name="username"
                                    value = {this.state.username}
                                required/>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Email"
                                    onChange={this.handleChange} 
                                    name="email" 
                                    value = {this.state.email}
                                required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password"
                                    onChange={this.handleChange} 
                                    name="password" 
                                    value = {this.state.password}
                                required/>
                            </div>
                            <button type="submit" className="btn btn-black">Register</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;