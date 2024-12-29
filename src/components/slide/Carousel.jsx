// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            text='Where every step counts, and every event is just a click away.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={'https://images.pexels.com/photos/2002209/pexels-photo-2002209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            text='Run the distance, manage the event, and connect the community—your marathon journey'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={'https://images.pexels.com/photos/2654902/pexels-photo-2654902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            text='Empowering marathon organizers and participants to go the extra mile with ease.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
