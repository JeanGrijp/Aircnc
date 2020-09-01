const Spot = require('../models/Spot')
const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const {tech} = req.query
        const spots = await Spot.find({techs: tech})
    },

    async store(req, res){
        const { filename } = req.file;
        const {company, techs, price} = req.body;
        const {user__id} = req.headers
        const user = User.findById(user__id)
        if (!user){
            return res.status(400).json({error: 'Usuário não existe'})
        }

        const spot = await Spot.create({
            user = user__id,
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim())
        })
    }    
}
4