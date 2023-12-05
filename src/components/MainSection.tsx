import BannerBackground from "../images/bg-intro-desktop.svg";
import Banner from "../images/image-mockups.png";

interface PropsLayout {
  title: string;
  description: string;
  button: React.ReactNode;
}

export default function MainSection(props: PropsLayout) {
  return (
    <section className="main-section">
      <div className="main-section__text-container">
        <h1 className="main-section__text-container__title">{props.title}</h1>
        <p className="main-section__text-container__description">{props.description}</p>
        {props.button}
      </div>
      <div className="main-section__images-container">
        <img
          src={Banner}
          alt="Banner"
          className="main-section__images-container__banner"
        />
        <img
          src={BannerBackground}
          alt="Banner Background"
          className="main-section__images-container__background"
        />
      </div>
    </section>
  );
}
