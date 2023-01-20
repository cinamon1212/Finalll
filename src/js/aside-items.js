const callOpen = document.querySelector('.right-container__img-call')
const callOpenPopup = document.querySelector('.popup__hover-image--call')
const callClose = document.querySelector('.call-page__button-close')

const chatOpen = document.querySelector('.right-container__img-chat')
const chatOpenPopup = document.querySelector('.popup__hover-image--chat')
const chatClose = document.querySelector('.chat-page__button-close')

const asideCall = document.querySelector('.aside-call')
const asideCallContainer = document.querySelector('.aside-call__container')

const asideChat = document.querySelector('.aside-chat')
const asideChatContainer = document.querySelector('.aside-chat__container')

const mainPage = document.querySelector('.main-page')
const body = document.querySelector('.body')

callOpen.addEventListener('click', function () {
  asideCall.classList.add('aside-call--active')
  mainPage.classList.add('body--disabled')
  body.classList.add('body--disabled')
})

callOpenPopup.addEventListener('click', function () {
  asideCall.classList.add('aside-call--active')
  mainPage.classList.add('body--disabled')
  body.classList.add('body--disabled')
})

callClose.addEventListener('click', function () {
  asideCall.classList.remove('aside-call--active')
  mainPage.classList.remove('body--disabled')
  body.classList.remove('body--disabled')
})

asideCallContainer.addEventListener('click', function () {
  asideCall.classList.remove('aside-call--active')
  mainPage.classList.remove('body--disabled')
  body.classList.remove('body--disabled')
})

chatOpen.addEventListener('click', function () {
  asideChat.classList.add('aside-chat--active')
  mainPage.classList.add('body--disabled')
  body.classList.add('body--disabled')
})

chatOpenPopup.addEventListener('click', function () {
  asideChat.classList.add('aside-chat--active')
  mainPage.classList.add('body--disabled')
  body.classList.add('body--disabled')
})

chatClose.addEventListener('click', function () {
  asideChat.classList.remove('aside-chat--active')
  mainPage.classList.remove('body--disabled')
  body.classList.remove('body--disabled')
})

asideChatContainer.addEventListener('click', function () {
  asideChat.classList.remove('aside-chat--active')
  mainPage.classList.remove('body--disabled')
  body.classList.remove('body--disabled')
})
