import React,{useRef,useContext} from 'react'
import { Input } from '@material-ui/core'
import ContextList from '../context/ContextList'

function TodoForm() {
    const {Dispatch} = useContext(ContextList)
    const input = useRef()

    const handleSubmit= (e)=>{
        e.preventDefault()
        Dispatch({
            type:'newTodo',
            data: input.current.value
        })
        input.current.value = ''
    }
    return (
        <form onSubmit={handleSubmit}>
            <input ref={input} type='text' placeholder='Enter a Todo' required/>
        </form>
    )
}

export default TodoForm
