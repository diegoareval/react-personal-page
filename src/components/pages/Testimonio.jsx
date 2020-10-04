import React from 'react'
import {testimonios} from '../../data/data'
import Testimon from '../shared/testimon'

 const Testimonio = () => {
   const renderTestimonio = (item, index) => <Testimon index={index} item={item} />

  return (
		<section class="testimonials" id="testimonial">
			<div class="container">
				<div class="row">
					<div class="animation" data-animation="shake">
						<div class="col-sm-12 text-center">
							<h2>Buen Portafolio de clientes</h2>
							<div class="sub-heading">
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting <br />
									industry. Lorem Ipsum has been the industry's standard dummy
								</p>
							</div>
						</div>
					</div>
          <div class="row">
                <div class="animation" data-animation="shake"> 
                <div class="col-sm-12">
                  <div id="carousel-testimonials" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                            <li data-target="#carousel-testimonials" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-testimonials" data-slide-to="1"  ></li>
                            <li data-target="#carousel-testimonials" data-slide-to="2"  ></li>
                        </ol>
                        <div class="carousel-inner">
                          {
                            testimonios.map((item, index) =>renderTestimonio(item, index))
                          }
                        </div>
                   </div>
                </div>
                </div>
            </div>
				</div>
			</div>
		</section>
	);
}

export default Testimonio
