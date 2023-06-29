// 메인 컴포넌트 - mfirst.js
// 메인CSS
import "../css/text.css"
// 메인 데이터
import text_data from "../data/text";
// svg 데이터
import svgData from "../data/svg";
// 제이쿼리
import $ from "jquery";



// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); /////// jQB ////////
} ///////////// jqFn /////////////

function Text(props){
  // 뱃지 속성
  const chstyle = {
    change: {
      display: "none",
    }
  }
    return(
        <>
        {/* 모듈코드 */}
        
        <div className="text-cont">
          <div className="badge" style={chstyle[props.ch]}>
            <img className="badge-ani badge-ani__rotate" src="./images/no_circle.png" alt="뱃지" />
            <img className="badge-ani" src="./images/plastic-free-1.png" alt="뱃지" />
          </div>
          <div className="text-cont__wrap" style={{textAlign : props.ct}}>
            {text_data[props.dd].tit.split('^').map((x,i)=>
              <h2 key={i}>{x}</h2>
            )}
              {
                // map을 이용한 배열 반복문! 
                text_data[props.dd].cont.split('^').map((x,i)=>
                <p key={i}>{x}</p>
                 )
              }
          </div>
      </div>
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Text;

