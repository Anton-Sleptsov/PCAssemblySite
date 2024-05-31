const elements = document.querySelectorAll('.program-line__content')

elements.forEach((elem) => {
  const title = elem.querySelector('.program-line__title')
  const content = elem.querySelector('.program-line__descr')
  
  title.addEventListener('click', () => {
    content.classList.toggle('active')
  })
})
