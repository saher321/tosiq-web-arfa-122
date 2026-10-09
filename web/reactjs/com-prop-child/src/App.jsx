import React from 'react'
import SimpleButton from './components/SimpleButton'
import SectionHeading from './components/SectionHeading'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      App
      <SimpleButton />
      <SimpleButton />
      <SimpleButton />


      <section>
        <Card>
          <div>img</div>
          <div>title</div>
          <div>description</div>
        </Card>
      </section>
      <section>
        <SectionHeading title="Testimonials" total="13" />
      </section>
      <section>
        <SectionHeading title="Services" total="8" />
      </section>
      <section>
        <SectionHeading title="Contact Form" total="0" />
      </section>

      <section>
        <Card>
          <div>Card-header</div>
          <div>Card-body</div>
          <div>Card-footer</div>
        </Card>
      </section>
    </div>
  )
}

export default App
