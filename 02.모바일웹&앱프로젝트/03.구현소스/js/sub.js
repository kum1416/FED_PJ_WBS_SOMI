// 서브페이지 자바스크립트

$(() => {
    console.log("안녕");

    // 대상선정
    let plist = $(".paper_list");

    let hcode = '';

    for (let i = 1; i < 24; i++) {
        hcode += `
        <li>
            <a href="#">
                <div class="p_img">
                    <img
                        src="./images_EMBOSSED/${i}_LEATHACK.png"
                        alt="레자크"
                    />
                </div>
                <!-- 종이 이름 -->
                <div class="p_name">
                    <p>LEATHACK ${i}</p>
                    <p>레자크 ${i}</p>
                </div>
            </a>
        </li>
        `;
    }

    // 출력하기
    plist.html(hcode);
});
