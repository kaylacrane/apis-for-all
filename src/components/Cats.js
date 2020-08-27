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
    <div>
      <h1>Cats API</h1>
      <p>{randomFact ? randomFact : "Loading fact right meow"}</p>
      <button onClick={getNewFact}>Get new fact</button>
    </div>
  );
}

export default Cats;
