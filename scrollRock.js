const obj = document.getElementById('rock');

/*Ловим касание*/
obj.addEventListener('touchstart', function(event) {
if (event.targetTouches.length == 1) {
let touch=event.targetTouches[0];
touchOffsetX = touch.pageX - touch.target.offsetLeft;
}
}, false);
/*Передвигаем объект*/
obj.addEventListener('touchmove', function(event) {
if (event.targetTouches.length == 1) {
let touch = event.targetTouches[0];
if (touch.pageX < 805 && touch.pageX > 180) {
  obj.style.left = touch.pageX + 'px';
}
}
}, false);
