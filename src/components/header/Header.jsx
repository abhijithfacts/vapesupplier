"use client";
import React, { useState, useEffect } from "react";
import "./headerStyles.css";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

    useEffect(() => {
        if (isDrawerOpen || isCartDrawerOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100%";
        } else {
            document.body.style.overflow = "";
            document.body.style.height = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.height = "";
        };
    }, [isDrawerOpen, isCartDrawerOpen]);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleCartDrawer = () => {
        setIsCartDrawerOpen(!isCartDrawerOpen);
    };

    return (
        <div className="header-wrap">
            {/* Logo */}
            <Image
                src="/assets/images/logo/logo.svg"
                width={80}
                height={40}
                alt="logo"
            />

            {/* Nav Items */}
            <div className="nav-list-wrap">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Right Icons */}
            <div className="right-icons">
                {/* Search */}
                <div className="search-wrap">
                    <CiSearch />
                    <input type="text" placeholder="Search" className="search-input" />
                </div>

                {/* Cart */}
                <div className="cart-icon">
                    <HiOutlineShoppingBag onClick={toggleCartDrawer} />
                </div>

                {/* Burger Menu */}
                <div className="burger-menu" onClick={toggleDrawer}>
                    <CiMenuBurger />
                </div>
            </div>

            {/* Sliding Drawer */}
            {isDrawerOpen && (
                <div className="drawer">
                    <div className="close-icon" onClick={toggleDrawer}>
                        <IoMdClose />
                    </div>

                    {/* Drawer List */}
                    <ul className="drawer-list">
                        <li>Shop</li>
                        <li>New In</li>
                        <li>Sale</li>
                        <li>Hot</li>
                        <li>Coming Soon</li>
                        <li>Delivery Information</li>
                        <li>News</li>
                        <li>Modern Slavery Statement</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
            )}

            {/* Overlay */}
            {isDrawerOpen && (
                <div className="drawer-overlay" onClick={toggleDrawer}></div>
            )}

            {/* Cart Drawer */}
            {isCartDrawerOpen && (
                <div className="cart-drawer open">
                    <div className="cart-top-section">
                        <h3>Cart<span style={{ fontSize: "16px" }}>(20)</span></h3>
                        <div className="cart-close-icon" onClick={toggleCartDrawer}>
                            <FaArrowDown />
                        </div>
                    </div>

                    {/* Cart Drawer Content */}
                    <div className="cart-content">
                        <div className="cart-items-container">
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />
                            <CartItem
                                itemImage="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0"
                                itemName="Blackcurrant Liquorice"
                                itemQty="1"
                                itemPrice="29"
                            />

                        </div>
                        <button className="checkout-button">
                            <MdOutlineShoppingCartCheckout />
                        </button>
                    </div>
                </div>
            )}

            {/* Overlay for Cart Drawer */}
            {isCartDrawerOpen && (
                <div className="cart-overlay" onClick={toggleCartDrawer}></div>
            )}
        </div>
    );
};

export default Header;




const CartItem = ({ itemName, itemPrice, itemQty, itemImage }) => {
    return (
        <div className="cart-item">
            <img
                className="cart-item-img"
                src={itemImage}
            />
            <div className="cart-item-details">
                <div>
                    <h4>{itemName}</h4>
                    <p>Nos : {itemQty} </p>
                </div>
                <div className="cart-item-price">
                    <p style={{color:"#295F98"}}>$ {itemPrice}/- </p>
                </div>
            </div>
        </div>
    )
}
