import { Radio } from "./Radio.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { TodoData } from "./TodoData.jsx";
export function TodoList() {
  const todos = TodoData();
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
