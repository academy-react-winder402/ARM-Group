import React from 'react'
import '../../../index.css';
import BorderDiv from './BorderDiv';
import RightFooter from './RightFooter';
import LeftFooter from './LeftFooter';
import FooterIcons from './FooterIcons';

const MainFooter = () => {
  return (
    <div className='w-[87.5%] mx-auto py-[25px] text-[#565656] bg-[#F5F5F4]'>
        <BorderDiv />
        <RightFooter />
        <LeftFooter />
        <FooterIcons />
        <BorderDiv />
        <div className='text-[16px] text-center mt-[5px]'>Sepehr Academy</div>
    </div>
  )
}

export default MainFooter