import express from "express";
import cors from "cors";
const port = 5050;
import router from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
// }));

app.use("/", router);

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
