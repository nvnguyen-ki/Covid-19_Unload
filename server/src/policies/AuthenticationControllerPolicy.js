const Joi = require('joi')
module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{7,32}$')
            )
        }
        const {error} = Joi.validate(req.body,schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'The password provided failed to meet the qualifications below:  <br>1. Must contain only the following characters, lower case, numerics. <br> 2. It must be at least 8 characters in length and not greater than 32 characters in length.'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid login.'
                    })
            }
        } else {
            next()
        }
    }
}