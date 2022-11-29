import React, { useEffect, useState } from 'react'
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';

const CoinPage = () => {

  const [coin,setCoin] = useState({});
  const {coinId} = useParams()
  console.log("Coin id" );

 const url=`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`;

  useEffect(()=>{
    let fetchCoin = async ()=>{
        let response=await fetch(url);
        let data = await response.json();
        console.log('coin-page');
         console.log(data);
         setCoin(data);
    }
    fetchCoin();
  },[])

  return (
    <div>
      <div className='coin-page'>
        <div className='coin-details'>
          <div className='coin-img'>
          <img src={coin.image?.large} alt='/'></img>
        <span>{coin?.name}</span>
          </div>

          <div className='div-information'>

            <div>
              <span>
                {coin.market_data?.market_cap? ( <h4>Market Cap : {coin.market_data.market_cap.usd}</h4>) : null}
               </span>

               <span>
{coin.market_data?.market_cap? (<h4>Volume(24h): {coin.market_data.total_volume.usd}</h4>):null}

               </span>

               <span>
                {coin.market_data?.high_24h ?
                (<p>24h High :{coin.market_data.high_24h.usd}</p>) : null}
               </span>

               <span>
                {coin.market_data?.low_24h ?
                (<p>24h Low :{coin.market_data.low_24h.usd}</p>) : null}
               </span>

            </div>

            <div>
              <p>Market Stats</p>
              <span>
                <p>Rank : 
                {coin.market_cap_rank}
                </p>
               
              </span>

              <span>
                <p>Hashing Algorithm {coin.hashing_algorithm}</p>
              </span>

              <span>
                <p>Trust Score {coin.liquidity_score}</p>
              </span>

              <span>

                {coin.market_data ? (<p>Price Change(24h) : {coin.market_data.price_change_percentage_24h.toFixed(2)}% </p>) : null}
                
              </span>

              <span>

{coin.market_data ? (<p>Price Change(7days) : {coin.market_data.price_change_percentage_7d.toFixed(2)}% </p>) : null}

</span>


<span>

{coin.market_data ? (<p>Price Change(14days) : {coin.market_data.price_change_percentage_14d.toFixed(2)}% </p>) : null}

</span>


<span>

{coin.market_data ? (<p>Price Change(14days) : {coin.market_data.price_change_percentage_14d.toFixed(2)}% </p>) : null}

</span>

<span>

{coin.market_data ? (<p>Price Change(30 days) : {coin.market_data.price_change_percentage_30d.toFixed(2)}% </p>) : null}

</span>

<span>

{coin.market_data ? (<p>Price Change(60days) : {coin.market_data.price_change_percentage_60d.toFixed(2)}% </p>) : null}

</span>

<span>

{coin.market_data ? (<p>Price Change(1 year) : {coin.market_data.price_change_percentage_1y.toFixed(2)}% </p>) : null}

</span>






            </div>
          </div>

          <div className='coin-description'>
            <h3>About {coin.name}</h3>
            <p dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(coin.description ? coin.description.en : ''),}}></p>
          </div>

        </div>
        <div>
        
        </div>
       
      </div>
    </div>
  )
}

export default CoinPage;