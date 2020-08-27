import React from "react";

function SearchByDropDown(props) {
  // console.log(props);
  const {
    dropdownOptions,
    id,
    onChangeHandler,
    dropdownValue,
    labelText,
  } = props;

  // const dropdownsHTML = dropdownOptions.map((optionValue, index) => {
  //   return (
  //     <option key={index} value={optionValue.value}>
  //       {optionValue.text}
  //     </option>
  //   );
  // });
  function onChangeHandlerChild(event) {
    onChangeHandler({
      key: event.currentTarget.id,
      value: event.currentTarget.value,
    });
  }
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <select
        name={id}
        id={id}
        onChange={onChangeHandlerChild}
        // defaultValue=""
        value={dropdownValue}
      >
        {dropdownOptions}
      </select>
    </>
  );
}

export default SearchByDropDown;
