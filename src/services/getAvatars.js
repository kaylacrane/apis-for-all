function getAvatars(searchText, searchType, background = "") {
  return fetch(
    `https://avatars.dicebear.com/api/${searchType}/${searchText}.svg${background}`
  ).then((response) => response);
}

export default getAvatars;
