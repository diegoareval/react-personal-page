import React from 'react'
import {team} from '../../data/data.js'
import Member from '../shared/member'

 const Team = () => {

  const renderMember = (item) => <Member item={item} />
  
  return (
		<section
			className="team-area animation"
			data-animation="rotateInDownRight"
			id="team"
		>
			<div className="container">
				<div className="row">
					<div className="col-sm-12 text-center">
						<h2>Nuestro Equipo</h2>
						<div className="sub-heading">
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
								<br />
								industry. Lorem Ipsum has been the industry's standard dummy
							</p>
						</div>
					</div>
				</div>
				<div className="row">
				{
          team.map((item) =>renderMember(item))
        }
				</div>
			</div>
		</section>
	);
}

export default Team
