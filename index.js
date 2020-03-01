// убираем контроль над скроллом страницы
document.body.style.overflow = 'hidden';
// инициализация пагинации
let pagination = document.getElementsByClassName('p');
let white = 'white';
let orange = '#f78b1f';

const paginationUpdate = (slide) => {
  switch (slide) {
    case 1:
      pagination[0].style.backgroundColor = orange;
      pagination[1].style.backgroundColor = white;
      pagination[2].style.backgroundColor = white;
      break;
    case 2:
      pagination[0].style.backgroundColor = white;
      pagination[1].style.backgroundColor = orange;
      pagination[2].style.backgroundColor = white;
      break;
    case 3:
      pagination[0].style.backgroundColor = white;
      pagination[1].style.backgroundColor = white;
      pagination[2].style.backgroundColor = orange;
      break;
    default:

  }
}

// выделяем 1 слайд на пагинации
paginationUpdate(1);

// контролируем обновление страницы на каждом слайде
switch (window.pageYOffset) {
  case 768: // 2 slide
    document.getElementById('txt2').style.top = '752px';
    paginationUpdate(2);
    break;
  case 1536: // 3 slide
    document.getElementById('txt2').style.top = '553px';
    paginationUpdate(3);
    break;
  default: // 1 slide
    document.getElementById('txt2').style.top = '950px';
    paginationUpdate(1);
}

// обработка свайпа по экрану айпада
let swipe = () => {
  let startPoint={};
  let nowPoint;
  let ldelay;
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
  let pdelay=new Date();
  nowPoint=event.changedTouches[0];
  let xAbs = Math.abs(startPoint.x - nowPoint.pageX);
  let yAbs = Math.abs(startPoint.y - nowPoint.pageY);
  if ((xAbs > 20 || yAbs > 20) && (pdelay.getTime()-ldelay.getTime())<200) {
  if (nowPoint.pageY < startPoint.y){/*СВАЙП ВВЕРХ*/
    if (startPoint.y < 1500) { /*проверка нижней границы*/
      let options = {
        top: 768,
        behavior: 'smooth'
      }
      window.scrollBy(options);
      switch (window.pageYOffset) { /* переключение пагинации */
        case 0: // 2 slide
          paginationUpdate(2);
          break;
        case 768: // 3 slide
          paginationUpdate(3);
          break;
        default: // 1 slide

      }
      animateText('down');
    }
  } else {/*СВАЙП ВНИЗ*/
    if (startPoint.y > 768) { /*проверка верхней границы */
      let options = {
        top: -768,
        behavior: 'smooth'
      }
      window.scrollBy(options);
      switch (window.pageYOffset) { /* переключение пагинации */
        case 1536: // 2 slide
          paginationUpdate(2);
          break;
        case 768: // 1 slide
          paginationUpdate(1);
          break;
        default:

      }

      if (window.pageYOffset > 1500) {
        document.getElementById('txt2').style.top = '554px'
        animateText('up');
      }else {
        animateText('up');
      }
    }
  }
  }
  }, false);
}

// Обработка текста и камней на втором слайде
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
