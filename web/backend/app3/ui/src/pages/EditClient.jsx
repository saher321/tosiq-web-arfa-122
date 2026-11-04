import React, { useState } from 'react'
import WebLayout from '../layouts/WebLayout.jsx'
import { Link, useNavigate, useParams } from 'react-router'
import InputField from '../components/InputField.jsx'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'
import { EDIT_USER_API, UPDT_USER_API } from '../utils/server_apis.js'
import { useEffect } from 'react'

const EditClient = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const params = useParams()

    const getSingleClient = async () => {
        try {
            const response = await axios.get(`${EDIT_USER_API}/${params.id}`)
            console.log(response.data)
            if (response.data.status == true) {
                reset(response.data.client)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            console.log(error)
        }
    }

    const handleUpdateClient = async (data) => {
        try {
            setLoading(true)
            const response = await axios.put(UPDT_USER_API, data)
            if (response.data.status == true) {
                toast.success(response.data.message)
                setLoading(false)
                navigate("/clients", {replace: true})
            } else {
                toast.error(response.data.message)
                setLoading(false)
            }
        } catch (error) {
            toast.error("Internal server error")
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleClient()
    }, [])

    return (
        <WebLayout>
        <div>
            <div className='my-10 flex items-center justify-between'>
                <div>
                    <div className="font-bold text-xl">
                        Edit client [#{params.id}]
                    </div>
                    <div className='text-sm italic text-gray-500'>
                        Correct the fields and hit update button
                    </div>
                </div>
                <Link
                to={'/clients'}
                className='bg-[#186049] text-white shadow-md rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300'
                >View all</Link>
            </div>
            <div className='max-w-md mx-auto'>
                <form onSubmit={handleSubmit(handleUpdateClient)} className='w-full'>
                    <div className='grid grid-cols-12 gap-3'>
                        <div className="col-span-12">
                            <label htmlFor="">Full name</label>
                            <InputField
                            { ...register("name") }
                            type='text'
                            hint='e.g: Alex Morgan'
                            />
                        </div>
                        <div className="col-span-12">
                            <label htmlFor="">Email Address</label>
                            <InputField 
                            { ...register("email") }
                            type="email" 
                            hint='e.g: alex@email.com'/>
                        </div>
                        <div className="col-span-12">
                            <button
                            disabled={loading}
                            className='disabled:cursor-not-allowed disabled:bg-[#485d57] bg-[#186049] text-white shadow-md rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300'
                            >
                                {loading ? "Please wait..." : "Update client"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </WebLayout>
    )
}

export default EditClient
