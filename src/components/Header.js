import React from 'react';
import logo from'../assets/logo.svg'
const Header = () => {
  return(
    <header>
<div className="container mx-auto mt-10">
  <div className='flex justify-between item-center'>
    <a href="#">
      {/* <img src={logo} alt='' /> */}
      <h1 className="text-gradient text-[34px] font-primary">LEE</h1>
      <h1 className='text-[34px] font-semibold font-primary'>TEBBS</h1>
    </a>
    <button className='btn btn-sm'>Work with me</button>
  </div>
</div>
    </header>
  )
 
};

export default Header;
