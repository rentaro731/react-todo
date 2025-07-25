import { Radio } from "./Radio.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { useState } from "react";
// TodoListコンポーネント
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
  const [todos, setTodos] = useState(todoData);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  //タスクの追加
  const addTodo = (e) => {
    e.preventDefault();
    setTodos((todos) => [
      ...todos,
      {
        id: todos.length + 1,
        title: todoName,
        date: dueDate,
        status: "作業中",
      },
    ]);

    setTodoName("");
    setDueDate("");
  };
  //タスクの削除
  const deleteTodo = (targetId) => {
    const newTodos = todos.filter((todo) => todo.id !== targetId);
    // IDの番号を振り直す
    const newId = newTodos.map((todo, index) => ({ ...todo, id: index + 1 }));
    setTodos(newTodos);
    setTodos(newId);
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
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              onDelete={deleteTodo}
            />
          ))}
        </tbody>
      </table>

      <input
        type="text"
        style={{ marginRight: "10px" }}
        placeholder="タスク名を入力"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <input
        type="date"
        style={{ marginRight: "10px" }}
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
    </>
  );
}
