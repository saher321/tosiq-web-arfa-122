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