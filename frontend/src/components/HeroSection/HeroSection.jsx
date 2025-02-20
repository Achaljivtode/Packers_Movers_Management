import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function HeroSection() {
  const bannerImages = [
    '/Resources/banners/banner-1.jpg',
    '/Resources/banners/banner-2.jpg',
    '/Resources/banners/banner-3.png'
  ];

  return (
    <div>

      <div className="xl:w-[1300px] lg:w-full md:w-screen sm:w-full   h-[200px] md:h-[400px] lg:h-[600px] mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bannerImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full  object-contain xl:w-[1300px] lg:w-full md:w-screen sm:w-full   h-[200px] md:h-[400px] lg:h-[600px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
        <div className='my-10 sm:w-full px-3 md:w-screen lg:w-full mx-auto'>

          <h1 className='my-3 font-bold text-2xl text-center'>Packers & Movers Management System</h1>
          <div className=' mx-auto lg:w-4/5 md:w-5/6 md:px-5 sm:w-full sm:px-5'>
            <p>Your trusted partner for seamless relocation services. We handle your belongings with care and ensure timely delivery.</p>
            <p>Moving to a new home or office? Our Packers and Movers service ensures a hassle-free relocation experience. Whether you are shifting locally or to another city, we provide efficient, safe, and timely transportation for your belongings.</p>
            <p>Packers and Movers are professional service providers who assist individuals and businesses in relocating their belongings from one place to another. They handle the entire moving process, including packing, loading, transporting, unloading, and unpacking goods. These services are designed to make relocation hassle-free, ensuring that items are transported safely and efficiently.</p>
          </div>

          <h1 className='my-3 mt-10 font-bold text-2xl text-center'>Our Services:</h1>
          <div className='text-left mx-auto lg:w-1/2 md:w-1/2 md:px-5 sm:w-full sm:px-5'>

            <p>✅ Household Shifting - Safe packing and moving of your home essentials.</p>
            <p>✅ Office Relocation - Smooth transition for your workspace with minimal downtime</p>
            <p>✅ Vehicle Transportation - Secure transport for cars and bikes.</p>
            <p>✅ Packing & Unpacking - Quality packing materials and expert handling.</p>
            <p>✅ Loading & Unloading - Careful handling of goods to prevent damage.</p>
            <p>✅ Storage & Warehousing - Secure storage facilities for short or long-term needs.</p>
          </div>


          <h1 className='my-3 mt-10 font-bold text-2xl text-center'>Why Choose Us?</h1>
          <div className=' text-left mx-auto lg:w-1/2 md:w-1/2 sm:w-full sm:px-5'>
            <p>🔹 Professional Team - Trained movers with years of experience.</p>
            <p>🔹 Affordable Pricing - Transparent rates with no hidden charges.</p>
            <p>🔹 Timely Delivery - On-time pickup and drop-off services.</p>
            <p>🔹 24/7 Customer Support - Always available to assist you.</p>
            <p>🔹 Insurance Coverage - Protection for your valuable goods.</p>
            <p>Let us handle the heavy lifting while you sit back and relax. Book your move with us today! 🚛📦</p>
          </div>
        </div>
    </div>
  );
}

export default HeroSection;
