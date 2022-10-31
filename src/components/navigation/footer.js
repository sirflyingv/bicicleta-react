import logo from '../../img/logo.svg';
import linefooter from '../../img/linefooter.svg';
import yt from '../../img/yt.svg';
import fb from '../../img/fb.svg';
import ig from '../../img/ig.svg';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer--main">
        <div className="foote--logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="contato">
          <h3 className="footer--h3">CONTATO</h3>
          <p>
            +55 22 99999-9999 <br />
            contato@bikcraft.com
          </p>
          <img src={linefooter} alt="-----" />
          <p>
            Rua Ali Perto. 42 - Botafogo
            <br />
            Rio de Janeiro - RJ
          </p>
          <img src={linefooter} alt="-----" />
          <div className="social-media">
            <img src={yt} alt="yt" />
            <img src={fb} alt="fb" />
            <img src={ig} alt="ig" />
          </div>
        </div>
        <div className="informacoes">
          <h3 className="footer--h3">INFORMAÇÕES</h3>
          <ul>
            <li>Bicicletas</li>
            <li>Seguros</li>
            <li>Contato</li>
            <li>Termos e Condições</li>
          </ul>
        </div>
      </div>
      <div className="copyright">Bikcraft © Alguns rireitos reservados.</div>
    </footer>
  );
}

export default Footer;
