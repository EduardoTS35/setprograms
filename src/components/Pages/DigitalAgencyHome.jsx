import React, { useEffect, useState } from 'react';
import Hero4 from '../Hero/Hero4';
import { pageTitle } from '../../helper';
import Div from '../Div';

import Spacing from '../Spacing';
import SectionHeading from '../SectionHeading';
import MovingText2 from '../MovingText/MovingText2';

import Cta from '../Cta';
import LogoList from '../LogoList';

export default function DigitalAgencyHome() {
  pageTitle('Agencia de software');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroSocialLinks = [
    {
      name: 'Facebook',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];
  
  const serviceData1 = [
    {
      title: 'Aplicación de almacén',
      href: '/service',
    },
    {
      title: 'Aplicación de mantenimiento',
      href: '/service',
    },
    {
      title: 'Monitoreo de maquinas en tiempo real',
      href: '/service',
    },
  ];
  const serviceData2 = [
    {
      title: 'Diseño y desarrollo web',
      href: '/service',
      },
      {
      title: 'Diseño y desarrollo de aplicaciones de escritorio',
      href: '/service',
      },
      {
      title: 'Desarrollo de ERP',
      href: '/service',
      },
  ];
 
  return (
    <>
      {/* Start Hero Section */}
      <Hero4
        title="Somos <span>S</span>et <br /> <span>P</span>rograms "
        subtitle="En SET PROGRAMS ofrecemos soluciones innovadoras para resolver problemas, brindando productos de la más alta calidad para el presente y el futuro inmediato. Comprometidos con la innovación."
        scrollDownId="#service"
        socialLinksHeading="Síguenos en nuestras redes"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+52 222 183 6560"
        email="info@setprograms.com.mx"
      />
      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Lo que proporcionamos"
          subtitle="Servicios"
          variant="cs-style1 text-center"
        />
        <Spacing lg="65" md="45" />
      </Div>
      {/* End Services Section */}

      {/* Start Moving Text Section */}
      <MovingText2 data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />
      {/* End Moving Text Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <SectionHeading
          title="Nuestros colaboradores reconocidos"
          subtitle="Clientes destacados"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Discutamos y creemos<br />algo <i>increíble</i> juntos"
          btnText="Aplicar para una reunión"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
      
    </>
  );
}
