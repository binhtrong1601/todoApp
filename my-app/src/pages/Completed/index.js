import React, { useEffect, useState } from "react";
const TASK_KEY = "task";
const Completed = () => {
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(TASK_KEY));
    if (data) setListTask(data);
  }, []);

  const handleDeleteTask = (id) => {
    const restListTask = listTask.filter((item) => item.id !== id);
    setListTask(restListTask);
    localStorage.setItem(TASK_KEY, JSON.stringify(restListTask));
  };

  const handleDeleteAllCheckedTasks = () => {
    const uncheckedTasks = listTask.filter((item) => !item.checked);
    setListTask(uncheckedTasks);
    localStorage.setItem(TASK_KEY, JSON.stringify(uncheckedTasks));
  };
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {listTask.map(
          (task) =>
            task.checked && (
              <li key={task.id} style={{ textDecorationLine: "line-through" }}>
                <input type="checkbox" checked readOnly />
                {task.name}
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </li>
            )
        )}
      </ul>
      <button onClick={handleDeleteAllCheckedTasks}>
        Delete All Checked Tasks
      </button>
    </div>
  );
};

export default Completed;
