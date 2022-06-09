import { useState } from "react";
import "./RamenLista.css";
import { ramens } from "../mocks/ramens.js";


function SearchRamen(idParam) {
    //idParam = 1;
    let id = idParam-1;
   
    const [ramenSelecionada, setRamenSelecionada] = useState({});

    const adicionarItem = (ramenIndex) => {
      const ramen = {
        [ramenIndex]: Number(ramenSelecionada[ramenIndex] || 0) + 1,
      };
      setRamenSelecionada({ ...ramenSelecionada, ...ramen });
    };


    if(id < (ramens.length) && id >= 0){
    return(
        
        <div className="RamenListaItem">
          <div>
          <span className="RamenListaItem__badge">
            {" "}
            {ramenSelecionada[id] || 0}{" "}
          </span>
            <div className="RamenListaItem__titulo"> {ramens[id].titulo} </div>
            <div className="RamenListaItem__preco">{ramens[id].preco}</div>
            <div className="RamenListaItem__descricao"> {ramens[id].descricao} </div>
            <div className="RamenListaItem__acoes Acoes">
            <button
                className="Acoes__adicionar Acoes__adicionar--preencher"
                onClick={() => adicionarItem(id)}
              >
                próximo
              </button>
            </div>
          </div>
          <img className="RamenListaItem__foto" src={ramens[id].foto} alt={ramens[id].titulo}/>
        </div>
    );
    }
  }
  
  export default SearchRamen;