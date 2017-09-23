var ROOT_URL = "http://192.168.2.1:8080/api/";

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
//get_rankin

function getRanking() {
	return apiFetch("get_ranking");
}


module.exports = {
  getRanking: getRanking
};
