import { STATUS } from "../../constants.js";
export function Radio({ options, onFilter }) {
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
            <input
              type="radio"
              id={id}
              name="light"
              value={value}
              onChange={(e) => onFilter(e.target.value)}
            />
            <label htmlFor={id}>{option}</label>
          </span>
        );
      })}
    </>
  );
}
