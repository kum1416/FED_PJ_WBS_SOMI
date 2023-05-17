// 서브페이지 자바스크립트

// 뷰 적용할 서브페이지

// 공통 데이터
import comData from "./data-common.js";
import store from "./store.js";

// 상단영역 뷰 템플릿 /////
Vue.component("tarea-comp", {
    template: comData.tarea,
}); ///// 상단영역 Vue component /////

// 메인영역 뷰 템플릿 /////
Vue.component("marea-comp", {
    template: comData.marea,
    method: {},
}); ///// 메인영역 Vue component /////

// 하단영역 뷰 템플릿 /////
Vue.component("info-comp", {
    template: comData.barea,
}); ///// 하단영역 Vue component /////

// 상세페이지영역 뷰 템플릿 /////
Vue.component("win-comp", {
    template: comData.darea,
}); ///// 상세페이지영역 Vue component /////

// 상단영역 뷰 인스턴스 생성하기 ///////
new Vue({
    el: "#top",
    mounted: function () {},
}); //////// 상단영역 뷰 인스턴스 //////

//###### 메인영역 뷰 인스턴스 생성하기 ##########
new Vue({
    el: "#middle",
    store, // 스토어등록!!!
    data: {},
    // DOM이 모두 로딩된 후 실행구역
    mounted: function () {
        console.log($(".sub_bgt"));
        setTimeout(() => {
            $(".sub_bgt").addClass("on");
        }, 100);

        ///// 화살표 클릭시 아래페이지로 이동 /////
        $(".arrow").click(function () {
            let winh = $(".pp").height();
            console.log("애로우", winh);
            $("html,body").animate(
                {
                    scrollTop: winh,
                },
                500
            );
        });

        setTimeout(() => {
            $(".pp img").css({
                transform: "scale(1.02)",
                transition: "3s linear",
            });
        }, 0);

        // 공유번호변수
        // let nowNum = 1;

        // 1. 종이 리스트 클릭시 상세페이지 보이기
        $(".p_img").click(function (e) {
            e.preventDefault();

            // 상세페이지 박스 보이기
            $("#dbx").show();

            // 2. 닫기버튼 클릭시 상세페이지 박스 숨기기
            $(".cbtn").click(function (e) {
                e.preventDefault();
                console.log("허허");
                // 상세페이지 박스 숨기기
                $("#dbx").hide();
            });

            // 3. 이전/다음버튼 클릭시 ????변경
            $(".abtn").click(function (e) {
                // 1. 기본이동막기
                e.preventDefault();
                // 오른쪽버튼 여부
                let isB = $(this).is("rb");
                // 분기하기
                if(isB){ // 오른쪽버튼?????

                }
                else{ // 왼쪽버튼????

                }
            });
            // 종이리스트 data-num 속성읽기 ????????
            // nowNum = $(this).attr("data-num");
            // console.log("현재이미지번호:", nowNum);
        }); /////// click //////

        // 로고이동기능 ///////////////////////////////////////////
        $(".logo").click(() => (location.href = "index.html"));

        // gnb 클릭시 링크이동하기 ////////////////////////////////
        let link = $(".gnb a");
        
        let glink1 = link.eq(0);
        let glink2 = link.eq(1);
        let glink3 = link.eq(2);
        let glink4 = link.eq(3);
        
        console.log(glink1);
        glink1.click(()=>{location.href = "sub.html"})
        glink2.click(()=>{location.href = "sub01.html"})
        glink3.click(()=>{location.href = "sub02.html"})
        glink4.click(()=>{location.href = "sub03.html"})
        
    
        ///////////////////////////////////////////////////
        let scTop = 0;

        // 메인페이지 종이봉투 없애기/보이기
        // 화면높이값
        let winH = $(window).height();
        console.log("화면높이값:", winH);

        // 대상위치값
        let pgH = $(".page6").offset().top;
        console.log("6페이지위치:", pgH);

        let imH = $(".pg1").offset().top;

        $(window).scroll(function () {
            // 스크롤위치값
            scTop = $(this).scrollTop();
            // console.log(scTop);

            if (scTop > 1850) {
                $(".pg1").hide().css({
                    transition: "3s easeInOut",
                });
            } //// if /////
            else if (scTop < 1850) {
                $(".pg1").show().css({
                    transition: "3s easeInOut",
                });
            } ///// else if ////
        }); ////////// scroll /////////////
    },
}); //////// 메인영역 뷰 인스턴스 ////////

//###### 하단영역 뷰 인스턴스 생성하기 ##########
new Vue({
    el: "#info",
}); //////// 하단영역 뷰 인스턴스 ////////

//###### 상세페이지영역 뷰 인스턴스 생성하기 ##########
new Vue({
    el: "#dbx",
    store, // 스토어등록!!!
}); //////// 상세페이지영역 뷰 인스턴스 ////////
