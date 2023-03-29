import TodoItem from "./TodoItem";
const TodosList = ({ todosProps , handleChange, delTodo, setUpdate}) => {
    
    
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo}  delTodo={delTodo}  handleChange={handleChange} setUpdate={setUpdate} />
        ))}
      </ul>
    );
  };
  export default TodosList;