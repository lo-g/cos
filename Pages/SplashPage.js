var API = require("Modules/api");

function goToRankingPage() {
	router.push("ranking");
}

function goToAddPlayerPage() {
	router.push("add_player");
}

function addNewPlayer() {
	API.addNewPlayer();
}


module.exports = {
	goToRankingPage: goToRankingPage,
	addNewPlayer: addNewPlayer,
	goToAddPlayerPage: goToAddPlayerPage
};
