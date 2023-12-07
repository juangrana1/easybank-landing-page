import { useRef } from "react";

import Currency from "../images/image-currency.jpg";
import Restaurant from "../images/image-restaurant.jpg";
import Plane from "../images/image-plane.jpg";
import Confetti from "../images/image-confetti.jpg";

export default function ArticleBox(props: {
  title: string;
  author: string;
  description: string;
  imageName: string;
}) {
  const image = useRef<string>();

  switch (props.imageName) {
    case "Currency":
      image.current = Currency;
      break;
    case "Restaurant":
      image.current = Restaurant;
      break;
    case "Plane":
      image.current = Plane;
      break;
    case "Confetti":
      image.current = Confetti;
      break;
  }

  return (
      <div className="article-box">
        <a href="#" className="article-box__article-link">
        <img
          src={image.current}
          alt={props.imageName}
          className="article-box__article-link__image"
        />
        <div className="article-box__article-link__text-container">
          <div className="article-box__article-link__text-container__author">
            By {props.author}
          </div>
          <h3 className="article-box__article-link__text-container__title">{props.title}</h3>
          <p className="article-box__article-link__text-container__description">
            {props.description}
          </p>
        </div></a>
      </div>
  );
}
