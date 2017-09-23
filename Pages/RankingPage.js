var Observable = require("FuseJS/Observable");
var API = require("Modules/api");

var ranking = Observable();

function refreshRanking() {
  /*
	API.getRanking().then(function(newRanking) {
		ranking.replaceAll(newRanking);
	});
  */
  ranking =  API.getRanking()['result'];
}
refreshRanking();

module.exports = {
	ranking: ranking,
	refreshRanking: refreshRanking
}
