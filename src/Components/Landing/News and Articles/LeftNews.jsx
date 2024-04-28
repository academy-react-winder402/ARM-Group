import React from 'react'
import LeftNewsSections from './LeftNewsSections'

const LeftNews = () => {
  return (
    <div className='w-[520px] flex flex-col flex-wrap gap-[30px]'>
        <LeftNewsSections />
        <LeftNewsSections />
        <LeftNewsSections />
    </div>
  )
}

export default LeftNews