import { useState } from "react";
export function TodoData() {
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
  return todos;
}
