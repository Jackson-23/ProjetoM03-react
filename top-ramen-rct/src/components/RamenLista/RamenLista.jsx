import { useState, useEffect } from "react";
import "./RamenLista.css";
import { RamenListaItem } from "../RamenListaItem/RamenListaItem.jsx";
import { RamenService } from "../../services/ramenServiceFront.js";
import RamenDetalhesModal from "components/RamenDetalhesModal/RamenDetalhesModal.jsx";

function RamenLista({ ramenCriada }) {
  const [ramens, setRamens] = useState([]);

  const [ramenSelecionada, setRamenSelecionada] = useState({});

  const [ramenModal, setRamenModal] = useState(false);

  /****************TEMPORARIO*********************
  const ramen = {
    titulo: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/misso-ramen.jp",
    preco: 10.0,
    sabor: "Açaí",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  };
************************************* */

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
    setRamenModal(response);
  };

  const adicionaRamenNaLista = (ramen) => {
    const lista = [...ramens, ramen];
    setRamens(lista);
  };

  useEffect(() => {
    if (ramenCriada) adicionaRamenNaLista(ramenCriada);
  }, [ramenCriada]);

  useEffect(() => {
    getLista();
  }, []);

  /*************************************** */

  return (
    <div className="RamenLista">
      {ramens.map((ramen, index) => (
        <RamenListaItem
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
