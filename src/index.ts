import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Express Typescript en Vercel");
});

app.get("/ping", (req, res) => {
  res.send("pong 🏓");
});

app.listen(port, (err?: Error) => {
  if (err) {
    console.error("No se pudo iniciar el servidor:", err);
  } else {
    console.log(`El servidor está escuchando en el puerto ${port}`);
  }
});
