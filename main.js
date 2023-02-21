const response = document.querySelector('#response')
const seis = document.querySelector('#seis')
const nueva = document.querySelector('#nueva')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const counter = document.getElementById('counter')
const body = document.querySelector('body')

plus.addEventListener('click', () => {
  counter.innerText = parseInt(counter.innerText, 0) + 1
})

minus.addEventListener('click', () => {
  if (parseInt(counter.innerText, 0) > 0) {
    counter.innerText = parseInt(counter.innerText, 0) - 1
  }
})

body.addEventListener('click', () => {
  let size = 0
  let brandNew = true


  size = seis.checked ? 36 : 100
  brandNew = nueva.checked

  response.innerText = `${brandNew ? 'nueva' : 'usada'} - ${size}`
})
