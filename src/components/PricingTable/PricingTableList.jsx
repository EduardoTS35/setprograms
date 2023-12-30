import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={()=>setTab('monthly')}>Mensual</li>
        <li className={tab === 'yearly' ? "active" : ""} onClick={()=>setTab('yearly')}>Anual</li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Aplicación de almacén'
              price='799'
              currency='$'
              timeline='mensual'
              features={['Sistema de seguridad', 'Conexión báscula', 'Conexión con base de datos', 'Remisiones', 'Reportes por fecha', 'Modular']}
              btnText='Comprar ahora'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Aplicación de almacén'
              price='7,188'
              currency='$'
              timeline='anual'
              features={['Sistema de seguridad', 'Conexión báscula', 'Conexión con base de datos', 'Remisiones', 'Reportes por fecha', 'Modular']}
              btnText='Comprar ahora'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='monthly' && (
            <PricingTable 
              title='Aplicación de mantenimiento'
              price='999'
              currency='$'
              timeline='mensual'
              features={['Sistema de seguridad', 'Conexión con base de datos', 'Registro de mantenimiento correctivo', 'Registro de mantenimiento preventivo', 'Reportes por fechas', 'Reporte por área', 'Reporte por trabajador']}
              btnText='Comprar ahora'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Aplicación de mantenimiento'
              price='9,588'
              currency='$'
              timeline='anual'
              features={['Sistema de seguridad', 'Conexión con base de datos', 'Registro de mantenimiento correctivo', 'Registro de mantenimiento preventivo', 'Reportes por fechas', 'Reporte por área', 'Reporte por trabajador']}
              btnText='Comprar ahora'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Monitoreo en tiempo real'
              price='1499'
              currency='$'
              timeline='mensual'
              features={['Sistema de seguridad', 'Conexión con base de datos', 'Seguimiento por maquina en tiempo real', 'Reportes por fecha', 'Reportes por maquina']}
              btnText='Comprar ahora'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Monitoreo en tiempo real'
              price='13,188'
              currency='$'
              timeline='anual'
              features={['Sistema de seguridad', 'Conexión con base de datos', 'Seguimiento por maquina en tiempo real', 'Reportes por fecha', 'Reportes por maquina']}
              btnText='Comprar ahora'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
