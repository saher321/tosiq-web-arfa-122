import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { DUMMY_USERS } from '../utils/apis.js'

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
                  {emp.firstName} {emp.lastName} ({emp.age})
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
