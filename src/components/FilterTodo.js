import React from "react";

const FilterTodo = ({ filter, setFilter }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        style={{
          marginRight: "5px",
          backgroundColor: filter === "all" ? "#4CAF50" : "#FFFFFF",
          color: filter === "all" ? "#FFFFFF" : "#000000",
        }}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        style={{
          marginRight: "5px",
          backgroundColor: filter === "active" ? "#4CAF50" : "#FFFFFF",
          color: filter === "active" ? "#FFFFFF" : "#000000",
        }}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        style={{
          backgroundColor: filter === "completed" ? "#4CAF50" : "#FFFFFF",
          color: filter === "completed" ? "#FFFFFF" : "#000000",
        }}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTodo;
