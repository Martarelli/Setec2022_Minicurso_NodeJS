const mongoose = require('mongoose');

async function startDB(){
    console.log("Tentando conexão ao MongoDB....")
    await mongoose.connect('mongodlink');
    console.log("Conectado MongoDB")
}

module.exports = startDB;