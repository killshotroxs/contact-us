import "./navigation.component.scss";
import LOGO from "../../../public/images/logo.png"

const Navigation = () => {
  return (
    <nav className="navigation container">
      <div className="logo">
        <img src={LOGO}/>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
