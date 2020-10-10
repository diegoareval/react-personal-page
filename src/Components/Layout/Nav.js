import React from 'react'
import { RESUME, PROFILE, CONTACT } from "../consts/consts";


 const Nav = ({setScreen}) => {
  return (
<nav className="menu">
        	<ul className="tabs">
                <li className="tmenu" onClick={()=>setScreen(PROFILE)}><a href="#profile" className="tab-profile"><i><i className="fa fa-user" aria-hidden="true"></i></i>Perfil</a></li>
                <li className="tmenu" onClick={()=>setScreen(RESUME)}><a href="#resume"><i><i className="fa fa-wpexplorer" aria-hidden="true"></i></i>Curriculum</a></li>
              {/*   <li className="tmenu"><a href="#portfolio"><i><i className="fa fa-eercast" aria-hidden="true"></i></i>Portafolio</a></li> */}
                <li className="tmenu" onClick={()=>setScreen(CONTACT)}><a href="#contact" ><i><i className="fa fa-telegram" aria-hidden="true"></i></i>Contacto</a></li>
            </ul>
        </nav>
  )
}

export default Nav
