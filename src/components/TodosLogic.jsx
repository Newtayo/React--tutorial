import { useState , useEffect} from "react";

import InputTodo from "./InputTodos";

import TodosList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
    const [todos, setTodos] = useState(getInitialTodos());
      useEffect(() => {
       
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);
      }, [todos]);

      function getInitialTodos() {
 
        const temp = localStorage.getItem('todos');
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
      }

      const handleChange = (id) => {
        setTodos((prevState) =>
          prevState.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          })
        );
      };
      const delTodo = (id) => {
        setTodos([
          ...todos.filter((todo) => {
            return todo.id !== id;
          }),
        ]);
      };
      const addTodoItem = (title) => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false,
        };
        setTodos([...todos, newTodo]);
      };
      const setUpdate = (updatedTitle, id) => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              todo.title = updatedTitle;
            }
            return todo;
          })
        );
      };
    return (
        <ul>
        
        
          <InputTodo addTodoItem={addTodoItem}/>
          <TodosList todosProps={todos} handleChange={handleChange}   delTodo={delTodo}  setUpdate={setUpdate}/>
       
      </ul>
    )
  }
  export default TodosLogic;
  