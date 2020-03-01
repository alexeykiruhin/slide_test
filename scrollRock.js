const obj = document.getElementById('rock');
const wrap = document.getElementById('wrap');
const toggleBarColor = document.getElementById('toggleBarColor');
let position = 2;
const max_position = document.getElementById('wrap').children.length;
let togg668 = 0;
let togg318 = 0;
let toggle1 = 1;


console.log('pos1 ' + position);



/*Ловим касание*/
obj.addEventListener('touchstart', function(event) {
if (event.targetTouches.length == 1) {
let touch=event.targetTouches[0];
touchOffsetX = touch.pageX - touch.target.offsetLeft;
}
}, false);
/*Передвигаем объект*/
obj.addEventListener('touchmove', function(event) {
if (event.targetTouches.length == 1) {//1 finger
let touch = event.targetTouches[0];
if (touch.pageX < 805 && touch.pageX > 180) {
  obj.style.left = touch.pageX + 'px';
  // console.log(touch.pageX.toString());
  toggleBarColor.style.width = touch.pageX.toString().substring(0, 2) + '%';
  if (touch.pageX < 668 && togg668 == 0) {
      console.log('668: ' + position);
      --position;
      wrap.style['transform'] = `translateX(-${position}00%)`;
      togg668 = 1;

  } else if (touch.pageX > 668 && togg668 == 1) {
      console.log('668.2');
      ++position;
      wrap.style['transform'] = `translateX(-${position}00%)`;
      togg668 = 0;
  }

  if (touch.pageX < 318 && togg318 == 0) {
    console.log('318: ' + position);
    --position;
    wrap.style['transform'] = `translateX(-${position}00%)`;
    togg318 = 1;
  } else if (touch.pageX > 318 && togg318 == 1) {
    ++position;
    wrap.style['transform'] = `translateX(-${position}00%)`;
    togg318 = 0;
  }
}
}
}, false);
