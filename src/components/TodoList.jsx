import React, { useEffect, useState } from "react";
import { Button, Input, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, getAllTasks } from "../redux/actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosList.data);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTask({content:newTodo}));
      setNewTodo("");
    }
  };

  useEffect(() => {
    dispatch(getAllTasks());
  },[todos]);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <div style={{ width: "300px", margin: "auto", marginTop: "50px" }}>
      <Input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onPressEnter={handleAddTodo}
        placeholder="Enter a new todo"
        style={{ marginBottom: "10px" }}
      />
      <Button
        type="primary"
        onClick={handleAddTodo}
        style={{ marginBottom: "10px" }}
      >
        Add Todo
      </Button>
      <List
        bordered
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button onClick={() => handleDeleteTodo(item._id)} type="link">
                Delete
              </Button>,
            ]}
          >
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
