import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Prisma!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)  
});