import React, { useState, useEffect } from "react";
import getCatFacts from "../services/getCatFacts";

function Cats() {
  const [catFacts, setCatFacts] = useState([]);
  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    getCatFacts().then((data) => {
      setCatFacts(data.all);
      const randomNumber = Math.floor(Math.random() * data.all.length + 1);
      setRandomFact(data.all[randomNumber].text);
    });
  }, []);

  const getNewFact = () => {
    const randomNumber = Math.floor(Math.random() * catFacts.length + 1);
    setRandomFact(catFacts[randomNumber].text);
  };

  return (
    <div className="cat-fact">
      <h1 className="cat-fact__title">Cats API</h1>
      <img
        className="cat-fact__image"
        src="http://placekitten.com/200/200"
        alt="kitten"
      />{" "}
      <button className="cat-fact__button" onClick={getNewFact}>
        Get new fact
      </button>
      <p className="cat-fact__text">
        {randomFact ? randomFact : "Loading fact right meow"}
      </p>
    </div>
  );
}

export default Cats;
