import React from "react";

export default function ExtraProductOptions({
  name,
  values,
  selectedOptions,
  setOptions,
}) {
  return (
    <>
      <div className="row">
        <div className="col-7">
          <h4>Categories</h4>
        </div>
        <div className="col-5">
          <span className="float-right">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half"></i>
          </span>
        </div>
      </div>
      <div className="row justify-content-between product_info">
        <div className="col-md-3 col-sm-4 col-12">
          <h4>{name}:</h4>
        </div>
        <div className="col-md-9 col-sm-8 col-12">
          <div className="sizes_btn_group">
            {values.map((value) => {
              const id = `option-${name}-${value.value}`;
              const checked = selectedOptions[name] === value.value;
              return (
                <label key={id} htmlFor={id}>
                  <input
                    style={{
                      type: "radio",
                      display: "none",
                    }}
                    className="sr-only-focusable sr-only"
                    type="radio"
                    id={id}
                    name={`option-${name}`}
                    value={value.value}
                    checked={checked}
                    onChange={() => {
                      setOptions(name, value.value);
                    }}
                  />
                  <div
                    className={` ${
                      checked
                        ? "text-white bg-success  rounded ms-2 p-2 m-1"
                        : "text-white bg-primary  rounded ms-2 p-2 m-1"
                    }`}
                  >
                    <span className="px-2">{value.value}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <fieldset>
<legend
  onClick={() => {
    alert(values);
  }}
  className="text-xl font-semibold "
>
  {name}
</legend>
<div className=" inline-flex justify-content-center flex-wrap">
  {values.map((value) => {
    const id = `option-${name}-${value.value}`;
    const checked = selectedOptions[name] === value.value;
    return (
      <label key={id} htmlFor={id}>
        <input
          style={{
            type: "radio",
            display: "none",
          }}
          className="sr-only-focusable sr-only"
          type="radio"
          id={id}
          name={`option-${name}`}
          value={value.value}
          checked={checked}
          onChange={() => {
            setOptions(name, value.value);
          }}
        />
        <div
          className={`p-2 mb-3 mt-3 fs-4 me-2 block rounded d-flex flex-wrap ${
            checked
              ? "text-white bg-dark border border-white"
              : "text-dark border-dark border"
          }`}
        >
          <span className="px-2">{value.value}</span>
        </div>
      </label>
    );
  })}
</div>
</fieldset> */
}
