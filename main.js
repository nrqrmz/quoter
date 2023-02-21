const response = document.querySelector('#response')
const seis = document.querySelector('#seis')

console.log(seis.checked)

const body = document.querySelector('body')

body.addEventListener('click', () => {
  if (seis.checked) {
    response.innerText = '6 x 6'
  } else {
    response.innerText = '10 x 10'
  }
})
