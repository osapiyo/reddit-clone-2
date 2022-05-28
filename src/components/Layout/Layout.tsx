import React from 'react'
import Navbar from '../Nabvar/Navbar'

// interface Props {
//   children: React.ReactNode
// }

// const Layout: React.FC<Props> = ({ children }) => {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <main>{children}</main>
//     </>
//   )
// }

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
