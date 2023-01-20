const allSlide = document.querySelectorAll('.slider-price__item')
const swiperWrapper = document.querySelector('.slider-price__swiper-wrapper')

const slider = document.querySelector('.slider-price__swiper-container')
const swiperNextItem = document.querySelectorAll('.slider-price__pointer-img')

let mySwiper

function mobileSlider() {
  if (window.innerWidth <= 875 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      slideClass: 'slider-price__item',
      wrapperClass: 'slider-price__swiper-wrapper',
      pagination: {
        el: '.slider-price__swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })

    slider.dataset.mobile = 'true'
  }

  if (window.innerWidth > 875) {
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
