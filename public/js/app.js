const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messsageOne = document.querySelector('#message-1')
const messsageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
  
    messsageOne.textContent = 'Loading...'
    messsageTwo.textContent = ''

    fetch('/weather?address=' + location).then((reponse) => {
    reponse.json().then((data) => {
      if(data.error) {
        messsageOne.textContent = data.error
      } else {
        messsageOne.textContent = data.location
        messsageTwo.textContent = data.forecast
      }
    })
  })
})