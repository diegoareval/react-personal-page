import React from 'react'

 const Header = () => {
  return (
    <header> 
    	<div id="logo">
        	<h2 className="my-name">Diego Arevalo</h2>
            <h4>Frontend Developer</h4>
        </div>
        <div class="social-icons-container">
            <span class="socials-text"><button class="pulse-button"><i class="fa fa-share" aria-hidden="true"></i></button></span>
			<ul class="socialicons">
				<li><a href="https://www.facebook.com/profile.php?id=100013796223607"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
				<li><a href="https://www.linkedin.com/in/diego-enrique-arevalo-avelar-31a59a170/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
			</ul>
			</div>
    </header>
  )
}
export default Header