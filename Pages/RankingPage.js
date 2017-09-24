var Observable = require("FuseJS/Observable");
var API = require("Modules/api");

var ranking = Observable();
var isLoading = Observable(false);

function refreshRanking() {
	API.getRanking().then(function(newRanking) {
		ranking.replaceAll(newRanking['result']);
	});
}

function endLoading(){
  isLoading.value = false;

}

function reloadHandler(){
  refreshRanking();
  isLoading.value = true;
  setTimeout(endLoading, 3000);
}

function activated() {
  reloadHandler();
}

module.exports = {
	ranking: ranking,
	refreshRanking: refreshRanking,
  isLoading: isLoading,
  reloadHandler: reloadHandler,
  activated: activated
}
