import React, {useState} from 'react'
import './styles.css'
import Header from './Layout/Header'
import Content from './Pages/Content'
import Resume from './Pages/Resume'
import Footer from './Layout/Footer'
import Contact from './Pages/Contact'
import { PROFILE, CONTACT } from "./consts/consts";

 const Main = () => {
   const [screen, setScreen] = useState(PROFILE)
  return (
		<section id="container">
			<Header />
			<Content screen={screen} setScreen={setScreen} />
			{
					screen === CONTACT?
					<Contact />:
					<Resume />
			}
			<Footer />
		</section>
	);
}

export default Main