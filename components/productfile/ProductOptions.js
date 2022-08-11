import React from "react";

export default function ProductOptions({
  name,
  values,
  selectedOptions,
  setOptions,
}) {
  return (
    <fieldset>
      <legend className="fs-2 font-semibold">{name}</legend>
      <div className="inline-flex justify-content-center flex-wrap">
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;

          return (
            <label key={id} htmlFor={id}>
              <input
                style={{
                  type: "radio",
                  display: "none",
                }}
                type="radio"
                id={id}
                name={`options-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              <div
                className={`p-2  mt-3 fs-4 me-3 block rounded ${
                  checked
                    ? "text-white bg-dark "
                    : "text-gray-900 border border-dark"
                }`}
              >
                <span className="px-2">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
