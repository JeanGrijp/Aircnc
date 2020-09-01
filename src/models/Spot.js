const mongoose = require('mongoose')
const SpotSchema = new mongoose.Schema({ 
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String], //um array de strings
    user: {
        type: mongoose.Schema.Types.ObjectId, // para salvar o ID do banco do usuário que está acessando     
        ref: 'User'
    }
})

module.exports = mongoose.model("Spot", SpotSchema)