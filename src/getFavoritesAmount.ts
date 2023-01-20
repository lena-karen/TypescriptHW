
export function getFavoritesAmount():number {
  const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'))

  return favoriteItems.length;
}
