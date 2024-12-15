import mongoose from "mongoose"

const messageUsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    service: {
        type: String
    }
},
{
    timestamps: true
}
)

export const MessageUs = mongoose.model("MessageUs", messageUsSchema)