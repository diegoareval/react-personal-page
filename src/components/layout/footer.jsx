import React from 'react'
import {redes} from '../../data/data'
import Red from '../shared/red'

 const footer = () => {

  const renderRed = (red) => <Red red={red} />
  
  return (
		<footer id="footer">
			<div className="container">
				<div className="row">
					<div className="animation" data-animation="slideInLeft">
						<div className="col-sm-12 text-center">
							<div className="social-icon">
								{redes.map((item) => renderRed(item.red))}
							</div>
							<div className="copyright">
								<br />
								<br />
								<p>
									&copy; <b>Devs Group</b>
								</p>
								<div className="bordernow"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default footer;
