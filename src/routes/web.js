import express from "express";

const router = express.Router();

const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        return res.send('hello');
    });
    return app.use("/", router);
};

export default initWebRoute;
