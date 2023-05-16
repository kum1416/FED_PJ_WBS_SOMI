$(()=>{ // 로딩구역
    console.log('로딩')

        // 검은색박스 - 준비완료
        const blackbox = $('.blackbox')
        // $('.blackbox')
        
        // 첫번째박스
        const bbx1 = blackbox.eq(0)
        // 두번째박스
        const bbx2 = blackbox.eq(1)
        // 첫번째박스
        const bbx3 = blackbox.eq(2)
        console.log(bbx1,bbx2,bbx3)




        // 구해야 하는거 
        // 페이지 맨위에서 sub_menu높이값을 뺀 수치

        // 화면 맨위에서 - 내가 정한 요소의 머리(화면에서 요소높이값을 뺀 크기)
        let a = $('.sub_menu').offset().top;

        // 검은박스 한개만큼 옆으로 밀껀데 그 수치 = 검은박스 1개의 가로크기!
        let b = bbx1.width()
        console.log(b)

        // 검은박스 만들었고 변수지정했고 어디까지 내려가야 하는지 구했음

        $(bbx1).css({
            transform : `translateY(${a+'px'})`,
            transition : '0.3s'
        })
        $(bbx2).css({
            transform : `translateY(${a+'px'})`,
            transition : '0.3s .3s',
        })
        $(bbx3).css({
            transform : `translateY(${a+'px'})`,
            transition : '0.3s .6s',
        })


        // 함수(요소1,트랜스래이트값1,트랜스값21,트랜지션딜레이초1)
        // 함수(요소2,트랜스래이트값2,트랜스값22,트랜지션딜레이초2)
        // 함수(요소3,트랜스래이트값3,트랜스값23,트랜지션딜레이초3)

        // setTimeout(()=>{
        //     $(a).css({
        //         transform : `translateY(${q+'px'}) translateX(${w+'px'})`,
        //         transition : '0.3s'
        //     })
        //     $(b).css({
        //         transform : `translateY(${q+'px'}) translateX(${w+'px'})`,
        //         transition : '0.3s .3s',
        //     })
        //     $(c).css({
        //         transform : `translateY(${a+'px'}) translateX(${b+'px'})`,
        //         transition : '0.3s .6s',
        //     })
        // },1200)


        setTimeout(()=>{
            $(bbx1).css({
                transform : `translateY(${a+'px'}) translateX(${b+'px'})`,
                transition : '0.3s'
            })
            $(bbx2).css({
                transform : `translateY(${a+'px'}) translateX(${b+'px'})`,
                transition : '0.3s .3s',
            })
            $(bbx3).css({
                transform : `translateY(${a+'px'}) translateX(${b+'px'})`,
                transition : '0.3s .6s',
            })
        },1200)

        setTimeout(() => {
            $(".blackbxwrap").hide();
        }, 2000);




    // 등장액션 클래스 on추가 
    a1 = $(".sub_bgt");

    // 함수를 만들어서
    function adc(x) { //x = 파라미터 ,매개변수 , 전달변수
        // x는 클래스변수 -> x에 클래스on을 넣어주는 함수
        x.addClass("on");

        // 이용방법
        // 원하는 요소를 변수화 한다음에 asd(변수) 끝
    }

    // 호출하기
    adc(a1);





}); // 로딩구역