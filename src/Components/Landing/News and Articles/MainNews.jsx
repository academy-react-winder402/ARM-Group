import React from 'react'
import '../../../index.css';
import RightNews from './RightNews';
import LeftNews from './LeftNews';

const MainNews = () => {
  return (
    <div className='w-[87.5%] h-[920px] mx-auto px-[85px] text-center mb-[115px]' style={{direction: 'rtl'}}>
        <div className='text-[30px] text-[#5E5E5E] mt-[65px]'>اخبار و مقالات</div>
        <div className='text-[16px] text-[#7E7E7E] mt-[20px]'>مطالب روز حوزه تکنولوژی</div>
        <div className='mt-[70px] flex gap-[35px] pt-[10px] px-[100px]'>
            <RightNews />
            <LeftNews />
        </div>
        <div className='mt-[100px] text-[16px] text-[#787878]'>و بیش از<span className='text-[48px] text-[#787878]'>۱۳۰</span> خبر، مقاله و نکته آموزشی دیگر </div>
        <button className='block w-[180px] h-[40px] text-[#fff] bg-[#E1C564] rounded-[10px] mx-auto'>مشاهده مقالات</button>
    </div>
  )
}

export default MainNews