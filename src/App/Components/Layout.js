import React, {useState} from 'react'
import './ComponentsStyle.css'
import { Outlet } from 'react-router'
import Footer from './Footer'
import SidebarCat from './SidebarCat'
import './Layout.css'
import Header from './Header'
import Comments from '../Pages/Comments'

const Layout = ({onChange, search}) => {
  const [isMobile, setIsMobile] = useState(false)
  const handleClick = () => {
      setIsMobile(!isMobile)
  }
  return (
    <>
      <div className='flex-container'>
        <Header isMobile={isMobile} handleClick={handleClick} onChange={onChange} search={search}/>
        <div className='asides'>
          <div className='cat_side'>
          <SidebarCat isMobile={isMobile}/>
          </div>
          <div className='main'>
            <main>
              <Outlet />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout