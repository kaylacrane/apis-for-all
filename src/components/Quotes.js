import React, { useState, useEffect } from "react";
import getQuotes from "../services/getQuotes";
import SearchByText from "./reusables/filters/SearchByText";
import ResultsList from "./ResultsList";

function Quotes() {
  const [quoteOfDay, setQuoteOfDay] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    getQuotes("qotd").then((data) => {
      setQuoteOfDay(data.quote);
    });
  }, []);
  function getSearchValue(data) {
    setSearchValue(data.value);
    getQuotes(`quotes/?filter=${data.value}`, {
      Authorization: 'Token token="7bb3a9ac1c2ca4a4ac3e1b4d5ce77fdd"',
    }).then((data) => {
      setSearchResults(data.quotes);
    });
    // console.log(searchResults)
    // displayResults();
  }
  function displayQuoteOfTheDay() {
    if (quoteOfDay) {
      const { author, body, url } = quoteOfDay;
      return (
        <>
          <a href={url}>
            <p>{body}</p>
          </a>
          <p>
            By <span>{author}</span>{" "}
          </p>
        </>
      );
    } else {
      return <p>Loading Quote of the Day from FavQs.com</p>;
    }
  }

  function displayResults() {
    // console.log(searchResults);
    let resultsHTML;
    if (searchResults) {
      resultsHTML = searchResults.map((result, index) => {
        return (
          <ResultsList
            key={index}
            author={result.author}
            body={result.body}
            url={result.url}
          />
        );
      });
    }
    return resultsHTML;
  }
  return (
    <div>
      <h1>Quotes API</h1>
      {displayQuoteOfTheDay()}
      <h2>Search for quotes that include:</h2>
      <form>
        <SearchByText
          id={"searchByAuthor"}
          onChangeHandler={getSearchValue}
          searchValue={searchValue}
        />
      </form>
      <div>{displayResults()}</div>
    </div>
  );
}

export default Quotes;
