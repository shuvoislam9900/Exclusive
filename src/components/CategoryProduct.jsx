import React from 'react'

const CategoryProduct = ({icon, catName}) => {
  return (
    <div className='px-3'>
    <div className="group duration-300 hover:bg-komola w-full xl:w-[170px] h-[145px] py-6 border-2 rounded flex-col">
      <div className=" duration-300 text-[56px] text-center flex justify-center group-hover:text-white">
        {icon}
      </div>
      <h4 className=" duration-300 group-hover:bg-komola: font-popins font-normal text-base text-center mt-4 group-hover:text-white">
        {catName}
      </h4>
    </div>
    </div>
  );
}

export default CategoryProduct
