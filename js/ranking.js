// =========================================
// 初期設定
// =========================================

let rankingType = "all";


const rankingList =
    document.getElementById("rankingList");



// =========================================
// 名前比較用
// =========================================

function normalizeName(name){

    if(!name){
        return "";
    }

    return name
        .replace(/[ 　]+/g, "")
        .trim();

}



// =========================================
// 複数人名を分割
// =========================================

function splitNames(text){

    if(!text){
        return [];
    }

    return text
        .split(",")
        .map(
            name => name.trim()
        )
        .filter(
            name => name !== ""
        );

}



// =========================================
// 入団から何日後か
// =========================================

function getDaysFromJoin(
    member,
    targetDate
){

    if(
        !member.join ||
        !targetDate
    ){
        return null;
    }


    const join =
        new Date(member.join);


    const target =
        new Date(targetDate);


    return (
        target - join
    )
    /
    (
        1000 *
        60 *
        60 *
        24
    );

}



// =========================================
// 研究科
// =========================================

function getKen(
    member,
    targetDate
){

    if(
        !member.join ||
        !targetDate
    ){
        return null;
    }


    const join =
        new Date(member.join);


    const target =
        new Date(targetDate);


    const joinYear =
        join.getFullYear();


    const targetYear =
        target.getFullYear();


    const aprilFirst =
        new Date(
            `${targetYear}-04-01`
        );


    if(target >= aprilFirst){

        return (
            targetYear
            -
            joinYear
            +
            1
        );

    }


    return (
        targetYear
        -
        joinYear
    );

}


// =========================================
// 公演種別判定
// =========================================
function getRevueType(theater){

    if(!theater){
        return "";
    }

    theater = theater.trim();

    if(theater.includes("宝塚大劇場")){
        return "大劇場";
    }

    if(theater === "宝塚バウホール"){
        return "バウ";
    }

    if(theater === "全国ツアー"){
        return "全国ツアー";
    }

    return "東上";

}

function isBowRevue(revue){

    return (
        getRevueType(revue.theater)
        ===
        "バウ"
    );

}

function isToujouRevue(revue){

    return (
        getRevueType(revue.theater)
        ===
        "東上"
    );

}


// =========================================
// 指定日時点の所属組を取得
// =========================================

function getTrpAtDate(member, targetDate){

    if(!member.history){
        return null;
    }

    const target =
        new Date(targetDate);

    for(const h of member.history){

        const from =
            new Date(h.from);

        const to =
            h.to
            ? new Date(h.to)
            : new Date("9999-12-31");

        if(
            from <= target &&
            target <= to
        ){
            return h.trp;
        }

    }

    return null;
}


// =========================================
// 初期画面：8ランキングを上位5名ずつ表示
// =========================================

function renderAllRankings(){

    const rankings = [

        {
            title: "新公主演",
            type: "newHero",
            data: createFirstRevueRanking(
                getFirstNewHeroRevue
            )
        },

        {
            title: "バウ主演",
            type: "bowHero",
            data: createFirstRevueRanking(
                getFirstBowHeroRevue
            )
        },

        {
            title: "東上主演",
            type: "toujouHero",
            data: createFirstRevueRanking(
                getFirstToujouHeroRevue
            )
        },

        {
            title: "トップ就任",
            type: "topHero",
            data: createTopHeroRanking()
        },

        {
            title: "新公ヒロイン",
            type: "newHeroine",
            data: createFirstRevueRanking(
                getFirstNewHeroineRevue
            )
        },

        {
            title: "バウヒロイン",
            type: "bowHeroine",
            data: createFirstRevueRanking(
                getFirstBowHeroineRevue
            )
        },

        {
            title: "東上ヒロイン",
            type: "toujouHeroine",
            data: createFirstRevueRanking(
                getFirstToujouHeroineRevue
            )
        },

        {
            title: "トップ娘役就任",
            type: "topHeroine",
            data: createTopHeroineRanking()
        }

    ];


    rankingList.innerHTML = `

        <div class="rankingOverview">

            <div
                class="rankingColumn"
                id="heroRankings"
            ></div>

            <div
                class="rankingColumn"
                id="heroineRankings"
            ></div>

        </div>

    `;

    rankings.forEach(ranking=>{

        const section =
            document.createElement("section");

        section.className =
            "rankingPreview";


        const topFive =
            ranking.data.slice(0,5);


        section.innerHTML = `

            <h2>
                ${ranking.title}
            </h2>

            <div class="rankingPreviewList">

                ${
                    topFive
                    .map((item,index)=>{

                        const member =
                            item.member;

                        let revueName = "";

                        if(item.revue){

                            if(
                                ranking.type === "newHero" ||
                                ranking.type === "newHeroine"
                            ){

                                revueName =
                                    item.revue
                                    .split(",")[0]
                                    .trim();

                            }else{

                                revueName =
                                    item.revue;

                            }

                        }


                        return `

                            <div class="previewItem">

                                <div class="previewRank">
                                    ${index + 1}位
                                </div>

                                <div class="previewMember">

                                    <a 
                                        href="member.html?id=${member.id}"
                                        class="previewMemberName ${item.trp || ""}"
                                    >
                                        ${member.name}
                                    </a>

                                    <span class="rankGen">
                                        ${member.gen}期
                                    </span>

                                    ${
                                        revueName
                                        ? `<div class="previewRevue">
                                            ${revueName}
                                        </div>`
                                        : ""
                                    }

                                </div>

                                <div class="previewInfo">

                                    ${item.date}

                                    <br>

                                    研${item.ken}

                                </div>

                            </div>

                        `;

                    })
                    .join("")
                }

            </div>

        `;


        // 男役ランキング
        if(
            ranking.type === "newHero" ||
            ranking.type === "bowHero" ||
            ranking.type === "toujouHero" ||
            ranking.type === "topHero"
        ){

            document
                .getElementById("heroRankings")
                .appendChild(section);

        }

        // 娘役ランキング
        else{

            document
                .getElementById("heroineRankings")
                .appendChild(section);

        }

    });

}


