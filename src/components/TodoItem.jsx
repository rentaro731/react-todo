export function TodoItem({ todo, index, onDelete }) {
  return (
    <tr key={index + 1}>
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
