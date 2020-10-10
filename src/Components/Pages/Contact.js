import React from 'react'

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
                    <form action="#" id="contactform">
                       <p>
					<div className="form-group">
						<input type="text" id="name" className="form-control" required/>
						<label className="form-control-placeholder" for="name">Tu nombre</label>
					</div>
                    </p>
                    <p>
					<div className="form-group">
						<input type="text" id="email" className="form-control" required/>
						<label className="form-control-placeholder" for="email">Tu correo</label>
					</div>
                    </p>
                    <p>
                    	<label for="message">Tu Mensaje</label>
                        <textarea name="message" cols="88" rows="6" className="textarea" ></textarea>
                    </p>
                    <input type="submit" name="submit" value="Enviar Mensaje" className="button transition"></input>
                    </form>
            </div>
    </section>
  )
}

export default  Contact
