import React from 'react';
import './mainHeader.css';


const MainHeader = () => {
  return (
    <div className="h-[55px] w-[100%] flex justify-between flex-nowrap px-32 border-b-[1px] border-[#E6E6E5] text-[#5E5E5E] bg-[#F5F5F4] max-md:px-[3rem]">
        <div className="pointersStyle my-2 text-[16px]">آکادمی بحر</div>
        <div className="flex justify-center flex-nowrap gap-8 text-[14px] mt-[15px] max-md:hidden">
            <span className='pointersStyle'>دوره ها</span>
            <span className='pointersStyle'>مقالات</span>
            <span className='pointersStyle'>رویدادها</span>
            <span className='pointersStyle'>تماس با ما</span>
        </div>
        <div className="flex justify-center gap-[5px] flex-nowrap mt-[13px]">
            <div className="pointersStyle picsStyle bg-search-logo drop-shadow[#000000]"></div>
            <div className="pointersStyle picsStyle bg-login-logo drop-shadow[#000000]"></div>
        </div>
    </div>
  )
}

export default MainHeader