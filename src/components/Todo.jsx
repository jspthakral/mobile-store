import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);

  function addTasks() {
    setTodo([...todos, task]);
    setTask("");
  }

  return (
    <div className="container">
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={addTasks}>
          Add Task
        </button>
        <ul className="list-group mt-3">
          {todos.map((todo, i) => (
            <li className="list-group-item" key={i}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Todo;
