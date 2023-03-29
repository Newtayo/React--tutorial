import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  TodoItem.propTypes = {
    itemProp: PropTypes.node.isRequired,
    handleChange: PropTypes.node.isRequired,
    delTodo: PropTypes.node.isRequired,
    setUpdate: PropTypes.node.isRequired,

  };

  return (
    <li className={styles.item}>

      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {itemProp.title}
        <button onClick={handleEditing} type="submit">Edit</button>
        <button type="submit" onClick={() => delTodo(itemProp.id)}>Delete</button>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>

  );
};
export default TodoItem;
