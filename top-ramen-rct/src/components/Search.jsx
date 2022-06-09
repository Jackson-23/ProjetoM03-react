//import { useState } from "react";
import "./RamenLista.css";
import { ramens } from "../mocks/ramens.js";

function SearchInput(){

return <div>
    <input type="number" id="idRamen" placeholder="Digite o ID do Ramem"/>
    <button id="idPaletaButton" onclick="SearchRamen()"> Procurar </button>
</div>
}

function SearchRamen(idParam) {
    let id = idParam-1;
    //const [ramenSelecionada, setRamenSelecionada] = useState({});

    //const chosenRamen = ramens.find((ramens) => ramens.id === "1");
    // const badgeCounter = (canRender, index) =>
	// Boolean(canRender) && (<span className="PaletaListaItem__badge"> {paletaSelecionada[index]} </span>);
    if(id < (ramens.length) && id >= 0){
    return(
        
        <div className="RamenListaItem"/* key={`RamenListaItem-${index}`}*/>
          <div>
            <div className="RamenListaItem__titulo"> {ramens[id].titulo} </div>
            <div className="RamenListaItem__preco">{ramens[id].preco}</div>
            <div className="RamenListaItem__descricao"> {ramens[id].descricao} </div>
            <div className="RamenListaItem__acoes Acoes">
            </div>
          </div>
          <img className="RamenListaItem__foto" src={ramens[id].foto} alt={ramens[id].titulo}/>
        </div>
    );
    }
  }
  
  export default SearchRamen;