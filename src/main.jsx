/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import App from './App.jsx'

BX.ready(() => {
  const slides = document.querySelectorAll('.bitrix-slider .slide')
  const slidesHTML = [...slides].map(slide => slide.innerHTML)

  ReactDOM.createRoot(document.querySelector('.bitrix-slider')).render(
    <App slides={slidesHTML} />
  )
})
