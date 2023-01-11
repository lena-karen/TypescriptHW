import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('User2', 'https://cdn.pixabay.com/photo/2019/05/31/22/49/bouquet-4243189_960_720.jpg', 2)
  const checkInDefault = new Date(new Date().setDate(new Date().getDate() + 1))
  const checkOutDefault = new Date(checkInDefault.setDate(checkInDefault.getDate() + 2))
  renderSearchFormBlock(new Date(), checkOutDefault)
  renderSearchStubBlock()
  // renderToast(
  //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //   {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )
})
