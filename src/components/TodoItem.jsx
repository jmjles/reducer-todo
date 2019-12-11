import React,{useContext} from 'react'
import { Grid,Typography as Font, Fab, Paper,Card } from '@material-ui/core'
import ContextList from '../context/ContextList'
function TodoItem({item}) {
    const {Dispatch} = useContext(ContextList)
    const handleClick = (id) =>{
        Dispatch({
            type:'removeTodo',
            data: id
        })
    }
    const markComplete= (Todo)=> {
        Dispatch({
            type:'markTodo',
            data:Todo
        })
    }
    return (
        <Grid item xs={5} md={3}>
            <Card onClick={()=>markComplete(item)}>
            <Paper style={item.completed ? {backgroundColor:'green'}: {backgroundColor:'white'}}>
            <Font variant='h3'>
                {item.item}
            </Font>
            <Fab color='secondary' onClick={()=>handleClick(item.id)}>X</Fab>
            </Paper>
            </Card>

        </Grid>
    )
}

export default TodoItem
