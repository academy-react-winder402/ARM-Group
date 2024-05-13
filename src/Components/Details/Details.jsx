import React from 'react'
import {DetailsSection1} from '../Details/DetailsSection1.jsx';


const Details = () => {
  return (
    <div className="w-[87.5%] mx-auto mt-[40px] pt-[1rem] bg-[#F3F3F3]" style={{direction: 'rtl'}}>
        <DetailsSection1 />
        <div className='h-[95px] pt-[10px] mt-[115px]'>
            <div className='w-[45%] h-[100%] float-right'>
                <h1 className='text-[24px] text-[#5E5E5E]'>خلاصه وضعیت دوره</h1>
                <div className='mt-[15px]'>
                    <h2 className='float-right text-[15px] text-[#7E7E7E]'>درصد انجام تمرین:78%</h2>
                    <span className='w-[81px] h-[30px] text-center inline float-right mr-[1rem] rounded-[15px] border-[3px] border-[#DF9CD2] text-[#808080] text-[15px]'>متوسط</span>
                </div>
            </div>
            <div className='w-[55%] h-[100%] float-right text-[14px] text-[#6E6E6E]'>
                <div className='flex flex-row flex-nowrap'>
                    <p>تعداد روزهای دوره 230 روز</p>
                    <div className='w-[231.5px] h-[4px] mt-[12px] rounded-[1rem] bg-[#DBDBDB] overflow-hidden'><div className='bg-[#69EECE] w-[50%] h-[100%] float-left'></div></div>
                    <p>روزهای باقی مانده80روز</p>
                </div>
                <div className='flex flex-row flex-nowrap mt-[15px]'>
                    <p>شهریه دوره 4.200.000 تومان</p>
                    <div className='w-[40%] h-[4px] mt-[12px] rounded-[1rem] bg-[#DBDBDB] overflow-hidden'><div className='bg-[#F3DD6D] w-[50%] h-[100%] float-left'></div></div>
                    <p>باقی مانده شهریه 2.100.00 تومان</p>
                </div>
            </div>
        </div>

        <div className='flex flex-nowrap justify-between text-center pt-[35px] px-[65px]'>
            <div className='CourseDetailstexts'>
                <div>۳۴۰</div>
                <div className='text-[18px]'>تعداد دانشجو</div>
            </div>
            <div className='CourseDetailstexts'>
                <div>۱۴</div>
                <div className='text-[18px]'>سرفصل آموزشی</div>
            </div>
            <div className='CourseDetailstexts'>
                <div>۱۲</div>
                <div className='text-[18px]'>جلسه فعلی</div>
            </div>
            <div className='CourseDetailstexts'>
                <div>۱۲</div>
                <div className='text-[18px]'>جلسات باقی مانده</div>
            </div>
        </div>

        <div className='mt-[45px] h-[500px] bg-[#FEFEFE] pt-[30px] rounded-[15px] '>
            <div className='w-[95%] h-[60px] pt-[20px] mx-auto flex flex-nowrap justify-between rounded-[8px] px-[35px] bg-[#FFFFFF] drop-shadow-[-5px_5px_10px_rgb(0,0,0)]'>
                <div className='CourseDetailstexts2'>توضیحات</div>
                <div className='CourseDetailstexts2'>سرفصل ها</div>
                <div className='CourseDetailstexts2'>ارسال تسک</div>
                <div className='CourseDetailstexts2'>نمرات من</div>
                <div className='CourseDetailstexts2'>حسابداری</div>
            </div>
        </div>
    </div>
  )
}

export default Details