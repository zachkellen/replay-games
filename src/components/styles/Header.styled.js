import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 10px 0;
    color: #fff;
    position: sticky;
    top: 0;
    z-index: 10;

    @media(max-width: 768px){
        position: static;
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0px;

    @media(max-width: 768px){
        flex-direction: column;
    }
`

export const Logo = styled.img`
    height: 75px;
    cursor: pointer;

    @media(max-width: 768px){
        margin-bottom: 10px;
    }
`

export const NavItems = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-height: 15px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    &:hover {
        transform: scale(0.98);
        border-bottom: 3px solid red;
    }

    &.active {
        border-bottom: 3px solid green;
    }
`

export const HeroImage = styled.img`
    height: 500px
`