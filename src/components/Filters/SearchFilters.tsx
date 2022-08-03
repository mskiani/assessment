import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../../context/filter_context';
import { Container } from '../Common/CommonStyles';

export const SearchFilters = () => {
  const {
    updateFilters, filters: { searchTerm },
  } = useFilterContext();

  return (
    <Container margin='0px 0px 30px 0px'>

<SearchBox
      
      type='text'
      name='searchTerm'
      placeholder='search products'
   
      value={searchTerm}
      onChange={e => updateFilters(e)} />
    </Container>
   
  
  );
};

const SearchBox = styled.input`

width:100%;
height:56px;
border:1px solid #F86338;
padding-left:20px;
border-radius:4px;
color:#9A9AB0;


`
const Wrapper = styled.div`
background-color:red;


`

