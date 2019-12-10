import React,{useContext} from 'react'
import { Grid } from '@material-ui/core'
import ContextList from '../context/ContextList'
import TodoItem from './TodoItem'
function TodoList() {
    const {list} = useContext(ContextList)
    return (
        <Grid container>
            {
                list.map(item=>(
                    <TodoItem key={item.id} item={item}/>
                ))
            }
           
        </Grid>
    )
}

export default TodoList
