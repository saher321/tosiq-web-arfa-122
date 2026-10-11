import React, { useEffect, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  // on state change / component render
  useEffect(() => {
    console.log("Runs on every state change/render")
  })

  // on certain condition
  useEffect(() => {
    if (counter == 5) {
      console.log("Counter value reached in limits")
    }
  }, [counter])

  // runs on every Page load
  useEffect(() => {
    console.log("Runs 1 time only")
  }, [])

  return (
    <div>
      App
      <div>
        <button onClick={() => setCounter(counter+1)}>Counter value is {counter}</button>
      </div>
    </div>
  )
}

export default App