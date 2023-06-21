// 메인 컴포넌트 - Banner.js
// 메인CSS
import "../css/banner.css"
// 메인 데이터
import ban_data from "../data/banner";
// 제이쿼리
import $ from "jquery";



// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{
    }); /////// jQB ////////
} ///////////// jqFn /////////////

function Banner(props){
    return(
        <section className="ban-cover">
            {/* 모듈코드 */}
            <div className="ban-wrap">
            {/* 전체박스 */}
                <div className="ban-inner">
                    {/* a태그 감싸기 */}
                    <a href="#">
                    {/* 잼이미지 겉박스 */}
                    <div className="ban-imgbx">
                        <div className="ban-img__hover">
                            <div className="hoverbx">
                                <img src={ban_data.hsrc} />
                            </div>
                        </div>
                        <div className="ban-img__push">
                            <div className="pushbx">
                                <img src={ban_data.isrc} />
                            </div>
                        </div>
                    </div>
                    {/* 잼텍스트 겉박스 */}
                    <div className="ban-txtbx">
                    {/* 잼이름박스 */}
                        <h2>{ban_data.tit}</h2>
                        {/* 잼가격겉박스 */}
                        <div className="ban-pribx">
                        <div className="ban-price">
                            <bdi>
                                <span>€</span>
                                {ban_data.price}
                            </bdi>
                        </div>
                        </div>
                    </div>
                    </a>
                    {/* 버튼박스 */}
                    <a href="#">
                    <div className="mbtnbx">
                        <div className="mainbtn">
                        <div className="runtxt">
                            <span>BUY NOW!</span>
                            <span>BUY NOW!</span>
                            <span>BUY NOW!</span>
                            <span>BUY NOW!</span>
                        </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        <div className="ban-mover"></div>
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </section>
    )
}

export default Banner;

