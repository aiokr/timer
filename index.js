var totalTime = document.getElementById('totalTime'); //总时长
var speechTime = document.getElementById('speechTime'); //每位代表发言时长
var yetSpeechTime = 0 //发言已用时间
var t
var remainSpeechTime //发言剩余时间
var releaseTIme = speechTime * 0.25 //最少允许让渡时间

//获取数据
function init() {
  totalTime = document.getElementById('totalTime').value 
  speechTime = document.getElementById('speechTime').value 
};

//记录已用时间
function start() {
  document.getElementById('yetSpeechTime').value = yetSpeechTime
  yetSpeechTime = yetSpeechTime + 1
  remainSpeechTime = speechTime - yetSpeechTime
  t = setTimeout("start()", 1000) //设定循环
};
