import { Button } from "./styles/Button.styled";
import { StyledServiceCard, CopyBlock } from "./styles/Services.styled";

export default function ServiceCard({item: { id, title, body, image, cta, link }}) {
    return (
        <StyledServiceCard>
            <img src={`./images/${image}`} alt=""></img>
            <CopyBlock>
                <h3>{title}</h3>
                <p>{body}</p>
            </CopyBlock>
            <Button bg="rgb(219, 219, 219)">{cta}</Button>
        </StyledServiceCard>
    )
}