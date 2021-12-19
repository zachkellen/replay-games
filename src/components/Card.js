import { Button } from "./styles/Button.styled"
import { StyledCard } from "./styles/Card.styled"
import { useHistory } from "react-router-dom"

export default function Card({item: { id, title, body, image, cta, link }}){
    const history = useHistory();
    const onClickHandler = (event) => {
        history.push(`/${link}`)
    }
    
    return (
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
                <Button href={`${link}`} bg="rgb(219, 219, 219)">{cta}</Button>
            </div>

            <div>
                <img src={`./images/${image}`} alt=""></img>
            </div>
        </StyledCard>
    )
}