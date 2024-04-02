import React from 'react'
import './styles/Blogs.css'
import Slider from '../reusable/Slider/Slider'
import data from '../../data.json'
export default function Blogs() {
  return (
    <div className='blogs-container'>
      <h2>Blogs</h2>
      <Slider items={data.blogsCards}/>
      <div className='fcc'>
      <button type="button" className='cta-btn'>{"View all"}</button>
      </div>
    </div>
  )
}
