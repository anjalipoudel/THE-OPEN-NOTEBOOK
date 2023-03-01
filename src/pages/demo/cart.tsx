import Amazon from '@/components/demo/amazon';
import Cart from '@/components/demo/cart';
import React, { useState } from 'react'

export default function PageCart() {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
    };

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;

        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
    };
    return (
        <>
            {show ? (
                <Amazon handleClick={handleClick} />
            ) : (
                <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )}</>


    )
}
