import express from 'express';
import {
  GetfindAllRamens,
  GetfindRamensById,
  createRamen,
  updateRamen,
  deleteRamen,
} from '../controller/controller.js';
import Api from "../helper/Api.js"

const routers = express.Router();

//Rotas
//routers.get("/");
routers.get(Api.ramenLista(), GetfindAllRamens);
routers.get(Api.ramenById(':id'), GetfindRamensById);
routers.post(Api.createRamen(), createRamen);
routers.put(Api.updateRamenById(':id'), updateRamen);
routers.delete(Api.deleteRamenById(':id'), deleteRamen);

export default routers;