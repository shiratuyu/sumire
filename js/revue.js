let selectedTrp = "all";
let selectedVenue = "all";

const revueList =
    document.getElementById(
        "revueList"
    );


// =========================================
// 日付表示
// =========================================

function formatDate(dateText){

    const date =
        new Date(dateText);

    return date.toLocaleDateString(
        "ja-JP",
        {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    );

}


// =========================================
// 公演タイトル取得
// =========================================

function getRevueTitle(revue){

    if(
        revue.title_parts &&
        revue.title_parts.length
    ){

        return revue.title_parts
            .map(
                part =>
                    part.main
            )
            .filter(
                title =>
                    title
            )
            .map(
                title =>
                    title.replace(
                        /（[^）]*）/g,
                        ""
                    )
            )
            .map(
                title =>
                    `<div class="revueTitlePart">
                        ${title}
                    </div>`
            )
            .join("");

    }

    return revue.name;

}


// =========================================
// 大劇場・別箱判定
// =========================================

function getVenueType(revue){

    if(
        revue.schedule &&
        revue.schedule.some(
            schedule =>
                schedule.theater ===
                "宝塚大劇場"
        )
    ){
        return "main";
    }

    return "other";

}

// =========================================
// 劇場種別
// =========================================

function getVenueLabel(revue){

    if(
        revue.schedule &&
        revue.schedule.some(
            schedule =>
                schedule.theater.includes(
                    "宝塚大劇場"
                )
        )
    ){
        return "大劇場";
    }


    if(
        revue.schedule &&
        revue.schedule.length > 0 &&
        revue.schedule.every(
            schedule =>
                schedule.theater.includes(
                    "宝塚バウホール"
                )
        )
    ){
        return "バウ";
    }


    if(
        revue.schedule &&
        revue.schedule.some(
            schedule =>
                schedule.theater.includes(
                    "全国ツアー"
                )
        )
    ){
        return "全国ツアー";
    }


    return "東上";

}


// =========================================
// 公演取得
// =========================================

function getCurrentRevues(){

    let result =
        [...revues];


    // ---------------------------------
    // 組フィルター
    // ---------------------------------

    if(selectedTrp !== "all"){

        result =
            result.filter(
                revue =>
                    revue.trp ===
                    selectedTrp
            );

    }


    // ---------------------------------
    // 劇場フィルター
    // ---------------------------------

    if(selectedVenue !== "all"){

        result =
            result.filter(
                revue =>
                    getVenueType(
                        revue
                    )
                    ===
                    selectedVenue
            );

    }


    // ---------------------------------
    // 新しい公演から表示
    // ---------------------------------

    result.sort(
        (a,b) =>
            new Date(b.date)
            -
            new Date(a.date)
    );


    return result;

}


// =========================================
// 公演一覧表示
// =========================================

function renderRevues(){

    const currentRevues =
        getCurrentRevues();

    revueList.innerHTML = "";


    currentRevues.forEach(revue=>{

        const item =
            document.createElement(
                "a"
            );

        item.href =
            `revue_detail.html?id=${revue.id}`;

        item.className =
            `revueItem ${revue.trp}`;


        item.innerHTML = `

            <div class="revueDateArea">

                <div class="revueDate">
                    ${formatDate(revue.date)}
                </div>

                <div class="revueVenue">
                    ${getVenueLabel(revue)}
                </div>

            </div>

            <div class="revueInfo">

                <div class="revueTitle">
                    ${getRevueTitle(revue)}
                </div>

                <div class="revueCast">

                    ${
                        revue.hero
                        ? `
                            <span class="revueHero">
                                <span class="castLabel">
                                    主演
                                </span>
                                ${revue.hero}
                            </span>
                        `
                        : ""
                    }

                    ${
                        revue.heroine
                        ? `
                            <span class="revueHeroine">
                                <span class="castLabel">
                                    ヒロイン
                                </span>
                                ${revue.heroine}
                            </span>
                        `
                        : ""
                    }

                </div>

            </div>

        `;


        revueList.appendChild(
            item
        );

    });

}


// =========================================
// 組ボタン
// =========================================

document
    .querySelectorAll(
        ".trpBtn"
    )
    .forEach(btn=>{

        btn.addEventListener(
            "click",
            ()=>{

                selectedTrp =
                    btn.dataset.trp;


                document
                    .querySelectorAll(
                        ".trpBtn"
                    )
                    .forEach(b=>{

                        b.classList.remove(
                            "active"
                        );

                    });


                btn.classList.add(
                    "active"
                );


                renderRevues();

            }
        );

    });


// =========================================
// 劇場ボタン
// =========================================

document
    .querySelectorAll(
        ".venueBtn"
    )
    .forEach(btn=>{

        btn.addEventListener(
            "click",
            ()=>{

                selectedVenue =
                    btn.dataset.venue;


                document
                    .querySelectorAll(
                        ".venueBtn"
                    )
                    .forEach(b=>{

                        b.classList.remove(
                            "active"
                        );

                    });


                btn.classList.add(
                    "active"
                );


                renderRevues();

            }
        );

    });


// =========================================
// 初期表示
// =========================================

renderRevues();