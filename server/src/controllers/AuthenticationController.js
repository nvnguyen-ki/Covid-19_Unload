const {User} = require('../models')
module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
        } catch (err) {
            res.status(400).send({
                error:'Email has already been used.'
            })
        }
    },

    async login (req, res) {
        try {
            const {email,password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                res.status(403).send({
                    error:'the login information was incorrect.'
                })
            }
            console.log(password,user.password)
            console.log(email,user.email)
            const isPasswordValid = password === user.password
            if (!isPasswordValid) {
                return res.status(403).send({
                    error:'Incorrect password.'
                })
            }
            const userJson = user.toJSON()
            res.send({
              user: userJson
            })
        } catch (err) {
            res.status(500).send({
                error:'Invalid login information.'
            })
        }
    }



}