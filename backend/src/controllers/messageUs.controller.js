import { MessageUs } from "../models/messageUs.models"

const messageInfo = async ( req, res) => {
    const {fullName, email, contactNumber, message} = req.body

    const messageUs = await MessageUs.create({
        fullName,
        email,
        contactNumber,
        message
    })
}

export {
    messageInfo
}