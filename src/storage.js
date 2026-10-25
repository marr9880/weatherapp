export function saveLocation(key, value) {
  localStorage.setItem(key, value);
}

export function getLocation(key) {
  return localStorage.getItem(key);
}
