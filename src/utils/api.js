export function getCharacter(param) {
  return new Promise((resolve) => {
    let query =  `page=1`;
    if (param) query = param;
    console.log(query);
    const url = `https://rickandmortyapi.com/api/character/?${query}`;
      fetch(url).then((res) => resolve(res.json()))
  })
}