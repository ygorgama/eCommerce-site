import { useState } from "react";
import star_unrated from "../../assets/start-unrated.svg";
import star_rated from "../../assets/star-rated.svg";
import { StarStyle } from "./styles";

export const Raiting = () => {
  const [value, setValue] = useState<number>(0);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const valueHandller = (newValue: number) => {
    setValue(newValue);
  };

  const hoverValueHandller = (newValue: number) => {
    setHoverValue(newValue);
  };

  const outMouseHandler = () => {
    setHoverValue(undefined);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        return (
          <StarStyle
          onMouseLeave={outMouseHandler}
            onMouseOver={() => hoverValueHandller(index + 1)}
            onClick={() => valueHandller(index + 1)}
          >
            {(hoverValue || value) > index ? (
              <img src={star_rated} alt="Start Unrated" />
            ) : (
              <img src={star_unrated} alt="Start Unrated" />
            )}
          </StarStyle>
        );
      })}
    </div>
  );
};
