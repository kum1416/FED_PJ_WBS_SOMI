$(()=>{ // 로딩구역
    console.log('로딩')
    /* 
        우리가 해야할거
        1번) 가림막
        1. 페이지 로딩시 검은색 부분이 가로로 3등분되어 있다. 
        -> 페이지로딩시 = 로딩구역설정
        검은색부분이 가로로 3등분되어있다 -> 미리 선셋팅 (완료)

        2. 검은색기둥이 시간 간격(0.3초)을 왼쪽부터 차례로 화면 상단에서 아래방향으로 내려간다.
        (Embossed Paper박스가 있는만큼)

        검은색기둥이 화면상단에서 아래방향으로 내려가야함
        heigth, 포지션 top , 트랜스폼 트랜스y
        트랜스y를 쓸거임 

        어디까지 ? 그 3개있는 박스까지
        그럼 이벤트대상 적용대상높이가 어디까진지

        이벤트대상 -> 검은색기둥
        

        3. Embossed Paper박스의 왼쪽을 기준으로 Embossed Paper박스 오른쪽으로이동한다.
        4. 그리고 사라진다.
    
    */


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

        // 둘이똑같은것 
        // $(blackbox)
        // .eq(0)
        // .css({transform : `translateY(${a+'px'})`,
        // transition : '0.3s'})
        // .eq(1)
        // .css({
        //     transform : `translateY(${a+'px'})`,
        //     transition : '0.3s .3s',
        // })
        // .eq(2)
        // .css({
        //     transform : `translateY(${a+'px'})`,
        //     transition : '0.3s .6s',
        // })


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







        // 우리가한거 
        // 1. 미리 css 선 셋팅해놓기
        // 2. 로딩되었을대 css 바꾸기
        // 3. setTimeout으로 처음 css바꾸고 난후에 css값 또 바꿔주기 






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





}); // 로딩구역