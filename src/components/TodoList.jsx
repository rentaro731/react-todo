import { Radio } from "./Radio.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { useState, useRef } from "react";
export function TodoList() {
  const todoData = [
    {
      id: 1,
      title: "Javascriptの基礎",
      date: "2024-01-01",
      status: "作業中",
    },
    {
      id: 2,
      title: "非同期処理",
      date: "2024-01-02",
      status: "作業中",
    },
    {
      id: 3,
      title: "オブジェクト指向",
      date: "2024-01-03",
      status: "作業中",
    },
  ];
  const [todos, settodos] = useState(todoData);
  const [taskName, setTaskName] = useState("");
  const [newDate, setNewDate] = useState("");

  const AddTodo = (e) => {
    e.preventDefault();
    settodos((todos) => [
      ...todos,
      {
        id: todos.length + 1,
        title: taskName,
        date: newDate,
        status: "作業中",
      },
    ]);

    setTaskName("");
    setNewDate("");
  };
  return (
    <>
      <Radio options={["すべて", "作業中", "完了"]} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タスク名</th>
            <th>期限</th>
            <th>状態</th>
            <th>削除</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem key={todo.id} todo={todo} index={index} />
          ))}
        </tbody>
      </table>
      <>
        <input
          type="text"
          style={{ marginRight: "10px" }}
          placeholder="タスク名を入力"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="date"
          style={{ marginRight: "10px" }}
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <button onClick={AddTodo}>追加</button>
      </>
    </>
  );
}
