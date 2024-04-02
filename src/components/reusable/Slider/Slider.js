import React, { useRef, useState, useEffect } from 'react';
import Card from '../Card/Card'
import './styles/Slider.css'
export default function Slider({items}) {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    resetScroll()
  }, [])
  
  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo(
        direction==='right'?
        {
        left: scrollPosition + 100,
        behavior: 'smooth'
        }
        :
        {
        left: scrollPosition - 100,
        behavior: 'smooth'
        }
      );
      setScrollPosition(direction==='right'?(scrollPosition + 100):(scrollPosition - 100));
    }
  };
  const resetScroll = ()=>{
    const container = containerRef.current;
    if (container) {
      container.scrollTo(

        {
        left: 0,
        behavior: 'smooth'
        }

      );}
  }
  return (
    <div className='slider-container' ref={containerRef}>
      <button className='right-btn' onClick={()=>scroll('right')}>▶</button>
      {items.map(item=><Card key={"item-"+item.title} title={item.title} description={item.description} img={item.img} />)}
      {items.map(item=><Card key={"item-"+item.title} title={item.title} description={item.description} img={item.img} />)}
      <button className='left-btn' onClick={()=>scroll('left')}>◀</button>
    </div>
  )
}
