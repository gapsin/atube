import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) =>{
    res.send ('welcome enjoy btube!')
});

globalRouter.get("/join", (req, res) =>{
    res.send('join!!! {global router}')
});

globalRouter.get("/login", (req, res) =>{
    res.send('login!!! {global router}')
});

globalRouter.get("/search", (req, res) =>{
    res.send('search!!! {global router}')
});

export default globalRouter;