import React from 'react'

const CoinItem = ({coin}) => {
  return (
    <div className='coin-item'>
       {/* <tr>
                <td></td>
                <td>{coin.market_cap_rank}</td>
                <td>
                  <div>
                    <img src={coin.image} alt="img"></img>
                  </div>
                </td>
                <td>{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>{coin.current_price}</td>
                <td>{coin.price_change_percentage_24h}%</td>
                <td>{coin.total_volume}</td>
                <td>{coin.market_cap}</td>

                <td>
                  <Sparklines data={[coin.sparkline_in_7d.price]}>
                    <SparklinesLine color="blue" />
                  </Sparklines>
                </td>
              </tr> */}

    </div>
  )
}

export default CoinItem