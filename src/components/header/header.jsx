import { useContext, useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import { Button, Drawer } from 'antd';
import './header.css'
import { cartContext } from "../cards/product";
export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState(false);
    const { quantity } = useContext(cartContext);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    }, []);
    return (
        <div>
            <header id='navbar' className={`${isActive ? "bg-white py-1 shadow-md" : "bg-none py-6"
                } fixed  w-full z-10 transition-all `}
            >
                <div className="nav">
                    <div className='logo'><h1>H_KHICHI</h1></div>
                    <div className='nav_svg ' >
                        <Button onClick={showDrawer} style={{background:'none'}}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-2xl" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path></svg>
                        </Button>
                        <Drawer title="Shopping Bag" placement="right" onClose={onClose} open={open} style={{ overflow: 'auto' }}>
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

                        <div className="cart_count ">{quantity}</div>
                    </div>
                </div>
            </header>
        </div>
    )
}
