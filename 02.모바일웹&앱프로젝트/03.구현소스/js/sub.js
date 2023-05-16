// 서브페이지 자바스크립트

// 뷰 적용할 서브페이지

// 공통 데이터
import comData from "./data-common.js";
// 데이터 가져오기
import adata from "./data.js";


// 상단영역 뷰 템플릿 /////
Vue.component("tarea-comp",{
    template:comData.tarea,
}); ///// 상단영역 Vue component /////

// 메인영역 뷰 템플릿 /////
Vue.component("marea-comp",{
    template:comData.marea,
    method:{
    }
}); ///// 메인영역 Vue component /////

// 하단영역 뷰 템플릿 /////
Vue.component("info-comp",{
    template:comData.barea,
}); ///// 하단영역 Vue component /////


// 상단영역 뷰 인스턴스 생성하기 ///////
new Vue({
    el:'#top',
    mounted : function(){},
}); //////// 상단영역 뷰 인스턴스 //////

//###### 메인영역 뷰 인스턴스 생성하기 ##########
new Vue({
    el:"#middle",
    data : function(){
        return {
            
        };
    },
    mounted : function(){
        console.log($('.sub_bgt'))
        setTimeout(()=>{
            $('.sub_bgt')
            .addClass('on');
        },10)

    ///// 화살표 클릭시 아래페이지로 이동 /////
    $(".arrow").click(function(){
        let winh = $('.pp').height()
        console.log('애로우',winh)
        $('html,body').animate({
            scrollTop:winh
        },500)
    })

    setTimeout(() => {
        $('.pp img').css({
            transform: "scale(1.02)",
            transition: "3s linear"
        })
    }, 0);

    },
}) //////// 메인영역 뷰 인스턴스 //////// 

//###### 하단영역 뷰 인스턴스 생성하기 ##########
new Vue({
    el:"#info",
}) //////// 하단영역 뷰 인스턴스 //////// 