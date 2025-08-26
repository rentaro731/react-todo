import { ALL, WORK, STATUS } from "../../constants.js";

export function Radio({ options }) {
  return (
    <>
      {options.map((option, index) => {
        const id = `radio-${index}`;
        const status = Object.values(STATUS).find(
          (status) => status.label === option
        );
        const value = status ? status.value : "";
        return (
          <span key={id}>
            <input type="radio" id={id} name="light" value={value} />
            <label htmlFor={id}>{option}</label>
          </span>
        );
      })}
    </>
  );
}
