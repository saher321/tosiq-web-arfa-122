import Customer from "./customer.model.js"

export const allCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({})
        if (customers.length > 0) {
            return res.send({
                status: true,
                customers
            })
        } else {
            return res.send({
                status: false,
                message: "No records were found!"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const addCustomer = async (req, res) => {
    const { fullName, email, contact, address } = req.body
    if (!fullName || !email || !contact || !address) {
        return res.send({
            status: false,
            message: "Fill all remaining field"
        })
    }

    try {
        const customer = await Customer.findOne({email: email})
        if (customer) {
            return res.send({
                status: false, 
                message: "Customer already exist with this email"
            })
        }

        const customerObj = { fullName, email, contact, address }
        const result = await Customer.create(customerObj)
        if (result) {
            return res.send({
                status: true,
                message: "Customer has been added"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to create customer"
            })
        }

    } catch (error) {
        console.log(error)
    }
}