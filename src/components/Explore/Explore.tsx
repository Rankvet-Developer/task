import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
function nextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
        <MdArrowBackIosNew color="white"/>
    </div>
  );
}
function prevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
        <MdArrowForwardIos/>
    </div>
  );
}
export default function Explore() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    // nextArrow: <nextArrow />,
    // prevArrow: <prevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-[#D9CAF3] dark:bg-dark h-[400px]">
      <div className="flex flex-col px-10 sm:px-4 w-4/5 mx-auto h-full sm:w-full justify-center">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="mb-10 text-2xl">Explore Designs Picked for you</h2>
        </div>
        <div className="">
          <Slider {...settings}>
            <div className="relative h-56 w-56">
                <Image src="/slide1.png" alt="" fill className="p-3 sm:p-0"/>
            </div>
            <div className="sm:w-full relative h-56 w-56">
                <Image src="/slide2.png" alt="" fill className="p-3 sm:p-0"/>
            </div>
            <div className="sm:w-full relative h-56 w-56">
                <Image src="/slide3.png" alt="" fill className="p-3 sm:p-0"/>
            </div>
            <div className="sm:w-full relative h-56 w-56">
                <Image src="/slide4.png" alt="" fill className="p-3 sm:p-0"/>
            </div>
            <div className="sm:w-full relative h-56 w-56">
                <Image src="/slide5.png" alt="" fill className="p-3 sm:p-0"/>
            </div>
            <div className="sm:w-full relative h-56 w-56">
                <Image src="/slide1.png" alt="" fill className="p-3 sm:p-0"/>
            </div>
            <div className="sm:w-full relative h-56 w-56">
                <Image src="/slide2.png" alt="" fill className="p-3 sm:p-0"/>
            </div>
            <div className="sm:w-full relative h-56 w-56">
                <Image src="/slide3.png" alt="" fill className="p-3 sm:p-0"/>
            </div>
            <div className="sm:w-full relative h-56 w-56">
                <Image src="/slide4.png" alt="" fill className="p-3 sm:p-0"/>
            </div>
            <div className="sm:w-full relative h-56 w-56">
                <Image src="/slide5.png" alt="" fill className="p-3 sm:p-0"/>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
