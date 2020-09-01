const mongoose = require('mongoose')
const BookingSchema = new mongoose.Schema({ 
    date: String,
    user: {
        type: mongoose.Schema.Types.ObjectId, // para salvar o ID do banco do usuário que está acessando     
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, // para salvar o ID do banco do usuário que está acessando     
        ref: 'Spot'
    }
})

module.exports = mongoose.model("Booking", BookingSchema)