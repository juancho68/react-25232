
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";


export const Header = () => {
  return (
    <header className="header-container">


      <div className="header-logo-block">

        <img src="/assets/grapes_k.png" alt="logo" />

        <Link to="/" className="logo-title">
          DIONISIO
        </Link>

        <div className="divider-block">
          <span className="line"></span>
          <span className="since">DESDE 2024</span>
          <span className="line"></span>
        </div>
      </div>


      <Nav />
    </header>
  );
};
