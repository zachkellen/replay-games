import serviceList from '../ServiceList'
import { Container } from '../components/styles/Container.styled'
import { StyledHeroImage } from "../components/styles/HeroImage.styled"
import { ServiceCardContainer } from '../components/styles/Services.styled'
import ServiceCard from '../components/ServicesCards'

export default function Services() {
    return (
        <Container>
            <StyledHeroImage src="./images/servicesHero.jpg" alt=""/>
            <h2>What we Offer:</h2>
            <p>Replay Games is built around the idea of fun for all. We have a wide selection of gaming consoles to pick from and an even larger variety of video games to play on the console of your choice. So whether you are looking for old school fun playing Super Mario Bros. 3 on the NES or wanting to try out the newest Call of Duty on PS4, we have you covered. Drop in any time or schedule your visit ahead of time. We love seeing new customers!</p>
            <ServiceCardContainer>
                {serviceList.map((item, i) => (
                    <ServiceCard key={i} item={item}/>
                ))}
            </ServiceCardContainer>
        </Container>
    )
}