import { WORK, DONE, ALL } from "../constants.ts";
export function Radio({ options, onFilter }) {
  return (
    <>
      {options.map((option, index) => {
        const id = `radio-${index}`;
        const value = option === ALL ? ALL : option === WORK ? WORK : DONE;

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
