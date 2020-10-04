import React from 'react'
import Featured from "../../image/feature-mockup.png";

  const Feature = () => {
  return (
		<section className="feature-area" id="feature">
			<div className="container">
				<div className="row">
					<div className="animation" data-animation="fadeInLeft">
						<div className="col-sm-12 text-center">
							<div className="title">
								<h2>Caracteristicas</h2>
								<div className="sub-heading">
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting <br />
										industry. Lorem Ipsum has been the industry's standard dummy
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row animation" data-animation="bounceInUp">
					<div className="col-md-12 col-lg-8 text-center">
						<div className="feature-block">
							<div className="single-feature feature-circle">
								<div className="circle"></div>
								<span className="featured-icon">
									<i className="fa fa-exchange"></i>
								</span>
								<h3>Personalizacion</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod temporin cididulabore et dolore magna aliqua.
								</p>
							</div>
							<div className="single-feature">
								<span className="featured-icon">
									<i className="fa fa-star-half-o"></i>
								</span>
								<h3>Paquetes Robustos de Software</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod temporin cididulabore et dolore magna aliqua.
								</p>
							</div>

							<div className="single-feature">
								<span className="featured-icon">
									<i className="fa fa-arrows-alt"></i>
								</span>
								<h3>Usabilidad</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod temporin cididulabore et dolore magna aliqua.
								</p>
							</div>

							<div className="single-feature">
								<span className="featured-icon">
									<i className="fa fa-cog"></i>
								</span>
								<h3>UI</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod temporin cididulabore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-4">
						<div className="feature-mockup animation" data-animation="bounceInUp">
							<img alt={Featured} src={Featured} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Feature;