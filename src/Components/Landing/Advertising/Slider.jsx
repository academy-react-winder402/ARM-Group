import React from 'react'

const Slider = () => {
  return (
    <div className='flex h-[100px]  gap-[30px] justify-between w-[100%] leading-[100px]'>
        <img src="./Image/Advertising/right.svg" className='RightLeft'/>
        <div className='flex flex-nowrap gap-[30px] justify-between w-[90%] overflow-hidden'>
            <img src="./Image/Advertising/pic1.svg" className='SliderImages'/>
            <img src="./Image/Advertising/pic2.svg" className='w-[146px] h-[60px] mt-[40px]'/>
            <img src="./Image/Advertising/pic3.svg" className='w-[100px] h-[60px] mt-[40px]'/>
            <img src="./Image/Advertising/pic4.svg" className='w-[106px] h-[100px]'/>
            <img src="./Image/Advertising/pic5.svg" className='SliderImages'/>
            <img src="./Image/Advertising/pic1.svg" className='SliderImages'/>
            <img src="./Image/Advertising/pic7.svg" className='w-[160px] h-[60px] mt-[40px]'/>
        </div>
        <img src="./Image/Advertising/left.svg" className='RightLeft'/>
    </div>      
  )
}

export default Slider