import './buttonCustom.css';
import arrowIcon from '../../img/button_arrow.svg';

const arrowImg = arrowIcon;

function ButtonCustom(props) {
  const text = props.text;
  const arrow = props.arrow;
  const style = arrow ? {} : { display: 'none' };
  return (
    <button className="btn">
      {text}
      <img src={arrowImg} alt="➡" style={style} />
    </button>
  );
}

export default ButtonCustom;
