import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

import ContactForm from '../../contact';

function Footer() {
  return (
    <div className='footer-container'>
      
        

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            
            <Link to='/Aboutus'>Team</Link>
            <a href='/Privacy' target="_blank">Privacy</a>
            <a href='/Terms' target="_blank">Terms</a>
            
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Contactus'>Contact</Link>
            <a href='/Notice' target="_blank">Notice</a>
            <Link to='/'>Investors</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h2>SNS</h2>
            <Link 
              to={
                '//www.instagram.com/loof_korea/'
              }
              target='_blank' >Instagram</Link>
            <Link to='/'>Facebook</Link>

            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              {/*<MdFingerprint className='navbar-icon' />*/}
            LOOF
            </Link>
          </div>
          <small className='website-rights'>LOOF © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.instagram.com/loof_korea/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                ''
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
