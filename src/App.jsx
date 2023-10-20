import "./App.css";
import Button from "./components/button/Button";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import logo from "/logo4.jpeg";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <img className="logo" src={logo}></img>
        <h1>LuMel</h1>
        <p>Moda infantil</p>
      </div>
      <div className="buttons">
        
        <Button
          type="button"
          text="Whatsapp"
          href="https://wa.me/5519971640996"
          icon={<FaWhatsapp className="icon" />}
        ></Button>
        <Button
          type="button"
          text="Grupo Whatsapp"
          href="https://chat.whatsapp.com/FNFIALqufLzHpj0OQIr9ax"

          icon={<FaWhatsapp className="icon" />}
        ></Button>
        <Button
          type="button"
          text="Instagram"
          href="https://instagram.com/kids_lumel"
          icon={<FaInstagram className="icon" />}
        ></Button>
        <Button
          href="https://facebook.com/profile.php?id=61551874768915"
          type="button"
          text="Facebook"
          icon={<FaFacebook className="icon" />}
        ></Button>

        
      </div>{" "}
    </div>
  );
}

export default App;
