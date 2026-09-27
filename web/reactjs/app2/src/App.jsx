import React from 'react'
import './assets/css/app.css'
const App = () => {
  const content = {
    backgroundColor: "purple"
  }
  return (
    <div className='heading'>
      Hello app2
      <h3 style={{color: "red", backgroundColor: "gray"}}>
        Sub heading
      </h3>
      <p style={content}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum exercitationem, ipsa quisquam voluptatem aut ex odit nesciunt atque laborum officiis quas nemo hic nobis iure accusantium repellat perspiciatis. Dignissimos, aut?
        Possimus, nobis maiores quae aut quibusdam quis deserunt sit natus obcaecati iste ullam hic fugit corrupti. Odit perspiciatis facilis pariatur soluta magni culpa, quis nemo repellendus, eum doloremque rem non?
        Cupiditate sapiente impedit soluta corporis provident repellat, commodi dolor dolorum itaque earum mollitia. Alias eaque deserunt inventore ducimus nostrum explicabo saepe illo cupiditate, officia sapiente similique eligendi rem, consequatur odio!
      </p>
    </div>
  )
}

export default App
