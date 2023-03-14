// 로딩구역 ///////////////////////////////////////
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {
    console.log("연결")
    const logo = document.querySelectorAll(".logo a");
    console.log(logo)
    
    // 2-2. 로고 클릭시 메인페이지 이동
    for (let x of logo) {
        x.onclick = (e) => {
            e.preventDefault();
            location.href = "main_page.html";
        }; //////// click ///////////
    } //////// for문 ///////////////////////
} //////////////////// loadFn ///////////////////