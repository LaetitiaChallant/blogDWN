import "dotenv/config";

import express from "express";


const app = express();


app.get("/", (req, res) => {
  res.send('ok');
});


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});