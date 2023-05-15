// 서브페이지 자바스크립트

// 뷰 적용할 서브페이지

// 공통 데이터
import comData from './data-common.js'

// 상단영역 뷰 템플릿 /////
Vue.component("tarea-comp",{
    template:comData.tarea,
}); ///// 상단영역 Vue component /////

// 메인영역 뷰 템플릿 /////
Vue.component("marea-comp",{
    template:comData.marea,
}); ///// 메인영역 Vue component /////

// 하단영역 뷰 템플릿 /////
Vue.component("info-comp",{
    template:comData.barea,
}); ///// 하단영역 Vue component /////


// 상단영역 뷰 인스턴스 생성하기 ///////
new Vue({
    el:'#top',
    mounted : function() {
        console.log("안녕");
        {
            // 1. EMBOSSED PAPAR
            console.log("안녕");
        
            // 대상선정
            let plist = $(".paper_list");
        
            let hcode = "";
            console.log(ename);
            for (let i = 1; i < 24; i++) {
                hcode += `
                <li>
                    <a href="#">
                        <div class="p_img">
                            <img
                                src="./images_EMBOSSED/${i}k.png"
                                alt="레자크"
                            />
                        </div>
                        <!-- 종이 이름 -->
                        <div class="p_name">
                            <p>${ename[i]}</p>
                            <p>${ename2[i]}</p>
                        </div>
                    </a>
                </li>
                `;
            }
        
            // 출력하기
            plist.html(hcode);
        
            // 2. COLORED PAPER
            // let ccode = "";
        
            // for (let i = 1; i < 9; i++) {
            //     ccode += `
            //     <li>
            //         <a href="#">
            //             <div class="p_img">
            //                 <img
            //                     src="./images_COLORED/${i}k.png"
            //                     alt="레자크"
            //                 />
            //             </div>
            //             <!-- 종이 이름 -->
            //             <div class="p_name">
            //                 <p>${ename[i]}</p>
            //                 <p>${ename2[i]}</p>
            //             </div>
            //         </a>
            //     </li>
            //     `;
            // }
        
            // // 출력하기
            // plist.html(ccode);
        
            // // 3. PREMIUM PAPER
            // let pcode = "";
        
            // for (let i = 1; i < 14; i++) {
            //     pcode += `
            //     <li>
            //         <a href="#">
            //             <div class="p_img">
            //                 <img
            //                     src="./images_PREMIUM/${i}k.png"
            //                     alt="레자크"
            //                 />
            //             </div>
            //             <!-- 종이 이름 -->
            //             <div class="p_name">
            //                 <p>${ename[i]}</p>
            //                 <p>${ename2[i]}</p>
            //             </div>
            //         </a>
            //     </li>
            //     `;
            // }
        
            // // 출력하기
            // plist.html(pcode);
        
        
        
        
            // 2번째 알려주기 둘다 선셋팅을 해놓고 클래스만 주면되게하기
            // 언제? -> 로딩시
            // 누구한테? -> .sub_bgt
            // 뭘해야될까? -> 클래스 on주기 = addClass(클래스명)
            // console.log('.sub_bgt')
            // $('.sub_bgt').addClass('on');
        
            a1 = $(".sub_bgt");
            // 변수2= $('.sub_bwe')
            // 변수3 = $('.sub_bger')
        
            // 함수를 만들어서
            function adOn(x) {
                //x = 파라미터 ,매개변수 , 전달변수
        
                // x는 클래스변수 -> x에 클래스on을 넣어주는 함수
                x.addClass("on");
        
                // 이용방법
                // 원하는 요소를 변수화 한다음에 asd(변수) 끝
            }
            // 호출
            adOn(a1);
            // adc(a2)
            // adc(a3)
        
            ///// 화살표 클릭시 아래페이지로 이동 /////
            $(".arrow").click(function(){
                let winh = $('.sub_bgi1').height()
                console.log('애로우',winh)
                $('html,body').animate({
                    scrollTop:winh
                },500)
            })
        
            $('.sub_bgi1 img').css({
                transform: "scale(1.02)",
                transition: "3s linear"
            })
        
        // 요 배경을 담고있는 박스가 필요
        //  그 박스에 오버플로우 히든줘서 배경이 나가지않게 
        
        
        
        }
    },
}); //////// 상단영역 뷰 인스턴스 //////

//###### 메인영역 뷰 인스턴스 생성하기 ##########
new Vue({
    el:"#middle",
}) //////// 메인영역 뷰 인스턴스 //////// 

//###### 하단영역 뷰 인스턴스 생성하기 ##########
new Vue({
    el:"#info",
}) //////// 하단영역 뷰 인스턴스 //////// 