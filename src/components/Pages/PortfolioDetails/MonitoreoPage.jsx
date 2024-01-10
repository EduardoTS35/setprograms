import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../../helper'
import Cta from '../../Cta'
import PageHeading from '../../PageHeading'
import Div from '../../Div'
import SectionHeading from '../../SectionHeading'
import Spacing from '../../Spacing'

export default function PortfolioMonitoreoPage() {
  const params = useParams()
  pageTitle('Sistema de monitoreo');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Sistema de monitoreo'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.portfolioDetailsId}
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <img src="/images/cerbero2.png" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Sistema de Monitoreo' 
              subtitle='Creative' 
            >
              <Spacing lg='40' md='20'/>
              <p>Nuestra solución integral ofrece una potente herramienta para el monitoreo y la gestión eficiente del estado de las máquinas en una fábrica, proporcionando funcionalidades avanzadas de actualización de catálogos y visualización de datos tanto en entornos Windows Forms como en aplicativos web. Esta solución se centra en el seguimiento del tiempo activo e inactivo de las máquinas, generando informes detallados para mejorar la toma de decisiones y la eficiencia operativa.</p>
              <Spacing lg='10' md='10'/>
              <p>•	Actualización de Catálogos en Windows Forms:
                    Facilita la actualización de catálogos de manera rápida y sencilla a través de la interfaz de usuario de Windows Forms. Los usuarios pueden mantener actualizada la información crítica sobre máquinas, líneas de producción y áreas, asegurando que los datos sean precisos y siempre reflejen el estado actual de la fábrica.</p>
              <Spacing lg='10' md='10'/>
              <p>•	Visualización de Datos en Windows Forms y Aplicativo Web:
                    Proporciona una experiencia completa de monitoreo al presentar los datos de tiempo activo e inactivo de las máquinas tanto en la interfaz de usuario de Windows Forms como en un aplicativo web. Esto permite acceder y visualizar la información desde diferentes plataformas, brindando flexibilidad a los usuarios.</p>
              <Spacing lg='10' md='10'/>
              <p>•	Generación de Reportes Detallados:
                    El sistema genera informes detallados de actividad, ofreciendo análisis específicos por máquina, línea de producción y área. Estos informes proporcionan una visión completa del rendimiento, facilitando la identificación de áreas de mejora y optimización en el proceso productivo.</p>
              <Spacing lg='10' md='10'/>
              <p>•	Monitoreo en Tiempo Real:
                    Ofrece funcionalidades de monitoreo en tiempo real que permiten a los usuarios estar al tanto del estado actual de las máquinas, identificando posibles problemas o interrupciones de manera inmediata.</p>
              <Spacing lg='10' md='10'/>
              <p>•	Seguridad y Acceso Autorizado:
                    Implementa medidas de seguridad para garantizar que la información crítica esté protegida y que el acceso a los datos esté restringido a personal autorizado, asegurando la confidencialidad de los datos de la fábrica.</p>
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
