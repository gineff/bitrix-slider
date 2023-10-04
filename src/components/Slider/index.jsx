/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Slide } from '../Slide'
import './Slider.css'

const Slider = ({ children }) => {
  const [slideIndex, setSlideIndex] = React.useState(0)
  const length = children.length

  const next = () => {
    if (slideIndex < length - 1) {
      setSlideIndex(slideIndex + 1)
    }
  }

  const prev = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
    }
  }

  return (
    <>
      <div
        className="slider-content"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {children.map((el, i) => (
          <Slide key={i}>{el}</Slide>
        ))}
      </div>
      <div className="slider-control">
        {slideIndex > 0 ? (
          <span onClick={prev} className="left-arrow"></span>
        ) : (
          <span></span>
        )}
        {slideIndex < length - 1 && (
          <span onClick={next} className="right-arrow"></span>
        )}
      </div>
      <div className="slider-pages">
        {children.map((_, i) => (
          <span
            key={i}
            onClick={() => setSlideIndex(i)}
            className={
              'slider-page-caption' + (i === slideIndex ? ' active' : '')
            }></span>
        ))}
      </div>
    </>
  )
}

export { Slider }
