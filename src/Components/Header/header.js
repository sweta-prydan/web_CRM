import React from 'react'
import './header.css';

const Header = ({headerText}) => {
  return (
    <div className='text-center'>
    <div className='heading mb-3'>
       {headerText}
    </div>
    </div>
  )
}

export default Header;
