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

export const addUser = async (req, res) => {
    const { name, email } = req.body

    // validation
    if (!name || !email) {
        return res.send({
            status: false,
            message: "Fill all remaining fields"
        })
    }
    try {
        // checking existing user from db
        const user = await User.findOne({email: email})

        if (user) {
            return res.send({
                status: false,
                message: "Client already registered"
            })
        }

        // inserting new user
        const newUser = await User.create({name, email})

        return res.send({
            status: true,
            message: "Client has been created"
        })
    } catch (error) {
        console.log(error)
    }
}