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
        $(".ham").on('click',function(){
            console.log("메뉴 클릭");

            $(this).toggleClass("on");
            $(".mobile-menu").toggleClass("on");
        });
        
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
                        <ul className="left-menu">
                            <li>
                                <Link to="/ss">
                                    {gnb_data[0].txt.toUpperCase()}
                                </Link>
                            </li>
                            <li>
                                <Link to="/pn">
                                    {gnb_data[1].txt.toUpperCase()}
                                </Link>
                            </li>
                            <li>
                                <Link to="/am">
                                    {gnb_data[2].txt.toUpperCase()}
                                </Link>
                            </li>
                        </ul>
                        {/* 로고박스 */}
                        <h2 className="logo">
                            <Link to="/">
                                <Logo lg="top" />
                            </Link>
                        </h2>
                        <ul className="right-menu">
                            <li>
                                <Link to="/am">
                                    {gnb_data[3].txt.toUpperCase()}
                                </Link>
                            </li>
                            <li>
                                <Link to="/am">
                                    {gnb_data[4].txt.toUpperCase()}
                                </Link>
                            </li>
                        </ul>
                        {/* 장바구니 */}
                        <div className="cart">
                            <a href="#">
                                <i className="fa-solid fa-basket-shopping"></i>
                                {/* <FontAwesomeIcon icon={faShoppingBasket} /> */}
                            </a>
                        </div>
                    </nav>
                   

                    {/* 모바일메뉴가림막 */}
                    <div className="mobile-menu"></div>
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
