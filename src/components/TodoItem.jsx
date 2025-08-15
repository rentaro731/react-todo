export function TodoItem({ todo, onDelete }) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.date}</td>
      <td>
        <button>{todo.status}</button>
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
