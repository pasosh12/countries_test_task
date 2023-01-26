import React from "react"
import c from "./Header.module.css"

const Header = () => {
    console.log('hi')
    return (
        <div className={c.header}>
            <p>Helo</p>
        </div>
    );
};

export default Header