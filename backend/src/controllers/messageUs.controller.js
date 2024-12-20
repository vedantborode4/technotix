import { MessageUs } from "../models/messageUs.models.js"

const messageInfo = async ( req, res) => {
    const {fullName, email, contactNumber, message, service} = req.body

    const messageUs = await MessageUs.create({
        fullName,
        email,
        contactNumber,
        message,
        service
    })

    return res.status(201).json("message delivered")
}

export {
    messageInfo
}