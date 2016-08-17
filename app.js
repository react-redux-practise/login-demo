import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve('public')));

app.get('*', (req, res)=> {
  res.sendFile('./public');
});

app.listen(3000, ()=> {
  console.log('Server start at http://localhost:3000');
});