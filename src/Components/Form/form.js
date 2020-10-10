import React from 'react'

 const Form = () => {
  return (
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
  )
}

export default Form;
