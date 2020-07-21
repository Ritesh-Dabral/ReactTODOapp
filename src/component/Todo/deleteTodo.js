import React,{useContext} from 'react'
import {db} from '../Firebase/firebase';
import {TodoContext} from './todos';

function DeleteTodo({index}) {

    const dataRec = useContext(TodoContext);

    const updateTodo= (e)=>{
        e.preventDefault();
        
        const receivedTodo = dataRec.sentTodo.filter((todo,i)=>index!==i);

        db.collection('todos').doc(dataRec.userId).update({
            allTodo : [...receivedTodo]
        });
    }
    
    return (
        <div className="deleteTodo" style={{"color":"red","textDecoration":"none", "cursor":"pointer"}} onClick={updateTodo}>
            X
        </div>
    )
}

export default DeleteTodo
