import { useState, useEffect, useCallback } from "react";
import "./RamenLista.css";
import { RamenListaItem } from "../RamenListaItem/RamenListaItem.jsx";
import { RamenService } from "../../services/ramenServiceFront.js";
import RamenDetalhesModal from "components/RamenDetalhesModal/RamenDetalhesModal.jsx";
import { ActionMode } from "../../constants/index.js";

function RamenLista({ ramenCriada, mode, updateRamen, deleteRamen, ramenEditada, ramenRemovida }) {
  const [ramens, setRamens] = useState([]);

  const [ramenSelecionada, setRamenSelecionada] = useState({});

  const [ramenModal, setRamenModal] = useState(false);



  const adicionarItem = (ramenIndex) => {
    const ramen = {
      [ramenIndex]: Number(ramenSelecionada[ramenIndex] || 0) + 1,
    };
    setRamenSelecionada({ ...ramenSelecionada, ...ramen });
  };

  const removerItem = (ramenIndex) => {
    const ramen = {
      [ramenIndex]: Number(ramenSelecionada[ramenIndex] || 0) - 1,
    };
    setRamenSelecionada({ ...ramenSelecionada, ...ramen });
  };

  /************Get do Service**************/
  const getLista = async () => {
    const response = await RamenService.getLista();
    setRamens(response);
  };

  const getRamenById = async (ramenId) => {
    const response = await RamenService.getById(ramenId);

    const mapper = {
      [ActionMode.NORMAL]: () => setRamenModal(response),
      [ActionMode.ATUALIZAR]: () => updateRamen(response),
      [ActionMode.DELETAR]: () => deleteRamen(response),
    };

    mapper[mode]();
  };

  const adicionaRamenNaLista = useCallback(
    (ramen) => {
      const lista = [...ramens, ramen];
      setRamens(lista);
    },
    [ramens]
  );

  useEffect(() => {
    if (ramenCriada) adicionaRamenNaLista(ramenCriada);
  }, [ramenCriada]);

  useEffect(() => {
    getLista();
  }, [ramenEditada, ramenRemovida]);

  /*************************************** */

  return (
    <div className="RamenLista">
      {ramens.map((ramen, index) => (
        <RamenListaItem
          mode={mode}
          key={`RamenListaItem-${index}`}
          ramen={ramen}
          quantidadeSelecionada={ramenSelecionada[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
          clickItem={(ramenId) => getRamenById(ramenId)}
        />
      ))}

      {ramenModal && (
        <RamenDetalhesModal
          ramen={ramenModal}
          closeModal={() => setRamenModal(false)}
        />
      )}
    </div>
  );
}

export default RamenLista;
