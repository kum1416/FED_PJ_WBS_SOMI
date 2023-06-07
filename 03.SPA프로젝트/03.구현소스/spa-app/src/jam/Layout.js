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
                            <Link to="am/">Almond</Link>
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
        </>
    );
}; ////////// Layout 컴포넌트 ///////

export default Layout;