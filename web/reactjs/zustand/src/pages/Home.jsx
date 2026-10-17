import React from 'react'
import WebLayout from '../layouts/WebLayout'
import { useData } from '../store/useData'

const Home = () => {
  const greetings = useData(state => state.greetings)
  return (
    <WebLayout>
      <div>
        <button onClick={greetings}>See in console</button>
      </div>
    </WebLayout>
  )
}

export default Home