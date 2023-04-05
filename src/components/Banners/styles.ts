import styled from "styled-components";

interface ContainerProps{
    size: 'wide' | 'square' | 'sm';
}

export const Container = styled.img<ContainerProps>`
    width: ${props => props.size === 'wide' ? '328px' : '156px'};
    height: ${props => props.size === 'wide' ? '120px' : props.size === 'sm' ? '100px' : '150px'};
`