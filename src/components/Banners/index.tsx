import { Container } from "./styles";

export interface BannersProps{
    src: string;
    size: 'wide' | 'square' | 'sm'
    alt?: string;
}

export const Banners = ({size, src, alt}:BannersProps) => {
    return(
        <Container src={src} alt={alt} size={size}/>
    )
}