import express from 'express';
import {
  GetfindAllRamens,
  GetfindRamensById,
  createRamen,
  updateRamen,
  deleteRamen,
} from '../controller/controller.js';
import {Api, Route} from "../helper/Api.js"

const routers = express.Router();

//Rotas
//routers.get("/");
routers.get(Route.ramenLista(), GetfindAllRamens);
routers.get(Route.ramenById(':id'), GetfindRamensById);
routers.post(Route.createRamen(), createRamen);
routers.put(Route.updateRamenById(':id'), updateRamen);
routers.delete(Route.deleteRamenById(':id'), deleteRamen);

export default routers;