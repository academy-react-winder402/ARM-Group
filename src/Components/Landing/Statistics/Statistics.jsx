import React from 'react'

export const Statistics = () => {
  return (
    <div className='mt-[180px] h-[690px] md:w-[87.5%] mx-auto text-center' style={{direction: 'rtl'}}>
        <div className='mt-[35px] text-[30px] text-[#5E5E5E]'>دوره های آموزشی ما</div>
        <div className='mt-[20px] text-[16px] text-[#7E7E7E]'>متن مرتبط</div>
        <div className='mt-[140px] flex flex-nowrap justify-center gap-[100px]'>
            <div>
                <span className='StNumbers'>۱۲۰۰</span>
                <span className='StTexts'>دانشجو</span>
            </div>
            <div>
                <span className='StNumbers'>۷۸ </span>
                <span className='StTexts'>دوره آموزشی</span>
            </div>
            <div>
                <span className='StNumbers'>۱۲</span>
                <span className='StTexts'>استاد</span>
            </div>
        </div>
    </div>
  )
}

