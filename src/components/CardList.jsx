import { useState } from 'react'
import { useNasaContext } from '../context/NasaContext'
import { cardStyles } from '../constants'
import Card from './Card'
import Spinner from './Spinner'

const CardList = () => {
  const {
    loading,
    data,
    page,
    setPage,
    camera,
    filteredCamera
  } = useNasaContext()

  const filteredPhotos = () => {
    return data.slice(page, 25)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page > 0) setPage(page - 1)
  }

  const selectedCam = cam => {
    filteredCamera.map(c => c.label)
  }

  return (
    <>
      {loading === null ? (
        <h2 className='text-xl italic'>Nothing to show...</h2>
      ) : loading ? (
        <span className=''>
          <Spinner />
        </span>
      ) : data.length === 0 ? (
        <h2 className='text-xl italic'>Nothing to show...</h2>
      ) : (
        <div className='flex flex-col'>
          <div className='flex justify-center space-x-2 items-center'>
            <button onClick={prevPage} className={cardStyles.btnPag}>
              Prev
            </button>

            <button onClick={nextPage} className={cardStyles.btnPag}>
              Next
            </button>
          </div>
          <div className='flex flex-wrap gap-4 py-4'>
            {filteredCamera.length !== 0
              ? filteredPhotos().map(({ camera: { name }, id, img_src }) => {
                  return filteredCamera.map(cam => {
                    if (cam.label === name) {
                      return <Card key={id} camera={name} img={img_src} />
                    }
                  })
                })
              : filteredPhotos().map(({ camera: { name }, id, img_src }) => (
                  <Card key={id} camera={name} img={img_src} />
                ))}
          </div>
        </div>
      )}
    </>
  )
}

export default CardList
