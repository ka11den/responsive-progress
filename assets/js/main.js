const btn = document.querySelector('#btn'),
      modal = document.querySelector('#modal'),
      close = document.querySelector('#close')

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

  emailjs
  .send(serviceID, templateID, params)
  .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      console.log(res);
      alert('сообщение было успешно отправлено!')
  })
  .catch((err) => console.log(err))
}

const btns = document.querySelectorAll('.home__btn')
const isDarkTheme = window?.matchMedia('(prefers-color-schema: dark)').matches

btns.forEach((btn) => {
  isDarkTheme ? btn.classList.add('white') : ''
})