import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // 2 seconds for each slide
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-10 w-full overflow-hidden">
      {/* Margin-top to avoid overlap with navbar */}
      <div className="relative h-623               0 overflow-hidden">
        {/* Set height for rectangular shape */}
        <Slider {...settings}>
          <div className="flex items-center justify-center px-4">
            <img
              src="/photos/1photo.jpg"
              alt="Slide 1"
              className="object-cover w-full h-70" // Adjust width and height to prevent overflow
            />
          </div>
          <div className="flex items-center justify-center px-4">
            <img
              src="/photos/2photo.jpg"
              alt="Slide 2"
              className="object-cover w-full h-70" // Adjust width and height to prevent overflow
            />
          </div>
          <div className="flex items-center justify-center px-4">
            <img
              src="/photos/3rd.jpg"
              alt="Slide 3"
              className="object-cover w-full h-70" // Adjust width and height to prevent overflow
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
