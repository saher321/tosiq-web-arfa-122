import React, { useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { Link, useNavigate } from 'react-router'
import InputField from '../components/InputField'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'
import { ADD_USER_API } from '../utils/server_apis.js'

const AddClient = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const insertClient = async (data) => {
        try {
            setLoading(true)
            const response = await axios.post(ADD_USER_API, data)
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

    return (
        <WebLayout>
        <div>
            <div className='my-5 flex items-center justify-between'>
                <div></div>
                <Link
                to={'/clients'}
                className='bg-[#186049] text-white shadow-md rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300'
                >View all</Link>
            </div>
            <div className='max-w-md mx-auto'>
                <form onSubmit={handleSubmit(insertClient)} className='w-full'>
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
                                {loading ? "Please wait..." : "Create client"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </WebLayout>
    )
}

export default AddClient
