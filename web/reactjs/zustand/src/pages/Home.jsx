import React, { useRef } from 'react'
import WebLayout from '../layouts/WebLayout'
import { useData } from '../store/useData'

const Home = () => {
  const greetings = useData(state => state.greetings)
  let a = useRef(null)
  let b = useRef(null)
  const calculation = () => {
    let number1 = Number(a.current.value)
    let number2 = Number(b.current.value)
    let sum = number1+number2
    console.log(`Sum of both values are: ${sum}`)
  }
  return (
    <WebLayout>
      <div>
        <button onClick={greetings}>See in console</button>
        <hr />
        <div>
          <div>
            <label htmlFor="">Number a</label> <br />
            <input type="number" ref={a} placeholder='Enter value of a' />
          </div>
          <div>
            <label htmlFor="">Number b</label> <br />
            <input type="number" ref={b} placeholder='Enter value of b' />
          </div>
          <div>
            <br />
            <button onClick={calculation}>Calculate</button>
          </div>
        </div>
      </div>
    </WebLayout>
  )
}

export default Home