import React,{useState} from 'react';
import {db} from '../Firebase/firebase';


function NewTodo({uid,receivedTodo}) {
    const [input,setInput] = useState('');

    const addData = (e)=>{
        e.preventDefault();
        db.collection('todos').doc(uid).update({
            allTodo : [...receivedTodo,input]
        });
        setInput('');
    }

    return (
        <div className="customBox">
            <form onSubmit={addData} className="speacialForm">
                <div className="form-group">
                    <input type="text" className="form-control"  placeholder="New To Do..." value={input} 
                        onChange={(e)=>{setInput(e.target.value)}}
                    required/>
                </div>
                <button type="submit" className="btn btn-dark mb-2 specialBtn">Add</button>
            </form>
        </div>
    )
}

export default React.memo(NewTodo)
