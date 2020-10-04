import React from 'react'
import {services} from '../../data/data'
import ServiceItem from '../shared/serviceItem'

 const Service = () => {
   const renderService = (item) => <ServiceItem item={item}/>
  return (
		<section
			className="intro-area white animation"
			data-animation="bounceInLeft"
			id="intro"
		>
			<div className="container">
				<div className="row">
					<div className="col-sm-12 text-center">
						<h2>Alcanza tu sueño con alegria</h2>
						<div className="sub-heading">
							<p>
								Lorem Ipsum is simply dummy text of the printing and type setting{" "}
								<br />
								industry. Lorem Ipsum has been the industry's standard dummy
							</p>
						</div>
					</div>
				</div>
				<div className="row">
          {
            services.map((item) =>renderService(item))
          }
					<div>
          </div>
				</div>
			</div>
		</section>
	);
}

export default Service;
