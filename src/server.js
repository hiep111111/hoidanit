import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoute from "./routes/web"

const app = express()

//configviewengine
configViewEngine(app);

//initwebroute
initWebRoute(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT), () => {
    console.log("app is listening on Port "+PORT);
}