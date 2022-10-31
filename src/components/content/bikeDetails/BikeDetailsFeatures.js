import './BikeDetailsFeatures.css';
import motorSvg from '../../../img/motor.svg';
import materialSvg from '../../../img/carbono.svg';
import speedSvg from '../../../img/velocidade.svg';
import navSvg from '../../../img/rastreador.svg';

function BikeDetailsFeatures(props) {
  const { bike } = props; // WTF HOW PROPS GO HERE THIS WAY

  return (
    <div className="bike--features">
      <div className="feature">
        <img src={motorSvg} alt="pic" />
        <p>{bike.motor}</p>
      </div>
      <div className="feature">
        <img src={materialSvg} alt="pic" />
        <p> {bike.material}</p>
      </div>
      <div className="feature">
        <img src={speedSvg} alt="pic" />
        <p> {bike.speed}</p>
      </div>
      <div className="feature">
        <img src={navSvg} alt="pic" />
        <p> {bike.nav}</p>
      </div>
    </div>
  );
}

export default BikeDetailsFeatures;
