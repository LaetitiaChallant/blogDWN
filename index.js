import express from "express";


const app = express();


app.get("/", (req, res) => {
  res.send('ok');
});


const port = 3001;
app.listen(port, () => {
  console.log(`Server started ar http://localhost:${port}`);
});