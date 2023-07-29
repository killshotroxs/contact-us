/* eslint-disable react/prop-types */
import "./button.component.scss";


const Button = (props) => {
  return (
    <button className="primary-btn">
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
