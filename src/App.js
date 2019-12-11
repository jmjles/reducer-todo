import React,{useReducer} from 'react';
import TodoList from './components/TodoList'
import {reducer,initialState} from './reducers/todoReducer'
import ContextList from './context/ContextList';
import {Container} from '@material-ui/core'
import TodoForm from './components/TodoForm';

function App() {
  const [list,Dispatch] = useReducer(reducer,initialState)
  return (
    <Container>
      <ContextList.Provider value={{list,Dispatch}}>
        <Container style={{textAlign:'center'}}>
            <TodoForm/>
        </Container>
        <TodoList/>
      </ContextList.Provider>
    </Container>
    
  );
}

export default App;
