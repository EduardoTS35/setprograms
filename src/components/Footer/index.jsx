import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  
  const serviceMenu = [
    {
      title: 'Cerbero - Monitero de maquinas en tiempo real',
      href: '/portfolio/sistema-de-monitoreo'
    },
    {
      title: 'Diseño y desarrollo web',
      href: '/contact'
    },
    {
      title: 'Diseño y desarrollo de aplicaciones de escritorio',
      href: '/contact'
    },
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget 
                  logoSrc='/images/footerLogo.png' 
                  logoAlt='Logo'
                />              
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading='Servicios'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title='Contactanos'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter 
                  title='Subscribete' 
                  subtitle='Conéctate con el Futuro: Suscríbete para Descubrir las Últimas Innovaciones de SET PROGRAMS!' 
                  placeholder='ejemplo@gmail.com'
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2024 Set Programs.</Div>
          </Div>
          
        </Div>
      </Div>
    </footer>
  )
}
