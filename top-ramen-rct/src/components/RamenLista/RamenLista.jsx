import { useState, useEffect } from "react";
import "./RamenLista.css";
import { ramens } from "../../mocks/ramens.js";
import { RamenListaItem } from "../RamenListaItem/RamenListaItem.jsx";
import {
  findAllRamensService,
  findRamensByIdService,
  createRamenfunction,
  updateRamenfunction,
  deleteRamenfunction
} from "../../services/ramenService.js";




function RamenLista() {
  //const [ramens, setRamens] = useState([]);


  const [ramenSelecionada, setRamenSelecionada] = useState({});

  const adicionarItem = (ramenIndex) => {
    const ramen = {
      [ramenIndex]: Number(ramenSelecionada[ramenIndex] || 0) + 1,
    };
    setRamenSelecionada({ ...ramenSelecionada, ...ramen });
  };

  const removerItem = (ramenIndex) => {
    const ramen = {
      [ramenIndex]: Number(ramenSelecionada[ramenIndex] || 0) - 1,
    };
    setRamenSelecionada({ ...ramenSelecionada, ...ramen });
  };


  /************Get do Service**************/
  /*const getLista = async () => {
    const response = await findAllRamensService();
    console.log(response);
    setRamens(response);
  };
  
  useEffect( async () => {
    await getLista();
  }, []);*/

  //console.log("oiiiiiiiiiiiii")
/*************************************** */

  return (
    <div className="RamenLista">
      {ramens.map((ramen, index) => (
        <RamenListaItem
          key={`RamenListaItem-${index}`}
          ramen={ramen}
          quantidadeSelecionada={ramenSelecionada[index]}
          index={index}
          onAdd={index => adicionarItem(index)}
		    	onRemove={index => removerItem(index)}
        />
      ))}
    </div>
  );
}

export default RamenLista;
