import React, {useState} from 'react'
import logo from '../../imgs/logo.png'
import './styles/Header.css'
import Nav from './Nav'
import burgerIcon from '../../imgs/burger-menu.png'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className='header-container'>
      <div className='contact-container'>
      <a href="/" className='logo'><img alt="logo" src={logo}/></a>
      <div className='links'>
        <a href="/" className='link lg'>Join as Design Expert</a>
        <a href="/" className='link lg'>Partner with LAND Interiors</a>
        <button className='burger-btn' onClick={()=>setIsNavOpen(true)}><img src={burgerIcon} /></button>

      </div>
      </div>
      <Nav openMenu={isNavOpen} handleCloseMenu={()=>setIsNavOpen(false)} handleOpenMenu={()=>setIsNavOpen(true)}/>
    </div>
  )
}
