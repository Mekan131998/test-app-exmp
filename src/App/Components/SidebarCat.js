import React, {useState} from 'react'
import { BsFillCaretRightFill, BsFilterLeft, BsFillCaretDownFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './Sidebar.css'

const categoryData = [
  {
    id: 1,
    pathIcon: "./images/categories/monitor.svg",
    pathLink: "/##",
    pathName: "Monitor",
  },
  {
  id: 2,
  pathIcon: "./images/categories/kompletkasiya.svg",
  pathLink: "/komplektyusiye_for_pc",
  pathName: "Komplektyusiya PC",
  subcategory: [
    {
      id: 1,
      pathIcon: "./images/categories/stabilizator.svg",
      pathLink: "/stabilizator_i_ibp",
      pathName: "Stabilizator",
    },
    {
      id: 2,
      pathIcon: "./images/categories/mebel.svg",
      pathLink: "/mebel",
      pathName: "Mebel",
    },
    {
      id: 3,
      pathIcon: "./images/categories/periferiya.svg",
      pathLink: "/pefiferiya",
      pathName: "Perifeya",
    },
    {
      id: 4,
      pathIcon: "./images/categories/nakopateli.svg",
      pathLink: "/nakopiteli",
      pathName: "Nakopateli",
    
    },
  ]
},
{
  id: 3,
  pathIcon: "./images/categories/periferiya.svg",
  pathLink: "/pefiferiya",
  pathName: "Perifeya",
},
{
  id: 4,
  pathIcon: "./images/categories/nakopateli.svg",
  pathLink: "/nakopiteli",
  pathName: "Nakopateli",

},
{
  id: 5,
  pathIcon: "./images/categories/monoblook.svg",
  pathLink: "/monoblok_i_pc",
  pathName: "Monoblok",
},
{
  id: 6,
  pathIcon: "./images/categories/noutboks.svg",
  pathLink: "/noutboks_i_proce",
  pathName: "Noutbooks",
  subcategory: [
    {
      id: 1,
      pathIcon: "./images/categories/stabilizator.svg",
      pathLink: "/stabilizator_i_ibp",
      pathName: "Stabilizator ",
    },
    {
      id: 2,
      pathIcon: "./images/categories/mebel.svg",
      pathLink: "/mebel",
      pathName: "Mebel",
    },
    {
      id: 3,
      pathIcon: "./images/categories/periferiya.svg",
      pathLink: "/pefiferiya",
      pathName: "Perifeya",
    },
    {
      id: 4,
      pathIcon: "./images/categories/nakopateli.svg",
      pathLink: "/nakopiteli",
      pathName: "Nakopateli",
    
    },
  ]
},
{
  id: 7,
  pathIcon: "./images/categories/mobile_periferiya.svg",
  pathLink: "/mobile_periferiya",
  pathName: "Mobile Periferiya",
},
{
  id: 8,
  pathIcon: "./images/categories/printeri.svg",
  pathLink: "/printer_i_org_tech",
  pathName: "Priinters i Org Tehnika",
},
{
  id: 9,
  pathIcon: "./images/categories/setewoy-oboru.svg",
  pathLink: "/setevoe_oborudowaniye",
  pathName: "Setewoye oborudowaniye",
},
{
  id: 10,
  pathIcon: "./images/categories/sistem-bezopasnoti.svg",
  pathLink: "/sistema_bezopasnosti",
  pathName: "System bezopasnosti",
},
{
  id: 11,
  pathIcon: "./images/categories/awtomatizasiya.svg",
  pathLink: "/awtomatizasiya",
  pathName: "Awtomatazasiya ",
  subcategory: [
    {
      id: 1,
      pathIcon: "./images/categories/stabilizator.svg",
      pathLink: "/stabilizator_i_ibp",
      pathName: "Stabilizator",
    },
    {
      id: 2,
      pathIcon: "./images/categories/mebel.svg",
      pathLink: "/mebel",
      pathName: "Mebel",
    },
    {
      id: 3,
      pathIcon: "./images/categories/periferiya.svg",
      pathLink: "/pefiferiya",
      pathName: "Perifeya",
    },
    {
      id: 4,
      pathIcon: "./images/categories/nakopateli.svg",
      pathLink: "/nakopiteli",
      pathName: "Nakopateli",
    
    },
  ]
},
{
  id: 12,
  pathIcon: "./images/categories/stabilizator.svg",
  pathLink: "/stabilizator_i_ibp",
  pathName: "Stabilizator",
},
{
  id: 13,
  pathIcon: "./images/categories/mebel.svg",
  pathLink: "/mebel",
  pathName: "Mebel",
},
{
  id: 14,
  pathIcon: "./images/categories/bytowaya-tehnika.svg",
  pathLink: "/bytowyya_tehnika",
  pathName: "Bytowyya thenika",
},
{
  id: 15,
  pathIcon: "./images/categories/raznoye.svg",
  pathLink: "/raznoye",
  pathName: "Raznoye",
},
];

const SidebarCat = ({isMobile}) => {
  const [clickLink, setClickLink] = useState('false')
  const handleLink = () => {
    setClickLink(!clickLink)
  } 
  return (
    <>
        {/* <div className={isMobile ? 'sidebar_cat' : 'sidebar_cat side_hide'}> */}
        <div className={isMobile ? 'categories left' : 'categories'}>

          <div className="all_prod" >
            <span><BsFilterLeft /></span> 
            <Link to="/products" className="all">{" "} All Products </Link> 
          </div>
          {/* <div className='all_cat'>
              <a href='/all'>
                  <BsFilterLeft />
                  &nbsp;
                  All category
              </a>
          </div> */}
          
          <div className="category_content"> 
          {!isMobile && (
            <div className={!clickLink ? "marks_brend active" : "marks_brend"}>
            <button className="categoryBtn" onClick={handleLink}><BsFillCaretDownFill /> &nbsp;Categories</button>
            <div className='mark'>
              <h3>Marks</h3>
              <form className='mark_form'>
                <div>
                <input type="checkbox" value="ASUS" />
                <label htmlFor='mark'>ASUS</label>
                </div>
                <div>
                <input type="checkbox" value="ASUS" />
                <label htmlFor='mark'>TOSHIBA</label>
                </div>
                <div>
                <input type="checkbox" value="ASUS" />
                <label htmlFor='mark'>ACER</label>
                </div>
              </form>
    
              <h3>Brends</h3>
              <form className='mark_form'>
                <div>
                <input type="checkbox" value="ASUS" />
                <label htmlFor='mark'>ASUS</label>
                </div>
                <div>
                <input type="checkbox" value="ASUS" />
                <label htmlFor='mark'>TOSHIBA</label>
                </div>
                <div>
                <input type="checkbox" value="ASUS" />
                <label htmlFor='mark'>ACER</label>
                </div>
              </form>
            </div>
          </div>
          )}

          <div className={clickLink ? "nav-menu" : "nav-menu hide"}>
          {categoryData.map((cat, index) => (
            <div key={index} className={clickLink ? "nav-link" : "nav-link hide"} onClick={!isMobile && handleLink}>
              <div className='list-item'>
                {/* <div className='img_url'>
                  <img src={cat.pathIcon} alt=''/>
                  <Link to={cat.pathLink}>
                    {cat.pathName}
                  </Link>
                </div> */}
                <Link to={cat.pathLink}>
                  <div className='img'>
                    <img src={cat.pathIcon} alt="" width="32px" height="24px"/>
                  </div>
                  <div className='link'>
                    {cat.pathName}
                  </div>
                </Link>
                <span>
                  {cat.subcategory && <BsFillCaretRightFill />}
                </span>
              </div>
              {/* <div className={clickLink ? "nav-link" : "nav-link hide"} key={index}>
                <div>
                  <a href='#' className='cat_link'>
                    <div className='dropdown-menu'>
                      <div className='img'>
                        <img src={cat.pathIcon} alt="" />
                      </div>
                      <div className='link'>
                        {cat.pathName}
                      </div>
                    </div>
                  </a>
                  <span>{cat.subcategory != null && <BsFillCaretRightFill />}</span>
              </div> */}
             {cat.subcategory && <ul className='dropdown'>
                {cat.subcategory != null && cat.subcategory.map((sub, index) => (
                  <div key={index}>
                    <li className="sub-link">
                      <img src={sub.pathIcon} alt=''/>
                      <Link to={sub.pathLink}>
                        {sub.pathName}
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>}
            </div>
          ))}
        </div>

            {/* <div className='list-group'>
              {categoryData.map((cat, index) => (
                <div className='list-group-item' key={index}>
                  <div className='dropdown'>
                    <a href='#' className='cat_link'>
                      <div className='dropdown-menu'>
                        <div className='img'>
                          <img src={cat.pathIcon} alt="" />
                        </div>
                        <div className='link'>
                          {cat.pathName}
                        </div>
                      </div>
                    </a>
                    <span>{cat.subcategory != null && <BsFillCaretRightFill />}</span>
                  </div>
                  {cat.subcategory != null && cat.subcategory.map((sub, index) => (
                    <div key={index} className="dropdown_right">
                      <a>
                        <div>
                          <img src={sub.pathIcon} alt=""/>
                        </div>
                        <div>
                          {sub.pathName}
                        </div>
                      </a> 
                    </div>
                  ))}
                </div>
              ))}
            </div> */}
        </div>
        </div>
    </>
  )
}

export default SidebarCat