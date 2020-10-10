import React from 'react'
import { RESUME, PROFILE, CONTACT } from "../consts/consts";


 const Nav = ({setScreen}) => {
  return (
<nav class="menu">
        	<ul class="tabs">
                <li class="tmenu" onClick={()=>setScreen(PROFILE)}><a href="#profile" class="tab-profile"><i><i class="fa fa-user" aria-hidden="true"></i></i>Perfil</a></li>
                <li class="tmenu" onClick={()=>setScreen(RESUME)}><a href="#resume"><i><i class="fa fa-wpexplorer" aria-hidden="true"></i></i>Curriculum</a></li>
              {/*   <li class="tmenu"><a href="#portfolio"><i><i class="fa fa-eercast" aria-hidden="true"></i></i>Portafolio</a></li> */}
                <li class="tmenu" onClick={()=>setScreen(CONTACT)}><a href="#contact" ><i><i class="fa fa-telegram" aria-hidden="true"></i></i>Contacto</a></li>
            </ul>
        </nav>
  )
}

export default Nav
