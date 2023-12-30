import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/ArzafilLogo.png', 
      alt:'Partner'
    },
    {
      src: '/images/mcrLogo.png', 
      alt:'Partner'
    },
    {
      src: '/images/kratos.png', 
      alt:'Partner'
    },
    {
      src: '/images/MCR-Logo.svg', 
      alt:'Partner'
    },
    {
      src: '/images/MCR-Logo.svg', 
      alt:'Partner'
    }
  ]
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}><img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
