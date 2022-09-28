import jpk from 'mongoose'
import bcrypt from 'bcryptjs'

const {Schema, model} = jpk

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: String
})

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt) 
}

userSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password)
}

export default model('User', userSchema)