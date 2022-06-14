import { useState } from "react";
import "./RamenLista.css";
import { ramens } from "../../mocks/ramens.js";
import { RamenListaItem } from "../RamenListaItem/RamenListaItem";

function RamenLista() {
  const [ramenSelecionada, setRamenSelecionada] = useState({});

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

  return (
    <div className="RamenLista">
      {ramens.map((ramen, index) => (
        <RamenListaItem
          key={`RamenListaItem-${index}`}
          ramen={ramen}
          quantidadeSelecionada={ramenSelecionada[index]}
          index={index}
          onAdd={index => adicionarItem(index)}
		    	onRemove={index => removerItem(index)}
        />
      ))}
    </div>
  );
}

export default RamenLista;
