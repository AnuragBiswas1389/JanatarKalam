import React from 'react';
import "../header/Header.css";

const header = () => {
  return (
    <div>
        <div id='header'>
        <div className="decor"><a href="#">অপরাধ </a></div>
        <div className="decor"><a href="#">খেলা</a></div>
        <div className="decor"><a href="#">রাজ্য</a></div>
        <div className="decor"><a href='#'>বিশ্ব</a></div>
        <div className="decor"><a href="#">archive</a></div>
        </div>
        <div className='decor_last'>
            <div className="part"><a className='join' href=''>Join us/sign in</a></div>
            <div >time</div>
        </div>
        
    </div>
  )
}

export default header