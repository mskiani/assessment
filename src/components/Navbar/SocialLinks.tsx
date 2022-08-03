import React from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../../utils/constants'
import { useProductsContext } from '../../context/products_context'
import styled from "styled-components";
export const SocialLinks: React.FC<{ className: string; isSidebar?: boolean }> = ({
  className,
  isSidebar,
}) => {
  const { closeSidebar } = useProductsContext()
  return (
    <ul className={className} style ={{textAlign:"center", listStylePosition:"inside"
   }}>
      {socialLinks.map(({ id, text, url }) => {
        return (
          <Icon key={id} onClick={isSidebar ? closeSidebar : undefined}>
            <Link to={url}>{text}</Link>
          </Icon>
        )
      })}
      {/* 'checkout' only available in sidebar, not in Navbar */}
      {isSidebar && (
        <li>
          <Link to='/checkout' onClick={closeSidebar}>
            checkout
          </Link>
        </li>
      )}
    </ul>
  )
}

const Icon = styled.li`

border:1px solid black;
width:30px;
height:30px;
padding:1px;
border-radius:50%;
text-align:center;

`

