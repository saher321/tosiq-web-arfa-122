import React, { useState } from 'react'
import WebLayout from '../../layouts/WebLayout'
import { Link, useNavigate } from 'react-router'
import { Users, UserPlus } from 'lucide-react'
import { ActionButton, InputField } from '../../components/ComponentLibrary'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ADD_CUSTOMER_API } from '../../utils/server_apis.js'
import axios from 'axios'

const AddCustomer = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleAddCustomer = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(ADD_CUSTOMER_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
        navigate('/customers', { replace: true })
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error('Internal server error!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <WebLayout>
      <div className=''>
        {/* Customer */}
        <section
          id='customers'
          className='bg-white rounded-2xl border border-slate-100 shadow-sm mb-8'
        >
          {/* Heading */}
          <div className='flex items-center justify-between p-5 md:p-6 border-b border-slate-100'>
            <div>
              <h3 className='font-bold text-lg'>Add Customer</h3>
              <p className='text-xs text-slate-400 mt-1'>
                Add a new customer to your list
              </p>
            </div>

            <Link
              to={'/customers'}
              className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition'
            >
              <Users size={17} />
              <span className='hidden sm:inline'>View All</span>
            </Link>
          </div>

          {/* Add Customer Form */}
          <div className='p-5 md:p-6'>
            <form
              onSubmit={handleSubmit(handleAddCustomer)}
              className='grid grid-cols-1 md:grid-cols-2 gap-5'
            >
              {/* Full Name */}
              <div>
                <label className='block text-sm font-semibold text-slate-700 mb-2'>
                  Full Name
                </label>
                <InputField
                  {...register('fullName')}
                  hint={'e.g John Carlos'}
                />
              </div>

              {/* Email */}
              <div>
                <label className='block text-sm font-semibold text-slate-700 mb-2'>
                  Email Address
                </label>
                <InputField
                  {...register('email')}
                  hint={'e.g john@gmail.com'}
                />
              </div>

              {/* Contact */}
              <div>
                <label className='block text-sm font-semibold text-slate-700 mb-2'>
                  Contact Number
                </label>
                <InputField {...register('contact')} hint={'+92 13456789'} />
              </div>

              {/* Address */}
              <div>
                <label className='block text-sm font-semibold text-slate-700 mb-2'>
                  Address
                </label>
                <InputField
                  {...register('address')}
                  hint={'Shadman Lahore, Pakistan'}
                />
              </div>

              {/* Submit Button */}
              <div className='md:col-span-2 flex justify-end mt-2'>
                <ActionButton
                  disabled={loading}
                  text={loading ? 'Please wait...' : 'Add customer'}
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </WebLayout>
  )
}

export default AddCustomer
