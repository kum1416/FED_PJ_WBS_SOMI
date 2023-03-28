// 달콤커피 : main.js

// 새로고침시 맨위로 이동
setTimeout(() => {
  window.scrollTo(0, 0);
}, 100);

// 로딩함수 호출 ////////
window.addEventListener("DOMContentLoaded", loadFn); // 📢최초호출

function loadFn() {
  console.log("로딩완료!");

  // (1) 전체 페이지변수
  let pgnum = 0; // 현재 페이지번호(첫페이지 0)
  // (2) 전체 페이지수
  const pgcnt = document.querySelectorAll(".page").length;
  console.log("전체페이지수:", pgcnt);
  // (3) 광스크롤 금지변수
  let prot_sc = 0;

  // 🍍1. 전체 휠 이벤트 설정하기 ///////
  window.addEventListener("wheel", wheelFn, { passive: false });

  // 2. 휠 이벤트 함수 만들기 ///
  function wheelFn(e) {
    // (0) 기본기능 멈추기
    e.preventDefault();
    // (1) 호출확인
    // console.log("휠");

    // 광스크롤 막기
    if (prot_sc) return;
    prot_sc = 1;
    setTimeout(() => (prot_sc = 0), 700);

    // (2) 휠 방향 알아내기
    let dir = e.wheelDelta;
    // console.log("방향:", dir);

    // (3) 방향에 따른 페이지번호 증감
    // 스크롤 아래
    if (dir < 0) {
      pgnum++;
      if (pgnum > pgcnt - 1) pgnum = pgcnt - 1;
    } ////// if //////

    // 스크롤 위
    else {
      pgnum--;
      if (pgnum < 0) pgnum = 0;
    } ////// else if //////
    console.log("페이지번호:", pgnum);

    // (4) 페이지 이동하기
    window.scrollTo(0, window.innerHeight * pgnum);
  } ///////// wheelFn 함수 ///////

  // pageAction함수 호출!!!
    setTimeout(() => pageAction(pgnum), 500);

  /*************************************** 
    🧊함수명 : initCSS
  ***************************************/
  // 1. 대상: .movetext
  const movetext = document.querySelectorAll(".movetext");
  console.log(movetext);

  // 함수만들기
  function initCSS(ele, seq) {
    // 1. 호출확인
    console.log("초기화!", seq);
    // 2. 해당요소 스타일속성 선택
    let sty = ele.style;

    // 페이지별 초기화
    if (seq) {
      // 위로 올라가있음!
      sty.top = "30%";
      sty.opacity = 0;
      sty.transition = "1.5s ease-in";
    } ///// if //////////
  } ////// initCSS 함수 ////////

  /*************************************** 
    🥝함수명 : pageAction
  ***************************************/
    function pageAction(seq) {
      // 1. 호출확인
      console.log("액숀~!!!", seq);

      let sty = movetext[seq].style;

      if (seq) {
        sty.top = "30%";
        sty.opacity = 1;
        sty.transition = "1.5s ease-in";
      } ///// if //////////
  
   } //////////// pageAction 함수 /////

   setTimeout(() => pageAction(0), 1000); 
} //////////// loadFn 함수 ///////////////
