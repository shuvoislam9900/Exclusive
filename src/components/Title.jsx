import React from 'react'

const Title = ({subtitle,title}) => {
  return (
    <div>
      <h4 className=" font-popins font-bold lg:font-semibold text-sm lg:text-base leading-5 text-komola before:content-[''] before:h-8 lg:before:h-10 before:w-4 lg:before:w-5 relative before:absolute before:top-2/4 before:translate-y-[-50%] before:left-0 before:bg-komola before:rounded pl-[30px] lg:pl-[36px] ">
        {subtitle}
      </h4>
      <h2 className=" font-inter font-bold lg:font-semibold text-3xl lg:text-4xl leading-9 lg:leading-[48px] tracking-[1.44px] mt-6">
        {title}
      </h2>
    </div>
  );
}

export default Title
