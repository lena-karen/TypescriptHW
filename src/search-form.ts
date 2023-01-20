import formatDate from './formatDate.js'

import { renderBlock } from './lib.js'
import { renderSearchResultsBlock } from './search-results.js'

import { SearchFormData} from './interfaces.js'

const form = document.getElementById('search-form-block')
form.addEventListener('submit', submit)

function search(data: SearchFormData):void {

  fetch(`http://127.0.0.1:3030/places?coordinates=${data.coordinates}&checkInDate=${data.checkIn}&checkOutDate=${data.checkOut}&maxPrice=${data.maxPrice}`) 
    .then(res => res.json())
    .then(json => renderSearchResultsBlock(json))
    .catch(error => console.log(error))

}

function submit(event): void {
  event.preventDefault();
  const { checkin, checkout, price, city } = event.target

  search({coordinates: '59.9386,30.3141', checkIn: Date.parse(checkin.value), checkOut: Date.parse(checkout.value), maxPrice: +price.value})

}
export function renderSearchFormBlock (checkInDate, checkOutDate) {

  const date = new Date()

  const minDate = formatDate(date)
  const maxDate = formatDate(new Date(date.getFullYear(), date.getMonth() + 2, 0))

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input name = "city" type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input 
              id="check-in-date" 
              type="date" 
              value = ${checkInDate}
              min=${minDate} 
              max=${maxDate} 
              name="checkin" 
            />
          </div>
          <div>
            <label for="check-out-date">Дата отъезда</label>
            <input 
              id="check-out-date" 
              type="date" 
              value = ${checkOutDate}
              min=${minDate} 
              max=${maxDate} 
              name="checkout" 
            />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
function e(e: any) {
  throw new Error('Function not implemented.')
}

