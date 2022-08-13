import React from 'react'

const arrList = {
    "Diognal":"30", 
    "type matrisa":"VA", 
    "Bitnost matrisy":"8 bit",
    "Sensornyy wwod":"net",
    "Pokrytiye ekrana":"matowoye",
    "razreseniye":"UWHD (2560x1080)",
    "sootneseniye storon":"21:9",
    "wremya otklika":"5ms",
    "castota smeny kadrow":"200gs",
    "HDR":"net",
    "Yarkost":"3000:1",
    "Podklyuceniye":"3xHDMI/DP/raz..",
    "Wstroyennyye dinamiki":"yest",
    "Podswetka":"net",
    "swet":"cyornyy",
    "Garanty(mey)":"12",
    "starana proizwoditel":"Kitay"
}
const productData = [
    {
        id:1,
        name:'Iphone X',
        price:'6000',
        brand:'./images/brand/',
        model:'2E-3020B-01.UA',
        shortDesc:'Монитор игровой 2E 29.5" G3020B (UWHD - 2560 x 1440@200 Гц / Матрица VA 21:9 AMD FreeSync / Изогнутый / Отклик 1 мс / Разъемы: HDMI*3 / DisplayPort / Безрамочный / Черный цвет) (2E-3020B-01.UA)',        
        images:[
            './images/product/1-1.jpg',
            './images/product/1-2.jpg',
            './images/product/1-3.jpg',
            './images/product/1-4.jpg',
        ],
        arrList:[
            {"Diognal":"30"}, 
            {"type matrisa":"VA"}, 
            {"Bitnost matrisy":"8 bit"},
            {"Sensornyy wwod":"net"},
            {"Pokrytiye ekrana":"matowoye"},
            {"razreseniye":"UWHD (2560x1080)"},
            {"sootneseniye storon":"21:9"},
            {"wremya otklika":"5ms"},
            {"castota smeny kadrow":"200gs"},
            {"HDR":"net"},
            {"Yarkost":"3000:1"},
            {"Podklyuceniye":"3xHDMI/DP/raz.."},
            {"Wstroyennyye dinamiki":"yest"},
            {"Podswetka":"net"},
            {"swet":"cyornyy"},
            {"Garanty(mey)":"12"},
            {"starana proizwoditel":"Kitay"}
        ]     
    }
]

// const Example = ({product}) => Object.entries(product).map((k, v) => (
  //   <div key={k}>
  //     {k}:{v}
  //   </div>
  // ))

const ProductInfo = () => {
    const prodcutInfo = productData.map((product, index) => (
        <div key={index}>
            <h1>{product.name}</h1>
            <p>{product.brand}</p>
            <span>{product.price}</span>
            <span>{product.shortDesc}</span>
            <table>
                {Object.entries(product.arrList).map((k,v) => (
                    <tr key={k}>
                        <td>{k}</td>
                        <td>{v}</td>
                    </tr>
                ))}
            </table>
        </div>
    ))

  return (
    <div>
        <h1>Product Page</h1>
        {prodcutInfo}
    </div>
  )
}

export default ProductInfo