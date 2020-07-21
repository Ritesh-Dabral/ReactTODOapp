import React,{useContext} from 'react'
import {UserContext} from '../../App';
import { useHistory } from 'react-router-dom';


function Logout() {
    const history = useHistory();
    const userDet = useContext(UserContext);

    const logoff=()=>{
        userDet.userFunc({type:'LOGOUT'});
        history.push('/login');
    }
    return (
        <React.Fragment>
            <button onClick={logoff} className="btn btn-dark">Logout</button>
        </React.Fragment>
    )
}

export default React.memo(Logout)
