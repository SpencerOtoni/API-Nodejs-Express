import mongoose, { Schema } from 'mongoose'

const ConnectorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            enum: ['REST', 'BD', 'SOAP'],
        },
        privacy: {
            type: String,
            required: true,
            enum: ['PUBLIC', 'PRIVATE'],
        },
        base_URL: {
            type: String,
        },
        logo_URL: {
            type: String,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Connector', ConnectorSchema)
