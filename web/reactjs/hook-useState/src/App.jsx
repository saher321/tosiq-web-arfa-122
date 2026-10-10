import React, { useState } from 'react'

const App = () => {
  
  // let name = "My name"
  const [value, setValue] = useState("Hello React hook")
  const [flag, setFlag] = useState(false)
  
  const changeValue = () => {
    console.log("Button is clicked")
    setValue("Value has been changed")
  }

  const showHideText = () => {
    let password = 123
    let userpassword = prompt("Enter password")
    if (userpassword == password) {
      setFlag(!flag)
    } else {
      alert("Password is incorrect")
      return
    }
  }

  return (
    <div>
      App {value}
      <hr />
      <button onClick={changeValue}>Change value</button>
      <hr />
      <button onClick={showHideText}>Show and hide text</button>
      {
        // flag == true
        flag ? 
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vero. 
            Perferendis tempore facere, ad expedita voluptatibus magnam suscipit, 
            natus iste quibusdam tempora ratione rerum! Aut, doloribus. 
            Doloribus laboriosam perferendis consectetur.
          </p>
        </> : 
        <div>Data is secured</div>
      }
    </div>
  )
}

export default App