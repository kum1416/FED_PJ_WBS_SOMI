// 달콤커피 : main.js

setTimeout(() => {
  window.scrollTo(0, 0);
}, 100);

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

// 0. 변수 설정
// (1) 전체 페이지변수
let pgnum = 0; // 현재 페이지번호(첫페이지 0)

// 🍍1. 전체 휠 이벤트 설정하기 ///////
 window.addEventListener("wheel", wheelFn, { passive: false });

// 2. 휠 이벤트 함수 만들기 ///
function wheelFn(e){

  // (0) 기본기능 멈추기
  e.preventDefault();
  // (1) 호출확인
  // console.log("휠~~~~~");

  // (2) 휠 방향 알아내기
  let dir = e.wheelDelta;
  // console.log("방향:", dir);

  // (3) 방향에 따른 페이지번호 증감
  if(dir<0){ // 스크롤 아래
    pgnum++;
    if(pgnum>6) pgnum = 6;
  } 
  else{ // 스크롤 위
    pgnum--;
    if(pgnum<0) pgnum = 0;

  } 
  console.log("페이지번호:", pgnum);

  // (4) 페이지 이동하기
  window.scrollTo(0,window.innerHeight*pgnum);


} ///////// wheelFn 함수 ///////


} //////////// loadFn 함수 ///////////////
