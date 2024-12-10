import mongoose from "mongoose"

const appointmentSchema = new mongoose.Schema({
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
},
{
    timestamps: true
}
)

export const AppointmentSchema = mongoose.model("AppointmentSchema", appointmentSchema)