import express from "express";

const userRouter = express.Router();

userRouter.get("/edit", (req, res) =>{
    res.send('user edit!!! {user router}')
});

userRouter.get("/remove", (req, res) =>{
    res.send('user remove!!! {user router}')
});

export default userRouter;