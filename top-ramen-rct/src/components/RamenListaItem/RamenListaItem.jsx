//import { ramens } from "../../mocks/ramens.js";
//import { useState } from "react";
import "./RamenListaItem.css";
import { ActionMode } from "../../constants/index.js";

export function RamenListaItem({
  ramen,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button disabled={mode !== ActionMode.NORMAL} className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="RamenListaItem__badge"> {quantidadeSelecionada} </span>
    );


  const badgeAction = (canRender) => {
    if (canRender) return (<span className="RamenListaItem__tag"> { mode } </span>);
  }

  return (
    <div
    className={`RamenListaItem ${mode !== ActionMode.NORMAL && 'RamenListaItem--disable'}`}
      onClick={() => clickItem(ramen.id)}
      key={`RamenListaItem-${index}`}
    >
      {badgeCounter(quantidadeSelecionada, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}

      <div>
        <div className="RamenListaItem__titulo"> {ramen.titulo} </div>
        <div className="RamenListaItem__preco">{ramen.preco}</div>
        <div className="RamenListaItem__descricao"> {ramen.descricao} </div>
        <div className="RamenListaItem__acoes Acoes">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={() => onAdd(index)}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="RamenListaItem__foto"
        src={ramen.foto}
        alt={ramen.titulo}
      />
    </div>
  );
}
