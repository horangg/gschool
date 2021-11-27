
// 버튼 클릭 시 "이동하시겠습니까?" 띄우기
function button_event() {
  var result = confirm('이동하시겠습니까?');
  if (result) {
    window.open('https://matias.ma/nsfw/');
  } else {
  }
}

function home() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// 스크롤-TOP버튼
scrollTop('top_button', 150);
// 두 번째 파라미터: 스크롤 속도. 150ms로 지정됨
function scrollTop(elem, duration) {
  let target = document.getElementById(elem);

  target.addEventListener('click', function () {
    let currentY = window.pageYOffset;
    let step = duration / currentY > 1 ? 10 : 100;
    // 한 번에 움직이는 스크롤 양
    let timeStep = duration / currentY * step;
    let intervalID = setInterval(scrollUp, timeStep);

    function scrollUp() {
      currentY = window.pageYOffset;
      if (currentY === 0) {
        clearInterval(intervalID);
      } else {
        scrollBy(0, -step);
      }
    }
  });
}

