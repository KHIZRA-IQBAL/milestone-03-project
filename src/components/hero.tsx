"use client";
import React from 'react'
import Slider from "react-slick"
import Slide from './slide';

const Hero = () => {
  const settings={
    dots:true,
    infintie:true,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    pauseOnHover:false,
  };

  const slideData=[
    {
      id:0,
      img:"/womenfashion.jpg",
      title:"Trending Item",
      mainTitle:"WOMEN'S LATEST FASHION SALE",
      price:"$20",
    },
   {
    id:1,
    img:"/modernglasses.jpg",
    title:"Trending Item",
    mainTitle:"Modern Sunglasses",
    price:"$30",
   },
   {
    id:2,
    img:"/summer sale.jpg",
    title:"Trending Item",
    mainTitle:"New Fashion  Summer Sale",
    price:"$40",
  }
]
  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
          {slideData.map((item)=>(<Slide key={item.id}
          img={item.img}
          title={item.title}
          maintitle={item.mainTitle}
          price={item.price}
          />))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero;
