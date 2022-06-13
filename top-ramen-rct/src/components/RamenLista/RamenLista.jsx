import { useState } from "react";
import "./RamenLista.css";
import { ramens } from "/DESK/Repos/ProjetoM03-react/top-ramen-rct/src/mocks/ramens.js";


function RamenLista() {
    const [ramenSelecionada, setRamenSelecionada] = useState({});

    const adicionarItem = (ramenIndex) => {
            const ramen = { [ramenIndex]: Number(ramenSelecionada[ramenIndex] || 0) +1 }
            setRamenSelecionada({ ...ramenSelecionada, ...ramen});
    }

    const removerItem = (ramenIndex) => {
        const ramen = { [ramenIndex]: Number(ramenSelecionada[ramenIndex] || 0) -1 }
        setRamenSelecionada({...ramenSelecionada, ...ramen});
    }
    const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);

    const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="RamenListaItem__badge"> {ramenSelecionada[index]} </span>);


    return <div className="RamenLista">
        {ramens.map((ramen, index) =>
            <div className="RamenListaItem" key={`RamenListaItem-${index}`}>
                {badgeCounter(ramenSelecionada[index], index)}

                
            <div>
                <div className="RamenListaItem__titulo"> {ramen.titulo} </div>
                <div className="RamenListaItem__preco">{ramen.preco}</div>
                <div className="RamenListaItem__descricao"> {ramen.descricao}  </div>
                <div className="RamenListaItem__acoes Acoes">
                <button className={`Acoes__adicionar ${!ramenSelecionada[index] && "Acoes__adicionar--preencher"}`} onClick={() => adicionarItem(index)}>adicionar</button>
                {removeButton(ramenSelecionada[index], index)}
                </div>
            </div>
                <img className="RamenListaItem__foto" src={ramen.foto} alt={ramen.titulo} />
            </div>
        )}
  </div>
  }
  
  export default RamenLista;