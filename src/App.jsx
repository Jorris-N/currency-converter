import React from 'react'
import ConverterForm from './components/ConverterForm'

const App = () => {
  return (
    <div className='currency-converter'>
      <h2 className='converter-title'>Forex Exchange Calculator</h2>
      <ConverterForm/>
    </div>
  )
}

export default App