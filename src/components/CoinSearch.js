import React, { useState } from "react";
import '../css_styles/coinsearch.css';
import { Sparklines, SparklinesLine } from "react-sparklines";
import '../css_styles/coinitem.css'
import { Link } from "react-router-dom";

import CoinItem from "./CoinItem";

// receving coins from home page throug props
const CoinSearch = ({ coins }) => {

  // search input value setting
  const [searhCoin,setSearchCoin] = useState('');

  console.log(coins);
  return (
    <div className="coin-search">

      {/* search div will contain heading and a form */}
      <div className="search-div">
        <h2>Search crypto</h2>
        <form>

          {/* input field will handle onchange event */}
          <input type="text" placeholder="Search a coin" onChange={(e)=>setSearchCoin(e.target.value)} />
        </form>
      </div>

{/* creating table for showing coin details */}


<div className="table-div">
<table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin Image</th>
            <th>Name</th>
            <th>Price($)</th>
            <th>24h Change</th>
            <th>24h Volume</th>
            <th>Mkt</th>
          </tr>
        </thead>

        <tbody>

          {/* applying filter for searching and mapping the coin  */}
             {
              coins.filter((coin)=>{
                if(searhCoin===''){
                  console.log(coin.name);
                  return coin;
                }
                else if(

                  // converting search name to lowercase as includes method is case sensitive
                  // includes will return true/false
                  coin.name.toLowerCase().includes(searhCoin.toLowerCase())
                )
                {
                  return coin;
                }
              }).map((coin)=>(
                // returning coin item 
              // <CoinItem key={coin.id} coin={coin}/>
              <tr>
              <td><i class="fa-regular fa-star"></i></td>
              <td>{coin.market_cap_rank}</td>
              <td>
              <Link to={`/coin/${coin.id}`}>
                <div>
                  <img src={coin.image} alt="img"></img>
                </div>
                </Link>
              </td>
              <td>{coin.name}</td>
              <td>{coin.current_price.toLocaleString()}</td>
       
         {/* changing color according to market change */}
                {
                coin.price_change_percentage_24h>0?
                <td className="text-color1">{coin.price_change_percentage_24h.toFixed(2)}</td> : 
                <td className="text-color2">{coin.price_change_percentage_24h.toFixed(2)}%</td>
                
                }
              <td>{coin.total_volume.toLocaleString()}</td>
              <td>{coin.market_cap.toLocaleString()}</td>

              {/* <td>
                <Sparklines data={[coin.sparkline_in_7d.price]}>
                  <SparklinesLine color="blue" />
                </Sparklines>
              </td> */}
            </tr>
              ))
             }
        </tbody>
      </table>

</div>



    </div>
  );
};

export default CoinSearch;
