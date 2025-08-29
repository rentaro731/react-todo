import { STATUS } from "../../constants.js";

export function TodoStatusSelector() {
  const statusList = [STATUS.all, STATUS.work, STATUS.done];
  return (
    <>
      {statusList.map((status, index) => {
        const id = `radio-${index}`;
        return (
          <span key={id}>
            <input type="radio" id={id} name="light" value={status.value} />
            <label htmlFor={id}>{status.label}</label>
          </span>
        );
      })}
    </>
  );
}
