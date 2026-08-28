let selectedTrp = "all";

const revueList = document.getElementById("revueList");


// =========================================
// 日付表示
// =========================================

function formatDate(dateText){

    const date = new Date(dateText);

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
// 公演取得
// =========================================

function getRevueTitle(revue){

    if(revue.title_parts && revue.title_parts.length){

        return revue.title_parts
            .map(part => part.main)
            .filter(title => title)
            .map(title =>
                title.replace(/（[^）]*）/g, "")
            )
            .join("　");

    }

    return revue.name;

}

function getCurrentRevues(){

    let result = [...revues];


    // 組フィルター
    if(selectedTrp !== "all"){

        result = result.filter(
            revue => revue.trp === selectedTrp
        );

    }


    // 新しい公演から表示
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

    const currentRevues = getCurrentRevues();

    revueList.innerHTML = "";


    currentRevues.forEach(revue=>{

        const item = document.createElement("a");

        item.href =
            `revue_detail.html?id=${revue.id}`;

        item.className =
            `revueItem ${revue.trp}`;


        item.innerHTML = `

            <div class="revueDate">
                ${formatDate(revue.date)}
            </div>

            <div class="revueInfo">

                <div class="revueTitle">
                    ${getRevueTitle(revue)}
                </div>

                <div class="revueCast">

                    ${
                        revue.hero
                        ? `<span class="revueHero">
                            <span class="castLabel">主演</span>
                            ${revue.hero}
                        </span>`
                        : ""
                    }

                    ${
                        revue.heroine
                        ? `<span class="revueHeroine">
                            <span class="castLabel">ヒロイン</span>
                            ${revue.heroine}
                        </span>`
                        : ""
                    }

                </div>

            </div>

        `;


        revueList.appendChild(item);

    });

}


// =========================================
// 組ボタン
// =========================================

document.querySelectorAll(".trpBtn").forEach(btn=>{

    btn.addEventListener("click", ()=>{

        selectedTrp = btn.dataset.trp;


        document.querySelectorAll(".trpBtn").forEach(b=>{
            b.classList.remove("active");
        });


        btn.classList.add("active");

        renderRevues();

    });

});


// =========================================
// 初期表示
// =========================================

renderRevues();