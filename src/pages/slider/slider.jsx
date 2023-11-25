import React, { useState } from 'react';
import './slider.css';  
import { FiTrash2 } from "react-icons/fi";

import { Button, Drawer } from 'antd';
const Slider = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Shopping Bag" placement="right" onClose={onClose} open={open} style={{overflow:'auto'}}>
       <div className="cart_detail">

       </div>
       <div className="final_items">
            <div className="final-items d-flex ">
                <div className="total_items">
                    total items:$ 0.00
                </div>
                <div >
                    <button className="clear-cart"><FiTrash2 /></button>
                </div>
            </div>
            <button className='view-btn'>VIEW CART</button>
            <button className='check-btn'>CHECK OUT</button>
       </div>
      </Drawer>
    </>
  );
};
export default Slider;