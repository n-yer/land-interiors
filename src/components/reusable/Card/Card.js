import React from 'react'
import './styles/Card.css'
export default function Card({title, img, description}) {
  const imageUrl = require('../../../imgs/'+img);

  return (
    <div className='card-comp-container'>
      <div className='card-img' style={{backgroundImage:"url("+imageUrl+")"}}></div>
      {title && <p className='title'>{title}</p>}
      {description && <p className='desc'>{description}</p>}
    </div>
  )
}
