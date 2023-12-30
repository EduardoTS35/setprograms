
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  pageTitle('Contact Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      projectType: e.target.projectType.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    emailjs
      .send('service_iqm6tai', 'template_lioc29m', templateParams, 'FGJN6Ym6JAgrg_F1V')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setModalContent('Mensaje enviado correctamente.');
        setShowModal(true);
        setTimeout(handleCloseModal, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setModalContent('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
        setShowModal(true);
        setTimeout(handleCloseModal, 5000);
      });
  };

  return (
    <>
      <PageHeading title="Contáctanos" bgSrc="/images/contact_hero_bg.jpeg" pageLinkText="Contacto" />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="¿Tienes un proyecto <br/>en mente?"
              subtitle="Estableciendo contacto"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row" onSubmit={sendEmail}>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Nombre completo*</label>
                <input type="text" id="name" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input type="text" id="email" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Tipo de proyecto*</label>
                <input type="text" id="projectType" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Celular*</label>
                <input type="text" id="phone" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Mensaje*</label>
                <textarea id="message" cols="30" rows="7" className="cs-form_field"></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>

      {/* Modal Bootstrap */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Resultado del envío</Modal.Title>
        </Modal.Header>
        <Modal.Body style={ {color: '#131313' }}>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleCloseModal} style={{ backgroundColor: '#49BCE4' }}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Spacing lg="50" md="40" />
    </>
  );
}
