import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../../helper'
import Cta from '../../Cta'
import PageHeading from '../../PageHeading'
import Div from '../../Div'
import SectionHeading from '../../SectionHeading'
import Spacing from '../../Spacing'

export default function PortfolioErpPage() {
  const params = useParams()
  pageTitle('Modulo de almacenes ERP');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Modulo de almacenes ERP'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.portfolioDetailsId}
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <img src="/images/erp2.png" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Módulo de almacenes (ERP)' 
              subtitle='Creative' 
            >
              <Spacing lg='40' md='20'/>
                <p>El módulo de Almacenes del sistema ERP implementado en la fábrica de hilos representa una solución integral para la gestión eficiente de inventarios y remisiones, adaptándose de manera versátil a cualquier tipo de fábrica. Diseñado con precisión, este sistema garantiza el control detallado de los recursos, incluyendo la información de precios únicamente para lectura, asegurando la confidencialidad de los datos financieros asociados a los productos.</p>
                <Spacing lg='10' md='10'/>
                <dd> • Lectura de Precios Segura:
                    El sistema permite a los usuarios acceder a la información de precios de manera exclusivamente informativa, garantizando la seguridad y confidencialidad de los datos financieros asociados a los productos en cualquier tipo de fábrica.</dd>
                <Spacing lg='10' md='10'/>
                <dd> • Gestión Precisa de Inventario:
                    Facilita un seguimiento detallado de los niveles de inventario, permitiendo una gestión precisa y oportuna de los recursos, con la capacidad de acceder a información de precios con propósitos informativos.</dd>
                <Spacing lg='10' md='10'/>
                <dd> • Eficiencia en la Generación de Remisiones:
                    Agiliza el proceso de creación de remisiones, optimizando la logística y proporcionando detalles esenciales para un envío eficiente, sin comprometer la seguridad de los precios.</dd>
                <Spacing lg='10' md='10'/>
                <p>En resumen, el Módulo de Almacenes ERP se adapta a las necesidades de cualquier tipo de fábrica, proporcionando un control total sobre inventarios y remisiones, y asegurando la confidencialidad de la información de precios al permitir únicamente su lectura de manera segura.</p>
                <Spacing lg='10' md='10'/>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
            <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Categoría:</h3>
                <p className='cs-m0'>Sistemas de escritorio</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Locación:</h3>
                <p className='cs-m0'>Mexico</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Visual studio</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Fecha:</h3>
                <p className='cs-m0'>01-Enero-2024</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Autor:</h3>
                <p className='cs-m0'>Eduardo Tenorio</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='info@setprograms.com.mx' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
