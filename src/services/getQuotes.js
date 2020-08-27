function getQuotes(quoteType, headerValue) {
    return fetch(`https://favqs.com/api/${quoteType}`,{headers:headerValue}).then(response => response.json());
}

export default getQuotes;
