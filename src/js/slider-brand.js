const buttonClose = document.querySelector('.slider-brand__button-item--close')
const buttonOpen = document.querySelector('.slider-brand__button-item--open')

const hiddenItems = document.querySelectorAll('.slider-brand__item--hidden')

const allSlide = document.querySelectorAll('.slider-brand__item')
const swiperWrapper = document.querySelector('.slider-brand__swiper-wrapper')

const boschItem = document.querySelector('.slider-brand__item--bosch')
const lenItem = document.querySelector('.slider-brand__item--lenovo')
const sonyItems = document.querySelectorAll('.slider-brand__item--sony')

const iconDown = document.querySelector('.slider-brand__icon--open')
const iconUp = document.querySelector('.slider-brand__icon--close')

buttonOpen.addEventListener('click', function () {
  buttonOpen.classList.add('slider-brand__button-item--hidden')
  iconDown.classList.add('slider-brand__icon--hidden')

  buttonClose.classList.remove('slider-brand__button-item--hidden')
  iconUp.classList.remove('slider-brand__icon--hidden')

  for (let i = 0; i < hiddenItems.length; i++) {
    hiddenItems[i].classList.remove('slider-brand__item--hidden')
  }

  for (let j = 0; j < sonyItems.length; j++) {
    sonyItems[j].classList.remove('slider-brand__item--sony')
  }
})

buttonClose.addEventListener('click', function () {
  buttonOpen.classList.remove('slider-brand__button-item--hidden')
  iconDown.classList.remove('slider-brand__icon--hidden')

  buttonClose.classList.add('slider-brand__button-item--hidden')
  iconUp.classList.add('slider-brand__icon--hidden')

  for (let i = 0; i < hiddenItems.length; i++) {
    hiddenItems[i].classList.add('slider-brand__item--hidden')
  }

  for (let j = 0; j < sonyItems.length; j++) {
    sonyItems[j].classList.add('slider-brand__item--sony')
  }
})

const slider = document.querySelector('.slider-brand__swiper-container')
const swiperNextItem = document.querySelectorAll('.slider-brand__pointer-img')

let mySwiper

function mobileSlider() {
  if (window.innerWidth <= 875 && slider.dataset.mobile == 'false') {
    for (let i = 0; i < sonyItems.length; i++) {
      sonyItems[i].remove()
    }
    for (let j = 0; j < swiperNextItem.length; j++) {
      swiperNextItem[j].classList.add('slider-brand__button-pointer--next')
    }
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      slideClass: 'slider-brand__item',
      wrapperClass: 'slider-brand__swiper-wrapper',
      pagination: {
        el: '.slider-brand__swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.slider-brand__button-pointer--next'
      }
    })

    slider.dataset.mobile = 'true'
  }

  if (window.innerWidth > 875) {
    for (let j = 0, i = 0; j < allSlide.length; j++) {
      if (allSlide[j] == boschItem) {
        swiperWrapper.insertBefore(sonyItems[i], boschItem)

        i++
      }
      if (allSlide[j] == lenItem) {
        swiperWrapper.insertBefore(sonyItems[i], lenItem)
      }
    }

    slider.dataset.mobile = 'false'

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy()
    }
  }
}

mobileSlider()
window.addEventListener('resize', () => {
  mobileSlider()
})
