import React from 'react';
import './Business.css';

let business = {
	imageSrc: 'https://images.squarespace-cdn.com/content/54e78c74e4b0a4a2246be378/1428567650776-7OZ700XVS48FM0YAP64I/Reggae_Grill_Logo_4C+rectangular.png?content-type=image%2Fpng',
	name: 'Jamaican Reggae Grill',
	address: '622 S. Rangeline Rd',
	city: 'Carmel',
	state: 'IN',
	zipCode: '46032',
	category: 'Jamaican',
	rating: 4.5,
	reviewCount: 112
}

class Business extends React.Component {
	render() {
		return (
			<div className="Business">
				<div className="image-container">
					<img 
						src={business.imageSrc}
						alt=""
					/>
				</div>
				<h2>{business.name}</h2>
				<div className="Business-information">
					<div className="Business-address">
						<p>{business.address}</p>
						<p>{business.city}</p>
						<p>{business.state} {business.zipCode}</p>
					</div>
					<div className="Business-reviews">
						<h3>{business.category}</h3>
						<h3 className="rating">{business.rating}</h3>
						<p>{business.reviewCount}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Business;