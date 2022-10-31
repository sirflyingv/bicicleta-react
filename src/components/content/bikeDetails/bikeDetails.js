import dec from '../../../img/dec.svg';
import dash from '../../../img/sep.svg';
import './bikeDetails.css';
import ButtonCustom from './../../activeElements/buttonCustom';
import BikeDetailsFeatures from './BikeDetailsFeatures';

const buttonText = 'MAIS SOBRE';

function BikeDetails(props) {
  const { bike } = props;
  return (
    <div className="bg">
      <div className="flex">
        <div
          className="bikeview"
          style={{
            backgroundImage: `url("${bike.pic}")`,
          }}
          bike={bike.pic}
        >
          <div>R$ ${bike.price}</div>
        </div>
        <div className="details">
          <div className="details--top">
            <div className="desc">
              <img src={dash} alt="dash" />
              <h3>{bike.name}</h3>
              <p>{bike.desc}</p>
            </div>
            <img className="dec" src={dec} alt="dec" />
          </div>
          <div className="details--bottom">
            <BikeDetailsFeatures bike={bike.features} />
            <ButtonCustom className="btn" arrow={true} text={buttonText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BikeDetails;
