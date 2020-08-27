import React from "react";
import ColorPicker from "./editor-options/ColorPicker";
import Slider from "./editor-options/Slider";

function Editor(props) {
  const { onChangeHandler, colorPickerValue } = props;
  return (
    <>
      <ColorPicker
        labelName="Background"
        onChangeHandler={onChangeHandler}
        colorPickerValue={colorPickerValue}
      />
      <Slider />
    </>
  );
}

export default Editor;
