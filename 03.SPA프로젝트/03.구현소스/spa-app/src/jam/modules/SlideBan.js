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
    let lbtn =$('.lbtn')
    let rbtn = $('.rbtn')

    lbtn.on('click',function(e){
        // console.log('좌클릭')
        e.preventDefault()

        // 소미s : 좌클릭을 하면! ... 
        // 1번째 디브는 2의 위치로 
        // 2번째 디브는 3의 위치로 
        // 3번째 디브는 4의 위치로 탑 레프트가바뀌지만 스케일도바뀌죠?? 
        // 이걸 6에서 7까지  
        // $(몇번재디브).css({내용})




        // 먼저 움직인다 디브들을 

        // 옮겼다면 첫번째 디브를 랩핑박스의 맨뒤로 넣어준다. 



        // 그리구.. 7번째가 첫번째로 위치가 변경됩니다 




    })
    rbtn.on('click',function(e){
        console.log('우클릭')
        e.preventDefault()





    })



  }); /////// jQB ////////
} ///////////// jqFn /////////////

function SlideBan(props) {
  return (
    <>
      {/* 모듈코드 */}
      <div className="slideban-wrap">
        <div className="slideban-inner">
          <div className="slidesvg"></div>
          <div className="slideban-listbx">
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
