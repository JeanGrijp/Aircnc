const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({ // definição do Schema do usuário
    email: {type: String, required: true} // atributo do usuário
})

module.exports = mongoose.model("User", UserSchema)