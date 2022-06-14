//import { ramens } from "../../mocks/ramens.js";
//import { useState } from "react";
import "./RamenListaItem.css";

export function RamenListaItem({ ramen, quantidadeSelecionada, index, onRemove, onAdd  }) {


  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="RamenListaItem__badge"> {quantidadeSelecionada} </span>
    );

  return (
    <div className="RamenListaItem" key={`RamenListaItem-${index}`}>
      {badgeCounter(quantidadeSelecionada, index)}

      <div>
        <div className="RamenListaItem__titulo"> {ramen.titulo} </div>
        <div className="RamenListaItem__preco">{ramen.preco}</div>
        <div className="RamenListaItem__descricao"> {ramen.descricao} </div>
        <div className="RamenListaItem__acoes Acoes">
          <button
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
