export function Radio({ options }) {
  return (
    <>
      {options.map((option, index) => {
        const id = `radio-${index}`;
        const value =
          option === "すべて"
            ? "all"
            : option === "作業中"
            ? "active"
            : "completed";

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
