const express = require('express')
const app = express();
const path = require('path')

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;
var hostname = "127.0.0.1";

app.use(bodyParser.urlencoded({extended : true}));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/rating');
  {
    console.log("successfully connected");
  }
}

const publicfile = path.join(__dirname, './public');
app.use(express.static(publicfile));

const customerSchema = new mongoose.Schema({
    FirstQues: String,
    SecondQues: String,
    ThirdQues: String,
    FourthQues: String,
    FifthQues: String
  });

  const customer = mongoose.model('customer', customerSchema);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.post('/main.html', (req, res) => {
  var myData = new customer(req.body);
  myData.save().then(() => {
    // res.send("this item is saved successfully");
  }).catch(() => {
    res.status(400).send("item is not saved into database ");
  })
});

  app.listen(port,hostname, () => {
    console.log(`The application started successfully at http://${hostname}:${port}`);
  })