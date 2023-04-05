import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.grey};
    border-radius: 8px;
    width: 348px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;    
`