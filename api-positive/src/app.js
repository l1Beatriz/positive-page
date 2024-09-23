import express from "express";
import connectDataBase from "./config/configDataBase.js";
import routes from "./routes/index.js";

  

const connection = await connectDataBase();

connection.on("error", (error) => {
    console.error("erro na conexão", error)
})

connection.once("open", () => {
    console.log("Conexão feita com sucesso");
})

const app = express();
routes(app);



export default app;
