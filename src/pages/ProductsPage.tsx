import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort,  FeaturedProducts } from '../components'
import { Container, Tag } from '../components/Common/CommonStyles'
import { SearchFilters } from '../components/Filters/SearchFilters'
import { useFilterContext } from '../context/filter_context'
import Img from './../assets/p1.jpg'

const ProductsPage = () => {
  const { clearFilters, isClickFromServices, resetIsClickFromServices } =
    useFilterContext()

  useEffect(() => {
    if (isClickFromServices) {
      // if this page mounts because clicking a button in Services, should not run clearFilters()
      // no set time out is needed to reset the variable
      resetIsClickFromServices()
    } else {
      // when component mounts clear the filter
      clearFilters()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <main>

      <Container width="90%" direction='row' style ={{overflow:"hidden"}} margin="0px 0px 0px 104px" >

<Container  width="20%" direction="column">
<Tag weight="700" font ="20px"  >
{"Home > Shop"}
</Tag>
<Tag weight="700" font ="48px"  >
Shop
</Tag>
</Container>
<Container  width="80%" style ={{overflow:"hidden"}}> 

<img src={Img} alt={"hero in"} style ={{maxWidth:"100%", height:"400px",width:"100%", overflow:"hidden"}} />
</Container>
      </Container>
      <Wrapper className='page'>
        <div className='section-center products'>
          <Filters />
          <div>
          <SearchFilters />
            <Sort />
            <ProductList />
          </div>
        </div>
        <FeaturedProducts />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
