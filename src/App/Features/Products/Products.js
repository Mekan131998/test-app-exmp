import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import styled from 'styled-components'

const ProductContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center ;
`
const Products = ({search}) => {
    const products = useSelector((state) => state.products.products)
    const status = useSelector((state) => state.products.status)
    const error = useSelector((state) => state.products.error)

    // const [sortState, setSortState] = useState("none")

    let content;
    if(status === "idle") {
        content = <h4>Loading....</h4>
    } 
    else if(status === "succeeded") {
        content = products.map((product, index) => {
            return <Product key={product.id} product={product} />
        }) ;
    } else  if (status === "failed") {
        content = <p>{error}</p>;
    }

  return (
    <div>
        <div style={{padding:"15px 5px", display:'flex', justifyContent:'space-between'}}>
            <h3>Haryt: {products.length}</h3>
            
            <select defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>None</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
                <option value="general">General</option>
            </select>

        </div>
        <ProductContainer>
                {content}
        </ProductContainer>
    </div>
  )
}

export default Products