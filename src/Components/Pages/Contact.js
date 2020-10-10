import React from 'react'
import Form from '../Form/form'

 const Contact = () => {
  return (
    <section id="contact">
       <div id="map">
       <iframe src="https://maps.google.com/maps?q=la%20reina%2C%20chalatenango&t=&z=9&ie=UTF8&iwloc=&output=embed" width="300" height="100%" frameborder="0" style={{border: 0}} allowfullscreen=""></iframe></div>
       <div className="contact-info">
                <h3 className="main-heading"><span>Contacto:</span></h3>
            	<ul>
                    <li>Direccion: Chalate, El Salvador<br /><br /></li>
                    <li>Profesion: Programador<br /><br /></li>

                    <li>Correo: diego2000avelar@gmail.com</li>
                    <li>Telefono: +503 76540104</li>
                    <li>Pronto estara funcional, el formula</li>
                </ul>
            </div>
            <div className="contact-form">
              <h3 className="main-heading"><span>Estamos en contacto:</span></h3>
                <div id="contact-status"></div>
                    <Form/>
            </div>
    </section>
  )
}

export default  Contact
