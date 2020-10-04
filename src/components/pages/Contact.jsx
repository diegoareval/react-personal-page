import React from 'react'

 const Contact = () => {
  return (
   <section className="contact-area animation" data-animation="zoomInDown" id="contact">
   <div className="container">
             <div className="row">
                 <div className="col-sm-12 text-center">
                     <h2>Contactanos</h2>
                    <div className="sub-heading">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
                          industry. Lorem Ipsum has been the industry's standard dummy
                            
                        </p>
                    </div>
                 </div>
             </div>
             <div className="row">
                 
                 <div className="col-sm-3 divider">
                     <h3>contacto</h3>
                     <div className="contact-address">
                         <ul>
                             <li>
                                 <i className="fa fa-home"></i>
                                 <div className="address-phone">
                                     <h4>Direccion</h4>
                                     <span>Tejutla Chalatenango</span> 
                                     <span>El salitre</span> 
                                 </div>
                             </li>                                
                                <li>
                                 <i className="fa fa-phone"></i>
                                 <div className="address-phone">
                                     <h4>Telefono</h4>
                                     <span>754399444</span> 
                                     <span>7447474774</span> 
                                     
                                 </div>
                             </li>                                
                                <li>
                                 <i className="fa fa-paper-plane"></i>
                                 <div className="address-phone">
                                     <h4>correo</h4>
                                     <span>diego2000avelar@gmail.com</span> 
                                       
                                 </div>
                             </li>
                         </ul>
                         
                     </div>
                 </div>
                 <div className="col-sm-9">
                     <div className="contact-block">
                         <h3>Envia un mensaje</h3>
                         <form className="contact_form">
                             <div className="row">
                                 <div className="col-sm-6">
                                     <div className="form-group">
                                         <input type="text" className="form-control" placeholder="Tu nombre" requried="required"/>
                                     </div>
                                        
                                        
                                        <div className="form-group">
                                         <input type="email" className="form-control" placeholder="contact@email.com" requried="required"/>
                                     </div> 
                                        
                                          <div className="form-group">
                                         <input type="text" className="form-control" placeholder="Tu numero de telefono" requried="required"/>
                                     </div>
                                 </div>
                                 <div className="col-sm-6">
                                     <div className="form-group">
                                         <textarea className="form-control" placeholder="Ingresa tu Consulta" required="required"></textarea>
                                     </div>
                                        
                                    <div className="form-group">
                                          <input type="submit" className="btn default-btn btn-block" value="Enviar Consulta"/>
                                     </div>
                                   
                                 </div>
                             </div>
                         </form>
                     </div>                     
                 </div>              
             </div>
             </div>
   </section>
  )
}

export default Contact
