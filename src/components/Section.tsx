import { useRef } from "react";

import BannerBackground from "../images/bg-intro-desktop.svg";
import Banner from "../images/image-mockups.png";

import Container from "../layout/Container";

interface PropsLayout {
  title: string;
  class: string;
  titleNum: number;
  description?: string;
  button?: React.ReactNode;
  boxes?: React.ReactNode[];
}

export default function Section(props: PropsLayout) {
  const titleWithGrade = useRef<React.ReactNode>();

  switch (props.titleNum) {
    case 1:
      titleWithGrade.current = (
        <h1
          className={`section__text-container__title ${props.class}__text-container__title`}
        >
          {props.title}
        </h1>
      );
      break;
    case 2:
      titleWithGrade.current = (
        <h2
          className={`section__text-container__title ${props.class}__text-container__title`}
        >
          {props.title}
        </h2>
      );
      break;
    default:
      throw new Error("error");
  }

  return (
    <section className={`section ${props.class}`}>
      <Container parentClass={`${props.class}`}>
        <div
          className={`section__text-container ${props.class}__text-container`}
        >
          {titleWithGrade.current}
          {props.description && (
            <p
              className={`section__text-container__description ${props.class}__text-container__description`}
            >
              {props.description}
            </p>
          )}
          {props.button && props.button}
        </div>
        {!props.boxes ? (
          <div
            className={`section__images-container ${props.class}__images-container`}
          >
            <img
              src={Banner}
              alt="Banner"
              className={`section__images-container__banner ${props.class}__images-container__banner`}
            />
            <img
              src={BannerBackground}
              alt="Banner Background"
              className={`section__images-container__background ${props.class}__images-container__background`}
            />
          </div>
        ) : (
          <div
            className={`section__boxes-container ${props.class}__boxes-container`}
          >
            {props.boxes}
          </div>
        )}
      </Container>
    </section>
  );
}
