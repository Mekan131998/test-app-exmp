import React, {useState} from 'react'
import { BsTelephone, BsGlobe, BsSearch, BsPersonCircle, BsCartFill, BsFillCaretRightFill } from 'react-icons/bs'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './ComponentsStyle.css'



const Header = ({isMobile, handleClick, onChange, search}) => {

    const { totalQty } = useSelector((state) => state.carts)

    
    const [showModal, setShowModal] = useState(false)
    const [userModal, setUserModal] = useState(false)
    const [showLang, setShowLang] = useState(false)
    const [searchIs, setSearchIs] = useState(false)

    const clickSearch = () => {
        setSearchIs(!searchIs)
    }
    
  return (
    <>
        <div className='top'>
            <div className='top_1'>
                <a href='tel:'><BsTelephone />&nbsp;+993(12)-49-23-43</a>
            </div>
            <div className='top_2'>
                <Link to='/about-us'>Biz barada</Link>
                <Link to='/services'>Tehniki hyzmat </Link>
                <Link to='/garanty'>Kepillilik </Link>
                <Link to='/delivery'>Eltip bermek we töleg </Link>
                <Link to='/comments'>Teswirler </Link>
                <Link to='#' onClick={()=>setShowModal(!showModal)}>Nägilelik bildirmek </Link>
            </div>
            <div className='top_3'>
                <Link to="#" className="int-lang" onClick={() => setShowLang(!showLang)}><BsGlobe />&nbsp;Turkmen</Link>
                <div className={showLang ? 'drop_lang show' : 'drop_lang'}>
                        <Link to="#"> <img src="./images/about/tkm.png" alt='tm'/>&nbsp;Turkmen</Link>
                        <Link to="#"><img src="./images/about/rus.png" alt='rus'/> &nbsp;Russkiy</Link>
                        <Link to="#"> <img src="./images/about/eng.png" alt='eng'/>&nbsp;English</Link>
                </div>
            </div>
            
            <div className={!showModal ? 'modal' : 'modal active'}>
               <div className='modal-content'>
                    <div className='modal-head'>
                        <h4>NÄGILELIK BILDIRMEK</h4>
                        <span className="close" onClick={()=>setShowModal(!showModal)}>&times;</span>
                    </div>
                    <form className='modal-form'>
                        <div className='ctl'>
                            <label htmlFor='name'>Adynyz *</label>
                            <input type="text" placeholder="adynyz" />
                        </div>
                        <div className='ctl'>
                            <label htmlFor='email'>Telefon belgiňiz ýa-da e-poçtaňyz </label>
                            <input type="text" placeholder="adynyz" />
                        </div>
                        <div className='ctl'>
                            <label htmlFor='letter'>Hatynyz</label>
                            <textarea rows={5}>
                                
                            </textarea>
                        </div>
                        <button className='modal-ng'><BsFillCaretRightFill /> Nagilelik</button>
                    </form>
               </div>
            </div>


        </div>

        
       <div className='bottom'>
            <div className='bottom_1'>
                <a href='/'>
                    <img src='./images/logo/sumbar-computer-light.svg'  height="100%" width="100%" alt=""/>
                </a>
            </div>
            <div className='bottom_2'>
                <div className='bottom_search'>
                    <input type="text" placeholder='Gözleg' onChange={onChange} value={search}/>
                    <button><BsSearch /></button>
                </div>
            </div>

            
            <div className={!searchIs ? 'bottom_search2' : 'bottom_search2 active_search'}>
                <input type="text" placeholder='Gözleg' onChange={onChange} value={search}/>
                <button><BsSearch /></button>
            </div>


            <div className='bottom_3'>
                <span className="searchBar" onClick={clickSearch}>
                    <BsSearch />
                </span>
                {/* <button onClick={clickSearch} className="searchBar"><BsSearch /></button> */}
                <Link to='/#' onClick={()=>setUserModal(!userModal)}><BsPersonCircle /></Link>
                <Link to='/carts'>
                    <BsCartFill />
                    {totalQty > 0 && <span className='totalqty'>{totalQty}</span>}
                    
                </Link>
                <span className="bars" onClick={handleClick}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </span>
            </div>


            <div className={!userModal ? 'modal' : 'modal active'}>
               <div className='modal-content'>
                    <div className='modal-head'>
                        <h4>Sahypama gir</h4>
                        <span className="close" onClick={()=>setUserModal(!userModal)}>&times;</span>
                    </div>
                    <form className='modal-form'>
                        <div className='user-ctl'>
                            <label htmlFor='name'>Telefon belginiz *</label>
                            <div className='user-ctl-flex'>
                                <button className='user-ctl-btn'>+993</button>
                                <input type="text" className='user-ctl-input' placeholder="6...." />                                
                          
                            </div>
                        </div>
                    </form>
               </div>
            </div>

            
        </div>
    </>
  )
}

export default Header

