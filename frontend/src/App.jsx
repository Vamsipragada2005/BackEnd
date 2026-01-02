import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  async function addTask() {
    if (!task || !time) {
      alert("Enter all fields");
      return;
    }

    await fetch("http://localhost:1234/api/tasks/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        task: task,
        spendTime: time
      })
    });

    setTask("");
    setTime("");
  }

  return (
    <div>
      <input
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <br />

      <input
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <br />

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default App;
