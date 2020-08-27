import React from "react";

function Slider(props) {
  const { labelName, minValue, maxValue, borderValue, onChangeHandler } = props;
  return (
    <>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        type="range"
        id={labelName}
        min={minValue}
        max={maxValue}
        value={borderValue}
        onChange={(event) =>
          onChangeHandler(event.currentTarget.id, event.currentTarget.value)
        }
      />
    </>
  );
}

export default Slider;
