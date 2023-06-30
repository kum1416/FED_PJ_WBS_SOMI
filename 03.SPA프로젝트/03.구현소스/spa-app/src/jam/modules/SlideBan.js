// 메인 컴포넌트 - slideban.js
// 메인CSS
import "../css/slideban.css";
// 메인 데이터
import slideban_data from "../data/slideban";

// svg 데이터
import svgData from "../data/svg";

// 제이쿼리
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {
        // html 코드 삽입(svg데이터) =========================
        document.querySelector(".slidesvg").innerHTML = svgData.slidecenter;

        // 슬라이드 배너 ==============================================
        // 양쪽버튼 : .abtn
        let lbtn = $(".lbtn");
        let rbtn = $(".rbtn");
        let slide = $('#slideban')
        let li = $('#slideban li')

        lbtn.on("click", function (e) {
            // console.log('좌클릭')
            e.preventDefault();
            $('#slideban').append($('#slideban li').last())
            
            li.eq(0).css({
                transition : '1s',
                top: "-10%",
                left: "-210%",
                filter: "grayscale(50%)",
                opacity: "1",
            });
            
            li.eq(1).css({
                transition : '1s',
                top: "-25%",
                left: "-110%",
                transform: "scale(0.9)",
                filter: "grayscale(50%)",
                opacity: "1",
            });
            
            li.eq(2).css({
                transition : '1s',
                top: "-30%",
                left: "0%",
                transform: "scale(1)",
                filter: "grayscale(0%)",
            });
            
            li.eq(3).css({
                transition : '1s',
                top: "-25%",
                left: "110%",
                transform: "scale(0.9)",
                filter: "grayscale(50%)",
            });
            
            li.eq(4).css({
                transition : '1s',
                top: "-10%",
                left: "210%",
                transform: "scale(0.7)",
                filter: "grayscale(50%)",
            });
            
            li.eq(5).css({
                transition : '1s',
                top: "5%",
                left: "300%",
                transform: "scale(0.7)",
                filter: "grayscale(50%)",
                opacity: "1",
            });
            
            li.eq(6).css({
                transition : '1s',
                top: "5%",
                left: "-300%",
                transform: "scale(0.7)",
                filter: "grayscale(50%)",
                opacity: "1",
            });
            
            


            
        });
        rbtn.on("click", function (e) {

            console.log("우클릭");

            e.preventDefault();

            $('#slideban').append($('#slideban li').first())
            // 우클릭은 좌클릭과 반대로 
            
            // li.eq(6).css({
            //     transition : '1s',
            //     top: "-10%",
            //     left: "210%",
            //     transform: "scale(0.7)",
            //     filter: "grayscale(50%)",
            //     opacity: "1",
            // });

            // li.eq(5).css({
            //     transition : '1s',
            //     top: "-25%",
            //     left: "110%",
            //     transform: "scale(0.9)",
            //     filter: "grayscale(50%)",
            //     opacity: "1",
            // });

            // li.eq(4).css({
            //     transition : '1s',
            //     top: "-30%",
            //     left: "0%",
            //     transform: "scale(1)",
            //     filter: "grayscale(0%)",
            // });
            
            // li.eq(3).css({
            //     transition : '1s',
            //     top: "-25%",
            //     left: "-110%",
            //     transform: "scale(0.9)",
            //     filter: "grayscale(50%)",
            // });
            
            // li.eq(2).css({
            //     transition : '1s',
            //     top: "-10%",
            //     left: "-210%",
            //     transform: "scale(0.7)",
            //     filter: "grayscale(50%)",
            // });
            
            // li.eq(1).css({
            //     transition : '1s',
            //     top: "5%",
            //     left: "-300%",
            //     transform: "scale(0.7)",
            //     filter: "grayscale(50%)",
            //     opacity: "1",
            // });
            
            // li.eq(0).css({
                
            //     transition : '1s',
            //     top: "5%",
            //     left: "300%",
            //     transform: "scale(0.7)",
            //     filter: "grayscale(50%)",
            //     opacity: "1",
            // });

                


            // 어펜드 - 요소를 맨끝으로 옮겨줌
            // 누굴? li의 맨 첫번째를
            // 어디로? 슬라이드이 맨끝으로
            





        });
    }); /////// jQB ////////
} ///////////// jqFn /////////////

function SlideBan(props) {
    return (
        <>
            {/* 모듈코드 */}
            <div className="slideban-wrap">
                <div className="slideban-inner">
                    <div className="slideban-listbx">
                        <div className="slidesvg"></div>
                        <ul id="slideban">
                            {slideban_data.map((v, i) => (
                                <li key={i}>
                                    <img src={v.isrc} alt="배너이미지" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 이동버튼 */}
                <a href="#" className="abtn lbtn">
                    <img src="./images/lbtn.png" alt="왼쪽이동버튼" />
                </a>
                <a href="#" className="abtn rbtn">
                    <img src="./images/rbtn.png" alt="오른쪽이동버튼" />
                </a>
            </div>

            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default SlideBan;
