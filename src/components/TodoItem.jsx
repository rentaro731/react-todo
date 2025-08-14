export function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.date}</td>
      <td>
        <button
          onClick={() => {
            onToggle(todo.id);
          }}
        >
          {todo.status}
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
