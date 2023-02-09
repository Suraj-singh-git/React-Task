import React, { useState } from "react";
import Navbar from "../components/Navbar";

function task11() {
  const [todo, setTodo] = useState([]);

  function deleteTask(id) {
    const temp = todo.filter((_, index) => id != index);
    setTodo(temp);
  }

  return (
    <div>
      <Navbar />
      <h1>To Do List</h1>
      <AddTask todo={todo} setTodo={setTodo} />
      <ShowTask todo={todo} deleteTask={deleteTask} />
    </div>
  );
}

function AddTask({ todo, setTodo }) {
  const [task, setTask] = useState("");
  function Add() {
    setTodo([...todo, task]);
    setTask("");
  }

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={Add}>Add Task</button>
    </>
  );
}

function ShowTask({ todo, deleteTask }) {
  return (
    <>
      {todo.map((todoItem, index) => {
        return (
          <Card
            todoItem={todoItem}
            deleteTask={deleteTask}
            id={index}
            key={index}
          />
        );
      })}
    </>
  );
}

function Card({ todoItem, id, deleteTask }) {
  const [text, setText] = useState(todoItem);
  const [isEdit, setEdit] = useState(false);
  return (
    <div className="d-flex">
      {isEdit ? (
        <div className="">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      ) : (
        <p>
          {id + 1}: {text}{" "}
        </p>
      )}
      <button className="btn btn-danger btn-sm" onClick={() => deleteTask(id)}>
        Delete
      </button>
      <button className="btn btn-info btn-sm" onClick={() => setEdit(!isEdit)}>
        {isEdit ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default task11;
