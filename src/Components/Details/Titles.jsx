import React from 'react'

const Titles = () => {
  return (
    <div className="w-[50%]">
        <h1 className="mt-[1rem] text-right pr-[2rem] text-[30px] text-[#5E5E5E]">عنوان دوره آموزشی</h1>
        <h2 className="mt-[2rem] text-right pr-[2rem] mb-[0.5rem] text-[16px] text-[#7E7E7E]">متن مرتبط با دوره آموزشی</h2>
        <div className='h-[280px] w-[390px] float-left bg-[url("./Image/CourseDetails/codding.svg")] bg-cover'></div>
        <div className='flex flex-row flex-nowrap mt-[255px] relative'>
            <div className='border w-[70px] h-[70px] rounded-[50%] absolute'></div>
            <h2 className='text-right mt-[45px] mr-[70px] text-[#6E6E6E] text-[17px] whitespace-nowrap'>مدرس دوره: نام مدرس دوره</h2>
        </div>
    </div>
  )
}

export default Titles