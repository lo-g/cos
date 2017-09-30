var Observable = require("FuseJS/Observable");
var API = require("Modules/api");

var ranking = Observable();
var selected_player = Observable();
var player_name = selected_player.map(function(x){
		if (x !== undefined)
			return x.name
		return "?";
});

function getRanking() {
	API.getRanking().then(function(newRanking) {
		ranking.replaceAll(newRanking['result']);
	});
}

function selectPlayer(arg) {
  selected_player.value = arg.data;
	debug_log("selected: " + JSON.stringify(arg));
}

function cancel() {
	_clear();
	router.goBack();
}

function activated() {
	getRanking();
}

function _clear() {
	selected_player.value = {};
}

function updateShame() {
	API.updateShame(selected_player.value.name).then(function(newRanking) {
		//ranking.replaceAll(newRanking['result']);
		_clear();
		router.goto("ranking");

	});
}

module.exports = {
  ranking: ranking,
  selectPlayer: selectPlayer,
  player_name: player_name,

	cancel: cancel,
	activated: activated,
	updateShame: updateShame
}
