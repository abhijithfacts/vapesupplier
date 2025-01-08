import React from 'react';
import './productCardStyle.css';
import AnimatedButton from '@/components/buttons/animated/AnimatedButton';
import SimpleButton from '@/components/buttons/simple/Button'
import { IoIosCart } from "react-icons/io";

const ProductCard = () => {
  return (
    <div className="product-card-wrapper">
      {/* Image Section */}
      <div className="image-section">
        <img 
          src="https://cdn.dribbble.com/users/5264896/screenshots/13671488/media/f41f750826f19322a17776b3be1d7f8a.png?resize=400x0" 
          alt="product image" 
          className="product-image"
        />
      </div>

      {/* Color Strip Section */}
      <div className="color-strip"></div>

      {/* Footer Section */}
      <div className="footer-section">
        <h3 className="product-name">Fruity Guava</h3>
        <p className="product-description">Amare Crystal One Disposable Vape</p>
        <p className="product-price">$99.99</p>
      
      </div>
      <div className="button-section">
            {/* <AnimatedButton text="Add"/> */}
            <SimpleButton text="" icon={<IoIosCart/>} buttonStyle={{background:"#97BE5A",borderRadius:"50%",padding:"10px"}}/>
        </div>
    </div>
  );
}

export default ProductCard;
