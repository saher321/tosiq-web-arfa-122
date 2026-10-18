import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { DUMMY_SINGLE_USER } from '../utils/apis.js'
import { useParams } from 'react-router'
import {
  ArrowLeft,
  UserRound,
  Mail,
  Phone,
  CalendarDays,
  MapPin,
  Building2,
  BriefcaseBusiness,
  GraduationCap,
  Ruler,
  Weight,
  Eye,
  Globe,
} from 'lucide-react'

const EmployeeDetails = () => {
  const [employee, setEmployeeDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { emp_id } = useParams()

  const getEmployeeDetails = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await axios.get(
        `${DUMMY_SINGLE_USER}/${emp_id}`
      )

      setEmployeeDetails(response.data)
    } catch (error) {
      console.error(error)
      setError('Unable to load employee details.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Number(emp_id) > 0) {
      getEmployeeDetails()
    } else {
      setLoading(false)
      setError('Invalid employee ID.')
    }
  }, [emp_id])

  if (loading) {
    return (
      <WebLayout>
        <div className="flex min-h-[50vh] items-center justify-center text-sm text-gray-500">
          Loading employee details...
        </div>
      </WebLayout>
    )
  }

  if (error || !employee) {
    return (
      <WebLayout>
        <div className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <p className="text-sm text-gray-600">
              {error || 'Employee not found.'}
            </p>
            <button
              onClick={getEmployeeDetails}
              className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </WebLayout>
    )
  }

  const detailClass =
    'flex items-start gap-3 border-b border-gray-100 py-4 last:border-0'

  const iconClass =
    'rounded-lg bg-gray-100 p-2 text-gray-600 shrink-0'

  return (
    <WebLayout>
      <div className="min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <button
            onClick={() => window.history.back()}
            className="mb-6 inline-flex items-center gap-2 text-sm text-blue-500 cursor-pointer transition hover:text-blue-700"
          >
            <ArrowLeft size={17} />
            Back to Employees
          </button>

          <div className="mb-7">
            <p className="text-sm text-gray-500">
              Employees / #{employee.id}
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Employee Details
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              View personal information and employee records.
            </p>
          </div>

          {/* Employee Profile */}
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <img
                src={employee.image}
                alt={`${employee.firstName} ${employee.lastName}`}
                className="h-24 w-24 rounded-2xl border border-gray-200 bg-gray-50 object-cover"
              />

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {employee.firstName} {employee.lastName}
                  </h2>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-700">
                    {employee.role || 'Employee'}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  {employee.company?.title || 'Employee'}
                  {employee.company?.department &&
                    ` · ${employee.company.department}`}
                </p>

                <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:flex-wrap sm:gap-5">
                  <span className="flex items-center gap-2">
                    <Mail size={16} />
                    {employee.email}
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={16} />
                    {employee.phone}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {employee.address?.city}, {employee.address?.country}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 px-5 py-3 sm:min-w-32">
                <p className="text-xs text-gray-400">Employee ID</p>
                <p className="mt-1 text-xl font-semibold text-gray-900">
                  #{employee.id}
                </p>
              </div>
            </div>
          </div>

          {/* Details Layout */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">

            {/* Personal Details */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
              <div className="mb-2 flex items-center gap-3 border-b border-gray-100 pb-5">
                <div className="rounded-xl bg-gray-100 p-2.5 text-gray-700">
                  <UserRound size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Personal Details
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Basic employee information
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                <div className={detailClass}>
                  <div className={iconClass}><UserRound size={17} /></div>
                  <div>
                    <p className="text-xs text-gray-400">First Name</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">{employee.firstName}</p>
                  </div>
                </div>

                <div className={detailClass}>
                  <div className={iconClass}><UserRound size={17} /></div>
                  <div>
                    <p className="text-xs text-gray-400">Last Name</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">{employee.lastName}</p>
                  </div>
                </div>

                <div className={detailClass}>
                  <div className={iconClass}><Mail size={17} /></div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">Email Address</p>
                    <p className="mt-1 break-all text-sm font-medium text-gray-800">{employee.email}</p>
                  </div>
                </div>

                <div className={detailClass}>
                  <div className={iconClass}><Phone size={17} /></div>
                  <div>
                    <p className="text-xs text-gray-400">Phone Number</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">{employee.phone}</p>
                  </div>
                </div>

                <div className={detailClass}>
                  <div className={iconClass}><CalendarDays size={17} /></div>
                  <div>
                    <p className="text-xs text-gray-400">Date of Birth</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">{employee.birthDate || 'N/A'}</p>
                  </div>
                </div>

                <div className={detailClass}>
                  <div className={iconClass}><UserRound size={17} /></div>
                  <div>
                    <p className="text-xs text-gray-400">Gender</p>
                    <p className="mt-1 text-sm font-medium capitalize text-gray-800">{employee.gender || 'N/A'}</p>
                  </div>
                </div>

                <div className={detailClass}>
                  <div className={iconClass}><Ruler size={17} /></div>
                  <div>
                    <p className="text-xs text-gray-400">Height</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">
                      {employee.height != null ? `${employee.height} cm` : 'N/A'}
                    </p>
                  </div>
                </div>

                <div className={detailClass}>
                  <div className={iconClass}><Weight size={17} /></div>
                  <div>
                    <p className="text-xs text-gray-400">Weight</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">
                      {employee.weight != null ? `${employee.weight} kg` : 'N/A'}
                    </p>
                  </div>
                </div>

                <div className={detailClass}>
                  <div className={iconClass}><Eye size={17} /></div>
                  <div>
                    <p className="text-xs text-gray-400">Eye Color</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">{employee.eyeColor || 'N/A'}</p>
                  </div>
                </div>

                <div className={detailClass}>
                  <div className={iconClass}><GraduationCap size={17} /></div>
                  <div>
                    <p className="text-xs text-gray-400">University</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">{employee.university || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Column */}
            <div className="space-y-6">

              {/* Address Details */}
              <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                <div className="mb-2 flex items-center gap-3 border-b border-gray-100 pb-5">
                  <div className="rounded-xl bg-gray-100 p-2.5 text-gray-700">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Address Details
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">
                      Residential information
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                  <div className={detailClass}>
                    <div className={iconClass}><MapPin size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">Street Address</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.address?.address || 'N/A'}</p>
                    </div>
                  </div>

                  <div className={detailClass}>
                    <div className={iconClass}><Globe size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">City</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.address?.city || 'N/A'}</p>
                    </div>
                  </div>

                  <div className={detailClass}>
                    <div className={iconClass}><MapPin size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">State</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.address?.state || 'N/A'}</p>
                    </div>
                  </div>

                  <div className={detailClass}>
                    <div className={iconClass}><Globe size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">Country</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.address?.country || 'N/A'}</p>
                    </div>
                  </div>

                  <div className={detailClass}>
                    <div className={iconClass}><MapPin size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">Postal Code</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.address?.postalCode || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Company Details */}
              <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                <div className="mb-2 flex items-center gap-3 border-b border-gray-100 pb-5">
                  <div className="rounded-xl bg-gray-100 p-2.5 text-gray-700">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Company Details
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">
                      Professional information
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                  <div className={detailClass}>
                    <div className={iconClass}><Building2 size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">Company Name</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.company?.name || 'N/A'}</p>
                    </div>
                  </div>

                  <div className={detailClass}>
                    <div className={iconClass}><BriefcaseBusiness size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">Job Title</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.company?.title || 'N/A'}</p>
                    </div>
                  </div>

                  <div className={detailClass}>
                    <div className={iconClass}><UserRound size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">Department</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.company?.department || 'N/A'}</p>
                    </div>
                  </div>

                  <div className={detailClass}>
                    <div className={iconClass}><MapPin size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">Office Address</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.company?.address?.address || 'N/A'}</p>
                    </div>
                  </div>

                  <div className={detailClass}>
                    <div className={iconClass}><Globe size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">Office City</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.company?.address?.city || 'N/A'}</p>
                    </div>
                  </div>

                  <div className={detailClass}>
                    <div className={iconClass}><Globe size={17} /></div>
                    <div>
                      <p className="text-xs text-gray-400">Office Country</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{employee.company?.address?.country || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

        </div>
      </div>
    </WebLayout>
  )
}

export default EmployeeDetails