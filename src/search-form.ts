import { renderBlock } from './lib.js'

import { format, addMonths, endOfMonth, addDays } from 'date-fns'


export function renderSearchFormBlock (checkInDate, checkOutDate) {

  const minDate = format(new Date(), 'yyyy-MM-dd')
  const maxDate = format(endOfMonth(addMonths(new Date(), 1)), 'yyyy-MM-dd')

  const checkInValue = format(addDays(new Date(), 1), 'yyyy-MM-dd')
  const checkOutValue = format(addDays(new Date(), 3), 'yyyy-MM-dd')
 
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
              value = ${checkInValue}
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
              value = ${checkOutValue}
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
