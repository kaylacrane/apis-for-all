import React from "react";

function Slider(props) {
  const { labelName, minValue, maxValue, sliderValue, onChangeHandler } = props;
  return (
    <>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        type="range"
        id={labelName}
        min={minValue}
        max={maxValue}
        value={sliderValue}
        onChange={(event) =>
          onChangeHandler(event.currentTarget.id, event.currentTarget.value)
        }
      />
    </>
  );
}

export default Slider;
