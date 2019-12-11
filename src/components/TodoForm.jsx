import React,{useContext,useState} from 'react'
import { Input,Button } from '@material-ui/core'
import ContextList from '../context/ContextList'

function TodoForm() {
    const [todoValue,setTodoValue] = useState('')
    const {Dispatch} = useContext(ContextList)

    const handleSubmit= (e)=>{
        e.preventDefault()
        Dispatch({
            type:'newTodo',
            data: todoValue
        })
        setTodoValue('')
    }
    const clearCompletedTodos = () => {
        Dispatch({
            type:'clearCompletedTodos'
        }
        )
    }
    const handleChange = (e)=> {
        setTodoValue(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input type='text' placeholder='Enter a Todo' required value={todoValue} onChange={handleChange}/>
            </form>
            <Button onClick={clearCompletedTodos} color='primary' variant='contained'>
                Clear Completed Todos
            </Button>
        </>
    )
}

export default TodoForm
