import formatDate from './formatDate.js'

import { renderBlock } from './lib.js'

export interface SearchFormData {
  checkIn: Date
  checkOut: Date
  maxPrice: number
}
const form = document.getElementById('search-form-block')
form.addEventListener('submit', submit)

function search(data: SearchFormData):void {
  console.log(data.checkIn, data.checkOut, data.maxPrice)
}
function submit(event): void {
  event.preventDefault();
  const { checkin, checkout, price } = event.target

  search({checkIn: checkin.value, checkOut: checkout.value, maxPrice: price.value})

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
            <input type="hidden" disabled value="59.9386,30.3141" />
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

