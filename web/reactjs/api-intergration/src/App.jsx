import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { QUOTES_API } from './utils/apis.js'

const App = () => {
  const [ quotes, setQuotes ] = useState([])

  const getAllQuotes = async () => {
    try {
      const response = await axios.get(QUOTES_API)
      
      if (response.data.quotes.length > 0) {
        setQuotes(response.data.quotes)
      } else {
        setQuotes([])
        console.log("Record not found")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllQuotes()
  }, [])

  return (
    <div>
      <h3> All Quotes </h3>
      <table border={1} cellPadding={15} width={"100%"} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Quote</th>
          </tr>
        </thead>
        <tbody>
          {
            quotes.map((q) => {
              return (
                <tr>
                  <td>{q.id}</td>
                  <td>{q.author}</td>
                  <td>{q.quote}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
