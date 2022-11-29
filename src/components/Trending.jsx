import React, { useEffect, useState } from 'react'
import TrendingCard from '../components/TrendingCard';
import '../css_styles/trending.css'

const Trending = () => {

    const [coins,setTrending] = useState([]);
    const url = 'https://api.coingecko.com/api/v3/search/trending';

    useEffect(()=>{
        let fetchTrendingData = async() =>{
          let response = await fetch(url);
          let trendingCoins = await response.json();
          setTrending(trendingCoins.coins);
          console.log('trending',trendingCoins.coins); 
        }
        fetchTrendingData();
    },[])

  return (
    <div className='trending'>
      <h1>Trending coins</h1>
                 <div className='trending-card-container'>
                 {
                  coins.map((coin,index)=>(
                   <TrendingCard img={coin.item.small} 
                   name={coin.item.name}
                   price={coin.item.price_btc}
                   rank={coin.item.market_cap_rank}
                   />
                  ))
                 }
              
                 </div>
    </div>
  )
}

export default Trending;