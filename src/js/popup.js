const burgerOpen = document.querySelector('.left-container__img-burger')
const burgerClose = document.querySelector('.popup__burger-item')

const asidePage = document.querySelector('.aside-page')
const asidePageContainer = document.querySelector('.aside-page__container')
const mainPage = document.querySelector('.main-page')
const body = document.querySelector('.body')

burgerOpen.addEventListener('click', function () {
  asidePage.classList.add('aside-page--active')
  mainPage.classList.add('body--disabled')
  body.classList.add('body--disabled')
})

burgerClose.addEventListener('click', function () {
  asidePage.classList.remove('aside-page--active')
  mainPage.classList.remove('body--disabled')
  body.classList.remove('body--disabled')
})

asidePageContainer.addEventListener('click', function () {
  asidePage.classList.remove('aside-page--active')
  mainPage.classList.remove('body--disabled')
  body.classList.remove('body--disabled')
})
