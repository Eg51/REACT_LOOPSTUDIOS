import React from 'react'
import Link from 'next/link'

const Footerr = () => {
  return (
    <div className="mt-15 flex bg-black w-full h-auto flex-col
        items-center justify-center text-white text-center pt-15
        pb-15">
        <img src="/images/logo.svg" alt="logo" />

        <p className="pt-11 pb-5">About</p>
        <p className="pb-5">Careers</p>
        <p  className="pb-5">Events</p>
        <p className="pb-5">Products</p>
        <p className="pb-5">Support</p>

        <div className="flex gap-7 cursor-pointer pt-10 pb-5">
        <Link href={'https://www.facebook.com'}><img src="/images/icon-facebook.svg" alt="facebook-icon" /></Link>
        <Link href={'https://www.x.com//account/email/signup'}><img src="/images/icon-twitter.svg" alt="twitter-icon" /></Link>
        <Link href={'https://www.pintrest.com/account/email/signup'}><img src="/images/icon-pinterest.svg" alt="pinterest-icon" /></Link>
        <Link href={'https://www.x.com//account/email/signup'}><img src="/images/icon-instagram.svg" alt="instagram-icon" /></Link>
        </div>
        <p>© 2023 Loopstudios. All rights reserved.</p>
  </div>
  )
}

export default Footerr