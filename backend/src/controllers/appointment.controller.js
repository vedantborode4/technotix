import { Appointment } from "../models/appointment.models"

const messageUs = async ( req, res) => {
    const {fullName, email, contactNumber, message} = req.body

    const appointment = await Appointment.create({
        fullName,
        email,
        contactNumber,
        message
    })
}

export {
    messageUs
}