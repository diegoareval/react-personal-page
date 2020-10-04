import React from 'react'

 const Member = ({item}) => {
  return (
		<div className="col-sm-6 col-md-3">
			<div className="team-block">
				<div className="team-man">
					<img alt="team" src={item.img} />
				</div>
				<div className="team-description">
					<div className="team-title">
						<h3>{item.name}</h3>
						<span>{item.position}</span>
					</div>
					<p>{item.description}</p>
					<div className="team-social-network">
						<a href="">
							<i className="fa fa-facebook"></i>
						</a>
						<a href="">
							<i className="fa fa-twitter"></i>
						</a>
						<a href="">
							<i className="fa fa-linkedin"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Member
