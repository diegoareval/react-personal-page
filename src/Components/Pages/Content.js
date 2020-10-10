import React from 'react'
import Nav from '../Layout/Nav'
import {  PROFILE } from "../consts/consts";

 const Content = ({screen, setScreen}) => {
  return (
		<section id="content">
			{screen === PROFILE ? (
				<div id="profile">
					<div className="about">
						<div className="photo-inner">
							<ul>
								<li>
									<img alt="img"
										className="img-profile"
										src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/104897810_981325375670661_7863925908568495196_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=EzMeMQ3XOI8AX8CZ3Sf&_nc_ht=scontent-mia3-2.xx&oh=919fe63264f8bee456791c09710deb74&oe=5F8D9832"
										height="186"
										width="175"
									/>
								</li>
							</ul>
						</div>
						<h1>Diego Arevalo</h1>
						<h3>FullStack Developer</h3>
						<br />
						<p>Amo la programacion, coding es parte de mi vida</p>
					</div>
					<ul className="personal-info">
						<li>
							<label>Nombre</label>
							<span>Diego Arevalo</span>
						</li>
						<li>
							<label>Fecha Nacimiento:</label>
							<span>Octubre 4, 1996</span>
						</li>
						<li>
							<label>Direccion: </label>
							<span>Chalate, El salvador</span>
						</li>
						<li>
							<label>Correo: </label>
							<span className="word-wrap">diego2000avelar@gmail.com</span>
						</li>
						<li>
							<label>Telefono: </label>
							<span>+503 76540104</span>
						</li>
						<li>
							<label>Profesion:</label>
							<span className="word-wrap">
								<a href="#">Programador</a>
							</span>
						</li>
					</ul>
				</div>
			) : null}
			<Nav setScreen={setScreen} />
		</section>
	);
}

export default Content;
