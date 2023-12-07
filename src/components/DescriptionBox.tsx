import { useRef } from "react";

import OnlineBanking from "../images/icon-online.svg";
import SimpleBudgeting from "../images/icon-budgeting.svg";
import FastOnboarding from "../images/icon-onboarding.svg";
import OpenAPI from "../images/icon-api.svg";

export default function DescriptionBox(props: {
  title: string;
  description: string;
}) {
  const image = useRef<string>();

  switch (props.title) {
    case "Online Banking":
      image.current = OnlineBanking;
      break;
    case "Simple Budgeting":
      image.current = SimpleBudgeting;
      break;
    case "Fast Onboarding":
      image.current = FastOnboarding;
      break;
    case "Open API":
      image.current = OpenAPI;
      break;
  }

  return (
    <div className="description-box">
      <img
        src={`${image.current}`}
        alt={props.title}
        className="description-box__image"
      />
      <h3 className="description-box__title">{props.title}</h3>
      <p className="description-box__description">{props.description}</p>
    </div>
  );
}
