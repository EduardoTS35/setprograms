import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../../helper'
import Cta from '../../Cta'
import PageHeading from '../../PageHeading'
import Div from '../../Div'
import SectionHeading from '../../SectionHeading'
import Spacing from '../../Spacing'

export default function PortfolioAlmacenPage() {
  const params = useParams()
  pageTitle('Sistema de almacén');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Sistema de almacén'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.portfolioDetailsId}
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <img src="/images/almacen2.png" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Sistema de almacen' 
              subtitle='Producción' 
            >
              <Spacing lg='40' md='20'/>
              <p>El sistema de almacenamiento en la fábrica de hilo está diseñado para gestionar eficientemente los niveles de inventario y las remisiones, garantizando un control detallado sin incluir información de precios.</p>
              <Spacing lg='10' md='10'/>
              <p>•	Registro de Inventario:
                    El sistema posibilita un seguimiento minucioso de los niveles de inventario de hilos disponibles en la fábrica, permitiendo una gestión precisa y actualizada de los recursos.</p>
              <Spacing lg='10' md='10'/>
              <p>•	Generación de Remisiones:
                    Facilita la creación de remisiones sin revelar información de precios, incluyendo detalles esenciales como la cantidad y tipo de hilo. Cada remisión se configura para contener información relevante para un envío eficiente.</p>
              <Spacing lg='10' md='10'/>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Informacion del proyecto -</h2>
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