// =========================================
// 新公主演の最初の公演取得
// =========================================

function getFirstNewHeroRevue(member){

    const memberName =
        normalizeName(
            member.name
        );


    const matches = [];


    revues.forEach(revue=>{

        if(!revue.new_hero){
            return;
        }


        const heroes =
            splitNames(
                revue.new_hero
            );


        const matched =
            heroes.some(
                name =>
                    normalizeName(name)
                    === memberName
            );


        if(!matched){
            return;
        }


        matches.push(
            revue
        );

    });


    if(matches.length === 0){
        return null;
    }


    // 古い順
    matches.sort(
        (a,b)=>
            new Date(a.date)
            -
            new Date(b.date)
    );


    return matches[0];

}

// =========================================
// 最初のバウ主演取得
// =========================================

function getFirstBowHeroRevue(member){

    const memberName =
        normalizeName(
            member.name
        );

    const matches = [];


    revues.forEach(revue=>{

        // バウ公演でなければ除外
        if(!isBowRevue(revue)){
            return;
        }


        // 主演がいなければ除外
        if(!revue.hero){
            return;
        }


        const heroes =
            splitNames(
                revue.hero
            );


        const matched =
            heroes.some(
                name =>
                    normalizeName(name)
                    === memberName
            );


        if(!matched){
            return;
        }


        matches.push(
            revue
        );

    });


    if(matches.length === 0){
        return null;
    }


    // 古い順
    matches.sort(
        (a,b)=>
            new Date(a.date)
            -
            new Date(b.date)
    );


    return matches[0];

}


// =========================================
// 最初の東上主演取得
// =========================================

function getFirstToujouHeroRevue(member){

    const memberName =
        normalizeName(
            member.name
        );

    const matches = [];


    revues.forEach(revue=>{

        // 東上公演でなければ除外
        if(!isToujouRevue(revue)){
            return;
        }


        if(!revue.hero){
            return;
        }


        const heroes =
            splitNames(
                revue.hero
            );


        const matched =
            heroes.some(
                name =>
                    normalizeName(name)
                    === memberName
            );


        if(!matched){
            return;
        }


        matches.push(
            revue
        );

    });


    if(matches.length === 0){
        return null;
    }


    matches.sort(
        (a,b)=>
            new Date(a.date)
            -
            new Date(b.date)
    );


    return matches[0];

}


// =========================================
// 最初の新公ヒロイン取得
// =========================================

function getFirstNewHeroineRevue(member){

    const memberName =
        normalizeName(member.name);

    const matches = [];

    revues.forEach(revue=>{

        if(!revue.new_heroine){
            return;
        }

        const heroines =
            splitNames(revue.new_heroine);

        const matched =
            heroines.some(
                name =>
                    normalizeName(name)
                    === memberName
            );

        if(!matched){
            return;
        }

        matches.push(revue);

    });

    if(matches.length === 0){
        return null;
    }

    matches.sort(
        (a,b)=>
            new Date(a.date)
            -
            new Date(b.date)
    );

    return matches[0];
}


// =========================================
// 最初のバウヒロイン取得
// =========================================

