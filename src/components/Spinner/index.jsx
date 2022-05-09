import React from 'react'
import Lottie from 'react-lottie'
import moonrover from './moonrover.json'

const styles = {
  spinnerContainer: `w-[140px] h-[150px] flex flex-col justify-center`,
  spinnerText: `text-lg text-center italic`
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: moonrover,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <Lottie options={defaultOptions} />
      <p className={styles.spinnerText}>Loading...</p>
    </div>
  )
}

export default Spinner
