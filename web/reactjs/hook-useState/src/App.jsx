import React, { useState } from 'react'

const App = () => {
  
  // let name = "My name"
  const [value, setValue] = useState("Hello React hook")
  const [flag, setFlag] = useState(false)
  const [itemQTY, setItemQTY] = useState(0)
  // const [total, setTotal] = useState(0)
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

  const changeQTY = (mode) => {
    // let laysPrice = 20
    switch (mode) {
      case "s":
        setItemQTY(prev => prev - 1)
        break
      case "a":
        if(itemQTY >= 9) {
          alert ("Stock is limited")
          return
        }
        setItemQTY(prev => prev + 1)
        break
      default:
        alert("Invalid entry")
    }
    // setTotal((itemQTY+1)*laysPrice)

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

      <hr />

      <div>
        <button onClick={() => changeQTY("s")}>-</button>
         {itemQTY} 
        <button onClick={() => changeQTY("a")}>+</button>
        {/* <div>
          Lays: 20
        </div>
        <h4>
         Total:  {total}
        </h4> */}
      </div>

    </div>
  )
}

export default App