import { TodoStatusSelector } from "./TodoStatusSelector.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { useEffect, useState } from "react";
import { STATUS } from "../../constants.js";
import { db } from "../firebaseConfig.js";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  serverTimestamp,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

// TodoListコンポーネント
export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filterTodos, setFilterTodos] = useState(STATUS.all.value);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const nextTodos = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            title: data.title ?? "",
            date: data.date ?? "",
            status: data.status ?? STATUS.work.value,
          };
        });
        setTodos(nextTodos);
        setLoading(false);
      },
      (err) => {
        console.error("onSnapshot error:", err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // データベースにtodoを追加
  const addTodo = async (e) => {
    e.preventDefault();
    if (!todoName || !dueDate) return alert("タスク名と期限を入力してください");
    try {
      await addDoc(collection(db, "todos"), {
        title: todoName.trim(),
        date: dueDate,
        status: STATUS.work.value,
        createdAt: serverTimestamp(),
      });
      setTodoName("");
      setDueDate("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  //タスクの削除
  const deleteTodo = async (targetId) => {
    const matchId = todos.find((todo) => todo.id === targetId);
    if (!matchId) return alert("すでに削除されたタスクです");
    try {
      await deleteDoc(doc(db, "todos", targetId));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
  //タスクの状態を切り替える
  const toggleStatus = async (targetId) => {
    const matchId = todos.find((todo) => todo.id === targetId);
    if (!matchId) return alert("すでに処理されたタスクです");
    const changeStatus =
      matchId.status === STATUS.work.value
        ? STATUS.done.value
        : STATUS.work.value;
    try {
      await updateDoc(doc(db, "todos", targetId), { status: changeStatus });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  //タスクの一覧表示
  const organizeTodos =
    filterTodos === STATUS.all.value
      ? todos
      : todos.filter((todo) => todo.status === filterTodos);

  if (loading) return <div>Loading...</div>;
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
          {organizeTodos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              viewNo={index + 1}
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
