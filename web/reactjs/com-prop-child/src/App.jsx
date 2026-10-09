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
        <SectionHeading title="Testimonials" total="13" />
      </section>
      <section>
        <SectionHeading title="Services" total="8" />
      </section>
      <section>
        <SectionHeading title="Contact Form" total="0" />
      </section>
    </div>
  )
}

export default App
