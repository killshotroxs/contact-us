import "./navigation.component.scss";

const Navigation = () => {
  return (
    <nav className="navigation container">
      <div className="logo">
        <img src="../../../public/images/logo.png" />
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
