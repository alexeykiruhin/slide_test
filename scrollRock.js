const obj = document.getElementById('rock');
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
let togg = 1;

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
  tab1.style.left = -(805 - touch.pageX)*3.3 + 'px' ;

  //console.log('left: ' + -(805 - touch.pageX)*3.3);
//   if (parseInt(obj.style.left) == 668 && togg == 1) {
//     togg = 0
//     console.log(0);
//     //Анимация scroll
//     // let top = document.getElementById('txt2').style.top;
//     // top = parseFloat(top);
//     let start = Date.now(); // запомнить время начала
//     let timer = setInterval(function() {
//       // сколько времени прошло с начала анимации?
//       let timePassed = Date.now() - start;
//
//       if (timePassed >= 1000) {
//         clearInterval(timer); // закончить анимацию через 1 секунды
//         return;
//       }
//
//     // отрисовать анимацию на момент timePassed, прошедший с начала анимации
//     draw(timePassed);
//
//     }, 1);
//
//     // в то время как timePassed идёт от 0 до 1000
//     // top изменяет значение от 950px до 750px
//     function draw(timePassed) {
//       console.log(timePassed);
//       tab1.style.right = -timePassed + 24 + 'px';
//     }
//
//
//   // конец анимации
// } else if(parseInt(obj.style.left) == 668 && togg == 0) {
//     togg = 1
//     console.log(1);
//     //Анимация scroll
//     // let top = document.getElementById('txt2').style.top;
//     // top = parseFloat(top);
//     let start = Date.now(); // запомнить время начала
//     let timer = setInterval(function() {
//       // сколько времени прошло с начала анимации?
//       let timePassed = Date.now() - start;
//
//       if (timePassed >= 1000) {
//         clearInterval(timer); // закончить анимацию через 1 секунды
//         return;
//       }
//
//     // отрисовать анимацию на момент timePassed, прошедший с начала анимации
//     draw(timePassed);
//
//     }, 1);
//
//     // в то время как timePassed идёт от 0 до 1000
//     // top изменяет значение от 950px до 750px
//     function draw(timePassed) {
//       console.log('timePassed = ' + (-timePassed));
//       tab1.style.left = -timePassed + 24 + 'px';
//       tab1.style.width = timePassed + 24 + 'px';
//       tab2.style.left = tab2.style.left + timePassed +1  + 'px';
//       console.log('tab2.style.left ' + tab2.style.left);
//     }
//
//
//   // конец анимации
//   }

  //tab1.style.left = -(805 - touch.pageX)*3.3 + 'px' ;
}
}
}, false);
