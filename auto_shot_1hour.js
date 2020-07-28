/***
  31分後に撮影終了する関数 setTimeout()
  ***/
//var time_list = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"];
var clickButton = function(){
    var timeshot = document.getElementById("shot"); // button-save-imageをidを持つタグを取得
    timeshot.click(); 
} 
/***
  スケジューリング関数　setInterval()
  ***/
var id = setInterval(function(){
  DD = new Date();
  Hours = DD.getHours();
  Minutes = DD.getMinutes();
  if ((Hours != 1 || Hours !=2 || Hours !=3 || Hours !=5 || Hours !=6 || Hours !=7 || Hours !=20 || Hours !=21 || Hours !=22 || Hours!=23) & Minutes<=31){
    clickButton();
}}, 10000); // 10[s] → 10000[ms]間隔で繰り返す