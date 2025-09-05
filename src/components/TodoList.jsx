import { TodoStatusSelector } from "./TodoStatusSelector.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { useState } from "react";
import { STATUS } from "../../constants.js";

// TodoListコンポーネント
export function TodoList() {
  const todoData = [
    {
      id: 1,
      title: "Javascriptの基礎",
      date: "2024-01-01",
      status: STATUS.work.value,
    },
    {
      id: 2,
      title: "非同期処理",
      date: "2024-01-02",
      status: STATUS.work.value,
    },
    {
      id: 3,
      title: "オブジェクト指向",
      date: "2024-01-03",
      status: STATUS.work.value,
    },
  ];
  const [todos, setTodos] = useState(todoData);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filterTodos, setFilterTodos] = useState(STATUS.all.value);
  //タスクの追加
  const addTodo = (e) => {
    e.preventDefault();
    setTodos((todos) => [
      ...todos,
      {
        id: todos.length + 1,
        title: todoName,
        date: dueDate,
        status: STATUS.work.value,
      },
    ]);

    setTodoName("");
    setDueDate("");
  };
  //タスクの削除
  const deleteTodo = (targetId) => {
    const newTodos = todos
      .filter((todo) => todo.id !== targetId)
      .map((todo, index) => ({ ...todo, id: index + 1 }));
    setTodos(newTodos);
  };
  //タスクの状態を切り替える
  const toggleStatus = (todoId) => {
    const toggleButton = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          status:
            todo.status === STATUS.work.value
              ? STATUS.done.value
              : STATUS.work.value,
        };
      }

      return todo;
    });
    setTodos(toggleButton);
  };
  //タスクの一覧表示

  const organizeTodos =
    filterTodos === STATUS.all.value
      ? todos
      : todos.filter((todo) => todo.status === filterTodos);
  return (
    <>
      <TodoStatusSelector onFilter={(value) => setFilterTodos(value)} />
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
          {organizeTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onToggle={toggleStatus}
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
