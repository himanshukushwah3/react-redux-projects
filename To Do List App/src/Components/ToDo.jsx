import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { todoAddItem, todoDeleteItem, todoHandleChange } from "../redux";

const ToDo = (props) => {
  const inputValue = useSelector((state) => state.inputValue);
  const todoEntry = useSelector((state) => state.todoEntry);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const text = event.target.value;
    dispatch(todoHandleChange(text));
  };

  return (
    <div className="wrapper">
      <div className="section">
        <div className="input-div">
          <input
            type="text"
            placeholder="Add your task here..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <span onClick={() => dispatch(todoAddItem(inputValue))}>
            <FaPlus />
          </span>
        </div>
        <div className="list-div">
          {todoEntry.map((item) => (
            <div key={item.id} className="item">
              <h3>{item.data}</h3>
              <span onClick={() => dispatch(todoDeleteItem(item.id))}>
                <FaTrash />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
