import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import {GrAppleAppStore, } from 'react-icons/gr';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Join Now</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GrAppleAppStore />
                </div>
                <h3>App Store</h3>
                <h4></h4>
                <p>Download</p>
                <ul className='pricing__container-features'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                
              </div>
            </Link>
         
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <IoLogoGooglePlaystore />
                </div>
                <h3>Google Play Store</h3>
                <h4></h4>
                <p>Download</p>
                <ul className='pricing__container-features'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
