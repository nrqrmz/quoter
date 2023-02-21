const response = document.querySelector('#response')
const seis = document.querySelector('#seis')
const nueva = document.querySelector('#nueva')

console.log(seis.checked)

const body = document.querySelector('body')

body.addEventListener('click', () => {
  let size = 0
  let brandNew = true


  size = seis.checked ? 36 : 100
  brandNew = nueva.checked

  response.innerText = `${brandNew ? 'nueva' : 'usada'} - ${size}`
})
