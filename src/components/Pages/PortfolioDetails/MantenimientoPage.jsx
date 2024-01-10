import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../../helper'
import Cta from '../../Cta'
import PageHeading from '../../PageHeading'
import Div from '../../Div'
import SectionHeading from '../../SectionHeading'
import Spacing from '../../Spacing'

export default function PortfolioMantenimientoPage() {
  const params = useParams()
  pageTitle('Sistema de mantenimiento');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Sistema de mantenimiento'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.portfolioDetailsId}
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <img src="/images/mantenimiento2.png" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Sistema de Mantenimiento' 
              subtitle='Creative' 
            >
              <Spacing lg='40' md='20'/>
              <p>La aplicación de mantenimiento para fábricas mediante Windows Forms ha sido diseñada para optimizar la gestión de datos de mantenimiento correctivo y preventivo. Este sistema integral permite registrar de manera eficiente las actividades de mantenimiento, generando informes detallados para facilitar la toma de decisiones. La aplicación se destaca por los siguientes aspectos:</p>
              <Spacing lg='10' md='10'/>
            <dd>     •	Registro de Actividades de Mantenimiento:
                    Ofrece una interfaz intuitiva para ingresar y seguir de cerca las actividades de mantenimiento correctivo y preventivo en la fábrica, garantizando un historial completo y accesible.</dd>
              <Spacing lg='10' md='10'/>
            <dd>     •	Generación de Reportes Detallados:
                    Crea informes detallados sobre las horas trabajadas por cada empleado, desglosando las actividades realizadas durante el mantenimiento. Además, proporciona indicadores clave, como el tiempo dedicado por máquina tanto para mantenimiento correctivo como preventivo. </dd>
              <Spacing lg='10' md='10'/>
            <dd>     •	Compatibilidad con Windows Forms:
                    Diseñada con la familiar interfaz de usuario de Windows Forms, la aplicación proporciona una experiencia de usuario cómoda y amigable, facilitando la interacción con los datos de mantenimiento.</dd>
              <Spacing lg='10' md='10'/>
            <dd>     •	Seguimiento de Indicadores de Rendimiento:
                    Incorpora funciones para monitorizar eficientemente el rendimiento del personal y de las máquinas, permitiendo evaluar la eficacia de las acciones de mantenimiento realizadas.</dd>
              <Spacing lg='10' md='10'/>
            <dd>    •	Confidencialidad y Seguridad:
                    Implementa medidas de seguridad para proteger la información sensible, asegurando que los datos de mantenimiento estén resguardados y disponibles únicamente para personal autorizado.</dd>
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
