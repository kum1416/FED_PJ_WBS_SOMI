// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";

// 제이쿼리
import $ from "jquery";

/* 폰트어썸 임포트 */
/* import { faShoppingBasket, faInstagram, faFacebookSquare, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */

// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
  $(() => {
    // 모바일 햄버거 메뉴 on추가
    // $(".ham").on("click", function () {
    //   console.log("메뉴 클릭");

    //   $(this).toggleClass("on");
    //   $(".mobile-menu").toggleClass("on");
    // });

    // $(".mobile-menu__wrap li a").on("click", function () {
    //   console.log("모바일 메뉴 클릭");
    //   $(".ham").removeClass("on");
    //   $(".mobile-menu").removeClass("on");
    // })

    let ham = document.querySelector(".ham");
    let moMenu = document.querySelector(".mobile-menu");
    let menuClick = document.querySelectorAll(".mobile-menu__wrap li");
    // 메뉴 열기
    ham.addEventListener("click", function () {
      if (moMenu.classList.contains("on")) {
        ham.classList.remove("on");
        moMenu.classList.remove("on");
      } else {
        ham.classList.add("on");
        moMenu.classList.add("on");
      }
    });
    $(menuClick).on("click",function(){
      console.log("여기다가 하시면 됩니다");
        moMenu.remove("on");
    });

    // 메뉴 닫기<- 메뉴가 열린 후에(.ham.on 상태이면...)
    // .addEventListener("click",function(){
    //   ham.classList.remove('on');
    //   moMenu.classList.remove('on');
    // });
  }); /////// jQB ////////
} ///////////// jqFn /////////////

const Layout = () => {
  function test(){
      
  }
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
                <Logo lg="top" />
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
                  <Link onClick={test} to={v.link}>
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
      {jqFn()}
    </>
  );
}; ////////// Layout 컴포넌트 ///////

// 내보내기
export default Layout;
