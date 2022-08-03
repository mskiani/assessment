import React from 'react'
import styled from 'styled-components'
import { Container, Tag } from './Common/CommonStyles'
import {GoLocation} from 'react-icons/go'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import { Logo } from './Navbar/Logo'
const Footer = () => {
  return (
    <Wrapper>
      <Container bgColor="var(--primary-1)" padding='50px 0px 50px 0px' justifyContent='space-around'  >

<Container justifyContent='center' width="33"  direction="column" padding="0px 0px 0px 100px" >
<Container justifyContent='flex-start'>
<Logo/>
</Container>


<div>

<Tag textAlign='left' font='16px' weight='400' margin='31px 0px 0px 0px' color='white'>
OurStudio is a digital agency UI / UX Design and Website   Development located in Ohio, United States of America
</Tag>
<Tag  color='white' textAlign='left' font='16px' weight='400' margin='144px 0px 0px 0px'>
Copyright Tanah Air Studio</Tag>

</div>
</Container>
<Container width="33%" direction='column'  justifyContent='flex-end' alignItems='flex-start'>

<Tag   color='white' textAlign='right' font='16px' weight='700' margin='31px 0px 0px 0px'>
Our Social Media
  </Tag>
  <Tag  color='white' textAlign='center' font='16px' weight='400' margin='31px 0px 0px 0px'>
Facebook
  </Tag>
  <Tag  color='white' textAlign='center' font='16px' weight='400' margin='31px 0px 0px 0px'>
Twitter
  </Tag>
  <Tag  color='white' textAlign='center' font='16px' weight='400' margin='31px 0px 0px 0px'>
Youtube
  </Tag>
  <Tag  color='white' textAlign='center' font='16px' weight='400' margin='31px 0px 0px 0px'>
Instagram
  </Tag>




</Container>

<Container width="33%" direction='column' justifyContent='flex-end' >
 < div>
<Tag   color='white' textAlign='left' font='16px' weight='700' margin='31px 0px 0px 0px'>
Contact
  </Tag>
  <Tag  color='white' textAlign='left' font='16px' weight='400' margin='31px 0px 0px 0px'>
<GoLocation color='white'/>   8819 Ohio St. South Gate,
California 90280
  </Tag>
  <Tag  color='white' textAlign='left' font='16px' weight='400' margin='31px 0px 0px 0px'>
   <AiOutlineMail color='white'/> ourstudio@hello.com
  </Tag>
  <Tag  color='white' textAlign='left' font='16px' weight='400' margin='31px 0px 0px 0px'>
 
 <BsTelephone color='white'/>  +271 386-647-3637
  </Tag>
  </div>
  </Container>

      </Container>
     
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  margin-top:100px;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
