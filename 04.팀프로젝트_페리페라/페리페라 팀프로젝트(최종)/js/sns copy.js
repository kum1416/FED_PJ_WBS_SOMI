// 로딩구역 ///////////////////////////////////////
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {
    console.log("연결")
    // 서브메뉴 대상
    const gnb = document.querySelectorAll(".connect a")
    // console.log(gnb)

    // 메인로고 대상
    const logo = document.querySelectorAll(".logo a");
    // console.log(logo)
    
    // 로고 클릭시 메인페이지 이동
    for (let x of logo) {
        x.onclick = (e) => {
            e.preventDefault();
            location.href = "main_page.html";
        }; //////// click ///////////
    } //////// for문 ///////////////////////

    // 로고 클릭시 메인페이지 이동
    for (let x of gnb) {
        x.onclick = (e) => {
            e.preventDefault();
                
            // a 텍스트 읽어오기
            let atxt = x.innerText;
            console.log(atxt);

            // 서브페이지 이동
            if(atxt)
            
            // location.href = "main_page.html";
        }; //////// click ///////////
    } //////// for문 ///////////////////////



} //////////////////// loadFn ///////////////////



