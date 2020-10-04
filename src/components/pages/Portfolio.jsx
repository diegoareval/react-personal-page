import React from 'react'
import './index.css'
import Featured from './Feature'
import Layout from '../layout/Layout'
import Slider from '../pages/Slider'
import Service from './Service'
import Contact from './Contact'
import Download from './Download'
import Team from './Team'
import Testimonio from './Testimonio'

 const Portfolio = () => {
  return (
		<>
			<Layout>
				<Slider/>
			<Service/>
				<Featured />
        <Testimonio/>
        <Team/>
        <Download/>
        <Contact/>
			</Layout>
		</>
	);
}
export default Portfolio