import Container from "../layout/Container";

import FooterLogo from "../images/logo-footer.svg";
import FacebookIcon from "../images/icon-facebook.svg";
import YoutubeIcon from "../images/icon-youtube.svg";
import TwitterIcon from "../images/icon-twitter.svg";
import PinterestIcon from "../images/icon-pinterest.svg";
import InstagramIcon from "../images/icon-instagram.svg";

interface PropsLayout {
  items: string[];
  button: React.ReactNode;
}

export default function Footer(props: PropsLayout) {
  return (
    <div className="footer">
      <Container parentClass="footer">
        <div className="footer__images">
          <img
            src={FooterLogo}
            alt="Footer Logo"
            className="footer__images__logo"
          />
          <div className="footer__images__icons-box">
          <a href="#">
            <img
              src={FacebookIcon}
              alt="Facebook Icon"
              className="footer__images__icons-box__social-media-icon"
            />
          </a>
          <a href="#">
            <img
              src={YoutubeIcon}
              alt="Youtube Icon"
              className="footer__images__icons-box__social-media-icon"
            />
          </a>
          <a href="#">
            <img
              src={TwitterIcon}
              alt="Twitter Icon"
              className="footer__images__icons-box__social-media-icon"
            />
          </a>
          <a href="#">
            <img
              src={PinterestIcon}
              alt="Pinterest Icon"
              className="footer__images__icons-box__social-media-icon"
            />
          </a>
          <a href="#">
            <img
              src={InstagramIcon}
              alt="Instagram Icon"
              className="footer__images__icons-box__social-media-icon"
              style={{ fill: "green" }}
            />
          </a></div>
        </div>
        <nav className="footer__navbar">
          <ul className="footer__navbar__list">
            {props.items.map((item, index) => (
              <li
                className="footer__navbar__list__item"
                key={`${item}-${index}`}
              >
                <a href="#" className="footer__navbar__list__item__link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__last-box">
          {props.button}
          <div className="footer__last-box__copyright">
            © Easybank. All Rights Reserved
          </div>
        </div>
      </Container>
    </div>
  );
}
