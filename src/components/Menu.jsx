import React from 'react';
import { NavLink } from "react-router-dom";
import '../assets/css/index.css';


// browserRouter, Route, Routes, Link, NavLink
// const Menu = () => {
//     return (
//         // <div>
//         //     <ul>
//         //         <li><Link to="/">Home</Link></li>
//         //         <li><Link to="/product">Product</Link></li>
//         //         <li><Link to="/profile">Profile</Link></li>
//         //     </ul>
//         // </div>

//         <div>
//             <ul>
//                 <li><NavLink className={({isActive})=> isActive ? "active-item":"pending-item"} to="/">Home</NavLink></li>
//                 <li><NavLink className={({isActive})=> isActive ? "active-item":"pending-item"} to="/product">Product</NavLink></li>
//                 <li><NavLink className={({isActive})=> isActive ? "active-item":"pending-item"} to="/profile">Profile</NavLink></li>
//             </ul>
//         </div>
//     );
// };

// HashRouter, Route, Routes, Link, NavLink

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=> isActive ? "active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "active-item":"pending-item"} to="/product/10/phone">Product</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "active-item":"pending-item"} to="/profile/123/456">Profile</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;