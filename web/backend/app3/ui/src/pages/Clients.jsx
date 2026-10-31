import React, { useState, useEffect } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { USERS_API } from '../utils/server_apis.js'
import { Link } from 'react-router'

const Clients = () => {
    const [clients, setClients] = useState([])

    const getAllClients = async () => {
        try {
            const response = await axios.get(USERS_API)
            console.log(response.data.clients)
            setClients(response.data.clients)
        } catch (error) {
            console.error("Error:", error)
        }
    }

    useEffect(() => {
        getAllClients()
    }, [])

    return (
        <WebLayout>
            <div>
                <div className='my-5 flex items-center justify-between'>
                    <div></div>
                    <Link
                    to={'/clients/add'}
                    className='bg-[#186049] text-white shadow-md rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300'
                    >Add client</Link>
                </div>
                <div className='grid grid-cols-12 gap-3'>
                    { clients.map((client) => {
                        return (
                            <div key={client._id} className="col-span-4">
                                <div className='border border-[#186049]/15 transition-all hover:-translate-y-1 bg-white shadow p-5 rounded-xl hover:border-[#186049]'>
                                    <div className='font-bold text-[20px]'>{ client.name }</div>
                                    <div className='text-gray-600'>{ client.email }</div>
                                </div>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </WebLayout>
    )
}

export default Clients