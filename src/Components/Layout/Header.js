import React from 'react'

 const Header = () => {
  return (
    <header> 
    	<div id="logo">
        	<h2 classNameName="my-name">Diego Arevalo</h2>
            <h4>Frontend Developer</h4>
        </div>
        <div className="social-icons-container">
            <span className="socials-text"><button className="pulse-button"><i className="fa fa-share" aria-hidden="true"></i></button></span>
			<ul className="socialicons">
				<li><a href="https://www.facebook.com/profile.php?id=100013796223607"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
				<li><a href="https://www.linkedin.com/in/diego-enrique-arevalo-avelar-31a59a170/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
			</ul>
			</div>
    </header>
  )
}
export default Header