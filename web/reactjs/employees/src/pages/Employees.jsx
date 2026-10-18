import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { DUMMY_USERS } from '../utils/apis.js'
import { Link } from 'react-router'

const Employees = () => {
  const [employees, setEmployees] = useState([])

  // GET, POST, PUT, DELETE
  const getEmployees = async () => {
    try {
      const response = await axios.get(DUMMY_USERS)
      setEmployees(response.data.users)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <WebLayout>
      <div>
        <div className='grid grid-cols-12 gap-3'>
          {
            employees.map((emp, i) => {
              return (
                <div className="col-span-4">
                  <div className='bg-white shadow p-3 rounded-lg'>
                    <div className='flex items-center justify-between'>
                      <div className='font-bold'>
                        {emp.firstName} {emp.lastName}
                      </div>
                      <span className='text-gray-500 text-[11px]'>{emp.company.title}</span>
                    </div>
                    <Link to={`/employees/${emp.id}`}
                    className='block w-fit mt-3 text-blue-500 hover:underline'
                    >View more</Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </WebLayout>
  )
}

export default Employees
