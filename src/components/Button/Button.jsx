/* eslint-disable react/prop-types */
import "./button.component.scss";

const Button = (props) => {
  const { isOutline, text, icon } = props;

  return (
    <button className={`${isOutline ? "outline-btn" : ""} primary-btn `}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
