import React from 'react'

const Title = ({subtitle,title}) => {
  return (
    <div>
      <h4 className=" font-popins font-semibold text-base leading-5 text-komola before:content-[''] before:h-10 before:w-5 relative before:absolute before:top-2/4 before:translate-y-[-50%] before:left-0 before:bg-komola before:rounded-[4px] pl-[36px] ">
        {subtitle}
      </h4>
      <h2 className=" font-inter font-semibold text-[36px] leading-[48px] tracking-[1.44px] mt-6">
        {title}
      </h2>
    </div>
  );
}

export default Title
