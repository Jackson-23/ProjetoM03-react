import "./Navbar.css";
import sacola from "../../assets/icons/sacola.svg";
import logo from "../../assets/icons/logo.webp";
import addicon from "../../assets/icons/addicon.png";
import atticon from "../../assets/icons/atticon.png";
import { ActionMode } from "../../constants/index.js";

export function Navbar({ createRamen, updateRamen, mode }) {
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
          <button
            type="button"
            className={`Opcoes__ramen Ramen ${ mode === ActionMode.ATUALIZAR && "Ramen--ativa"}`}
            onClick={() => updateRamen()}
          >
            <img
              src={atticon}
              width="40px"
              className="Ramen__icone"
              alt="Editar ramen"
            />
          </button>

          <button
            type="button"
            className="Opcoes__ramen Ramen"
            onClick={() => createRamen()}
          >
            <img
              src={addicon}
              width="40px"
              className="Ramen__icone"
              alt="Adicionar ramen"
            />
          </button>

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
