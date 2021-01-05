import React, { useState } from "react";
import ToDoImage from "../img/todo.png";

function Todo({ todo, index }) {
  //handleIsComplete = () => {};

  return (
    <div className="todo-item">
      <div className="title">{todo.title}</div>
    </div>
  );
}

function TodoForm({ addTodoTitle }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    addTodoTitle(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="title"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([
    { title: "Ukol 1", detail: "Naucit se React", isComplete: false },
    { title: "Ukol 2", detail: "Naucit se Hooks", isComplete: false },
    { title: "Ukol 3", detail: "Cele to vstřebat", isComplete: false },
  ]);

  const addTodoTitle = (title) => {
    const newTodoTitle = [...todos, { title }];
    setTodos(newTodoTitle);
  };

  return (
    <div className="todolist col-sm-4 col-md-4 m-2 bordered text-center">
      <img src={ToDoImage} alt="todo icon" className="img-fluid" />
      <hr />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodoTitle={addTodoTitle} />
      </div>
    </div>
  );
}

export default TodoList;
