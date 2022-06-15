import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import "./AdicionaEditaRamenModal.css";
import RamenService from "../../services/ramenServiceFront.js"

function AdicionaEditaRamenModal({ closeModal, onCreatePaleta }) {
  const form = {
    preco: "",
    sabor: "",
    recheio: "",
    descricao: "",
    foto: "",
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };
  //Disable button

  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.foto.length &&
        state.sabor.length &&
        state.preco.length
    );

    setCanDisable(response);
  };
  useEffect(() => {
    canDisableSendButton();
  });



  //Criar novo Ramen

  const createRamen = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split('\\').pop();

    const { sabor, recheio, descricao, preco, foto } = state;

    const titulo = sabor + (recheio && ' com ' + recheio);

    const paleta = {
        sabor: titulo,
        descricao,
        preco,
        foto: `assets/images/${renomeiaCaminhoFoto(foto)}`
    }

    const response = await RamenService.create(paleta);
    onCreatePaleta(response);
    closeModal();
}



  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaEditaRamenModal">
        <form autocomplete="off">
          <h2> Adicionar ao Cardápio </h2>
          <div>
            <label className="AdicionaEditaRamenModal__text" htmlFor="preco">
              {" "}
              Preco:{" "}
            </label>
            <input
              id="preco"
              placeholder="10,00"
              type="text"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
              required
            />
          </div>
          <div>
            <label className="AdicionaEditaRamenModal__text" htmlFor="sabor">
              {" "}
              Sabor:{" "}
            </label>
            <input
              id="sabor"
              placeholder="Shoyu"
              type="text"
              value={state.sabor}
              onChange={(e) => handleChange(e, "sabor")}
              required
            />
          </div>
          <div>
            <label className="AdicionaEditaRamenModal__text" htmlFor="recheio">
              {" "}
              Recheio:{" "}
            </label>
            <input
              id="recheio"
              placeholder="Legumes"
              type="text"
              value={state.recheio}
              onChange={(e) => handleChange(e, "recheio")}
              required
            />
          </div>
          <div>
            <label className="AdicionaEditaRamenModal__text" htmlFor="descricao">
              {" "}
              Descricao:{" "}
            </label>
            <input
              id="descricao"
              placeholder="Detalhe o produto"
              type="text"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
              required
            />
          </div>
          <div>
            <label
              className="AdicionaEditaRamenModal__text  AdicionaEditaRamenModal__foto-label"
              htmlFor="foto"
            >
              {!state.foto.length ? "Selecionar Imagem" : state.foto}
            </label>
            <input
              className=" AdicionaEditaRamenModal__foto"
              id="foto"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>

          <button
            className="AdicionaEditaRamenModal__enviar"
            type="button"
            disabled={canDisable}
            onClick={createRamen}
          >Enviar</button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaEditaRamenModal;
