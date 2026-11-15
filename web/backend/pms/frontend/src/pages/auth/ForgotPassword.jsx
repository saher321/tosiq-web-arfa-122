import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { ActionButton, Divider, InputField } from '../../components/ComponentLibrary'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { LOGIN_API } from '../../utils/server_apis.js'
import toast from 'react-hot-toast'
import axios from 'axios'

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  return (
    <AuthLayout>
      <div>
        <div>
          <h2 className='font-bold text-xl'>Forgot password</h2>
          <p className='text-gray-500 text-sm italic'>Enter email to receive otp</p>
        </div>
        <div>
          <form>
            
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
