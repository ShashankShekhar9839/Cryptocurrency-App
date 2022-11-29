import React from 'react'
import '../css_styles/trendingcard.css'

const TrendingCard = (props) => {
  return (
    <div className='trending-card'>
        <div className='trending-img'>
            <img src={props.img} alt='/'></img>
        </div>
        <div className='trending-name'>
            <p>{props.name}</p>
            <p>Price:${props.price.toFixed(8)}</p>
            <p>Rank:{props.rank}</p>
        </div>
    </div>
  )
}

export default TrendingCard;