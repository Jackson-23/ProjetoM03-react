import Api from "../helper/Api.js";

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
