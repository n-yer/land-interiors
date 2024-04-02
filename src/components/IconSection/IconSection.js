import React from 'react'
import './styles/IconSection.css'
import data from '../../data.json'
import calIcon from '../../imgs/calendaricon.png'
import homeIcon from '../../imgs/homeicon.png'
import certIcon from '../../imgs/certificateicon.png'

export default function IconSection() {
  return (
    <div className='icon-section'>
      <h2>Why LAND Interiors</h2>
      <div className='icons-container'>
        
        <div className='icon-container'><img src={calIcon} alt='calendar icon'/><p>50 days or we pay you rent</p></div>
        <div className='icon-container'><img src={homeIcon} alt='customer icon'/><p>1500+ happy customers</p></div>
        <div className='icon-container'><img src={certIcon} alt='certificate icon'/><p>300+ design experties</p></div>

      </div>
    </div>
  )
}
