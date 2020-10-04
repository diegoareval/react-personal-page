import React from 'react'

 const testimon = ({item, index}) => {
  return (
		<div class={index === 0 ? "item active text-center" : "item  text-center"}>
			<img alt="text" src={item.img} class="center-block" />

			<h2>{item.name}</h2>
			<h4>{item.position}</h4>
			<p>{item.description}</p>
		</div>
	);
}

export default testimon;
