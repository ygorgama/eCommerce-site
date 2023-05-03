import { ButtonStar, Container, Icon } from "./styles";
import starUnrated from "../../assets/start-unrated.svg";
import starRated from "../../assets/star-rated.svg";
import { useState } from "react";

export const Raiting = () => {
  const [raiting, setRaiting] = useState<number>(1);
  const [raitingHover, setRaitingHover] = useState<number>();

  return (
    <Container>
      {[...Array(5)].map((star, i) => {
        const raitingValue = i + 1;
        return (
          <ButtonStar
            value={raitingValue}
            onClick={() => setRaiting(raitingValue)}
            onMouseOver={() => setRaiting(raitingValue)}
            onMouseOut={() => setRaiting(raitingValue)}
          >
            {raitingValue <= raiting || raitingHover ? (
              <Icon src={starRated} alt="Avaliação marcada" />
            ) : (
              <Icon src={starUnrated} alt="Avaliação não marcada" />
            )}
          </ButtonStar>
        );
      })}
    </Container>
  );
};
