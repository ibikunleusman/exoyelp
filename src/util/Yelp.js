const apiKey = 'iLSFfIPLq7yW2IdRUanyJU6r5pb4X4_NmfBJtI72LJOJCnhHKY1QSPSaEIyQyqPGAnQCu5XiNbQLs-IwwqkuarGfOCl_c5DOmmmmKDlgo3IEs7R-l29uH9vSKO1-XXYx';
const Yelp = {
	// Search and retrieve list of businesses via Yelp API
	// 1a) bypass CORS restrictions with CORS Anywhere and fetch data from API
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{
				headers: {
					Authorization: `Bearer ${apiKey}`
				}
			}).then(response => {
				return response.json();
			}).then(jsonResponse => {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map(business => {
						return {
							id: business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.location.address1,
							city: business.location.city,
							state: business.location.state,
							zipCode: business.location.zip_code,
							category: business.categories[0].title,
							rating: business.rating,
							reviewCount: business.review_count
						}
					});
				}
			});
	}
}

export default Yelp;