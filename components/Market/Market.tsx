import { useId, useState } from "react";
import Card from "../Cards/Card"
import { marketTickers } from "../../data/data";
import { MarketContainer } from "../../styles/components/Cards/Market/Market.styled";
import { ListContainer } from "../../styles/components/Cards/Cards.styled";

function Market() {

  const [marketWatchlist, setMarketWatchlist] = useState(marketTickers);
  const id = useId();

    
  
  return (
    <MarketContainer>
      <h1>Market</h1>
      <ListContainer>
        {marketTickers.map((ticker) => {
            return (
            <Card key={id} tickerSymbol={ticker.tickerSymbol} price={ticker.price} percentage={ticker.percentage} /> 
            )
        })}
      </ListContainer>
    </MarketContainer>
  )
}

export default Market