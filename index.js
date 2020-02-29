document.body.style.overflow = 'hidden';

switch (window.pageYOffset) { /* контролируем обновление на каждом слайде */
  case 768:
    document.getElementById('txt2').style.top = '752px';
    break;
  case 1536:
    document.getElementById('txt2').style.top = '553px';
    break;
  default:
    document.getElementById('txt2').style.top = '950px';

}

let swipe = () => {
  var startPoint={};
  var nowPoint;
  var ldelay;
  document.addEventListener('touchstart', function(event) {
  event.stopPropagation();
  startPoint.x=event.changedTouches[0].pageX;
  startPoint.y=event.changedTouches[0].pageY;
  ldelay=new Date();
  }, false);
  /*Ловим движение пальцем*/
  document.addEventListener('touchmove', function(event) {
  event.stopPropagation();
  var otk={};
  nowPoint=event.changedTouches[0];
  otk.x=nowPoint.pageX-startPoint.x;
  otk.y=nowPoint.pageY-startPoint.y;
  /*Обработайте данные*/

  }, false);

  /*Ловим отпускание пальца*/
  document.addEventListener('touchend', function(event) {
  var pdelay=new Date();
  nowPoint=event.changedTouches[0];
  var xAbs = Math.abs(startPoint.x - nowPoint.pageX);
  var yAbs = Math.abs(startPoint.y - nowPoint.pageY);
  if ((xAbs > 20 || yAbs > 20) && (pdelay.getTime()-ldelay.getTime())<200) {
  if (xAbs > yAbs) {
  // if (nowPoint.pageX < startPoint.x){/*СВАЙП ВЛЕВО*/}
  // else{/*СВАЙП ВПРАВО*/}
  } else {
  if (nowPoint.pageY < startPoint.y){/*СВАЙП ВВЕРХ*/
    console.log(startPoint);
    if (startPoint.y < 1500) { /*проверка нижней границы*/
      console.log('scroll down');
      let options = {
        top: 768,
        behavior: 'smooth'
      }
      window.scrollBy(options);
      animateText('down');
      if (window.pageYOffset > 750) {
        console.log('3swipe');
      } else {

      }
    }
  } else {/*СВАЙП ВНИЗ*/
    console.log(startPoint);
    if (startPoint.y > 768) { /*проверка верхней границы */
      console.log('scroll up');
      let options = {
        top: -768,
        behavior: 'smooth'
      }
      window.scrollBy(options);

      console.log(window.pageYOffset);
      if (window.pageYOffset > 1500) {
        console.log('1swipe');
        document.getElementById('txt2').style.top = '554px'
        animateText('up');
      }else {
        animateText('up');
      }
    }
  }
  }
  }
  }, false);
}

let animateText = (side) => {
  //Анимация текста и камней
  let top = document.getElementById('txt2').style.top;
  top = parseFloat(top);
  let start = Date.now(); // запомнить время начала
  let timer = setInterval(function() {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;

    if (timePassed >= 1000) {
      clearInterval(timer); // закончить анимацию через 1 секунды
      return;
    }

  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
  draw(timePassed);

  }, 10);

  // в то время как timePassed идёт от 0 до 1000
  // top изменяет значение от 950px до 750px
  function draw(timePassed) {
    if (side == 'up') {
      document.getElementById('txt2').style.top = (
        top + (timePassed / 10)*2
      ) + 'px';
    }else if(side == 'down') {
      document.getElementById('txt2').style.top = (
        top - (timePassed / 10)*2
      ) + 'px';
    }
  }


// конец анимации текста и камней
}

swipe();
