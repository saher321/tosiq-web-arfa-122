import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { ActionButton, Divider, InputField } from '../../components/ComponentLibrary'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { FORGOT_PASSWORD_API } from '../../utils/server_apis.js'
import toast from 'react-hot-toast'
import axios from 'axios'

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  const handleForgotPassword = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(FORGOT_PASSWORD_API, data)
      if (response.data.status == true) {
        localStorage.setItem("forgotten_email", data.email)
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
          <h2 className='font-bold text-xl'>Forgot password</h2>
          <p className='text-gray-500 text-sm italic'>Enter email to receive otp</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleForgotPassword)}>
            
            <div>
              <label htmlFor="">Email</label>
              <InputField
              { ...register("email") }
              type='email'
              hint="e.g: john@email.com"
              />
            </div>
            
            <div className='flex mt-5 items-center justify-between'>
              <ActionButton 
              disabled={loading}
              text={loading ? "Please wait..." : "Send OTP"}
              />
            </div>
          </form>
          <Divider />
          <div>
            Don't have an account? <Link to={"/auth/register"} className='text-blue-600 hover:underline'>Get register</Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default ForgotPassword
