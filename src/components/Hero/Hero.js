import React from 'react'
import heroImg from '../../imgs/hero.png'
import './styles/Hero.css'
import data from '../../data.json'
export default function Hero() {
  return (
    <div className='hero-container'>
      <div className='hero-image'><img src={heroImg} alt='hero'/></div>
      <div className='overlay-container'>
        <p className='hero-text'>Get personalised home interiors</p>
        <p className='hero-text accent'>in just 50 days</p>
        <button type="button" className='cta-btn'>{data.ctaBtnText}</button>
      </div>
    </div>
  )
}
