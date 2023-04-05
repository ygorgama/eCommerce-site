import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12 1fr);
    justify-content: center;
    gap: .4em .9em;
`

export const ItemOne = styled(Link)`
    grid-column: span 12;
`

export const ItensSmalls = styled(Link)`
    grid-column: span 6;

`