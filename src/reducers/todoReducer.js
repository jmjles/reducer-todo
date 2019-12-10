const id = require('uniqid');

const initialState = 
 [ 
    {
        item: 'Learn about reducers',
        completed: false,
        id: id()
    }
]

  const reducer = (state,action)=>{
    switch(action.type){
        case('newTodo'):
            const newTodo = {
                id: id(),
                item: action.data,
                completed: false
            }
            return state = [...state,newTodo]
        case('removeTodo'):
            return state.filter(({id}) => {
                return id !== action.data} )
        default:
            return state
    }
  }
  export {initialState,reducer}