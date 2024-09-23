import express from "express";
import phrase from "./phraseRouter.js";

const routes = (app) => {
    app.route("/", (req, res) => {
        res.status(200).send({message: "PositiveAPI"})
    })

    app.use(express.json(), phrase);
}

export default routes;