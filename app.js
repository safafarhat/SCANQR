const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


// Parsing request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// MongoDb Schema
const produitsSchema = new mongoose.Schema({
    id: Number,
    type: {type: String, uppercase: true},
    marque: {type: String, uppercase: true},
    modele: {type: String, uppercase: true},
    sn: {type: String, uppercase: true},
    localisation: String
    }, { timestamps: true });

const Produits = mongoose.model('Produits', produitsSchema);


// Requests ....
app.get('/', async (req, res) => {
    const produits= await Produits.find({});
    res.json(produits);
});

app.post('/', async (req, res) => {
  //new Produit(req.body).save();
  await req.body.forEach(async obj=>{
    const newProd= await Produits.findOneAndUpdate({id:obj.id},obj);
    if(newProd!=null){
        await newProd.save();
    }else{
        new Produits(obj).save();
    }
  });
  //ychouf prod w ba3d ya3ml update
  const updatedProd= await Produits.find({});
  res.json(updatedProd);

});

const PORT= 2809;
// Start Server
app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}!`),
);
// Connect to DataBase
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/ELFO", () => {
  console.log("Connected to MongoDB");
});