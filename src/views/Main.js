import content from '../content'
import { Container } from '../components/styles/Container.styled'
import { StyledHeroImage } from "../components/styles/HeroImage.styled"
import Card from "../components/Card"

export default function Main() {
    return (
        <Container>
            <StyledHeroImage src="./images/hero2.jpg" alt=""/>
            {content.map((item, i) => (
                <Card key={i} item={item}/>
            ))}
        </Container>
    )
}