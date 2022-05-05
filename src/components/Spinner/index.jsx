import React from 'react'
import Lottie from 'react-lottie'
import marsSpinner from './marsspinner.json'

const styles = {
  spinnerContainer: `w-[80px] h-[100px] flex flex-col justify-center`,
  spinnerText: `text-sm text-center italic`
}

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
    <div className={styles.spinnerContainer}>
      <Lottie options={defaultOptions} speed={6} />
      <p className={styles.spinnerText}>Loading...</p>
    </div>
  )
}

export default Spinner
