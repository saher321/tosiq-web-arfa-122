import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { ActionButton, Divider, InputField } from '../../components/ComponentLibrary'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { REGISTER_API } from '../../utils/server_apis.js'
import toast from 'react-hot-toast'
import axios from 'axios'

const Register = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  const handleRegisterUser = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(REGISTER_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error("Internal server error!")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <AuthLayout>
      <div>
        <div>
          <h2 className='font-bold text-xl'>Create an account</h2>
          <p className='text-gray-500 text-sm italic'>Fill all the field for your access</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleRegisterUser)}>
            <div>
              <label htmlFor="">Full name</label>
              <InputField
              { ...register("fullname") }
              hint="e.g: John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="">Email</label>
              <InputField
              { ...register("email") }
              type='email'
              hint="e.g: john@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="">Password</label>
              <InputField
              { ...register("password") }
              type='password'
              hint="xxxxxx"
              />
            </div>
            
            <div>
              <ActionButton 
              disabled={loading} 
              className="mt-5" 
              text={loading ? "Please wait..." : "Register"}
              />
            </div>
          </form>
          <Divider />
          <div>
            Already have an account? <Link className='text-blue-600 hover:underline'>Login</Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register
