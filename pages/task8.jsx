import React, { useState } from "react";

function task8() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <h1>To Do List</h1>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ShowTaskList tasks={tasks} />
    </div>
  );
}

function AddTask({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  function handleAddTask() {
    setTasks([...tasks, task]);
    setTask("");
  }
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAddTask}>Add</button>
    </>
  );
}

function ShowTaskList({ tasks }) {
  return (
    <>
      {tasks.map((task, index) => (
        <p>
          {index + 1}. {task}
        </p>
      ))}
    </>
  );
}

export default task8;
