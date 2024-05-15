import React from 'react'

const LeftFooter = () => {
  return (
    <div className='mt-[50px] w-[400px] h-[320px]' style={{direction:'rtl'}}>
      <div className='text-center text-[25px] text-[#5E5E5E] dark:text-Dark_TextColor_1'>ارتباط با ما</div>
      <div className='text-[16px] text-center mt-[20px] dark:text-Dark_TextColor_2'>پذیرای هر گونه پیشنهاد، انتقاد و پاسخگوی سوالات شما هستیم</div>
      <input type="text" placeholder='متن پیام شما' className='block pr-[20px] mt-[90px] text-[12px] w-[100%] h-[40px] rounded-[20px]' />
      <button className='block mt-[35px] w-[180px] h-[40px] bg-[#D4AF37] rounded-[10px] text-[16px] text-[#fff] mx-auto'>ارسال پیام</button>
    </div>
  )
}

export default LeftFooter