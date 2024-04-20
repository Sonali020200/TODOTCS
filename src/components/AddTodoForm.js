import React, { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex' }}>
      <input 
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add new Todo..."
        style={{
          padding: '10px',
          marginRight: '100px',
          marginLeft: '100px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          flex: '1',
        }}
      />
      <button 
        type="submit" 
        style={{
          backgroundColor: '#4CAF50',
          color: '#FFFFFF',
          padding: '8px 16px', 
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          marginRight: '50px',
          
          
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
