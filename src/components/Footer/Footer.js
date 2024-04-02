import React from 'react'
import logo from '../../imgs/logo.png'
import './styles/Footer.css'
import data from '../../data.json'
import Nav from '../Navbar/Nav'
export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='col'>
          <img src={logo} alt='logo' className='logo'/>
          <p className='lg'>{data.footerDescription}</p>
        </div>
        <div className='col lg'>
          <p className='title'>WHAT WE DO</p>
          <ul>
            {data.footerServicesList.map(svc=><li>{svc}</li>)}
          </ul>
        </div>
        <div className='col'>
          <p className='title lg'>{data.footerContactInfo.title}</p>
          <a href={"mailto:"+data.footerContactInfo.email}>{data.footerContactInfo.email}</a>
          <a href={"tel:"+data.footerContactInfo.phone}>{data.footerContactInfo.phone}</a>
        </div>
      </div>
      <Nav align="right" />
      <div className='social-icons'>
        {
          data.footerSocialIcons.map(icon=>{
            const img = require('../../imgs/'+icon)
            return <a href='/' className='icon'><img src={img} alt='icon'/></a>
          })
        }
      </div>
    </div>
  )
}
