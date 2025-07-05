import { Radio } from "./Radio.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { useState } from "react";
export function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Javascriptの基礎",
      date: "2024-01-01",
      status: "作業中",
      delete: "✖️",
    },
    {
      id: 2,
      title: "非同期処理",
      date: "2024-01-02",
      status: "作業中",
      delete: "✖️",
    },
    {
      id: 3,
      title: "オブジェクト指向",
      date: "2024-01-03",
      status: "作業中",
      delete: "✖️",
    },
  ]);
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
      <form id="form">
        <input
          type="text"
          style={{ marginRight: "10px" }}
          placeholder="タスク名を入力"
        />
        <input type="date" style={{ marginRight: "10px" }} />
        <button type="submit">追加</button>
      </form>
    </>
  );
}
