import React from 'react'
import whiteLogo from '../../assets/Group.svg'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/'>
      <img src={whiteLogo} alt='limages' />
    </Link>
  )
}
