
import React, { useId, useState } from 'react'
import { ListContainer } from '../../styles/components/Cards/Cards.styled'
import { DefaultStocksContainer } from '../../styles/components/Cards/Cards.styled'
import Card from './Card'
import { defaultWatchlist } from '../../data/data'


function CardGrid() {
    const [watchlist, setWatchlist] = useState(defaultWatchlist);
    const id = useId();

    return (
        <DefaultStocksContainer>
            <h1 style={{paddingLeft: '10px'}}>Stocks</h1>
            <ListContainer>
                {watchlist.map((ticker) => {
                        return (
                            <Card key={ticker.tickerSymbol} tickerSymbol={ticker.tickerSymbol} price={ticker.price} percentage={ticker.percentage} />
                        )
                    })
                }
            </ListContainer>
        </DefaultStocksContainer>
    )
}

export default CardGrid