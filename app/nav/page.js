'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const NAV = () => {
  const pathname=usePathname();
  return (
    <>
    <div className="navbar">
    <div className="logo">Dinesh Store</div>
    <Link href="/" className={pathname==='/' ? 'active':''} >Home</Link>
    <Link href="/product" className={pathname==='/product' ? 'active':''}>Product</Link>
    <Link href="/contact" className={pathname==='/contact' ? 'active':''}>Contact</Link>
    <Link href="/about" className={pathname==='/about' ? 'active':''}>About</Link>
  </div>
  </>
  )
}

export default NAV