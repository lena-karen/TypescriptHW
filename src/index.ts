import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import formatDate from './formatDate.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('User2', 'https://cdn.pixabay.com/photo/2019/05/31/22/49/bouquet-4243189_960_720.jpg', 2)
  
  const date = new Date()
  const checkInDefault = formatDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1))
  const checkOutDefault = formatDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3))
  
  renderSearchFormBlock(checkInDefault, checkOutDefault)
  renderSearchStubBlock()
  // renderToast(
  //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //   {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )
})
