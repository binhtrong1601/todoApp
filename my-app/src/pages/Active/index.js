import React, { useEffect, useState } from "react";
const TASK_KEY = "task";
const Active = () => {
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(TASK_KEY));
    if (data) setListTask(data);
  }, []);

  const handleChangeTaskStatus = (e) => {
    const id = e.target.id;
    const data = listTask.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setListTask(data);
    localStorage.setItem(TASK_KEY, JSON.stringify(data));
  };

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {listTask
          .filter((task) => !task.checked)
          .map((task) => (
            <li id={task.id} key={task.id} onClick={handleChangeTaskStatus}>
              <input type="checkbox" checked={task.checked ? true : false}/>
              {task.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Active;
