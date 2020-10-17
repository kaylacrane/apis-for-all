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
    Margin: "0",
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
    const { Background, Border, Margin } = editorOptions;
    console.log(Border);
    const options = `?r=${Border}&b=%23${Background.substr(1)}&m=${Margin}`;
    getAvatars(searchValue, avatarTypeValue, options).then((data) => {
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
    <div className="avatars">
      <h1 className="avatars__title">Create your personalized avatar</h1>
      <span className="avatars__description">
        Choose a kind of avatar from the drop-down menu. Then type your name or
        other text to automatically generate your avatar.
      </span>
      <SearchByDropDown
        id="searchByType"
        dropdownOptions={buildDropdown()}
        onChangeHandler={getSearchValue}
        dropdownValue={avatarTypeValue}
      />
      <SearchByText
        id={"searchByText"}
        onChangeHandler={getSearchValue}
        searchValue={searchValue}
        placeholder="Your name or other text"
      />
      <div className="avatars__image-container">
        <img
          src={avatarUrl}
          alt="avatar"
          className="avatars__image-container--img"
        />
      </div>
      <Editor
        onChangeHandler={getEditorOptions}
        colorPickerValue={editorOptions.Background}
        borderValue={editorOptions.Border}
        marginValue={editorOptions.Margin}
      />
    </div>
  );
}

export default Avatars;
