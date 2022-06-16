const API = "https://api.themoviedb.org/3";

export function getData(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmI2MzI3NWVhMWNmYzZiYTYyNDdlOTQ3NWUzYTY2YSIsInN1YiI6IjYyNTIwYzIxMDkxOTFiMDA2NTc2NjNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MresvjDFB87emJbxJIw8eqVniMmOfQABdEHBZ57eqJk",
      "content-type": "application/json;charset=utf-8",
    },
  }).then((response) => response.json());
}
