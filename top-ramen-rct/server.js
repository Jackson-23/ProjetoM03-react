import express from 'express';
import cors from 'cors';
import routers from './src/routers/RamenRouter.js';
import Api from "./src/helper/Api.js";
import connectToDatabase from './src/database/database.js';
import Ramen from "./src/models/Ramen.js";
import ramens from "./src/mocks/ramens.js";

const app = express();
const PORT = process.env.PORT || 3050;

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use(routers);



app.get('/mocks', function (req, res) { 
  res.send(ramens);
});


app.get(Api.ramenLista() , async (req, res) =>{ 
  const ramenst = await GetRamens();
  console.log(Api.ramenLista());
  res.send(ramenst);
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

//Listen
app.listen(3050, () => {
  console.log('Rodando em: localhost:3050');
});


const GetRamens = async() =>{
  const ramensq = await Ramen.find();
  return ramensq;
}