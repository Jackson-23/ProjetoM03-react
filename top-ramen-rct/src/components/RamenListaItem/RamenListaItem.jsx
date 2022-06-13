import { ramens } from "../../mocks/ramens.js";
import { useState } from "react";
import "./RamenListaItem.css";

export function RamenListaItem() {
  const removerItem = (i) => console.log("remover" + i);
  const adicionarItem = (i) => console.log("adicionar" + i);
  const ramenSelecionada = [0];
  const index = 0;
  const ramen = {
    titulo: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("../../assets/images/shoyu-ramen.jpg"),
    preco: 10.0,
    sabor: "Açaí",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  };

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="RamenListaItem__badge"> {ramenSelecionada[index]} </span>
    );

  return (
    <div className="RamenListaItem" key={`RamenListaItem-${index}`}>
      {badgeCounter(ramenSelecionada[index], index)}

      <div>
        <div className="RamenListaItem__titulo"> {ramen.titulo} </div>
        <div className="RamenListaItem__preco">{ramen.preco}</div>
        <div className="RamenListaItem__descricao"> {ramen.descricao} </div>
        <div className="RamenListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !ramenSelecionada[index] && "Acoes__adicionar--preencher"
            }`}
            onClick={() => adicionarItem(index)}
          >
            adicionar
          </button>
          {removeButton(ramenSelecionada[index], index)}
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
