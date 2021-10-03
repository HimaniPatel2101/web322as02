// Author
// Name: Himani Manishkumar Patel
// StudentID: 141693200
// Email: hmpatel57@myseneca.ca
const express = require('express');
var path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join( __dirname,'/views/home.html'));
});
app.get('/assets/logo', (req, res) => {
  res.sendFile(path.join( __dirname,'/assets/logo.jpeg'));
});
app.get('/assets/hero', (req, res) => {
  res.sendFile(path.join( __dirname,'/assets/hero3.jpeg'));
});
app.get('/assets/plan', (req, res) => {
  res.sendFile(path.join( __dirname,'/assets/hero1.jpg'));
});
app.get('/assets/cardlogo1', (req, res) => {
  res.sendFile(path.join( __dirname,'/assets/cardlogo1.png'));
});
app.get('/assets/cycle', (req, res) => {
  res.sendFile(path.join( __dirname,'/assets/cycle.png'));
});
app.get('/assets/car', (req, res) => {
  res.sendFile(path.join( __dirname,'/assets/car.png'));
});
app.get('/assets/rocket', (req, res) => {
  res.sendFile(path.join( __dirname,'/assets/rocket.png'));
});
app.get('/assets/cardlogo2', (req, res) => {
  res.sendFile(path.join( __dirname,'/assets/cardlogo2.png'));
});
app.get('/assets/cardlogo3', (req, res) => {
  res.sendFile(path.join( __dirname,'/assets/cardlogo3.png'));
});
app.get('/assets/cardlogo4', (req, res) => {
  res.sendFile(path.join( __dirname,'/assets/cardlogo4.png'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.join( __dirname,'/views/home.html'));
});
app.get('/plans', (req, res) => {
  res.sendFile(path.join( __dirname,'/views/plans.html'));
});
app.get('/signup', (req, res) => {
  res.sendFile(path.join( __dirname,'/views/signup.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join( __dirname,'/views/login.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})