import React, { useState } from 'react';
import { assets } from '../assets/assets';
import TabComponent from './ActiveTab';

const Bgslider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState('people');


  const images = {
    people: {
      withBg: assets.image_w_bg,
      withoutBg: assets.image_wo_bg, 
    },
    animal: {
      withBg: assets.animal_w_bg, 
      withoutBg: assets.animal_wo_bg, 
    },
    thing: {
      withBg: assets.thing_w_bg, 
      withoutBg: assets.thing_wo_bg, 
    },
    graphics: {
      withBg: assets.graphics_w_bg, 
      withoutBg: assets.graphics_wo_bg, 
    },
  };

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSliderPosition(50);
  };

    // Check if the activeTab exists in images, else default to 'people'
    // const currentImages = images[activeTab] || images['people'];

  return (
    <div className='pb-20 py-5 mx-2'>
      <TabComponent activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Title */}
      <h1 className='pb-12 sm:mb-5 text-center text-2xl md:text-3xl lg:text-4xl mt-20 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Remove Background with High <br /> Quality and Accuracy
      </h1>

      <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
        {/* Background Image */}
        <img
          src={images[activeTab].withBg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt=""
        />

        {/* Foreground Image */}
        <img
          className='absolute top-0 left-0 h-full w-full'
          src={images[activeTab].withoutBg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt=""
        />

        {/* Slider */}
        <input
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider'
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default Bgslider;