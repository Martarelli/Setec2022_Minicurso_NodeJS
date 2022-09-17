const mongoose = require('mongoose');

async function startDB(){
    console.log("Tentando conexão ao MongoDB....")
    await mongoose.connect('mongodb+srv://rmartarelli:martarelli102030@nodejs.biydmlw.mongodb.net/test');
    console.log("Conectado MongoDB")
}

module.exports = startDB;