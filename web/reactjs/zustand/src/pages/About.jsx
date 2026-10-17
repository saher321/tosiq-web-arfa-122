import React from 'react'
import WebLayout from '../layouts/WebLayout'
import { useData } from '../store/useData'

const About = () => {
  const phone = useData(state => state.phone)
  return (
    <WebLayout>
      <div>
        More information: {phone}
      </div>
    </WebLayout>
  )
}

export default About