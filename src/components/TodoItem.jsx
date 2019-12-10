import React,{useContext} from 'react'
import { Grid,Typography as Font, Fab } from '@material-ui/core'
import ContextList from '../context/ContextList'
function TodoItem({item:{item,completed,id}}) {
    const {Dispatch} = useContext(ContextList)
    const handleClick = (id) =>{
        Dispatch({
            type:'removeTodo',
            data: id
        })
    }
    return (
        <Grid item xs={5} md={3}>
            <Font variant='h3'>
                {item}
            </Font>
            <Fab color='secondary' onClick={()=>handleClick(id)}>X</Fab>
        </Grid>
    )
}

export default TodoItem
