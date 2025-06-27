export function TodoItem({ todo, index }) {
  return (
    <tr key={todo.id}>
      <td>{index + 1}</td>
      <td>{todo.title}</td>
      <td>{todo.date}</td>
      <td>
        <button>{todo.status}</button>
      </td>
      <td>
        <button>{todo.delete}</button>
      </td>
    </tr>
  );
}
