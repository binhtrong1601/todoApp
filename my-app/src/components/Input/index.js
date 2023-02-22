import React, { useState } from "react";
import styles from "./Input.module.css";

const TASK_KEY = "task";

const Input = () => {
  const [todoValue, setTodoValue] = useState("");
  const listProductLocalStorage = JSON.parse(localStorage.getItem(TASK_KEY));
  const [listProduct, setListProduct] = useState(
    Array.isArray(listProductLocalStorage) ? listProductLocalStorage : []
  );

  const handleInputChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleAddTodo = () => {
    const newListProduct = [
      ...listProduct,
      { id: Math.random(), name: todoValue, checked: false },
    ];
    setListProduct(newListProduct);
    localStorage.setItem(TASK_KEY, JSON.stringify(newListProduct));
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="add details"
        value={todoValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul style={{ listStyleType: "none" }}>
        {listProduct.map((product) => (
          <li key={product.id}>
            <input type={"checkbox"} />
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Input;
