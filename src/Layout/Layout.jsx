import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <main className='min-h-[80vh] overflow-hidden max-w-full'>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout