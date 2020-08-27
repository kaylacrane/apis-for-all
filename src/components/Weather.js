import React, { useState, useEffect } from "react";
import getWeather from "../services/getWeather";
import SearchByText from "./reusables/filters/SearchByText";
import SearchByDropDown from "./reusables/filters/SearchByDropDown";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [textSearchValue, setTextSearchValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("all");
  const [countryList, setCountryList] = useState([
    { text: "Spain", value: "ES" },
    { text: "USA", value: "US" },
    { text: "Colombia", value: "CO" },
  ]);
  useEffect(() => {
    getWeather().then((data) => {
      console.log(data);
      console.log("hi");
    });
  }, []);
  function getSearchValue(data) {
    if (data.key === "citySearch") {
      setTextSearchValue(data.value);
    }
    if (data.key === "countrySearch") {
      setDropdownValue(data.value);
    }
    console.log(data);
    // getWeather().then((data) => {
    // setCurrentWeather(data);
    // });
    // console.log(searchResults)
    // displayResults();
  }
  return (
    <div>
      <h2>Check the current weather around the world:</h2>
      <form>
        <SearchByText
          id={"citySearch"}
          onChangeHandler={getSearchValue}
          searchValue={textSearchValue}
        />
        <SearchByDropDown
          id="countrySearch"
          labelText="Select a country"
          onChangeHandler={getSearchValue}
          dropdownValue={dropdownValue}
          dropdownOptions={countryList}
        />
      </form>
    </div>
  );
}

export default Weather;
