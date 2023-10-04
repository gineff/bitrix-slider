/* eslint-disable react/prop-types */
import './Slide.css'

const Slide = ({ children }) => {
  return (
    <div className="slide" dangerouslySetInnerHTML={{ __html: children }}></div>
  )
}

export { Slide }