function getFirstBowHeroineRevue(member){

    const memberName =
        normalizeName(member.name);

    const matches = [];

    revues.forEach(revue=>{

        if(
            getRevueType(revue.theater)
            !== "バウ"
        ){
            return;
        }

        if(!revue.heroine){
            return;
        }

        const heroines =
            splitNames(revue.heroine);

        const matched =
            heroines.some(
                name =>
                    normalizeName(name)
                    === memberName
            );

        if(!matched){
            return;
        }

        matches.push(revue);

    });

    if(matches.length === 0){
        return null;
    }

    matches.sort(
        (a,b)=>
            new Date(a.date)
            -
            new Date(b.date)
    );

    return matches[0];
}


// =========================================
// 最初の東上ヒロイン取得
// =========================================

function getFirstToujouHeroineRevue(member){

    const memberName =
        normalizeName(member.name);

    const matches = [];

    revues.forEach(revue=>{

        if(
            getRevueType(revue.theater)
            !== "東上"
        ){
            return;
        }

        if(!revue.heroine){
            return;
        }

        const heroines =
            splitNames(revue.heroine);

        const matched =
            heroines.some(
                name =>
                    normalizeName(name)
                    === memberName
            );

        if(!matched){
            return;
        }

        matches.push(revue);

    });

    if(matches.length === 0){
        return null;
    }

    matches.sort(
        (a,b)=>
            new Date(a.date)
            -
            new Date(b.date)
    );

    return matches[0];
}


// =========================================
// 初主演ランキング作成
// =========================================

function createFirstRevueRanking(
    getFirstRevue
){

    const ranking = [];


    members.forEach(member=>{

        const revue =
            getFirstRevue(
                member
            );


        if(!revue){
            return;
        }


        const days =
            getDaysFromJoin(
                member,
                revue.date
            );


        if(days === null){
            return;
        }


        ranking.push({

            member: member,

            date: revue.date,

            revue: revue.name,

            days: days,

            ken:
                getKen(
                    member,
                    revue.date
                ),

            trp:
                getTrpAtDate(
                    member,
                    revue.date
                )

        });

    });


    ranking.sort(
        (a,b)=>
            a.days
            -
            b.days
    );


    return ranking;

}



// =========================================
// ランキング表示
// =========================================

function renderRanking(ranking){

    rankingList.innerHTML = "";


    ranking.forEach(
        (item,index)=>{


            const member =
                item.member;


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                `rankingItem ${item.trp || ""}`;


            div.innerHTML = `

                <div class="rankNumber">

                    ${index + 1}位

                </div>


                <div class="rankMember">

                    <div class="rankMemberName">

                        <a href="member.html?id=${member.id}">
                            ${member.name}
                        </a>

                        <span class="rankGen">
                            ${member.gen}期
                        </span>

                    </div>

                    ${ 
                        item.revue 
                        ? `<div class="rankRevue">
                            ${
                                rankingType === "newHero" ||
                                rankingType === "newHeroine"
                                    ? item.revue.split(",")[0].trim()
                                    : item.revue
                            }
                        </div>` 
                        : "" 
                    }

                </div>


                <div class="rankInfo">

                    ${item.date}

                    <br>

                    研${item.ken}

                </div>

            `;


            rankingList.appendChild(
                div
            );

        }
    );

}


// =========================================
// 最初のトップ就任情報を取得
// =========================================

function getFirstTopPosition(member){

    if(!member.position){
        return null;
    }

    const positions =
        member.position.filter(
            pos => pos.role === "tophero"
        );

    if(positions.length === 0){
        return null;
    }

    positions.sort(
        (a,b)=>
            new Date(a.from)
            -
            new Date(b.from)
    );

    return positions[0];
}


// =========================================
// 最初のトップ娘役就任情報
// =========================================

function getFirstTopHeroinePosition(member){

    if(!member.position){
        return null;
    }

    const positions =
        member.position.filter(
            pos =>
                pos.role === "topheroine"
        );

    if(positions.length === 0){
        return null;
    }

    positions.sort(
        (a,b)=>
            new Date(a.from)
            -
            new Date(b.from)
    );

    return positions[0];
}


// =========================================
// トップ就任ランキング作成
// =========================================

function createTopHeroRanking(){

    const ranking = [];

    members.forEach(member=>{

        const position =
            getFirstTopPosition(member);

        if(!position){
            return;
        }

        const days =
            getDaysFromJoin(
                member,
                position.from
            );

        if(days === null){
            return;
        }

        ranking.push({

            member: member,

            date: position.from,

            revue: "",

            days: days,

            ken:
                getKen(
                    member,
                    position.from
                ),

            trp:
                getTrpAtDate(
                    member,
                    position.from
                )

        });

    });


    // 入団からトップ就任までが短い順
    ranking.sort(
        (a,b)=>
            a.days - b.days
    );


    return ranking;
}


