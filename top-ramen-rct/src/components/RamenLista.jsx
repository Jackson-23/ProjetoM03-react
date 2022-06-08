import { useState } from "react";
import "./RamenLista.css";
import { ramens } from "/DESK/Repos/ProjetoM03-react/top-ramen-rct/src/mocks/ramens.js";


function RamenLista() {
    const [ramenSelecionada, setRamenSelecionada] = useState({});

    const adicionarItem = (ramenIndex) => {
            const ramen = { [ramenIndex]: Number(ramenSelecionada[ramenIndex] || 0) +1 }
            setRamenSelecionada({ ...ramenSelecionada, ...ramen});
    }

    return <div className="RamenLista">
        {ramens.map((ramen, index) =>
            <div className="RamenListaItem" key={`RamenListaItem-${index}`}>
                <span className="RamenListaItem__badge"> {ramenSelecionada[index] || 0} </span>
            <div>
                <div className="RamenListaItem__titulo"> {ramen.titulo} </div>
                <div className="RamenListaItem__preco">{ramen.preco}</div>
                <div className="RamenListaItem__descricao"> {ramen.descricao}  </div>
                <div className="RamenListaItem__acoes Acoes">
                <button className="Acoes__adicionar Acoes__adicionar--preencher" onClick={() => adicionarItem(index)}>adicionar</button>
                </div>
            </div>
                <img className="RamenListaItem__foto" src={ramen.foto} alt={ramen.titulo} />
            </div>
        )}
  </div>
  }
  
  export default RamenLista;