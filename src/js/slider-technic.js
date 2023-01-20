const buttonClose = document.querySelector(
  '.slider-technic__button-item--close'
)
const buttonOpen = document.querySelector('.slider-technic__button-item--open')

const hiddenItems = document.querySelectorAll('.slider-technic__item--hidden')
const addItems = document.querySelector('.slider-technic__item--add')
const screenItems = document.querySelectorAll('.slider-technic__item--screen')
const laptopItems = document.querySelectorAll('.slider-technic__item--laptop')

const allSlide = document.querySelectorAll('.slider-technic__item')
const swiperWrapper = document.querySelector('.slider-technic__swiper-wrapper')

const iconDown = document.querySelector('.slider-technic__icon--open')
const iconUp = document.querySelector('.slider-technic__icon--close')

buttonOpen.addEventListener('click', function () {
  buttonOpen.classList.add('slider-technic__button-item--hidden')
  iconDown.classList.add('slider-technic__icon--hidden')

  buttonClose.classList.remove('slider-technic__button-item--hidden')
  iconUp.classList.remove('slider-technic__icon--hidden')

  addItems.classList.remove('slider-technic__item--add')

  for (let i = 0; i < hiddenItems.length; i++) {
    hiddenItems[i].classList.remove('slider-technic__item--hidden')
  }
})

buttonClose.addEventListener('click', function () {
  buttonOpen.classList.remove('slider-technic__button-item--hidden')
  iconDown.classList.remove('slider-technic__icon--hidden')

  buttonClose.classList.add('slider-technic__button-item--hidden')
  iconUp.classList.add('slider-technic__icon--hidden')

  addItems.classList.add('slider-technic__item--add')

  for (let i = 0; i < hiddenItems.length; i++) {
    hiddenItems[i].classList.add('slider-technic__item--hidden')
  }
})

const slider = document.querySelector('.slider-technic__swiper-container')
const swiperNextItem = document.querySelectorAll('.slider-technic__pointer-img')

let mySwiper

function mobileSlider() {
  if (window.innerWidth <= 875 && slider.dataset.mobile == 'false') {
    for (let i = 0; i < screenItems.length; i++) {
      screenItems[i].remove()
    }

    for (let j = 0; j < swiperNextItem.length; j++) {
      swiperNextItem[j].classList.add('slider-technic__button-pointer--next')
    }
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      slideClass: 'slider-technic__item',
      wrapperClass: 'slider-technic__swiper-wrapper',
      pagination: {
        el: '.slider-technic__swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.slider-technic__button-pointer--next'
      }
    })

    slider.dataset.mobile = 'true'
  }

  if (window.innerWidth > 875) {
    for (let j = 0, i = 0; j < allSlide.length; j++) {
      if (allSlide[j] == laptopItems[i]) {
        swiperWrapper.insertBefore(screenItems[i], laptopItems[i])
        i++
      }
      if (allSlide[j] == laptopItems[i]) {
        swiperWrapper.insertBefore(screenItems[i], laptopItems[i])
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
