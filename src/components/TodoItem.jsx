import { STATUS } from "../../constants.js";
export function TodoItem({ todo, onDelete, onToggle }) {
  const statusLabel = STATUS[todo.status].label;
  return (
    <tr>
      <td>{todo.rowNo}</td>
      <td>{todo.title}</td>
      <td>{todo.date}</td>
      <td>
        <button
          onClick={() => {
            onToggle(todo.id);
          }}
        >
          {statusLabel}
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          ✖️
        </button>
      </td>
    </tr>
  );
}
