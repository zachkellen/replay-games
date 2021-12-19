import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > div,
    & > ul {
        flex: 1;
    }

    @media(max-width: 768px){
        flex-direction: column;
        text-align: center;
    }
`