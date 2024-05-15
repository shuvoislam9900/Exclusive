import React from 'react'

const Container = ({children}) => {
  return (
    <div className="max-w-container mx-auto lg:px-5 px-3 ">
      {children}
    </div>
  );
}

export default Container
