import { STATUS } from "../../constants.js";
export function Radio({ options, onFilter }) {
  return (
    <>
      {options.map((option, index) => {
        const id = `radio-${index}`;
        const status =
          STATUS.all.label === option
            ? STATUS.all
            : STATUS.work.label === option
            ? STATUS.work
            : STATUS.done;
        const value = status.value;

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
