const modalBtn = document.querySelector('.modal__button')
const signUpBtn = document.querySelector('.course__button')
const modal = document.querySelector('.modal')



modalBtn.addEventListener('click', () => {
  openModal()
})

signUpBtn.addEventListener('click', () => {
  openModal()
})

modal.addEventListener('click', event => {
  const modalContent = event.target.closest('.modal__inner')

  if (!modalContent) {
    modal.style.display = 'none'
  }
})

const openModal = () => {
  modal.style.display = 'flex'
} 