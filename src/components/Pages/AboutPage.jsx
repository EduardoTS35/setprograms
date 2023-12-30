import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function AboutPage() {
  pageTitle('About');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Nuestros valores"
              subtitle="En la base de cada éxito empresarial perdurable se encuentran valores sólidos"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Siempre basado en honestidad, honradez, respeto y confianza en la atención y servicio de nuestros clientes, manteniendo la integridad en todo momento.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/integridad.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Misión"
              subtitle="En cada línea de código, tejemos la misión de impulsar empresas hacia un futuro donde la adaptabilidad es fundamental."
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              En SET PROGRAMS, nos dedicamos a liderar la transformación digital de la industria en México, proporcionando soluciones de software innovadoras y eficientes. Nuestra misión es digitalizar procesos empresariales, ofreciendo a nuestros clientes herramientas personalizadas que les permitan tomar decisiones informadas y estratégicas para el crecimiento sostenible de sus organizaciones.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/mision.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Visión"
              subtitle="Miramos más allá del presente, visualizando un horizonte digital donde nuestras innovaciones guían la transformación empresarial en México"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Nos proyectamos como la empresa pionera en la actualización de la industria en México, siendo reconocidos por nuestra excelencia en la creación de innovaciones tecnológicas. Buscamos constantemente la satisfacción de nuestros clientes al desarrollar programas de vanguardia que satisfagan sus necesidades específicas en la gestión de datos e información. Además, aspiramos al crecimiento profesional y colaborativo de nuestro equipo, consolidándonos como líderes en el ámbito de la transformación digital.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/vision.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}
    </>
  );
}
