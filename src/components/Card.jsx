import React from 'react'

const Card = ({ id, camera, img }) => {
  return (
    <div key={id} className='flex flex-col items-center'>
      <p>{camera}</p>
      <img src={img} alt={camera} className='w-40 h-40 object-cover rounded' />
    </div>
  )
}

export default Card
