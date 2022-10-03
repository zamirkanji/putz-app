// import { ListItem } from "../styled/Card.styled"
import { ListItem } from "../../styles/components/Cards/Cards.styled"
import { ReactElement } from "react"

interface CardProps {
    tickerSymbol: string,
    price: number, 
    percentage: any
}

const listStyles: {[key: string]: React.CSSProperties} = {
    h3: {
        fontWeight: '800',
        letterSpacing: '.1rem'
    },
    p: {
        fontSize: '1em',
        fontWeight: '400',
    }
    
}

function Card(props: CardProps) {

    return (
        <ListItem className="listItemCard">
            <h3 style={listStyles.h3}>{props.tickerSymbol}</h3>
            <p style={listStyles.p}>{props.price}</p>
            <p style={listStyles.p}>{props.percentage}</p>
        </ListItem>
    )
}

export default Card   