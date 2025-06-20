document.addEventListener("DOMContentLoaded", function () {
  console.log("스크롤 작동 시작");

  // 클릭 요소와 이동 대상 매핑
  const mapping = [
    { button: ".Cinema", target: '[data-layer="2"]' },
    { button: ".Bus", target: '[data-layer="1"]' },
    { button: ".AboutBarrierFree", target: '[data-layer="News."]' },
    { button: ".Hospital", target: '[data-layer="3"]' },
    { button: ".Website", target: ".targetWebsite" },
    { button: ".Kiosk", target: ".target5287090" },
  ];

  let scrollani;
  let scrollPos = scrollY;
  let targetScrollPos = 0;
  let nowScrollPos = scrollY;

  // 현재 스크롤 위치 추적
  window.addEventListener("scroll", () => {
    nowScrollPos = scrollY;
    scrollPos = nowScrollPos;
  });

  // 각 버튼에 클릭 이벤트 등록
  mapping.forEach((pair) => {
    const btn = document.querySelector(pair.button);
    const target = document.querySelector(pair.target);

    if (btn && target) {
      btn.addEventListener("click", () => {
        targetScrollPos = target.offsetTop;
        scrollani = requestAnimationFrame(moveTo);
      });
    }
  });

  // 부드러운 스크롤 함수
  function moveTo() {
    scrollPos += (targetScrollPos - nowScrollPos) * 0.1;
    window.scroll(0, scrollPos);

    if (Math.abs(targetScrollPos - nowScrollPos) <= 1) {
      window.scroll(0, targetScrollPos);
      cancelAnimationFrame(scrollani);
    } else {
      scrollani = requestAnimationFrame(moveTo);
    }
  }
});
