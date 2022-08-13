import React, {useEffect} from 'react'
import './TabComponent.css'
import { BsZoomIn }  from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


const TabsComponent = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
  return (
    <>
         <Tabs>
                <TabList style={{borderBottom:'none'}}>
                        <div className='tab-row'>
                            <Tab style={{border:'none'}}><div>Maslahat berilyanler</div></Tab>
                            <Tab style={{border:'none'}}> <div>Tazeler</div></Tab>
                            <Tab style={{border:'none'}}><div>Arzanladyslar</div></Tab>
                        </div>
                    </TabList>
                
                    <TabPanel>
                        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}} 
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"

                        >
                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/OMsoAQRMimlRo9oQoElo.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>
                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/OMsoAQRMimlRo9oQoElo.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>

                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/OMsoAQRMimlRo9oQoElo.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>

                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/OMsoAQRMimlRo9oQoElo.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>
                        
                        </div> 
                    </TabPanel>

                    <TabPanel>
                    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}
                      data-aos="fade-down"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-out">
                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/MioCfToVUA1pa0hvIQd2.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>
                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/MioCfToVUA1pa0hvIQd2.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>

                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/MioCfToVUA1pa0hvIQd2.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>

                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/OMsoAQRMimlRo9oQoElo.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>

                        
                        </div>
                        
                    </TabPanel>

                    <TabPanel>
                    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-out">
                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/ZRBZux4XjdhWyyIBzMaS.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>
                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/ZRBZux4XjdhWyyIBzMaS.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>

                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/ZRBZux4XjdhWyyIBzMaS.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>

                            <div className='product-card' >
                                <div className='card-top'>
                                <div className='card-check'>
                                    <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                    </span>
                                </div>
                                <span className='search'><BsZoomIn /></span>
                                <span className='heart'><AiOutlineHeart /></span>
                                </div>
                                <Link className='card-info' to='/'>
                                    <img src='./assets/images/products/OMsoAQRMimlRo9oQoElo.jpg' />
                                    <h4>Title</h4>
                                    <span>234.50 TMT</span>
                                </Link>
                                <div className='btn'>
                                    <button>Sebede gos</button>
                                </div>
                            </div>
                            
                        
                        </div>
                        
                    </TabPanel>
             </Tabs>   
    </>
  )
}

export default TabsComponent