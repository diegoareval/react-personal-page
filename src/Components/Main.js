import React, {useState} from 'react'
import './styles.css'
import Header from './Layout/Header'
import Content from './Pages/Content'
import Resume from './Pages/Resume'
import Footer from './Layout/Footer'
import Contact from './Pages/Contact'
import { PROFILE, CONTACT, RESUME } from "./consts/consts";
import ScreenContext from './Contexts/ScreenContext'

 const Main = () => {
   const [screen, setScreen] = useState(PROFILE)
  return (
		<ScreenContext.Provider values={{screen, setScreen}}>
			<section id="container">
				<Header />
				<Content screen={screen} setScreen={setScreen} />
				{screen === CONTACT ? (
					<Contact />
				) : screen === RESUME ? (
					<Resume />
				) : null}
				<Footer />
			</section>
		</ScreenContext.Provider>
	);
}

export default Main