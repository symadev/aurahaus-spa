// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';


import '@smastrom/react-rating/style.css'


const TestimonialCard = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div className='my-20 bg-white'>

<Swiper
  pagination={{
    el: '.custom-pagination',
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper max-w-3xl mx-auto"
>
  {reviews.map(review => (
    <SwiperSlide key={review._id}>
      <div className="flex flex-col items-center text-center px-6 md:px-16 lg:px-24 space-y-4">
        <img className="w-20 rounded-full" src={review.image} alt="" />
        <Rating
          style={{ maxWidth: 180 }}
          value={review.rating}
          readOnly
        />
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {review.details}
        </p>
        <h3 className="text-lg md:text-xl font-semibold text-orange-500 uppercase">
          {review.name}
        </h3>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

{/* Pagination Bullets Render Here */}
<div className="custom-pagination flex justify-center mt-6"></div>

        </div>


    );
};

export default TestimonialCard;