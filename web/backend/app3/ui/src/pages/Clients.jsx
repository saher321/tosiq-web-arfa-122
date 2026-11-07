import React, { useState, useEffect } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { DEL_USER_API, USERS_API } from '../utils/server_apis.js'
import { Link } from 'react-router'
import { Trash, UserPen } from 'lucide-react'
import toast from 'react-hot-toast'

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

    const handleDeleteClient = async (id) => {
        
        if (!confirm("Delete this record ?")) return;

        try {
            const response = await axios.delete(`${DEL_USER_API}/${id}`)
            if (response.data.status == true) {
                toast.success(response.data.message)
                setClients(response.data.clients)
            } else {
                toast.error(response.data.message)
            }
            // setClients(response.data.clients)
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
                <div className='my-10 flex items-center justify-between'>
                    <div></div>
                    <Link
                    to={'/clients/add'}
                    className='bg-[#186049] text-white shadow-md rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300'
                    >Add client</Link>
                </div>
                {
                    clients.length == 0 && 
                    <div className="my-10 text-center italic text-gray-500">Not items were found</div>
                }
                <div className='grid grid-cols-12 gap-3'>
                    { clients.map((client) => {
                        return (
                            <div key={client._id} className="col-span-4">
                                <div className='flex justify-between border border-[#186049]/15 transition-all hover:-translate-y-1 bg-white shadow p-5 rounded-xl hover:border-[#186049]'>
                                    <div>
                                        <div className='font-bold text-[20px]'>{ client.name }</div>
                                        <div className='text-gray-600'>{ client.email }</div>
                                    </div>
                                    <div className='flex flex-col items-start gap-3'>
                                        <button onClick={() => handleDeleteClient(client._id)} className="cursor-pointer hover:shadow hover:text-red-600 rounded-full bg-gray-200 p-2">
                                            <Trash size={20}/>
                                        </button>
                                        <Link to={`/clients/edit/${client._id}`} className="cursor-pointer hover:shadow hover:text-blue-600 rounded-full bg-gray-200 p-2">
                                            <UserPen size={20}/>
                                        </Link>
                                    </div>
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