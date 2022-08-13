import React, { useState, useEffect, useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './SingleProduct.css'
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

// import { selectProductById } from '../Features/Products/productsSlice'
// import { useSelector } from 'react-redux'


const singleProduct = {
    id: 1,
    title: "Игровой монитор 2E 29.5 G3020B",
    price: 6000.00,
    model:"2E-3020B-01.UA",
    shortdesc:"Монитор игровой 2E 29.5 G3020B (UWHD - 2560 x 1440@200 Гц / Матрица VA 21:9 AMD FreeSync / Изогнутый / Отклик 1 мс / Разъемы: HDMI*3 / DisplayPort / Безрамочный / Черный цвет) (2E-3020B-01.UA)",
    description: "Монитор 31,5 быстрой изогнутой VA-матрицей, углами обзора 178°/178° оснащен прогрессивными технологиями улучшения изображения, быстрой и удобной настройкой и подключением дополнительных источников видео.Частота обновления на уровне 165 Гц и скорость отклика 1 мс — это отсутствие мерцания экрана, плавное изменение картинки и значительное уменьшение нагрузки на глаза игрока. Если добавить к этому еще функции FreeSync и G-SYNC, устраняющие разрывы кадров, появится дополнительное преимущество в длительных игровых сессиях.",
    category: "monitors",
    brand:"./images/products/qDLmv7fzFP.png",
    images: [
            {"id":1,"img":"./images/products/1/7B8u7pRlq8Uw8n8jIEhr.jpg"},
            {"id":2,"img":"./images/products/1/fCOazy458HW3VLjwaM8Q.jpg"},
            {"id":3,"img":"./images/products/1/VgKfHxv3GR8nr3haX8w5.jpg"},
            {"id":4,"img":"./images/products/1/VgKfHxv3GR8nr3haX8w5.jpg"},
            {"id":5,"img":"./images/products/1/wy6obMYlwODYytzvstia.jpg"}
    ],
    info:[
        {id:1, title:"Диагональ", desc:"30"},
        {id:2, title:"Тип матрицы", desc:"VA"},
        {id:3, title:"Битность матрицы", desc:"8 бит"},
        {id:4, title:"Сенсорный ввод", desc:"нет"},
        {id:5, title:"Покрытие экрана", desc:"матовое"},
        {id:6, title:"Разрешение", desc:"UWHD (2560x1080)"},
        {id:7, title:"Соотношение сторон", desc:"21:9"},
        {id:8, title:"Время отклика", desc:"5 мс"}  
    ]
}



const SingleProduct = () => {
//    const [isActive, setIsActive] = useState(false)
   const [userModal, setUserModal] = useState(false)
    // const { productId } = useParams()
    // const product = useSelector(state => selectProductById(state, Number(productId)))

    const [showMdl, setShowMdl] = useState(false)
    let len = singleProduct.images.length;
    const [index, setIndex] = useState(0);
    const myImageRef = useRef();
   
    useEffect(() => {
      myImageRef.current.children[index].className = "active"
    }, [index, setIndex])
  

    const handleClickImage = (index) => {
        setIndex(index)
        const imagesLen = myImageRef.current.children;
        for (let i = 0; i < imagesLen.length; i++) {
            imagesLen[i].className = imagesLen[i].className.replace("active", "")
        }
        imagesLen[index].className="active"
    };

    const prevSlide = () => {
        setIndex(index === 0 ? len - 1 : index - 1);
    };
    const nextSlide = () => {
        setIndex(index === len - 1 ? 0 : index + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index === len - 1 ? 0 : index + 1);
        }, 2500);
        return () => clearInterval(interval);
    }, [index, len]);



  return (
            <div className='product-container'>
                <div className='product-row'>        
                    <div className='singleProduct-col-1'>
                        <div className='slider'>

                            {singleProduct.images.map((image, ind) => (
                                <div className={ind === index ? "slide active" : "slide"} key={ind} onClick={()=>setShowMdl(!showMdl)}>
                                    <img src={image.img} alt="" />
                                </div>
                            ))}
                        </div> 
                        <div className="thumb" ref={myImageRef}>
                            {singleProduct.images.map((img, ind) => (
                                <img key={ind} src={img.img} alt="" className={ind === index ? 'active' : ''}
                                onClick={() => handleClickImage(ind)}
                                />
                            ))}
                        </div>
                    </div>


                    <div className={!showMdl ? 'modalfull' : 'modalfull mdlactive'}>
                        <span className="mdlclose" onClick={()=>setShowMdl(!showMdl)}>&times;</span>
                        <span><FaArrowLeft className="arrow prev" onClick={prevSlide}/></span>
                        <span><FaArrowRight className="arrow next" onClick={nextSlide}/></span>
                        <div className='modalfull-content'>
                            <div className='slider'>
                                {singleProduct.images.map((image, ind) => (
                                    <div className={ind === index ? "slide active" : "slide"} key={ind}>
                                        <img src={image.img} alt="" />
                                    </div>
                                ))}
                            </div> 
                        </div>
                    </div>
                    

                    <div className='singleProduct-col-2'>
                        <h2>{singleProduct.title}</h2>
                        <div className='product-brand-like'>
                            <img src='./images/brands/76Jj2G1lP1.png' height="60px" alt=''/>
                            <div className='product-check'>
                                <span>
                                    <input type="checkbox" /> 
                                    <label>denesdirmek</label>
                                </span>
                            </div>
                            <div className='product-check'>
                                <span>
                                    <BsHeart className='heart'/>
                                    <label>Halanlarym gos</label>
                                </span>
                            </div>
                        </div>
                        <h4>Bolek belgisi / Modeli</h4>
                        <div className='model-copy'>
                            <input type="text" />
                            <button>&copy;</button>
                            <Link to="https://wwww.google.com" >Google</Link>
                        </div>
                        <div className='short-desc'>
                            <h4>Gysgaca dusundiris</h4>
                            <p>{singleProduct.shortdesc.substring(0,100)}</p>
                        </div>
                        <div className='price-cart'>
                            <span>
                                {singleProduct.price} TMT
                            </span>
                            <button>
                                Sebede gos
                            </button>
                        </div>
                    </div>

                </div>

    
                
                <Tabs>
                    <TabList style={{borderBottom:'none'}}>
                        <div className='tab-row'>
                            <Tab style={{border:'none'}}>{singleProduct.info && <div>Ahli ayratynlyklar</div>}</Tab>
                            <Tab style={{border:'none'}}>{singleProduct.description && <div>Dusundiris</div>}</Tab>
                            <Tab style={{border:'none'}}>{<div>Teswir yaz</div>}</Tab>
                        </div>
                    </TabList>
                
                    <TabPanel>
                        <table className='tab-table'>
                            <tbody>
                                {singleProduct.info.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel>
                        <p className='single-prod-desc'>
                            {singleProduct.description}
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h4 className='tab-danger-comment'>
                            Teswir yazmak ucin agza bolun
                        </h4>
                        <div className='tab-btn-div'>
                            <button className='tab-btn' onClick={()=>setUserModal(!userModal)}>Hasabyma gir</button>
                        </div>
                    </TabPanel>
                </Tabs>   

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
  )
}



export default SingleProduct