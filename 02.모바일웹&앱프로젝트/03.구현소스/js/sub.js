// 서브페이지 자바스크립트

$(() => {
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
                        src="./images_EMBOSSED/${i}_${ename}.png"
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
    function adc(x) {
        //x = 파라미터 ,매개변수 , 전달변수

        // x는 클래스변수 -> x에 클래스on을 넣어주는 함수
        x.addClass("on");

        // 이용방법
        // 원하는 요소를 변수화 한다음에 asd(변수) 끝
    }

    // 호출
    adc(a1);
    // adc(a2)
    // adc(a3)

    /////// GNB 오버시 서브메뉴 보이기 /////////
    // 1. 대상선정
    const mmu = document.querySelectorAll(".gnb li a");
    console.log(mmu);

    // html 담을 변수
    let mcode = "";

    // 2. 코드 구조 - 하위 메뉴 반복 코드
    for(let sub in mdata){
        mcode +=
        `
            <div class="smbx">
                <ul>
                    <li>
                        <a href="#">${sub}</a>
                    </li>
                </ul>
            </div>
        `
    }
    console.log(mdata);

    // 3. GNB 박스에 출력하기
    mmu.innerHTML = mcode;
 
 /////// GNB 메뉴 오버시 서브메뉴 보이기 ///////

    // 1. 대상선정
    // 이벤트 대상: .gnb>ul>li
    const list = document.querySelectorAll(".gnb>ul>li");
    console.log(list);

    // 2. 상위메뉴 li에 이벤트 설정하기
    for(let x of list){
        if(x.querySelector("a").innerText) {
            // 마우스 오버시 ///
            x.onmouseenter = () => {
                // (1) 하위메뉴 박스 .sub_bx 선택하여 변경하기
                let tg = x.querySelector(".smbx");
                // (2) 하위메뉴 style 변경하기
                tg.style.height = "142px";
                tg.style.opacity = 1;
            }; ///// onmouseenter ////////

            // 마우스 오버시 ///
            x.onmouseleave = () => {
                let tg = x.querySelector(".smbx");
                tg.style.height = "0";
                tg.style.opacity = 0;
            }; ///// onmouseleave ////////
        }
    } //////// for of //////

});
