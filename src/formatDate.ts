import addZero from './addZero.js'
export default function formatDate(date) {
  return addZero(date.getFullYear()) + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate())
}