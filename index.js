const express = require('express')

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/twitter', (req, res)=> {
  res.send('Hello Twitter!'); 
})
app.get('/login', (req, res)=> {
  res.send('Hello Login!'); 
})
app.get('/youtube', (req, res)=> {
  res.send('Hello YouTube!'); 
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})