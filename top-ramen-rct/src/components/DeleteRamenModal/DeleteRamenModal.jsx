import "./DeleteRamenModal.css";
import Modal from "components/Modal/Modal";
import { RamenService } from "../../services/ramenServiceFront.js";

function DeleteRamenModal({ closeModal, ramenParaDeletar, onDeleteRamen }) {
  const handleDelete = async (ramen) => {
    await RamenService.deleteById(ramen.id);
    onDeleteRamen(ramen);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeleteRamenModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover <b>{ramenParaDeletar.titulo}</b> do
          cardápio?
        </p>

        <img
          className="DeleteRamenModal__foto"
          src={ramenParaDeletar.foto}
          alt={ramenParaDeletar.titulo}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(ramenParaDeletar)}
            className="DeleteRamenModal__confirmar"
          >
            {" "}
            Confirmar{" "}
          </button>
          <button onClick={closeModal} className="DeleteRamenModal__cancelar">
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteRamenModal;