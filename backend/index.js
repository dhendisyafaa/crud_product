import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import ProductRoute from "./routes/product.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(port, () => {
  console.log(`Server running in port ${port}...`);
});
