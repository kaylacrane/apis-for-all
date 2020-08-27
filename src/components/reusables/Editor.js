import React from "react";
import ColorPicker from "./editor-options/ColorPicker";
import Slider from "./editor-options/Slider";

function Editor(props) {
  const { onChangeHandler, colorPickerValue, borderValue } = props;
  return (
    <form className="options">
      <ColorPicker
        labelName="Background"
        onChangeHandler={onChangeHandler}
        colorPickerValue={colorPickerValue}
      />
      <Slider
        labelName="Border"
        minValue="0"
        maxValue="50"
        borderValue={borderValue}
        onChangeHandler={onChangeHandler}
      />
    </form>
  );
}

export default Editor;
