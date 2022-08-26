import React from 'react'
import './header.css';

const Header = ({headerText}) => {
  return (
    <div className='heading mb-3'>
       {headerText}
    </div>
  )
}

export default Header;
