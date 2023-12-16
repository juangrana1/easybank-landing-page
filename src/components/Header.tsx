import Logo from "../images/logo.svg";
import Container from "../layout/Container";

import MenuIcon from "../images/icon-hamburger.svg";

interface PropsLayout {
  items: string[];
  button: React.ReactNode;
  screenWidth: number;
}

export default function Header(props: PropsLayout) {
  return (
    <header className="header">
      <Container parentClass="header">
        <img src={Logo} alt="Logo" className="header__logo" />
        {props.screenWidth >= 750 ? (
          <>
            <nav className="header__navbar">
              <ul className="header__navbar__list">
                {props.items.map((item, index) => (
                  <li
                    className={`header__navbar__list__item`}
                    key={`${item}-${index}`}
                  >
                    <a
                      href="#"
                      className="header__navbar__list__item__link"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {props.button}
          </>
        ) : (
          <img src={MenuIcon} alt="Hamburger Icon" />
        )}
      </Container>
    </header>
  );
}
