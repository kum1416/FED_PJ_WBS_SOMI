// 공통 data 객체 - data-common.js

const subData = {
  tarea :`
      <header class="top">
        <!-- 1.로고파트 -->
        <div>
          <h1 class="logo">
            <a href="#">
              <!-- 검정로고 -->
              <img src="./images/logo.png" alt="로고" />
              <!-- 하얀로고 -->
              <img src="./images/logo-w.png" alt="로고" />
            </a>
          </h1>
        </div>
        <!-- 2.네비파트 -->
        <div>
          <nav class="gnb">
            <ul>
              <!-- 1.PRODUCTS -->
              <li>
                  <a href="#">PRODUCTS</a>
              </li>
              <!-- 2.EMBOSSED -->
              <li>
                  <a href="#">EMBOSSED</a>
              </li>
              <!-- 3.COLORED -->
              <li>
                  <a href="#">COLORED</a>
              </li>
              <!-- 4.PREMIUM -->
              <li>
                  <a href="#">PREMIUM</a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- 3.기타파트 -->
        <div>
          <ul class="other">
            <li>
              <a href="#">
                <i class="fa-solid fa-magnifying-glass"></i>
                <!-- <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i> -->
              </a>
            </li>
            <li>
              <div>KOR</div>
            </li>
            <li>
              <a href="">
                <div class="ham">
                  <i class="fa-solid fa-burger" style="color: #000000"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </header>
    
    `,
    marea:`
    <main>
        <section class="sub_first">
          <div class="sub_pg1">
            <div class="sub_bgi1 pp">
              <img src="./images/sub1_Embossed_img.png" alt="배경이미지">
            </div>
            <!-- 배경 텍스트박스 -->
            <div class="sub_bgt">
              <h3>EMBOSSED PAPER</h3>
            </div>
            <!-- 화살표 -->
            <div class="arrow">
              <i class="fa-solid fa-arrow-down-long" style="color: #ffffff"></i>
            </div>
          </div>






          <!-- 종이리스트 -->
          <div class="sub_paper">
            <!-- 서브타이틀 -->
            <div class="sub_tit">{{$store.state.cat.toUpperCase()}} PAPER</div>
            <ul class="paper_list">
            <li v-for="(v,i) in $store.state.adata[0][$store.state.cat]">
              <a href="#">
                <div class="p_img">
                  <img :src="
                    './images/images_'+$store.state.cat.toUpperCase()+'/'+(i)+'.png'
                  " alt="레자크" />
                </div>
                <!-- 종이 이름 -->
                <div class="p_name">
                  <p>{{v.ENAME}}</p>
                  <p>{{v.KNAME}}</p>
                </div>
              </a>
            </li>



            </ul>







            <!-- 서브-하단메뉴박스 -->
            <div class="sub_menu">
              <ul>
                <!-- 서브-하단메뉴3 -->
                <li>
                  <a href="./sub03.html">
                    <div class="sub_mtxt sub_bg3">
                      <div></div>
                      <h3>PREMIUM PAPER</h3>
                      <h4>PREV</h4>
                    </div>
                  </a>
                </li>
                <!-- 서브-하단메뉴2 -->
                <li>
                  <a href="./sub02.html">
                    <div class="sub_mtxt sub_bg2">
                      <div></div>
                      <h3>COLORED PAPER</h3>
                      <h4>NEXT</h4>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 큰이미지 배경박스 -->
          <div id="bgbx"></div>
        </section>
      </main>
    `,
    barea:`
          <footer class="info">
            <!-- 3-1.하단링크 -->
            <ul class="blink">
              <li>
                <a href="#">이용약관</a>
              </li>
              <li>
                <a href="#">개인정보취급방침</a>
              </li>
              <li>
                <a href="#">이메일무단수집거부</a>
              </li>
              <li>
                <a href="#">쿠키정책</a>
              </li>
            </ul>
            <!-- 3-2.회사정보 -->
            <address class="addr">
              서울 중구 을지로 170 을지트윈타워 동관 7층 | 사업자등록번호 317-81-26964 | TEL 02) 753-1136 | FAX 02)
              773-7484<br />
              ⓒ Samwha Paper Co., Ltd. All rights reserved
            </address>
          </footer>
    `
}; //

// 내보내기
export default subData;
