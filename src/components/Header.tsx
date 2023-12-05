import Logo from "../images/logo.svg";

interface PropsLayout {
  items: string[];
  button: React.ReactNode;
}

export default function Header(props: PropsLayout) {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <nav className="header__navbar">
        <ul className="header__navbar__list">
          {props.items.map((item, index) => (
            <li className="header__navbar__list__item" key={`${item}-${index}`}>
              <a href="#" className="header__navbar__list__item__link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {props.button}
    </header>
  );
}
