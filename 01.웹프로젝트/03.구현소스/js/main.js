// 달콤커피 : main.js

// 이벤트함수연결 셋팅하기 //////////////////////////////////
// 로딩함수 호출 ////////
window.addEventListener("DOMContentLoaded", loadFn); // 📢최초호출

/************************************* 
    함수명: loadFn
    기능: 페이지 로딩시 기능수행
*************************************/
function loadFn() {
    // 호출확인
    console.log("로딩완료!");


  /********************************************** 
    🍉함수명 : updatePg
    기능 : 페이지 이동시 설정값 업데이트하기
**********************************************/
function updatePg(obj) {
    // obj - 변경할 메뉴전체 객체 📢obj를 받아서 안에서 처리!
    // 1. 함수호출확인
    console.log("업데이트!");

    // 🥨2. 페이지 이동하기
    // scrllTo(가로,세로)
    window.scrollTo(0, window.innerHeight * pgnum);
    // 세로 이동위치: 윈도우높이값*페이지번호

    //호출
    let pgnum = 0;
    pgnum = seq;
    setTimeout(() => pageAction(pgnum), 500);

  } ///////////// updatePg 함수 ////////
  


/*************************************** 
    🧊함수명 : initCSS
    기능 : 등장할 요소들의 초기값 셋팅
  ***************************************/
  // 1. 대상: .movecenter
  const movecenter = document.querySelectorAll(".movecenter");
  console.log(movecenter); // 🥚 대상이 잘 잡혔는지 확인
  // 2. 이벤트설정
  movecenter.forEach((ele) => { // 🥚해당되는 애 보내기 idx -> 번호구분용
    initCSS(ele);
  });
  // 3. 함수만들기
  function initCSS(ele, seq) {
    // ele-요소, seq-순번 📢해당되는 애들마다 순번이 달라지기 때문에
    // 1. 함수호출확인
    console.log("초기화!", seq);

    // 2. 해당요소 스타일속성 선택
    let sty = ele.style;

    // 3. 각 요소별 초기화하기
    // 트랜지션 공통초기화
    sty.transition = "none";

    // 페이지별 초기화
    if (seq) {
      // 3번페이지🥭이거 갖다쓰기^_^!
      // 위로 올라가있음!
      sty.top = "30%";
      sty.opacity = 0;
      sty.transition = "1.5s ease-in";
    } ///// if //////////

  } /////////// initCSS 함수 //////

  /*************************************** 
    🥝함수명 : pageAction
    기능 : 페이지별 액션주기
  ***************************************/
    function pageAction(seq) { // seq-변경순번
        // 1. 호출확인
        console.log("액숀~!!!", seq);
    
        // 2. 변경대상 스타일 속성선택
        let sty = movecenter[seq].style;
    
        // 3. 전체초기화!
        movecenter.forEach((ele) => {
          initCSS(ele);
        });
    
        // 4. 해당 페이지 액션주기
        if (seq) {
          // 3번페이지 🥭이거 갖다쓰기^_^!
          // 위에서 중앙으로 이동!
          sty.top = "15%";
          sty.opacity = 1;
          // 트랜지션주기
          sty.transition = "all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s";
        } ///// if //////////
      } //////////// pageAction 함수 /////
    
      // 첫페이지 페이지액션 적용위해 최초호출하기 📢새로고침시 등장액션
      setTimeout(() => pageAction(0), 500);

    } //////////// loadFn 함수 ///////////////