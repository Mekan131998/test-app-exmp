import React from 'react'
import Slider from 'react-slick'
import SliderImage from '../Components/Slider'
import './Styles/Home.css'
import TabsComponent from '../Components/TabsComponent'

const slideImagesData = [
  { id: 1, image: "./images/slide-img-inner/4hN9MLLwW4.jpg" },
  { id: 2, image: "./images/slide-img-inner/A22OS1HFJH.jpg" },
  { id: 3, image: "./images/slide-img-inner/G5JNMSpJua.jpg" },
  { id: 4, image: "./images/slide-img-inner/j9OyumbTtA.gif" },
  { id: 5, image: "./images/slide-img-inner/KBdnmWGs8d.jpg" },
  { id: 6, image: "./images/slide-img-inner/KhgPdc7RT5.jpg" },
  { id: 7, image: "./images/slide-img-inner/yzL7zFXf2C.jpg" },
];

const Home = () => {
  
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className='inner_container'>
      <SliderImage />
      <Slider {...settings}>
        {slideImagesData.map((img, index) => (
          <div className='box-image'key={index}>
            <img src={img.image} alt=""/>
          </div>
        ))}
      </Slider>
      <TabsComponent />
    </div>
  )
}


export default Home