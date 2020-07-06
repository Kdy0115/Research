var end_flag = false;
setTimeout(function(){
    end_flag = true;
},/*1860000*/10000);

var clickButton = function(){
    var timeshot = document.getElementById("button-save-image");
    timeshot.click();
}

var id = setInterval(function(){
    clickButton();
    if(end_flag){
        clearInterval(id);
        alert("自動撮影終了");
    }},1000);