import React, { useEffect, useState } from "react";
const TASK_KEY = "task";
const Active = () => {
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(TASK_KEY));
    if (data) setListTask(data);
  }, []);

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {listTask
          .filter((task) => !task.checked)
          .map((task) => (
            <li key={task.id}>
              <input type="checkbox" />
              {task.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Active;
