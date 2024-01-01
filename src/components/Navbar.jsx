import React from "react";
import "../components/Styles/Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/arab.png";
import clogo from "../assets/logo.png";

export const Navbar = () => (
    <div className="navbar">
        <div className="navbar-left">
            <img src={clogo} alt="" />
        </div>
        <div className="navbar-right">
            <div className="navbar-right_items">
                <div className="enterprice">
                    <img src={logo} alt="image" />
                    <span>xyz Enterprices Pvt.Ltd</span>
                </div>
                <button className="arrow">
                    <IoIosArrowDown />
                </button>
            </div>
        </div>
    </div>
);
