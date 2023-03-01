import React, { useState } from "react";
import list from "./data";
import Cards from "./card";


const Amazon = ({ handleClick }) => {
    return (
        <section className="grid grid-cols-3 gap-5">
            {list.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
    );
};

export default Amazon;