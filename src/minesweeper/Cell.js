import React, {useState} from 'react';
import './cells.css';
import store from './store';

function Cell({value}){
    const [val,setval] = useState("")
    const [clr,setclr] = useState("")
    const handleclick = () =>{
        if(value==="💣"){
            setval(value)
            setclr("")
            store.dispatch({
                type:'blast',
                payload:-1
            })
        }
        else{
            setval(value)
            setclr("")
            store.dispatch({
                type:'INCREMENT',
                payload:value
            })

        }

        
    }

    return(
        <div>
            <button onClick={()=>{handleclick()}} disabled={val} className='cell_button' style={{backgroundColor:clr}}><div id="cell" >{val}</div></button>
        </div>
    )
}

export default Cell;