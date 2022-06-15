import Api from "../helper/Api.js";

const parseResponse = (response) => response.json();

export const RamenService = {
  getLista: () =>
    fetch(Api.ramenLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch("http://localhost:3050/ramens/one-ramen/"+id, { method: "GET" }).then(parseTransformItem),
  create: (ramen) => fetch(Api.createRamen(), { method: "POST", body: JSON.stringify(ramen), mode: "cors", headers: {
      "Content-Type": "application/json",
  } }).then(parseTransformItem),
  updtateById: (id) =>
    fetch(Api.updateRamenById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteRamenById(id), { method: "DELETE" }).then(parseResponse),
};

export default RamenService



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

const parseTransformItem = (response) => parseResponse(response).then(transformRamen);

const parseTransformLista = (response) =>
  parseResponse(response).then((ramens) => ramens.map(transformRamen));