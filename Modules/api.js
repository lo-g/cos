var ROOT_URL = "http://192.168.1.102:8080/api/";

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
		.then(function(response) {
			//debug_log("resp -> " + response);
			debug_log("response of " + url + JSON.stringify(response));
			return response.json();
		  })
		.catch(function(err) {
				debug_log("Exception occured " + error );
			});
}


function getRanking() {
	return apiFetch("get_ranking");
}

function addNewPlayer(name) {
	return apiFetch("add_player", {
		method: "POST",
		body: {
			name: name,
			defeats: 0
		}
	});
}


module.exports = {
  getRanking: getRanking,
	addNewPlayer: addNewPlayer
};
