import React from 'react'
import Image from 'next/image'

const Loopstudios = () => {
  return (
    <Image
            src="/images/logo.svg"
            alt="logo"
            priority
            width={1}
            height={1}
            className='z-10 w-40 h-7 cursor-pointer ml-8'
            />
  )
}

export default Loopstudios
