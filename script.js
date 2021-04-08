let eyeball = document.getElementById('eyeball');
let body = document.getElementById('body');

document.addEventListener('mousemove', function(e) {
    let pagePercent = e.pageX / body.clientWidth;
    let degreePercent = pagePercent * -130;
    let eyeMove = -70 + degreePercent;
    eyeball.style.transform = 'rotate('+(eyeMove)+'deg)'
  });
