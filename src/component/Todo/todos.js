import React,{useEffect,useState} from 'react';
import Logout from '../Logout/logout';
import '../common.css';
import {db} from '../Firebase/firebase';
import NewTodo from './newTodo';
import SingleTodo from './singleTodo'

export const TodoContext = React.createContext();

function Todos({uid}) {
    const [receivedTodo,setReceivedTodo] = useState([]);
    const [err,setErr] = useState('');

    useEffect(()=>{
        db.collection('todos').get()
        .then((storedata)=>{
            storedata.docs.forEach(element => {
                if(element.id.toString() === uid.toString())
                    setReceivedTodo(element.data().allTodo);
            });
            setErr('');
        })
        .catch((error)=>{
            setErr(error.message);
        });
    },[receivedTodo,uid]);

    return (
        <React.Fragment>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Application<br/> To-Do Page</h2>
                    <div style={{margin:" 2rem 0 0 0"}}><Logout/></div>
                    <div className="instructions">
                        <p>* Click on 'ADD' to add data to list</p>
                        <p>* Click on 'item name' to mark as completed</p>
                        <p>* Click on 'X' to remove the item from the list</p>
                    </div>
                </div>
                <div style={{"color":"red"}}>{err}</div>
            </div>
            <TodoContext.Provider value={{sentTodo:receivedTodo,userId:uid}}>
                <div className="main">
                    <div className="col-md-6 col-sm-12" id="myTodos">
                        <NewTodo uid={uid} receivedTodo={receivedTodo}/>
                        <div className="showToDo">
                            <ul>
                                {
                                    receivedTodo.length ? receivedTodo.map((oneTodo,index)=>(
                                        <SingleTodo key={index} oneTodo={oneTodo} index={index}/>
                                    )) : <li style={{"listStyle":"none","textAlign":"center"}}>Nothing to show<br/>Add Some...</li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </TodoContext.Provider>
        </React.Fragment>
    )
}

export default React.memo(Todos);