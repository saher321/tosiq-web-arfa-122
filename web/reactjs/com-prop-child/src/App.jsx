import React from 'react'
import SimpleButton from './components/SimpleButton'
import SectionHeading from './components/SectionHeading'

const App = () => {
  return (
    <div>
      App
      <SimpleButton />
      <SimpleButton />
      <SimpleButton />

      <section>
        <SectionHeading title="Testimonials" />
      </section>
      <section>
        <SectionHeading title="Services" />
      </section>
      <section>
        <SectionHeading title="Contact Form" />
      </section>
    </div>
  )
}

export default App
