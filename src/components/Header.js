import { StyledHeader, Nav, Logo, NavItems, HeroImage } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled" 
import { useHistory } from "react-router"

export default function Header() {
    const history = useHistory();
    const onClickHandler = (event) => {
        history.push("/")
    }

    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo onClick={onClickHandler} src='./images/logo.png' alt='' />
                    <NavItems to="/services">
                        <h4>Services</h4>
                    </NavItems>
                    <NavItems>
                        <h4>Online Store</h4>
                    </NavItems>
                    <NavItems>
                        <h4>Arcade Catalog</h4>
                    </NavItems>
                    <NavItems>
                        <h4>About Us</h4>
                    </NavItems>
                    <Button>Sign In</Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}
