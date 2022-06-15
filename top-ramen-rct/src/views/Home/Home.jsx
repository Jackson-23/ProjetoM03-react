import RamenLista from "../../components/RamenLista/RamenLista.jsx";
import "../Home/Home.css";
import { Navbar } from "components/Navbar/Navbar.jsx";
import AdicionaEditaRamenModal from "../../components/AdicionaEditaRamenModal/AdicionaEditaRamenModal.jsx";
import { useState } from "react";
import ActionMode from "../../constants/index.js";

function Home() {
  const [canShowAdicionaEditaRamenModal, setCanShowAdicionaEditaRamenModal] =
    useState(false);

  const [ramenParaAdicionar, setRamenParaAdicionar] = useState();

  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  return (
    <div className="Home">
      <div className="Home__header Header">
        <Navbar
          mode={modoAtual}
          createRamen={() => setCanShowAdicionaEditaRamenModal(true)}
          updateRamen={() => handleActions(ActionMode.ATUALIZAR)}
        />
      </div>
      <div className="Home__container">
        <RamenLista
        mode={modoAtual}
        ramenCriada={ramenParaAdicionar} />
        {canShowAdicionaEditaRamenModal && (
          <AdicionaEditaRamenModal
            closeModal={() => setCanShowAdicionaEditaRamenModal(false)}
            onCreatePaleta={(ramen) => setRamenParaAdicionar(ramen)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
