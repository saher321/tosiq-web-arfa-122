import { categories } from "../utils/dummyData.js"


export const allCategories = (req, res) => {
    return res.send({
        status: true,
        categories
    })
}