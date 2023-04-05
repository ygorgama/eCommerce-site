import styled from "styled-components";

export const Container = styled.button`
    border: none;
    outline: none;
    background-color: ${({theme}) => theme.colors.bright};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme.colors["high-emphasis"]};
    font-size: ${({theme}) => theme.fontSize["title-regular"]};
    font-weight: ${({theme}) => theme.fontWeight["title-regular"]};
    cursor: pointer;
`

export const Icon = styled.img`
    width: 24px
    height: 24px
`

export const IconInverted = styled.img`
    width: 24px
    height: 24px
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
`