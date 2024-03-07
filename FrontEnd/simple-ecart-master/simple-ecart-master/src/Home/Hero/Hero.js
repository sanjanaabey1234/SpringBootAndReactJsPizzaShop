import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <span>welcome</span> to restaurant
            </h1>

            <p className='text-white'>The best gourmet restaurant available in Manhatten</p>

            <p className='text-white'>
                Book online or call <span className='special-word'>(555)123-4567</span>
            </p>
        </div>
    </div>
  )
}

export default Hero