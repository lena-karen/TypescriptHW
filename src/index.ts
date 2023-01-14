import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import formatDate from './formatDate.js'

class User {
  name:string
  avatar: string

  constructor(name: string, avatar: string) {
    this.name = name
    this.avatar = avatar
  }
}

function getUserData(u: unknown):User {
  if (u == null) {
    return undefined
  }
  if (u instanceof User) {
    localStorage.setItem('userObj', JSON.stringify(u))
    const user = JSON.parse(localStorage.getItem('userObj'))
    return user;    
  }
}

function getFavouritesAmount(favourite: unknown):number {

  if (favourite == null) {
    return 0
  }

  if (typeof favourite == 'number') {
    localStorage.setItem('favouriteObj', JSON.stringify(favourite))
    const favouriteAmount = JSON.parse(localStorage.getItem('favouriteObj'))
    return favouriteAmount;
  }

}

window.addEventListener('DOMContentLoaded', () => {

  const u = new User('User1', 'https://cdn.pixabay.com/photo/2019/05/31/22/49/bouquet-4243189_960_720.jpg')  
  const favourite = 2;

  const user = getUserData(u)
  const favouriteItemsAmount = getFavouritesAmount(favourite)

  renderUserBlock(user.name, user.avatar, favouriteItemsAmount)
  
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
