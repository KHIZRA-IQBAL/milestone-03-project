import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-black'>
            <Link className="navbar__link relative " href="#">Home</Link>
            <Link className="navbar__link relative " href="#">Categories</Link>
            <Link className="navbar__link relative " href="#">MEN</Link>
            <Link className="navbar__link relative " href="#">WOMEN</Link>
            <Link className="navbar__link relative " href="#">Jewelery</Link>
            <Link className="navbar__link relative " href="#">Perfume</Link>
            <Link className="navbar__link relative " href="#"></Link>
            <Link className="navbar__link relative " href="#">HOT OFFERS</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
