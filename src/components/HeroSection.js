import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>REPORTING IS IMPORTANT!</h1>
      <p>Never fail to report accidents, defective equipment and or unsafe conditions.</p>
      <div className='hero-btns'>

      <Link to='/report' className='btn-mobile'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Report
        </Button>
        </Link>

        <a href="https://www.youtube.com/watch?v=4bkr5lpKGUM" target="_parent">
        <Button
          className='btns1'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Safety Features <i className='far fa-play-circle' />
        </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
