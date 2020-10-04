import React from 'react'
import Footer from '../layout/footer.jsx'

 const Layout = ({children}) => {
  return (
		<>
			<header>
				<div className="container">
					<div className="row">
						<a href="#" className="logo animated bounceInLeft">
							<img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Open_Broadcaster_Software_Logo.png/1024px-Open_Broadcaster_Software_Logo.png" />
						</a>
						<nav className="animation" data-animation="bounceInRight">
							<ul className="menu" id="menu">
								<li>
									<a href="#slider-carousel">Inicio</a>
								</li>
								<li>
									<a href="#intro">Trabajo</a>
								</li>
								<li>
									<a href="#feature">Servicios</a>
								</li>
								<li>
									<a href="#testimonial">Clientes</a>
								</li>
								<li>
									<a href="#team">Nuestro Equipo</a>
								</li>
								<li>
									<a href="#contact">Contacto</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			{children}
			<Footer />
		</>
	);
}

export default Layout;
