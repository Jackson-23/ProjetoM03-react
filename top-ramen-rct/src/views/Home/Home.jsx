import RamenLista from "../../components/RamenLista/RamenLista.jsx";
import "../Home/Home.css";
import { Navbar } from "components/Navbar/Navbar.jsx";
import AdicionaRamenModal from "../../components/AdicionaRamenModal/AdicionaRamenModal.jsx";
import { useState } from "react";

function Home() {

  const [canShowAdicionaRamenModal, setCanShowAdicionaRamenModal] = useState(false);

  const [ramenParaAdicionar, setRamenParaAdicionar] = useState();


  return (
    <div className="Home">
      <div className="Home__header Header">
        <Navbar  createRamen={() => setCanShowAdicionaRamenModal(true)} />
      </div>
      <div className="Home__container">
        
        <RamenLista ramenCriada={ramenParaAdicionar}/>
        {
            canShowAdicionaRamenModal &&
            (<AdicionaRamenModal closeModal={() => setCanShowAdicionaRamenModal(false)}
            onCreatePaleta={(ramen) => setRamenParaAdicionar(ramen)} />)
        }
        

      </div>
    </div>
  );
}

export default Home;
