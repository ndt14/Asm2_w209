import React from 'react'
import { Footer, Header } from '../componets'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutWebsite = (props: Props) => {
  return (
    <>
    <Header/>
<Outlet/>
   <Footer/>
   </>
  )
}

export default LayoutWebsite