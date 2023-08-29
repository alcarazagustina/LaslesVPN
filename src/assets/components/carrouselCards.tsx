import { useEffect, useState, useRef } from "react";
import { BDD_URL } from "../../App";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rightArrow from "../img/right.png";
import leftArrow from "../img/left.png";

type Testimonial = {
  avatar: string;
  fullName: string;
  testimonial: string;
}

const Carrousel = () => {
  const [test, setTest] = useState<Testimonial[]>([]);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    fetch(`${BDD_URL}/api/testimonial`)
      .then((response) => {
        response.json().then((result) => {
          setTest(result);
        })
      })
  });

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1, 
    dots: true, 
    customPaging: function () {
      return (
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#F53838", 
            borderRadius: "30%", 
            margin: "0 5px",
          }}
        ></div>
      );
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto max-w-8 mt-20 mb-20 pr-10 pl-10">

      <div className="flex flex-col items-center mb-10">

        <h1 className="text-3xl md:text-4xl font-medium text-center">Trusted by Thousands of</h1>
        <h1 className="text-3xl md:text-4xl font-medium text-center"> Happy Customer</h1>
        <p className="text-lg md:text-xl mt-10 md:mt-10 text-center text-[#4F5665]">These are the stories of our customers who have joined us with great</p>
        <p className="text-lg md:text-xl text-center text-[#4F5665]">pleasure when using this crazy feature.</p>

      </div>


      <Slider ref={sliderRef} className="" {...settings}> 
        {test.map((testimonial) => (
          <div className="p-2" key={testimonial.avatar}>
            <div className="bg-white rounded-lg shadow-md p-6" style={{ marginRight: "5px", height: "220px" }} key={testimonial.avatar}>

              <div className="flex">
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-2 flex-grow items-center">
                  <h2 className="text-sm font-semibold">{testimonial.fullName}</h2>
                  <p className="text-[#4F5665] text-sm">Country, Ciudad</p>
                </div>
                <div className="text-sm font-semibold flex items-center">
                  4.5
                  <svg className="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1891 5.41802L9.22187 4.84146L7.44844 1.24615C7.4 1.14771 7.32031 1.06802 7.22187 1.01959C6.975 0.897711 6.675 0.999273 6.55156 1.24615L4.77812 4.84146L0.810936 5.41802C0.701561 5.43365 0.601561 5.48521 0.524999 5.56334C0.432439 5.65847 0.381434 5.78646 0.383192 5.91918C0.38495 6.0519 0.439327 6.1785 0.534374 6.27115L3.40469 9.06959L2.72656 13.0211C2.71066 13.1131 2.72083 13.2076 2.75592 13.294C2.79102 13.3805 2.84963 13.4554 2.92511 13.5102C3.00059 13.565 3.08992 13.5976 3.18297 13.6042C3.27602 13.6108 3.36907 13.5913 3.45156 13.5477L7 11.6821L10.5484 13.5477C10.6453 13.5993 10.7578 13.6165 10.8656 13.5977C11.1375 13.5508 11.3203 13.293 11.2734 13.0211L10.5953 9.06959L13.4656 6.27115C13.5437 6.19459 13.5953 6.09459 13.6109 5.98521C13.6531 5.71177 13.4625 5.45865 13.1891 5.41802Z" fill="#FEA250" />
                  </svg>

                </div>

              </div>

              <p className="mt-4 text-base text-[#4F5665]">
                {testimonial.testimonial}
              </p>

            </div>
          </div>
        ))}

      </Slider>

      <div className="flex justify-end items-center mt-4 pr-2 pt-5">
        <button onClick={prevSlide}>
          <img className="border border-[#F53838] p-2 rounded-full" src={leftArrow} alt="" />
        </button>
        <button className="ml-5" onClick={nextSlide}>
          <img className="border border-[#F53838] p-2 rounded-full" src={rightArrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Carrousel;
