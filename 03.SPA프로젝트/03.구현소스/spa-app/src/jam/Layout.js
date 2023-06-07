// 메인 레이아웃 컴포넌트
import Logo from "./Logo";

const Layout = () => {
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
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/ss">Sesame</Link>
                        </li>
                        <li>
                            <Link to="/pn">Peanut</Link>
                        </li>
                        <li>
                            <Link to="/am">Almond</Link>
                        </li>
                        <li>
                            <Link to="/hz">Hazelnut</Link>
                        </li>
                        <li>
                            <Link to="/cs">Cashew</Link>
                        </li>
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