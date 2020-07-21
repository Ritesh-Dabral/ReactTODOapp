import React,{useState,useContext} from 'react'
import '../common.css';
import { Link,useHistory } from 'react-router-dom';
import  {auth} from '../Firebase/firebase';
import {UserContext} from '../../App';

function Login() {

    const history = useHistory();
    const userDet = useContext(UserContext);

    const [email,setEmail] = useState('');
    const [pass,setPass]    = useState('');
    const [errMsg,setErrMsg] = useState('');

    const handleSubmit = (event)=>{
        //the form won't submit
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,pass)
        .then((data)=>{
            userDet.userState.uid = data.user.uid;
            userDet.userState.email = data.user.email;

            userDet.userFunc({type:'LOGIN'});
            setEmail('');
            setPass('');
            setErrMsg('');
            history.push(`/todo/${data.user.uid}`);
        })
        .catch((error)=>setErrMsg(error.message));
    }


    return (
        <div>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Application<br/> Registration Page</h2>
                    <p>Login or <Link to="/signup">register</Link> from here to access.</p>
                </div>
            </div>

            <div className="main">
                <div className="message">
                    <span>{errMsg}</span>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email"
                                onChange={(e)=>{setEmail(e.target.value)}} 
                                name="email" 
                                value = {email}
                            required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password"
                                onChange={(e)=>{setPass(e.target.value)}}
                                name="password" 
                                value = {pass}
                            required/>
                        </div>
                        <button className="btn btn-black">LogIn</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Login)
