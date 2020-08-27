function getAvatars(searchText, searchType, options = "") {
  return fetch(
    `https://avatars.dicebear.com/api/${searchType}/${searchText}.svg${options}`
  ).then((response) => response);
}

export default getAvatars;
