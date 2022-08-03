import React from "react";
import { BsTelephone } from "react-icons/bs";
import styled from "styled-components";
import CartButtons from "../CartButtons";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { Tag } from "../Common/CommonStyles";
import { SocialLinks } from "./SocialLinks";
import { Container } from "../Common/CommonStyles";

const Nav = () => {
  return (
    <NavContainer>
        <Container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          margin="30px 0px 0px 0px"
        >
          <div style={{ display: "flex" }}>
            <BsTelephone />
            <Tag font="16px" weight="500">
              +022 564 7786
            </Tag>
          </div>

          <Logo />

          <SocialLinks className="nav-links" />
   

        {/* <MenuIcon /> */}
      </Container>

   <Menu>
    <div>

    <NavLinks className="nav-links" />

    </div>
      <div>

      <CartButtons />
   
      </div>
  
       </Menu>

       
    </NavContainer>
  );
};

export default Nav;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
;
  padding:41px 150px 41px 130px; 

`;


const CartbuttonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
 
;


`;
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
  
    max-width: var(--max-width);
    flex-direction: column;
    display: flex;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      /* original margin-left: -15px */
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    img {
      margin-left: 15px;
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
