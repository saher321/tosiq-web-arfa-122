import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { ActionButton, Divider, InputField } from '../../components/ComponentLibrary'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { RESET_PASSWORD_API } from '../../utils/server_apis.js'
import toast from 'react-hot-toast'
import axios from 'axios'

const ResetPassword = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleResetPassword = async (data) => {
    try {
      setLoading(true)
      const newData = {otp: data.otp, 
        newPassword: data.newPassword, 
        email: localStorage.getItem("forgotten_email")
      }
      const response = await axios.post(RESET_PASSWORD_API, newData)
      if (response.data.status == true) {
        toast.success(response.data.message)
        navigate("/auth/login", {replace: true})
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
          <h2 className='font-bold text-xl'>Reset password</h2>
          <p className='text-gray-500 text-sm italic'>Fill all the field for your access</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleResetPassword)}>
            
            <div>
              <label htmlFor="">OTP</label>
              <InputField
              { ...register("otp") }
              type='text'
              hint="e.g: 12345678"
              />
            </div>
            
            <div>
              <label htmlFor="">New password</label>
              <InputField
              { ...register("newPassword") }
              type='password'
              hint="xxxxxx"
              />
            </div>
            
            <div className='flex mt-5 items-center justify-between'>
              <ActionButton 
              disabled={loading}
              text={loading ? "Please wait..." : "Reset my password"}
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

export default ResetPassword
