const button = document.querySelector('.share-link');
const shareContainer = document.querySelector('.share-container')

button.addEventListener('click', () => {
  button.classList.toggle('active')
  shareContainer.classList.toggle('active')
})
