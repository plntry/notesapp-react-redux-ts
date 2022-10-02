import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const OpenCreateFormBtn = ({
  size = 'medium',
  ...props
}: ButtonProps) => {
  return (
    <>  
      <div className='header-btn-container'>
        <Link
          to='/create-note'
          className={`header-btn header-btn-${size}`}
          {...props}>
          New Note
        </Link>
      </div>
    </>
  );
};