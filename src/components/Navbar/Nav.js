import React from 'react'
import data from '../../data.json'
import './styles/Header.css'

export default function Nav({align, openMenu, handleCloseMenu, handleOpenMenu}) {
  const navLinks = data.nav.map(navitem=><li><a href={navitem.url} className="nav-link">{navitem.title}</a></li>)
  return (
    <nav className={'navbar'+(align==='right'?' lg':'')}>
      <ul className={"nav-links"+(openMenu?" nav-expanded":"")} style={{justifyContent:align==='right'?'flex-end':'center'}}>
        {navLinks}
        <div className='close-menu-btn-container'style={{display:'flex', width:'100%', justifyContent:'center'}}>

        <button className='cta-btn close-menu-btn' style={{width:'20px'}} onClick={handleCloseMenu}>Close</button>
        </div>
      </ul>
    </nav>
  )
}
