var ROOT_URL = "https://api.example.com/v2/";

function apiFetch(path, options) {
	var url = encodeURI(ROOT_URL + path);

	if(options === undefined) {
		options = {};
	}

	// If a body is provided, serialize it as JSON and set the Content-Type header
	if(options.body !== undefined) {
		options = Object.assign({}, options, {
			body: JSON.stringify(options.body),
			headers: Object.assign({}, options.headers, {
				"Content-Type": "application/json"
			})
		});
	}

	// Fetch the resource and parse the response as JSON
	return fetch(url, options)
		.then(function(response) { return response.json(); });
}

function getRanking() {
  return {
    result: [
      {'name': 'Lore', 'defeats': 2}, {'name': 'Dav', 'defeats': 20}
    ]
  }
}


module.exports = {
  getRanking: getRanking
};
