function getCatFacts() {
    return fetch("https://cat-fact.herokuapp.com/facts").then(response=>response.json());
}

export default getCatFacts;
