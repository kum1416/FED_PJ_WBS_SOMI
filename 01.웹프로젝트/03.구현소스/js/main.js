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
  // (4) 스크롤가능상태 변수(0-가능,1-불가능)
  let sc_sts = 0;

  // 🍍1. 전체 휠 이벤트 설정하기 ///////
  window.addEventListener("wheel", wheelFn, { passive: false });

  // 2. 휠 이벤트 함수 만들기 ///
  function wheelFn(e) {
    // (0) 기본기능 멈추기(스크롤 가능 페이지에서 기능멈춤)
    if(!sc_sts) e.preventDefault();
    // (1) 호출확인
    console.log("스크롤가능상태:",sc_sts);

    // 광스크롤 막기
    if (prot_sc) return;
    prot_sc = 1;
    setTimeout(() => (prot_sc = 0), 600);

    // (2) 휠 방향 알아내기
    let dir = e.wheelDelta;
    // console.log("방향:", dir);

    // 스크롤 가능상태로 리턴!
    if(sc_sts) return;

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

    // 만약 페이지번호가 1(두번째 페이지)이면
    // sc_sts = 1 휠불가상태로 변경!
    if(pgnum===1) sc_sts = 1;
    else sc_sts = 0;

    
    // (4) 페이지 이동하기
    $("html,body").animate({
      scrollTop: $(window).height()*pgnum+"px"
    },600,"easeInOutQuint",()=>{
      // 이동후 작동함수
      if(pgnum===5){
        $(".anividtit").css({transform:"rotate(-10deg)"});
      }
      else{
        $(".anividtit").css({transform:"rotate(0deg)"});
      }
    });
    // window.scrollTo(0, window.innerHeight * pgnum);
  } ///////// wheelFn 함수 ///////

  // pageAction함수 호출!!!
    setTimeout(() => pageAction(pgnum), 1000);

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
      console.log("등장", seq);

      let sty = movetext[seq].style;

      if (seq) {
        sty.top = "30%";
        sty.opacity = 1;
        sty.transition = "1.5s ease-in";
      } ///// if //////////
  
   } //////////// pageAction 함수 /////

   setTimeout(() => pageAction(0), 1000); 



   // 두번째 페이지 스크롤 체크
   // 대상: .bmc 
   const bmc = $(".bmc");

   bmc.scroll(function(){    
    // 현재스크롤값
    let scTop = $(this).scrollTop();
    // 보이는박스 높이
    let bxH = $(this).height();
    // 박스총높이
    let bxH2 = $(this).prop("scrollHeight");
    // 스크롤끝값=박스총높이-보이는박스높이
    let diff = bxH2 - bxH;
    console.log(scTop,bxH,bxH2,diff);

    // 만약스크롤값이 0이거나 스크롤끝값이면
    // sc_sts 상태값을 0으로 변경하여
    // 다시 스크롤 할 수 있게 변경한다!
    if(scTop === 0 || scTop === diff){
      sc_sts = 0;
    } ///////// if //////////
   })/////////// bmc 함수 //////////


} //////////// loadFn 함수 ///////////////



