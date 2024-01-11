import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function PortfolioPage() {
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: 'Sistema de Almacen',
      subtitle: 'Ver detalles',
      href: '/portfolio/sistema-de-almacen',
      src: '/images/almacen.png',
      category: 'aplicaciones_escritorio',
    },
    {
      title: 'Sistema de Mantenimiento',
      subtitle: 'Ver detalles',
      href: '/portfolio/sistema-de-mantenimiento',
      src: '/images/mantenimiento.png',
      category: 'aplicaciones_escritorio',
    },
    {
      title: 'Sistema de Monitoreo',
      subtitle: 'Ver detalles',
      href: '/portfolio/sistema-de-monitoreo',
      src: '/images/cerbero.png',
      category: 'aplicaciones_escritorio',
    },
    {
      title: 'Módulo de almacenes (ERP)',
      subtitle: 'Ver detalles',
      href: '/portfolio/modulo-de-almacenes-erp',
      src: '/images/arzafil.png',
      category: 'aplicaciones_escritorio',
    },
    {
      title: 'Proximamente',
      subtitle: 'Ver detalles',
      href: '',
      src: '/images/proximamente.png',
      category: 'aplicaciones_escritorio',
    },
  ];
  const categoryMenu = [
    {
      title: 'Aplicaciones de escritorio',
      category: 'aplicaciones_escritorio',
    },
    
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Algo de nuestro trabajo reciente" subtitle="Nuestro portafolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-4' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
