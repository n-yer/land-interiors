import React from 'react'
import './styles/Services.css'
import data from '../../data.json'
import Card from '../reusable/Card/Card'
export default function Services() {
  const cards = data.servicesCards.map(card=><Card title={card.title} img={card.img}/>)
  return (
    <div className='services-container'>
      <h2>What we do?</h2>
      <div className='cards-container'>
        {cards}
      </div>
      <p className='desc'>{data.placeholderText}</p>
    </div>
  )
}
