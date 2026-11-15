import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { ActionButton, Divider, InputField } from '../../components/ComponentLibrary'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { LOGIN_API } from '../../utils/server_apis.js'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  const handleLoginUser = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(LOGIN_API, data)
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
          <h2 className='font-bold text-xl'>Login to continue</h2>
          <p className='text-gray-500 text-sm italic'>Fill all the field for your access</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleLoginUser)}>
            
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
            
            <div className='flex mt-5 items-center justify-between'>
              <ActionButton 
              disabled={loading}
              text={loading ? "Please wait..." : "Login"}
              />
              <Link to={"/auth/forgot-password"} className='text-blue-600 hover:underline'>Forgot password?</Link>
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

export default Login
