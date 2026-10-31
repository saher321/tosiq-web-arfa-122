import User from "./user.model.js"

export const getAllUsers = async (req, res) => {
    try {
        const clients = await User.find({})
        return res.send({
            status: true,
            clients
        })
    } catch (error) {
        console.log(error)
    }
}