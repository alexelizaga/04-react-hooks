import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ index, todo, handleToggle, handleDelete }) => {
  return (
    <li className="list-group-item">
      <p
        data-testid='TodoListItemDesc'
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        data-testid='TodoListItemBtn'
        className="btn btn-danger"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  )
};

TodoListItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
