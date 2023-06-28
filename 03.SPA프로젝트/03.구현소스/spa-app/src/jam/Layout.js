// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";

// 제이쿼리
import $ from "jquery";
import { useEffect } from "react";

/* 폰트어썸 임포트 */
/* import { faShoppingBasket, faInstagram, faFacebookSquare, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */

// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
  $(() => {

    let ham = document.querySelector(".ham");
    let moMenu = document.querySelector(".mobile-menu");
    let menuClick = document.querySelectorAll(".mobile-menu__wrap li");
    let body = document.querySelector("body");
    // 모바일 메뉴 열기 on추가 =====================================
    ham.addEventListener("click", function () {
      if (moMenu.classList.contains("on")) {
        ham.classList.remove("on");
        moMenu.classList.remove("on");
        moMenu.style.opacity = "1";
      } else {
        ham.classList.add("on");
        moMenu.classList.add("on");
      }
      body.classList.toggle('on');
    });

    // 모바일 메뉴 클릭 이동 =======================================
    menuClick.forEach(ele=>{
      ele.onclick = () => {
        console.log('확인')
        moMenu.classList.remove("on");
        moMenu.style.opacity = "0";
        ham.classList.remove("on");
        // body.style.overflow = "scroll";
        body.classList.remove('on')
      }
    });

    // 로고를 클릭하면 분홍화면 치우기 = momenu에 클래스를 지워준다.
    $('.logo').on('click',function(){
      console.log('로고')
      // 분홍화면mobile-menu
      $('.mobile-menu').removeClass('on')
      $('.ham').removeClass('on')
      $('body').removeClass('on')
    })
    $('.ham').on('click',()=>{
      $('.mobile-menu').css({opacity :1})
    })

    // 목표놈이 있는지 없는지 체크하는 방법! false일때 원하는 코드를 실행!
    // console.log(!document.querySelector('.aaaa'))
    // console.log(!$('.aaaa'))



    
    $(window).on('scroll',function(){
      if(!document.querySelector('.aaaa')){ return }
      // 현재 내 스크롤 위치
      let a = $(this).scrollTop();
      // console.log('내스크롤값',a)
      // 대상으로 정한 놈의 위치
      let b = $('.aaaa').offset().top;
      let c = $('.aaaa').innerHeight();
      // console.log('목표놈',b)
      // console.log('목표놈높이값',c)
      // console.log('최종목표',b - c/2)
      let d = b - c/2 
      
      
        if(a >= d){
          $("body").css({backgroundColor : "#ed7b49", transition : '.3s'})
        }
        else {
          $("body").css({backgroundColor : "#be5a4b", transition : '.3s'})
        }
    }) // 스크롤 이벤트 //


    // 내 마우스 위치를 담을 변수 
    let a; let b;
    // 위치 바꾸고싶으면 윈도우바꾸셈 
    $(window).on('mousemove',function(e){
      // 마우스가 잘 움직이는지 확인 마우스 움직이는건 ? mousemove
      // console.log('확인')
      // console.log("무브", a, b);
          a = e.pageX;
          b = e.pageY;

        // $(window).on('mouseup',function(){
        //   console.log('올려~')
        //   $("body").append(`
        //     <div class="point" style="top:${b}px; left:${a}px">
        //         <img src="../images/lips.png" alt="">
        //         </div>
        //   `);
        // })


    })
  

  }); /////// jQB ////////
} ///////////// jqFn /////////////

const Layout = () => {

  /* gnb 데이타 */
  const gnb_data = [
    {
      txt: "Sesame",
      link: "/ss",
    },
    {
      txt: "Peanut",
      link: "/pn",
    },
    {
      txt: "Almond",
      link: "/am",
    },
    {
      txt: "Hazelnut",
      link: "/hz",
    },
    {
      txt: "Cashew",
      link: "/cs",
    },
  ];

  const hcode = (v, i) => {
    return (
      <li key={i}>
        <Link to={v.link}>{v.txt.toUpperCase()}</Link>
      </li>
    );
  };

  useEffect(()=>{
    jqFn()
  },[])

  return (
    <>
      {/* 1. 상단영역 */}
      <div id="top">
        <header className="top">
          {/* 햄버거버튼 */}
          <div className="ham">
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* 네비게이션 */}
          <nav className="gnb">
            <ul className="left-menu">{gnb_data.map((v, i) => (i <= 2 ? hcode(v, i) : ""))}</ul>

            {/* 로고박스 */}
            <h2 className="logo">
              <Link to="/">
                <Logo />
              </Link>
            </h2>
            <ul className="right-menu">{gnb_data.map((v, i) => (i > 2 ? hcode(v, i) : ""))}</ul>
            {/* 장바구니 */}
            <div className="cart">
              <a href="#">
                <i className="fa-solid fa-basket-shopping"></i>
                {/* <FontAwesomeIcon icon={faShoppingBasket} /> */}
              </a>
            </div>
          </nav>

          {/* 모바일메뉴가림막+모바일메뉴 */}
          <div className="mobile-menu">
            <ul className="mobile-menu__wrap">
              {gnb_data.map((v, i) => (
                <li key={i}>
                  <Link to={v.link}>
                    {v.txt.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>
      {/* 2. 메인영역 */}
      <main className="cont">
        <Outlet />
      </main>
      {/* 3. 하단영역 */}
      <div id="info">
        <footer className="info">
          {/* 로고박스 */}
          <h2 className="logo">
            <a href="#">
              <Logo lg="top" />
            </a>
          </h2>
          <div className="footer-flex">
            <div className="footer-cont">
              <h2>Contact</h2>
              <p>info@wildsouls.gr</p>
              <p>+30 2310 566 874</p>
              <p>E-shop (09:00-15:00)</p>
            </div>
            <div className="footer-cont">
              <h2>Follow Us</h2>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
                {/* <FontAwesomeIcon icon={faGrinStars} /> */}
              </a>
              <a href="#">
                <i className="fa-brands fa-square-facebook"></i>
                {/* <FontAwesomeIcon icon={faFacebookSquare} /> */}
              </a>
            </div>
          </div>
          {/* 하단 애니메이션 메뉴 */}
          <div className="footer-fit">
            <div className="footer-flow">
              <img src="../images/footer.png" alt="하단이미지" />
              <img src="../images/footer.png" alt="하단이미지" />
              <img src="../images/footer.png" alt="하단이미지" />
              <img src="../images/footer.png" alt="하단이미지" />
            </div>
          </div>
        </footer>
      </div>

      {/* 빈루트를 만들고 JS로드함수포함 */}
      {/* {jqFn()} */}
    </>
  );
}; ////////// Layout 컴포넌트 ///////

// 내보내기
export default Layout;
