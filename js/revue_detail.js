// =========================================
// URLからid取得
// =========================================

const params = new URLSearchParams(window.location.search);
const revueId = params.get("id");


// =========================================
// 公演取得
// =========================================

const revue = revues.find(
    r => r.id === revueId
);


// =========================================
// 公演が見つからない場合
// =========================================

if(!revue){

    document.querySelector("main").innerHTML =
        "<p>公演が見つかりませんでした。</p>";

}else{

    renderRevue(revue);

}


// =========================================
// 日付表示
// =========================================

function formatDate(dateText){

    if(!dateText){
        return "";
    }

    const date = new Date(dateText);

    return date.toLocaleDateString(
        "ja-JP",
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

}


// =========================================
// 公演表示
// =========================================

function renderRevue(revue){

    // ---------------------------------
    // 組カラー
    // ---------------------------------

    document
        .querySelector(".top-heading")
        .classList.remove("all");

    document
        .querySelector(".top-heading")
        .classList.add(revue.trp);


    document
        .getElementById("revueProfile")
        .classList.add(revue.trp);


    // ---------------------------------
    // タイトル
    // ---------------------------------

    document.getElementById("revueTitle").textContent =
        revue.name;


    // ---------------------------------
    // 基本情報
    // ---------------------------------

    document.getElementById("revueDate").textContent =
        formatDate(revue.date);

    document.getElementById("revueTheater").textContent =
        revue.theater || "";


    // ---------------------------------
    // 主演
    // ---------------------------------

    setInfo(
        "heroLabel",
        "revueHero",
        revue.hero
    );


    // ---------------------------------
    // ヒロイン
    // ---------------------------------

    setInfo(
        "heroineLabel",
        "revueHeroine",
        revue.heroine
    );


    // ---------------------------------
    // 新公主演
    // ---------------------------------

    setInfo(
        "newHeroLabel",
        "revueNewHero",
        revue.new_hero
    );


    // ---------------------------------
    // 新公ヒロイン
    // ---------------------------------

    setInfo(
        "newHeroineLabel",
        "revueNewHeroine",
        revue.new_heroine
    );


    // ---------------------------------
    // 階段降り
    // ---------------------------------

    renderKaidan(revue);

}


// =========================================
// 情報表示
//
// データがなければ
// dt・ddの両方を非表示
// =========================================

function setInfo(labelId, valueId, value){

    const label =
        document.getElementById(labelId);

    const field =
        document.getElementById(valueId);


    if(!value){

        label.style.display = "none";
        field.style.display = "none";

        return;
    }


    field.textContent = value;

}


// =========================================
// 階段降り表示
// =========================================

function renderKaidan(revue){

    const section = document.getElementById("kaidanSection");
    const container = document.getElementById("kaidanList");

    if(!revue.kaidan || revue.kaidan.length === 0){
        section.style.display = "none";
        return;
    }

    container.innerHTML = revue.kaidan.map((step, index)=>{

        const members = step.members.map(member=>{

            let labels = [];

            if(member.etoile){
                labels.push("エトワール");
            }

            if(member.special){
                labels.push("専科");
            }

            if(member.wing === "large"){
                labels.push("大羽根");
            }

            if(member.wing === "small"){
                labels.push("小羽根");
            }

            if(member.wing === "top"){
                labels.push("トップ");
            }

            const labelText = labels.map(label=>
                `<span class="kaidanTag">${label}</span>`
            ).join("");

            return `
                <span class="kaidanMember">
                    <span class="kaidanName">${member.name}</span>
                    ${labelText}
                </span>
            `;

        }).join('<span class="memberSeparator">・</span>');


        const arrow = index < revue.kaidan.length - 1
            ? `<div class="kaidanArrow">↓</div>`
            : "";


        return `
            <div class="kaidanStep">
                <div class="kaidanMembers">
                    ${members}
                </div>
            </div>

            ${arrow}
        `;

    }).join("");

}