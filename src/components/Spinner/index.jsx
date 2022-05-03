import React from 'react'
import Lottie from 'react-lottie'
import marsSpinner from './marsspinner.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: marsSpinner,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Spinner = () => {
  return (
    <div style={{ width: '80px', height: '80px' }}>
      <Lottie options={defaultOptions} speed={7} />
    </div>
  )
}

export default Spinner
