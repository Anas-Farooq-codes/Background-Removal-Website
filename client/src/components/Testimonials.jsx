import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/swiper-bundle.css';
import { testimonialsData } from '../assets/assets'; 

const Testimonials = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='mx-5 sm:mx-28 '>
      {/* Title */}
      <h1 className='md:mb-20 text-center text-2xl md:text-3xl lg:text-4xl py-5 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Customer</span> Testimonials
      </h1>

      {/* Swiper Container */}

      <div className="mx-4 md:mx-8">
        <Swiper
          modules={[Autoplay]} 
          autoplay={{ delay: 3000 }}
          loop={true} 
          spaceBetween={30} 
          breakpoints={{
            240: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1204: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id} className='bg-white rounded-xl my-6 p-6 drop-shadow-md hover:scale-105 transition-all cursor-default'>
              <p className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent text-4xl'>"</p>
              <p className='text-sm text-gray-500'>{item.text}</p>
              <div className='flex items-center gap-3 mt-5'>
                <img className='w-9 rounded-full' src={item.image} alt={item.author} />
                <div>
                  <p className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>{item.author}</p>
                  <p  className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent '>{item.jobTitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
