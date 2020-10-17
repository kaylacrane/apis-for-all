import React from "react";

const SearchByText = (props) => {
  // console.log(props);
  function preventEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }
  const { id, onChangeHandler, searchValue, placeholder } = props;
  function onChangeHandlerChild(event) {
    onChangeHandler({
      key: event.currentTarget.id,
      value: event.currentTarget.value,
    });
  }
  // console.log(props);

  return (
    <label htmlFor={id} className="text-search__label">
      <input
        type="text"
        id={id}
        onChange={onChangeHandlerChild}
        value={searchValue}
        onKeyDown={preventEnter}
        placeholder={placeholder}
        className="text-search__input"
      />
    </label>
  );
};

export default SearchByText;
