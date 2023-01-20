import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import formatDate from './formatDate.js'
import { getFavoritesAmount } from './getFavoritesAmount.js'
class User {
  name:string
  avatar: string

  constructor(name: string, avatar: string) {
    this.name = name
    this.avatar = avatar
  }
}

export function getUserData(u: unknown):User {
  if (u == null) {
    return undefined
  }
  if (u instanceof User) {
    localStorage.setItem('userObj', JSON.stringify(u))
    const user = JSON.parse(localStorage.getItem('userObj'))
    return user;    
  }
}

const initial = []

if (!JSON.parse(localStorage.getItem('favoriteItems'))) {
  localStorage.setItem('favoriteItems', JSON.stringify(initial))
}


window.addEventListener('DOMContentLoaded', () => {

  const u = new User('User1', 'https://cdn.pixabay.com/photo/2019/05/31/22/49/bouquet-4243189_960_720.jpg')  

  const user = getUserData(u)
  const favoriteItemsAmount = getFavoritesAmount()

  renderUserBlock(user.name, user.avatar, favoriteItemsAmount)
  
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
