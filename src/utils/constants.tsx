import { GiClothes } from 'react-icons/gi'
import { MdOutlineSmartToy } from 'react-icons/md'
import { FaBaby } from 'react-icons/fa'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'FAQ',
    url: '/FAQ',
  },
  {
    id: 3,
    text: 'Blog',
    url: '/Blog',
  },
]

export const socialLinks = [
  {
    id: 1,
    text: 'Fb',
    url: 'wwww.facebook.com',
  },
  {
    id: 2,
    text: 'Tw',
    url: 'www.twitter.com',
  },
  {
    id: 3,
    text: 'Ig',
    url: 'www.instagram.com',
  },
  {
    id: 3,
    text: 'Yt',
    url: 'www.youtube.com',
  },
]

export const services = [
  {
    id: 1,
    icon: <MdOutlineSmartToy />,
    title: 'toy',
    text: 'toy text',
  },
  {
    id: 2,
    icon: <GiClothes />,
    title: 'clothing',
    text: 'clothing text',
  },
  {
    id: 3,
    icon: <FaBaby />,
    title: 'accessories',
    text: 'accessories text',
  },
]


export const QUERY = `
{
  allProduct {
    _id
    name
    slug {
      current
    }
    brand
    categories {
      categories
    }
    clothingCategories {
      clothingCategories
    }
    price
    stock
    forWhom {
      forWhom
    }
    height {
      height
    }
    heightDescription
    age {
      age
    }
    ageDescription
    itemDescription
    featured
    images {
      asset {
        url
      }
    }
  }
}

`
