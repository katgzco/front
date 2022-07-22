import React from 'react'
import { LoaderButtonWrapper } from './style'

const LoaderButton = ({ size }) => {
  return (
    <LoaderButtonWrapper>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 120" xmlSpace="preserve" width={size}>
        <path className="home" d="M122.2,98.3v-36c0-4.6-1.8-8.9-5.2-12.1L75.5,9.6c-6.5-6.3-17-6.3-23.5,0L10.3,50.2C7,53.4,5.1,57.7,5.1,62.3 v36c0,9.4,7.5,16.9,16.9,16.9h83.2C114.6,115.2,122.2,107.6,122.2,98.3z"/>
      </svg>
    </LoaderButtonWrapper>
  )
}

export default LoaderButton
