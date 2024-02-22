import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab] = useState('monthly')
  return (
    <Section className="position-relative">

      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Aplicación de almacén'
              price='1,599.99'
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
              price='15,999.99'
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
              price='1,599.99'
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
              price='15,999.99'
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
              price='2,100.99'
              currency='Desde $'
              timeline='mensual'
              features={['Sistema de seguridad', 'Conexión con base de datos', 'Seguimiento por maquina en tiempo real', 'Reportes por fecha', 'Reportes por maquina']}
              btnText='Comprar ahora'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Monitoreo en tiempo real'
              price='19,999.99'
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
