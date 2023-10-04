/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Slider } from './components/Slider'

const App = ({ slides }) => {
  return (
    <>
      <Slider>{slides}</Slider>
    </>
  )
}

export default App
