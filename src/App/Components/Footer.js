import React from 'react'
import { BsGeoAltFill, BsTelephone, BsEnvelope, BsInstagram, BsWhatsapp, BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='container'>
        <div className='top_foot'>
            <div className='foot_col_1'>
                <img src='./images/logo/sumbar-computer-light.svg' alt='' height="60px"/>
                <a href=''>
                    <BsGeoAltFill /> Türkmenistan, Aşgabat, 
                    köç. A.Niýazow (Hudayberdýew), 99
                </a>  
                <a href=''>
                    <BsEnvelope /> sumbar.computer@gmail.com
                </a>  
                <a href=''>
                    <BsTelephone /> +993 (12) 49-23-43
                </a> 
                <div className='social_links'>
                    <a href=''>
                        <BsInstagram />
                    </a>
                    <a href=''>
                        <BsWhatsapp />
                    </a>
                    <a href=''>
                        <BsFacebook />
                    </a>
                </div>
            </div>
    
            <div className='foot_col_2'>
                    <h5>
                        Sumbar Computer - Türkmenistanda kompýuter we periferiýa enjamlary dükany
                    </h5> 
                <div className='row'>
                    <div>
                        <a href='#'>Biz barada</a>
                    </div>
                    <div>
                        <a href='#'>Tehniki hyzmat</a>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <a href='#'>Kepillik</a>
                    </div>
                    <div>
                        <a href='#'>Eltip bermek</a>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <a href='#'>Gizlinlik</a>
                    </div>
                    <div>
                        <a href='#'>Brendle</a>
                    </div>
                </div>
                <div className='form_top'>
                    <form>
                            <div className='col'>
                                <label htmlFor='email'>Täzeliklere abuna boluň</label>
                                <input type="text" placeholder='E-poctanyz'/>
                            </div>
                            <div className='col'>
                                <label htmlFor='email'>Täzeliklere abuna boluň</label>
                                <button>Nagilelik bildirmek</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>    
        
        <div className='bot_foot'>
            <p>
                &copy; {new Date().getFullYear()}&nbsp;<strong>sumbar-computer.com</strong>&nbsp;Ähli hukuklary goraglydyr.
            </p>
        </div>
        
    </footer>
  )
}

export default Footer