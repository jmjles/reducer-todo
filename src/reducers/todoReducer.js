const id = require("uniqid");

const storageState = () => {
  const x = localStorage.getItem("todos");
  return x ? JSON.parse(x) : [];
};
const initialState = storageState();

const reducer = (state, action) => {
  switch (action.type) {
    case "newTodo":
      const newTodo = {
        id: id(),
        item: action.data,
        completed: false
      };
      state = [...state, newTodo];
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    case "removeTodo":
      return state.filter(({ id }) => {
        localStorage.setItem("todos", JSON.stringify(state));
        return id !== action.data;
      });
    case "markTodo":
      state = state.map(todo => {
        if (todo.id === action.data.id) {
          todo = {
            ...todo,
            completed: !todo.completed
          };
          return todo;
        }
        return todo;
      });

      localStorage.setItem("todos", JSON.stringify(state));

      return state;
    case "clearCompletedTodos":
      state = state.filter(({ completed }) => completed !== true);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
export { initialState, reducer };
