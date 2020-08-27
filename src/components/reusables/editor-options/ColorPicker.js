import React from "react";

function ColorPicker(props) {
  console.log(props);
  const { labelName, onChangeHandler, colorPickerValue } = props;
  return (
    <>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        type="color"
        id={labelName}
        value={colorPickerValue}
        onChange={(event) =>
          onChangeHandler(event.currentTarget.id, event.currentTarget.value)
        }
      />
    </>
  );
}

export default ColorPicker;
