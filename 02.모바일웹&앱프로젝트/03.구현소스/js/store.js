// 뷰엑스 스토어 - 전역뷰데이터 저장소!

// 데이터 가져오기
import adata from "./data.js";

/////////////// 뷰엑스 스토어를 활용한 변수 셋팅하기 ////////////
// 1. 뷰엑스 스토어 인스턴스를 생성한다!

const store = new Vuex.Store({
    // (1) 데이터 셋팅구역 :
    state: {
        // 데이터 셋업
        adata: adata,
        // 상위분류
        cat: "embossed",
        ENAME: "",
        KNAME: "",
        FEATURES: "",
        USE: "",
        WEIGHT: "",
        ECOLOR: [],
        KCOLOR: [],
    }, /////// state 구역 ///////////

    // (2) 데이터 변경 메서드 구역 :
    // 호출시 commit()사용!
    mutations: {
        chgData(dt, pm) {
            // pm - 카테고리명
            dt.cat = pm;
        },
        chgDetail(dt, {cat1,cat2}) {
            console.log(cat1,cat2);
            // console.log(dt.adata[0][cat1][cat2]);
            let selD = dt.adata[0][cat1][cat2];
            dt.ENAME = selD.ENAME;
            dt.KNAME = selD.KNAME;
            dt.FEATURES = selD.FEATURES;
            dt.USE = selD.USE;
            dt.WEIGHT = selD.WEIGHT;
            dt.ECOLOR = selD.ECOLOR;
            console.log(dt.ECOLOR);
        },
    },
    // (3) 백엔관련 코딩 비동기처리 메서드 구역 :
    // 호출시 dispatch()사용
    actions: {},
}); /////////// 뷰엑스 인스턴스 ////////

// 내보내기
export default store;
