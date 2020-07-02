import path from 'path';
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use('/UI', express.static(path.join(__dirname, '../UI')));

export default  app;
