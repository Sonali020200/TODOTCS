import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
    const { id, text, completed } = todo;

    return (
        <div style={{ marginBottom: '10px' }}>
            <input 
                type='checkbox'
                checked={completed}
                onChange={() => onToggle(id)}
            />
            <span 
                style={{
                    marginLeft: '5px',
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {text}
            </span>
            <button 
                className='delete-button' 
                style={{
                    marginLeft: '10px',
                    backgroundColor: '#f44336',
                    color: '#ffffff',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
