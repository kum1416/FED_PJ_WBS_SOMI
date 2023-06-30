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
      body.classList.toggle("on");
    });

    // 모바일 메뉴 클릭 이동 =======================================
    menuClick.forEach((ele) => {
      ele.onclick = () => {
        console.log("확인");
        moMenu.classList.remove("on");
        moMenu.style.opacity = "0";
        ham.classList.remove("on");
        // body.style.overflow = "scroll";
        body.classList.remove("on");
      };
    });

    // 로고를 클릭하면 분홍화면 치우기 = momenu에 클래스를 지워준다.
    $(".logo").on("click", function () {
      console.log("로고");
      // 분홍화면 mobile-menu
      $(".mobile-menu").removeClass("on");
      $(".ham").removeClass("on");
      $("body").removeClass("on");
    });
    $(".ham").on("click", () => {
      $(".mobile-menu").css({ opacity: 1 });
    });

    // 목표가 있는지 없는지 체크하는 방법! false일때 원하는 코드를 실행!
    // console.log(!document.querySelector('.aaaa'))
    // console.log(!$('.aaaa'))

    // 스크롤시 배경색 변경 ==============================================
    $(window).on("scroll", function () {
      if (!document.querySelector(".aaaa")) {
        return;
      }
      // 현재 내 스크롤 위치
      let a = $(this).scrollTop();
      // console.log('내스크롤값',a)
      // 대상으로 정한 목표의 위치
      let b = $(".aaaa").offset().top;
      let c = $(".aaaa").innerHeight();
      // console.log('목표',b)
      // console.log('목표높이값',c)
      // console.log('최종목표',b - c/2)
      let d = b - c / 2;

      if (a >= d) {
        $("body").css({ backgroundColor: "#ed7b49", transition: ".3s" });
      } else {
        $("body").css({ backgroundColor: "#be5a4b", transition: ".3s" });
      }
    }); // 스크롤 이벤트===================================================

    // 마우스 클릭시 이미지 생성 ==============================================
    let kiss = $(".kiss-imbx");
    let gap = $(".kiss-imbx").width() / 2;
    let csy;
    let csx;

    // console.log(gap);
    // 커서 위치 알아내기
    $(window).on("mousemove", function (e) {
      let gap = $(".kiss-imbx").width();
      // console.log("gap",gap)
      // console.log("x:",e.pageX,"y:",e.pageY);
      csy = e.pageY - gap;
      csx = e.pageX - gap;

      // console.log("값:",gap,csx,csy);
    });

    // 클래스값 변수
    let saemi = 0;

    // 광클금지 변수
    let dami = 0;

    $(window).on("mouseup", function (e) {
      // 광클금지
      if (dami) return;
      dami = 1;
      setTimeout(() => {
        dami = 0;
      }, 100);

      console.log("마우스업");
      saemi++;

      $("body").append(`
      <div class="kiss-imbx data-${saemi}">
      <img src="../images/kiss.png" alt="입술이미지" />
      </div>
      `);

      $(".data-" + saemi).css({
        top: csy + "px",
        left: csx + "px",
        transform: "translate(50%,50%)",
      });
      // 호출
      kissFn(saemi); // 새미 비동기
    });

    const kissFn = (saemi) => {
      setTimeout(() => {
        $(".kiss-imbx img").css({
          transform: "translateX(-17%)",
        });
      }, 200);
      setTimeout(() => {
        $(".kiss-imbx img").css({
          transform: "translateX(-34%)",
        });
      }, 400);
      setTimeout(() => {
        $(".kiss-imbx img").css({
          transform: "translateX(-51%)",
        });
      }, 600);
      // 몇초뒤 새미들어간 그거지워줘! -> 새미가없는데?
      setTimeout(() => {
        $(".data-" + saemi).fadeOut(200);
      }, 800);
    };

    //======================================================================
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

  useEffect(() => {
    jqFn();
  }, []);

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
              </a>
            </div>
          </nav>

          {/* kiss 박스(숨김) */}
          <div className="kiss-imbx" style={{ display: "none" }}>
            <img src="../images/kiss.png" alt="입술이미지" />
          </div>

          {/* 모바일메뉴가림막+모바일메뉴 */}
          <div className="mobile-menu">
            <ul className="mobile-menu__wrap">
              {gnb_data.map((v, i) => (
                <li key={i}>
                  <Link to={v.link}>{v.txt.toUpperCase()}</Link>
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
              </a>
              <a href="#">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </div>
          </div>
          {/* 하단 애니메이션 메뉴 */}
          <div className="footer-fit">
            <div className="footer-flow">

              <div className="flowbx">
              <div>
                <img src="../images/footer1.png" alt="하단이미지" />
              </div>
                <div>
              <img src="../images/footer2.png" alt="하단이미지" />
                </div>
                <div>
              <img src="../images/footer3.png" alt="하단이미지" />
                </div>
                <div>
              <img src="../images/footer4.png" alt="하단이미지" />
                </div>
              </div>

              <div className="flowbx">
              <div>
                <img src="../images/footer1.png" alt="하단이미지" />
              </div>
                <div>
              <img src="../images/footer2.png" alt="하단이미지" />
                </div>
                <div>
              <img src="../images/footer3.png" alt="하단이미지" />
                </div>
                <div>
              <img src="../images/footer4.png" alt="하단이미지" />
                </div>
              </div>

              <div className="flowbx">
              <div>
                <img src="../images/footer1.png" alt="하단이미지" />
              </div>
                <div>
              <img src="../images/footer2.png" alt="하단이미지" />
                </div>
                <div>
              <img src="../images/footer3.png" alt="하단이미지" />
                </div>
                <div>
              <img src="../images/footer4.png" alt="하단이미지" />
                </div>
              </div>

              <div className="flowbx">
              <div>
                <img src="../images/footer1.png" alt="하단이미지" />
              </div>
                <div>
              <img src="../images/footer2.png" alt="하단이미지" />
                </div>
                <div>
              <img src="../images/footer3.png" alt="하단이미지" />
                </div>
                <div>
              <img src="../images/footer4.png" alt="하단이미지" />
                </div>
              </div>
              
              {/* <div>
              <img src="../images/footer.png" alt="하단이미지" />
              </div>
              <div>
              <img src="../images/footer.png" alt="하단이미지" />
              </div>
              <div>
              <img src="../images/footer.png" alt="하단이미지" />
              </div>  */}

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
