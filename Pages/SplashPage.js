var API = require("Modules/api");

function goToRankingPage() {
	router.push("ranking");
}

function addNewPlayer() {
	API.addNewPlayer();
}


module.exports = {
	goToRankingPage: goToRankingPage,
	addNewPlayer: addNewPlayer
};
