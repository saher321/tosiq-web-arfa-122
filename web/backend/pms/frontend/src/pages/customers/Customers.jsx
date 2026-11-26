import React, { useEffect, useState } from 'react'
import WebLayout from '../../layouts/WebLayout'
import { MoreHorizontal, Plus } from 'lucide-react'
import axios from 'axios'
import { CUSTOMERS_API } from '../../utils/server_apis.js'
import toast from 'react-hot-toast'

const projects = [
    { name: "E-commerce Platform", client: "Fashion Store", progress: 25, status: "Pending", color: "bg-orange-500" },
];
const statusStyle = {
    "In Progress": "bg-blue-50 text-blue-600",
    Completed: "bg-green-50 text-green-600",
    Pending: "bg-orange-50 text-orange-600",
};
const Customers = () => {
    const [customers, setCustomers] = useState([])

    const getAllCustomers = async () => {
        try {
            const response = await axios.get(CUSTOMERS_API)
            if (response.data.status == true) {
                setCustomers(response.data.customers)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("Error:", error)
        }
    }

    useEffect(() => {
        getAllCustomers()
    }, [])

    return (
        <WebLayout>
            <div className="">
                {/* Customer */}
                <section id="customers" className="bg-white rounded-2xl border border-slate-100 shadow-sm mb-8">
                    <div className="flex items-center justify-between p-5 md:p-6 border-b border-slate-100">
                        <div>
                            <h3 className="font-bold text-lg">Customers</h3>
                            <p className="text-xs text-slate-400 mt-1">Operate your client on one go</p>
                        </div>
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold">
                            <Plus size={17} /> <span className="hidden sm:inline">New Customer</span>
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left min-w-[600px]">
                            <thead className="bg-slate-50 text-xs text-slate-400 uppercase">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Full Name</th>
                                    <th className="px-6 py-4 font-semibold">Email</th>
                                    <th className="px-6 py-4 font-semibold">Contact</th>
                                    <th className="px-6 py-4 font-semibold">Address</th>
                                    <th className="px-6 py-4 font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, i) => (
                                    <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
                                        <td className="px-6 py-5">
                                            <p className="font-semibold text-sm">{customer.name}</p>
                                        </td>
                                        <td className="px-6 py-5 w-48">
                                            <p className="font-semibold text-sm">{customer.email}</p>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="font-semibold text-sm">{customer.contact}</p>
                                        </td>
                                        <td className="px-6 py-5">
                                            {customer.address}
                                        </td>
                                        <td className="px-6 py-5">
                                            <button className="text-slate-400 hover:text-blue-600">
                                                <MoreHorizontal size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </WebLayout>
    )
}

export default Customers