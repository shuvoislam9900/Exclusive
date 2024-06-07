import React from 'react'
import List from './List';
import ListItem from './ListItem';

const ProductColor = ({ clrName, clrCode }) => {
  return (
    <List>
      <ListItem className="text-[#767676] font-popins font-normal text-base leading-[30px] flex gap-[10px] items-center mt-4">
        <div className={`h-[11px] w-[11px] bg-[${clrCode}] rounded-full`}></div>
        {clrName}
      </ListItem>
    </List>
  );
};

export default ProductColor
