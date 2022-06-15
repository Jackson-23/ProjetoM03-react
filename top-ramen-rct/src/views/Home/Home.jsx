import RamenLista from "../../components/RamenLista/RamenLista.jsx";
import "../Home/Home.css";
import { Navbar } from "components/Navbar/Navbar.jsx";
import AdicionaEditaRamenModal from "../../components/AdicionaEditaRamenModal/AdicionaEditaRamenModal.jsx";
import { useState } from "react";
import ActionMode from "../../constants/index.js";
import DeleteRamenModal from "../../components/DeleteRamenModal/DeleteRamenModal.jsx";

export function Home() {
  const [canShowAdicionaEditaRamenModal, setCanShowAdicionaEditaRamenModal] =
    useState(false);

  const [ramenParaAdicionar, setRamenParaAdicionar] = useState();
  const [ramenParaEditar, setRamenParaEditar] = useState();
  const [ramenParaDeletar, setRamenParaDeletar] = useState();

  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const [ramenEditada, setRamenEditada] = useState();
  const [ramenRemovida, setRamenRemovida] = useState();

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const handleDeleteRamen = (ramenToDelete) => {
    setRamenParaDeletar(ramenToDelete);
  };

  const handleUpdateRamen = (ramenToUpdate) => {
    setRamenParaEditar(ramenToUpdate);
    setCanShowAdicionaEditaRamenModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaEditaRamenModal(false);
    setRamenParaAdicionar();
    setRamenParaDeletar();
    setRamenParaEditar();

    setModoAtual(ActionMode.NORMAL);
  };

  return (
    <div className="Home">
      <div className="Home__header Header">
        <Navbar
          mode={modoAtual}
          createRamen={() => setCanShowAdicionaEditaRamenModal(true)}
          updateRamen={() => handleActions(ActionMode.ATUALIZAR)}
          deleteRamen={() => handleActions(ActionMode.DELETAR)}
        />
      </div>
      <div className="Home__container">
        <RamenLista
          mode={modoAtual}
          ramenCriada={ramenParaAdicionar}
          ramenEditada={ramenEditada}
          ramenRemovida={ramenRemovida}
          deleteRamen={handleDeleteRamen}
          updateRamen={handleUpdateRamen}
        />
        {canShowAdicionaEditaRamenModal && (
          <AdicionaEditaRamenModal
            mode={modoAtual}
            ramenToUpdate={ramenParaEditar}
            onUpdateRamen={(ramen) => setRamenEditada(ramen)}
            closeModal={handleCloseModal}
            onCreateRamen={(ramen) => setRamenParaAdicionar(ramen)}
          />
        )}

        {ramenParaDeletar && (
          <DeleteRamenModal
            ramenParaDeletar={ramenParaDeletar}
            closeModal={handleCloseModal}
            onDeleteRamen={(ramen) => setRamenRemovida(ramen)}
          />
        )}
      </div>
    </div>
  );
}
export default Home;
