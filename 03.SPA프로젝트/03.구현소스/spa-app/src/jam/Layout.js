// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";

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
    ]


    return(
        <>
            {/* 1. 상단영역 */}
            <header className="top">
                {/* 네비게이션 */}
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo />
                        </li>
                        {gnb_data.map((v,i) => {
                            <Link to={v.link}>{v.txt}</Link>
                        })}
                    </ul>
                </nav>
            </header>
            {/* 2. 메인영역 */}
            <main className="cont">
                <Outlet />
            </main>
            {/* 3. 하단영역 */}
            <footer className="info">
                <h2>Contact</h2>
                <p>
                    info@wildsouls.gr
                    <br />
                    +30 2310 566 874
                    <br />
                    E-shop (09:00-15:00)
                </p>
            </footer>
        </>
    );
}; ////////// Layout 컴포넌트 ///////

// 내보내기
export default Layout;