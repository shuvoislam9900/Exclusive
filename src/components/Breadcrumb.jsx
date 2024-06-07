import React from 'react'
import { useLocation } from 'react-router-dom'

const Breadcrumb = () => {
let location = useLocation()
let locationPath = location.pathname.split("/")

  return (
    <div className=' mt-20'>
      <ul className='flex gap-3'>
        <li className=' font-popins font-normal text-sm text-[#808080]'>home</li>
        <li className=' font-popins font-normal text-sm text-[#808080]'>/</li>
        <li className=' font-popins font-normal text-sm text-[#808080]'>{locationPath}</li>
      </ul>
    </div>
  )
}

export default Breadcrumb
