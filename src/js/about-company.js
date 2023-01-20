const readMoreButton = document.querySelector('.main-block__read-more')
const readMoreButtonHidden = document.querySelector(
  '.main-block__read-more--hidden'
)
const moreTextHidden = document.querySelector('.main-block__more-text--hidden')
const t = document.querySelector('.main-block__add-text')
const p = document.querySelectorAll('.main-block__more-text')

readMoreButton.addEventListener('click', function () {
  readMoreButton.classList.add('main-block__read-more--hidden')
  readMoreButtonHidden.classList.remove('main-block__read-more--hidden')
  moreTextHidden.classList.remove('main-block__more-text--hidden')
  t.classList.remove('main-block__add-text')
  for (let i = 0; i < p.length; i++) {
    p[i].classList.remove('main-block__more-text')
  }
})

readMoreButtonHidden.addEventListener('click', function () {
  readMoreButton.classList.remove('main-block__read-more--hidden')
  readMoreButtonHidden.classList.add('main-block__read-more--hidden')
  moreTextHidden.classList.add('main-block__more-text--hidden')
  t.classList.add('main-block__add-text')
  for (let i = 0; i < p.length; i++) {
    p[i].classList.add('main-block__more-text')
  }
})
