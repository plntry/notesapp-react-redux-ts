import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const HomeBtn = ({
  size = 'medium',
  ...props
}: ButtonProps) => {
  return (
    <>  
      <div className='header-btn-container'>
        <Link
          to='/'
          className={`header-btn header-btn-${size}`}
          {...props}>
          Home
        </Link>
      </div>
    </>
  );
};