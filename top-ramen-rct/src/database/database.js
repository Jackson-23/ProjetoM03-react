import mongoose from "mongoose";

function connectToDatabase() {
  mongoose
    .connect("mongodb://localhost:27017/ramens-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MONGO DB CONECTADO");
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

export default connectToDatabase;