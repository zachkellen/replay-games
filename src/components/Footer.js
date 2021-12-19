import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo" alt=""></img>

                <Flex>
                    <ul>
                        <li>Replay Games</li>
                        <li>502 1st Ave N Ste E</li>
                        <li>Downtown Fargo, ND 58102</li>
                    </ul>

                    <ul>
                        <li>About Us</li>
                        <li>Arcade Catalog</li>
                        <li>Services</li>
                    </ul>

                    <ul>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>
                <p>&copy; 2021 Replay Games. This is fake.</p>
            </Container>
        </StyledFooter>
    )
}