// =========================================
// トップ娘役就任ランキング
// =========================================

function createTopHeroineRanking(){

    const ranking = [];

    members.forEach(member=>{

        const position =
            getFirstTopHeroinePosition(member);

        if(!position){
            return;
        }

        const days =
            getDaysFromJoin(
                member,
                position.from
            );

        if(days === null){
            return;
        }

        ranking.push({

            member: member,

            date: position.from,

            revue: "",

            days: days,

            ken:
                getKen(
                    member,
                    position.from
                ),

            trp:
                getTrpAtDate(
                    member,
                    position.from
                )

        });

    });

    ranking.sort(
        (a,b)=>
            a.days - b.days
    );

    return ranking;
}


// =========================================
// 更新
// =========================================

function updateRanking(){

    // =====================================
    // 初期画面
    // =====================================

    if(rankingType === "all"){

        document
            .getElementById("backToOverview")
            .style.display = "none";

        rankingList.classList.remove(
            "singleMode"
        );

        rankingList.classList.add(
            "overviewMode"
        );

        renderAllRankings();

        return;
    }

    // =====================================
    // 個別ランキング
    // =====================================

    document
        .getElementById("backToOverview")
        .style.display = "block";
        
    rankingList.classList.remove(
        "overviewMode"
    );

    rankingList.classList.add(
        "singleMode"
    );

    // =====================================
    // 新人公演主演
    // =====================================

    if(rankingType === "newHero"){

        const ranking =
            createFirstRevueRanking(
                getFirstNewHeroRevue
            );


        renderRanking(
            ranking
        );

        return;

    }


    // =====================================
    // バウ主演
    // =====================================

    if(rankingType === "bowHero"){

        const ranking =
            createFirstRevueRanking(
                getFirstBowHeroRevue
            );


        renderRanking(
            ranking
        );

        return;

    }


    // =====================================
    // 東上主演
    // =====================================

    if(rankingType === "toujouHero"){

        const ranking =
            createFirstRevueRanking(
                getFirstToujouHeroRevue
            );


        renderRanking(
            ranking
        );

        return;

    }


    // =====================================
    // 東上主演
    // =====================================
    
    if(rankingType === "topHero"){

        const ranking =
            createTopHeroRanking();

        renderRanking(
            ranking
        );

        return;
    }

    // =====================================
    // 新人公演ヒロイン
    // =====================================

    if(rankingType === "newHeroine"){

        const ranking =
            createFirstRevueRanking(
                getFirstNewHeroineRevue
            );

        renderRanking(ranking);

        return;
    }


    // =====================================
    // バウヒロイン
    // =====================================

    if(rankingType === "bowHeroine"){

        const ranking =
            createFirstRevueRanking(
                getFirstBowHeroineRevue
            );

        renderRanking(ranking);

        return;
    }


    // =====================================
    // 東上ヒロイン
    // =====================================

    if(rankingType === "toujouHeroine"){

        const ranking =
            createFirstRevueRanking(
                getFirstToujouHeroineRevue
            );

        renderRanking(ranking);

        return;
    }


    // =====================================
    // トップ娘役就任
    // =====================================

    if(rankingType === "topHeroine"){

        const ranking =
            createTopHeroineRanking();

        renderRanking(ranking);

        return;
    }

    rankingList.innerHTML =
        "このランキングは準備中です。";

}



// =========================================
// ランキング切替
// =========================================

document
.querySelectorAll(".rankingBtn")
.forEach(btn=>{


    btn.addEventListener(
        "click",
        ()=>{


            rankingType =
                btn.dataset.ranking;


            document
                .querySelectorAll(
                    ".rankingBtn"
                )
                .forEach(
                    b =>
                        b.classList
                        .remove("active")
                );


            btn.classList.add(
                "active"
            );


            updateRanking();

        }
    );


});


document
    .getElementById("overviewBtn")
    .addEventListener("click", ()=>{

        // 初期画面に戻す
        rankingType = "all";


        // 個別ランキングボタンのactiveをすべて外す
        document
            .querySelectorAll(".rankingBtn")
            .forEach(btn=>{
                btn.classList.remove("active");
            });


        // 表示更新
        updateRanking();

    });


// =========================================
// 初期表示
// =========================================

updateRanking();

