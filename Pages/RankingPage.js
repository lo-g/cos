var Observable = require("FuseJS/Observable");
var API = require("Modules/api");

var ranking = Observable();
var isLoading = Observable(false);

function refreshRanking() {
	API.getRanking().then(function(newRanking) {
    debug_log(newRanking['result']);
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

refreshRanking();


module.exports = {
	ranking: ranking,
	refreshRanking: refreshRanking,
  isLoading: isLoading,
  reloadHandler: reloadHandler
}
