var Observable = require("FuseJS/Observable");
var API = require("Modules/api");

var player_name = Observable();
var is_save_btn_enabled = Observable(false);

player_name.onValueChanged(module, function(item) {
  debug_log("onValueChanged");
  if (player_name.value !== undefined)
    is_save_btn_enabled.value = player_name.value.length >= 3;
});


function save() {
  API.addNewPlayer(player_name.value)
      .then(function(resp) {
            router.push("ranking");
            clear();
  });
}

function cancel() {
  clear();
  router.goBack();
}

function clear(){
  if (player_name.value !== undefined)
    player_name.value = "";
}



module.exports = {
  player_name: player_name,
  save: save,
  cancel: cancel,
  is_save_btn_enabled: is_save_btn_enabled
}
