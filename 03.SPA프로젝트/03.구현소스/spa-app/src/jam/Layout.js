// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";

/* 폰트어썸 임포트 */
import {  faShoppingBasket, faInstagram, faFacebookSquare, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css";

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

  return (
    <>
      {/* 1. 상단영역 */}
      <div id="top">
      <header className="top">
        {/* 네비게이션 */}
        <nav className="gnb">
          <ul className="left-menu">
            <li>
              <a href="#">Sesame</a>
            </li>
            <li>
              <a href="#">Peanut</a>
            </li>
            <li>
              <a href="#">Almond</a>
            </li>
          </ul>
          {/* 로고박스 */}
          <h2 className="logo">
            <a href="#">
                <Logo lg="top" />
            </a>
          </h2>
          <ul className="right-menu">
            <li>
              <a href="#">Hazelnut</a>
            </li>
            <li>
              <a href="#">Cashew</a>
            </li>
          </ul>
          {/* 장바구니 */}
          <div className="cart">
            <a href="#">
              <i class="fa-solid fa-basket-shopping"></i>
              {/* <FontAwesomeIcon icon={faShoppingBasket} /> */}
            </a>
          </div>
        </nav>
      </header>
    </div>
      {/* <header className="top"> */}
        {/* 네비게이션 */}
{/*         <nav className="gnb">
          <ul>
            <li>
              <Logo lg="top" />
            </li>
            {gnb_data.map((v, i) => (
              <li key={i}>
                <Link to={v.link}>{v.txt.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header> */}
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
                <i class="fa-brands fa-instagram"></i>
              {/* <FontAwesomeIcon icon={faGrinStars} /> */}
              </a>
              <a href="#">
                <i class="fa-brands fa-square-facebook"></i>
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
    </>
  );
}; ////////// Layout 컴포넌트 ///////

// 내보내기
export default Layout;
