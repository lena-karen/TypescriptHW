import { Place } from './interfaces.js'
import { renderBlock } from './lib.js'
import { Favorite } from './interfaces.js'
import { getUserData } from './index.js'
import { getFavoritesAmount } from './getFavoritesAmount.js'
import { renderUserBlock } from './user.js'

let isSelected = false;

const toggleFavoriteItem = (event) => {
  //isSelected = !isSelected;
  //console.log('select', isSelected)
  const id = event.target.getAttribute('data-id')
  const image = event.target.getAttribute('data-image')
  const name = event.target.getAttribute('data-name')

  const item = {id, name, image}

  let isFavorite = false;

  const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'))
  let newFavoriteItems: Favorite[] = favoriteItems;

  favoriteItems.forEach(el => {
    if (JSON.stringify(el) === JSON.stringify(item)) {
      isFavorite = true
      newFavoriteItems = favoriteItems.filter(el =>el.id!=item.id)
    }})

  if (!isFavorite){
    newFavoriteItems.push(item)
  }

  localStorage.setItem('favoriteItems', JSON.stringify(newFavoriteItems))

  const favoriteItemsAmount = getFavoritesAmount()
  const user = JSON.parse(localStorage.getItem('userObj'))

  renderUserBlock(user.name, user.avatar, favoriteItemsAmount)
}

export function renderSearchStubBlock () {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  )
}

export function renderEmptyOrErrorSearchBlock (reasonMessage) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}

export function renderSearchResultsBlock (places: Place[]) {

  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul id = "results-list" class="results-list">
      ${places.map(el => renderListElement(el))}
    </ul>
    `
  )
  const favEl = document.querySelectorAll('.favorites')
  favEl.forEach(el => addEventListener('click', toggleFavoriteItem))

}

function renderListElement(el: Place) {
  return (
    `<li class="result">
      <div class="result-container">
        <div class="result-img-container">
          <div id = ${el.id} data-id = ${el.id} data-name = ${el.name} data-image = ${el.image} class="favorites active"></div>
          <img class="result-img" src = ${el.image} alt="" >
        </div>	
        <div class="result-info">
          <div class="result-info--header">
            <p>${el.name}</p>
            <p class="price">${el.price}</p>
          </div>
          <div class="result-info--map"><i class="map-icon"></i> ${el.remoteness} км от вас</div>
          <div class="result-info--descr">${el.description}</div>
          <div class="result-info--footer">
            <div>
              <button>Забронировать</button>
            </div>
          </div>
        </div>
      </div>
  </li>`
  )

}

