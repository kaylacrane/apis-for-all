import React from "react";
import ColorPicker from "./editor-options/ColorPicker";
import Slider from "./editor-options/Slider";

function Editor(props) {
  const { onChangeHandler, colorPickerValue, borderValue, marginValue } = props;
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
        sliderValue={borderValue}
        onChangeHandler={onChangeHandler}
      />
      <Slider
        labelName="Margin"
        minValue="0"
        maxValue="25"
        sliderValue={marginValue}
        onChangeHandler={onChangeHandler}
      />
    </form>
  );
}

export default Editor;
