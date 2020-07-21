import React,{useState} from 'react'
import DeleteTodo from './deleteTodo'

function SingleTodo({oneTodo,index}) {
    const [addThis,setAddThis] = useState({
                        "listStyle":"none",
                        "cursor":"pointer"
                    });
    const [need,setNeed] = useState(false);

    const clicked = ()=>{
        setNeed(!need);
        if(need===true)
            setAddThis({
                ...addThis,
                "textDecoration":"line-through",
                "color":"green"
            })
        else
            setAddThis({
                ...addThis,
                "textDecoration":"none"
            })
    }
    return (
        <React.Fragment>
            <div className="lis">
                <li onClick={clicked} style={addThis}>{oneTodo}</li>
                <DeleteTodo index={index}/> 
            </div>
            <hr></hr>
        </React.Fragment>
    )
}

export default React.memo(SingleTodo);
