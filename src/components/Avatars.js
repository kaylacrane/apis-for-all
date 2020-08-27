import React, { useState, useEffect } from "react";
import getAvatars from "../services/getAvatars";
import SearchByText from "./reusables/filters/SearchByText";
import SearchByDropDown from "./reusables/filters/SearchByDropDown";
import Editor from "./reusables/Editor";

function Avatars() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [searchValue, setTextSearchValue] = useState("");
  const [avatarTypeValue, setDropdownValue] = useState("human");
  const [editorOptions, setEditorOptions] = useState({
    Background: "#ffffff",
    Border: "0",
  });
  const avatarList = [
    { value: "human", text: "human" },
    { value: "male", text: "male" },
    { value: "female", text: "female" },
    { value: "bottts", text: "bottts" },
    { value: "identicon", text: "identicon" },
    { value: "avataaars", text: "avataaars" },
    { value: "gridy", text: "gridy" },
    { value: "initials", text: "initials" },
  ];
  useEffect(() => {
    const { Background, Border } = editorOptions;
    console.log(Border);
    const background = `?${"r=" + Border}${"&b=%23" + Background.substr(1)}`;
    getAvatars(searchValue, avatarTypeValue, background).then((data) => {
      setAvatarUrl(data.url);
    });
  }, [searchValue, avatarTypeValue, editorOptions]);

  const getSearchValue = (data) => {
    if (data.key === "searchByText") {
      setTextSearchValue(data.value);
    }
    if (data.key === "searchByType") {
      setDropdownValue(data.value);
    }
  };
  const buildDropdown = () => {
    let optionsArray = [];
    optionsArray = avatarList.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      );
    });
    return optionsArray;
  };
  const getEditorOptions = (id, value) => {
    console.log(id, value);
    setEditorOptions({ ...editorOptions, [id]: value });
  };
  console.log(editorOptions);
  return (
    <div>
      <SearchByText
        id={"searchByText"}
        onChangeHandler={getSearchValue}
        searchValue={searchValue}
        placeholder="Your name or other text"
      />
      <SearchByDropDown
        id="searchByType"
        dropdownOptions={buildDropdown()}
        onChangeHandler={getSearchValue}
        dropdownValue={avatarTypeValue}
      />
      <div className="avatar-block">
        <h2>Your personalized avatar:</h2>
        <img src={avatarUrl} alt="avatar" className="avatar" />
      </div>
      <Editor
        onChangeHandler={getEditorOptions}
        colorPickerValue={editorOptions.Background}
        borderValue={editorOptions.Border}
      />
    </div>
  );
}

export default Avatars;
