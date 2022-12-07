const btn = document.querySelector('#btn'),
      modal = document.querySelector('#modal'),
      close = document.querySelector('#close'),
      error = document.querySelector('#error'),
      name1 = document.getElementById('name'),
      phone1 = document.getElementById('phone'),
      email1 = document.getElementById('email')

btn.addEventListener('click', () => {
  modal.classList.add('snow')
})

close.addEventListener('click', () => {
  modal.classList.remove('snow')
})

function sendEmail () {
  let params = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
  }

  const serviceID = 'service_rzx1nv9'
  const templateID = 'template_rmikegm'

  let checkbox = document.querySelector('#checkbox');
  
  if (checkbox.checked) {
    if (document.getElementById('name').value === '' || document.getElementById('email').value === '' || document.getElementById('phone').value === '') {
      // add message
      error.textContent = "заполните форму"
      name1.classList.add("error")
      phone1.classList.add("error")
      email1.classList.add("error")
      // remove styles
      setTimeout(() => {
        error.textContent = ''
        name1.classList.remove("error")
        phone1.classList.remove("error")
        email1.classList.remove("error")
      }, 3000)
    }
    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        sendEmailAdmin(params)
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        
        // add message
        error.textContent = "Сообщение успешно отправлено!"

        // error message
        setTimeout(() => {
          error.textContent = ''
        }, 3000)
    })
    .catch((err) => console.log("Заполните форму"))
  } else {    
    // add message
    error.textContent = "поставьте галочку"

    // error message
    setTimeout(() => {
      error.textContent = ''
    }, 3000)
  }
}

function sendEmailAdmin (params) {

  const serviceID = 'service_rzx1nv9'
  const templateID = 'template_alsb1ka'

  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  })
  .catch((err) => console.log("Заполните форму"))
}

const btns = document.querySelectorAll('.home__btn')
const isDarkTheme = window?.matchMedia('(prefers-color-schema: dark)').matches

btns.forEach((btn) => {
  isDarkTheme ? btn.classList.add('white') : ''
})