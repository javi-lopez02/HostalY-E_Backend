import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import path from "path";
import oferts from "./Routes/oferts.routes";
import gastronomic from "./Routes/gastronomic.routes";
import desserts from "./Routes/desserts.routes";
import events from "./Routes/events.routes";
import gallery from "./Routes/gallery,routes";
import snacks from "./Routes/snacks.routes";
import drinks from "./Routes/drinks.routes";

dotenv.config();

const app = express();
const port = 4000;

// app.use(
//   cors({
//     origin: [
//       "http://localhost:4173",
//       "http://localhost:5173",
//       "http://localhost:5174",
//       "https://hostal-y-e-frontend.vercel.app/",
//       "https://hostal-y-e-admin.vercel.app/"
//     ],
//     credentials: true,
//   })
// );
app.use(cors({ origin: 'https://hostal-y-e-frontend.vercel.app' }));

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// app.use("/api/auth", login);
app.use("/api", oferts, gastronomic, gallery, snacks, events, desserts, drinks);

app.use("/public", express.static(path.join(__dirname, "/upload")));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
