const API = "https://api.themoviedb.org/3";
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;

export function getData(path) {
  return fetch(API + path, {
    headers: {
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  }).then((response) => response.json());
}
