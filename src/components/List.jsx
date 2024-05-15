import React from "react";

const List = ({ children, className }) => {
  return <div className={`${className} list-none`}>{children}</div>;
};

export default List;
