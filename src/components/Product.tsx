import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { productDataType } from '../utils/productData'
import { Container, Tag } from './Common/CommonStyles'
import {BsHeart} from 'react-icons/bs'

const Product: React.FC<{ product: productDataType }> = ({ product }) => {
  const { images, name, price, slug,categories,forWhom } = product;
  console.log("product:",product)
  const image = images[0]
  return (
    <Wrapper>
      <div className='container'>
        <Link to={`/products/${slug}`}>
      
       <Container >
       <img src={image} alt={name}  style ={{ overflow:"hidden", width:"296px" ,height:"296px"}}/>
       <Container justifyContent='center' width='40px' borderRadius='50%' alignItems='center' style={{  margin:"10px 10px ",  backgroundColor:"white", position:"absolute", right:"0px" ,top:"0px"}} padding='10px 5px 10px 5px' >
       <BsHeart color="var(--primary-1)" />
    
       </Container>
          </Container>  
            <div className='link'>
            <FaSearch />
          </div>
        </Link>
      </div>
      <Tag font="14px" weight='500' margin='20px 0px 0px 0px' textAlign='center' color='var(--primary-1)'> {categories}</Tag>
     <Container direction='column'>
<Tag font='24px' weight='700'>
  {name}
</Tag>
<Tag font='12px' weight='400'>
  {forWhom}
</Tag>

<Tag   font='24px' color='var(--primary-1)' weight='700'>{formatPrice(price)}</Tag>
     </Container>
       
    
     
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
   
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default Product
