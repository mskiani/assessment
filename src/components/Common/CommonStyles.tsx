import styled from "styled-components";
import { device } from "./Breakpoint";

export const Tag = styled.div<{
  color?: string;
  margin?: string;
  weight?: string;
  font?: string;
  bgColor?: string;

  border?: string;
  padding?: string;
  textAlign?: string;
  borderRadius?:string;
}>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};

  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};
  border: ${({ border }) => (border ? border : "")};
  color: ${({ color }) => (color ? color : "var(--grey02);")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0px 0px 0px 5px")};

  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  cursor: pointer;
  min-width: 50px;
  font-size: ${({ font }) => (font ? font : "12px")};
  font-weight: ${({ weight }) => (weight ? weight : "600")};
  @media ${device.tablet} {
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    padding: 12x 28px 12px 28px;
    
    overflow: hidden;
    margin: 12px 0px 12px 0px;
    min-width: 50px;
  }
  @media ${device.mobileL} {
   font-size:10px !important;
  }
`;

export const Container = styled.div<{
  
  margin?: string;
  bgColor?: string;
  border?: string;
  padding?: string;
  textAlign?: string;
  borderRadius?:string;
  direction?:string;
  justifyContent?:string;
  alignItems?:string;
  width?:string;
  gap?:string;
}>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};
  border: ${({ border }) => (border ? border : "")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0px 0px 0px 0spx")};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  display:flex;
  cursor: pointer;
  width: ${({width }) => (width ? width : "100%")};
  gap: ${({gap }) => (gap ? gap : "0px")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "center")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};


  @media ${device.mobileL} {
   font-size:10px !important;
  }
`;