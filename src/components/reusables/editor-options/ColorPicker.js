import React from "react";

function ColorPicker(props) {
  const { labelName, onChangeHandler, colorPickerValue } = props;
  return (
    <label htmlFor={labelName}>
      {labelName}
      <input
        type="color"
        id={labelName}
        value={colorPickerValue}
        onChange={(event) =>
          onChangeHandler(event.currentTarget.id, event.currentTarget.value)
        }
      />
    </label>
  );
}

export default ColorPicker;
