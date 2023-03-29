import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => {
  TodosList.propTypes = {
    todosProps: PropTypes.node.isRequired,
    handleChange: PropTypes.node.isRequired,
    delTodo: PropTypes.node.isRequired,
    setUpdate: PropTypes.node.isRequired,

  };

  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          delTodo={delTodo}
          handleChange={handleChange}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodosList;
