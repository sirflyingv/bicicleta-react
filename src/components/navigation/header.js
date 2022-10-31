import logo from '../../img/logo.svg';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="navigation">
        <span className="navigation-item">Bicicletas</span>
        <span className="navigation-item">Seguros</span>
        <span className="navigation-item">Contato</span>
      </nav>
    </header>
  );
}

export default Header;
