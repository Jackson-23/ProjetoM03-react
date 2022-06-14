import Ramen from '../models/Ramen.js' ;
const Ramen1 = Ramen;

//funtions
export const findAllRamensService = async () => {
  const ramens = await Ramen1.find();
  return ramens;
};

export const findRamensByIdService = async (id) => {
  const ramens = await Ramen1.findById((id));
  return (ramens);
};

export const createRamenfunction = async (newRamen) => {
  const ramenNovo = await Ramen1.create(newRamen)
  return ramenNovo;
};

export const updateRamenfunction = async (id, ramenEdited) => {
    const ramenModificada = await Ramen1.findByIdAndUpdate(id, ramenEdited);
    return ramenModificada;
};

export const deleteRamenfunction = async (id) => {
    return await Ramen1.findByIdAndDelete(id);
};





/****************************************** */
/*
import Api from "../helper/Api.js";
import ramens from "../mocks/ramens.js"

const parseResponse = (response) => response.json();

export const RamenService = {
  getLista: () =>
    fetch(Api.ramenLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.ramenById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createramen(), { method: "POST" }).then(parseResponse),
  updtateById: (id) =>
    fetch(Api.updateramenById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteramenById(id), { method: "DELETE" }).then(parseResponse),
};




const transformRamen = (ramen) => {
  const [sabor, recheio] = ramen.sabor.split(" com ");

  return {
    ...ramen,
    id: ramen._id,
    titulo: ramen.sabor,
    sabor,
    ...(recheio && { recheio }),
    possuiRecheio: Boolean(recheio),
  };
};



const parseTransformLista = (response) =>
  parseResponse(response).then((ramens) => ramens.map(transformRamen));
*/