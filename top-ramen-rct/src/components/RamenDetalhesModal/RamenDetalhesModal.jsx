import "./RamenDetalhesModal.css";
import Modal from "../Modal/Modal.jsx";



function RamenDetalhesModal({ ramen, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="RamenDetalhesModal">
        <div>
          <div className="RamenDetalhesModal__titulo"> {ramen.titulo} </div>
          <div className="RamenDetalhesModal__preco">
            {" "}
            R$ {Number(ramen.preco).toFixed(2)}{" "}
          </div>
          <div className="RamenDetalhesModal__descricao">
            {" "}
            <b>Sabor:</b> {ramen.sabor}{" "}
          </div>
          {ramen.recheio && (
            <div className="RamenDetalhesModal__descricao">
              {" "}
              <b>Recheio:</b> {ramen.recheio}{" "}
            </div>
          )}
          <div className="RamenDetalhesModal__descricao">
            {" "}
            <b>Descrição:</b> {ramen.descricao}{" "}
          </div>
        </div>
        <img
          className="RamenDetalhesModal__foto"
          src={ramen.foto}
          alt={`Paleta de ${ramen.sabor}`}
        />
      </div>
    </Modal>
  );
}

export default RamenDetalhesModal;

