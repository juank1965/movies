import placeholder from "../img/placeholder.jpg";

export function imgPlaceholder(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}
