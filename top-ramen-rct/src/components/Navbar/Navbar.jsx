import "../RamenLista/RamenLista.css";
import sacola from "../../assets/icons/sacola.svg";
import logo from "../../assets/icons/logo.webp";

export function Navbar() {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Top Ramen "
            className="Logo__icone"
          />
          <span className="Logo__titulo"> Top Ramen </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
