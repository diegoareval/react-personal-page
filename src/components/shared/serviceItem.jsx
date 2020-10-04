import React from 'react'

 const serviceItem = ({item}) => {
  return (
		<div className="col-sm-4">
			<div className="intro-block">
				<span className="intro-icon">
					<i className={item.icon}></i>
				</span>
				<h3>{item.slug}</h3>
				<p>{item.description}</p>
			</div>
		</div>
	);
}

export default serviceItem;
