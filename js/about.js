 import Swiper from './swiper-bundle.esm.browser.min.js'
    const swiper1 = new Swiper('#swiper1', {
      loop : true,
      speed:150,
      autoplay :{
      delay:2000
    }})
     const swiper2 = new Swiper('#swiper2', {
      slidesPerView : 3,
      centeredSlides : true,
      centeredSlidesBounds: true,
      loop : true,
      speed:150,
      autoplay :{
      delay:2000
    },
    })