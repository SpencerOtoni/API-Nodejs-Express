import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            index: { unique: true },
            required: true,
        },
        password: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

UserSchema.pre('save', async function hashPassword(next) {
    if (!this.isModified('password')) next()

    this.password = await bcrypt.hash(this.password, 8)
})

UserSchema.methods = {
    compareHash(hash) {
        return bcrypt.compare(hash, this.password)
    },
}

export default mongoose.model('User', UserSchema)
