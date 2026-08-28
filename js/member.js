//----------------------------
// 所属組取得
//----------------------------
function getCurrentTrp(member){

    if(!member.history || member.history.length === 0){
        return null;
    }

    const current =
        member.history.find(
            h => h.to === null
        );

    if(current){
        return current.trp;
    }

    return member.history[
        member.history.length - 1
    ].trp;
}

//----------------------------
// 組名変換
//----------------------------
function getTrpName(trp){

    const names = {
        flower: "花組",
        moon: "月組",
        snow: "雪組",
        star: "星組",
        cosmos: "宙組",
        special: "専科"
    };

    return names[trp] || trp;
}

const params =
    new URLSearchParams(
        window.location.search
    );

const id =
    params.get("id");


const member =
    members.find(
        m=>m.id===id
    );


if(!member){

    document.body.innerHTML=
        "<h1>メンバーが見つかりません。</h1>";

    throw "";

}

function setProfileItem(id, value) {
    const dd = document.getElementById(id);
    const dt = dd.previousElementSibling;

    if (value) {
        dd.textContent = value;
    } else {
        dt.style.display = "none";
        dd.style.display = "none";
    }
}

function getTrpHistory(member) {
    return member.history
        .map(h => getTrpName(h.trp))
        .join(" → ");
}

//----------------------------
// 基本情報
//----------------------------
const trp = getCurrentTrp(member);

document
    .querySelector(".top-heading")
    .classList.add(trp);

const memberImage =
    document.getElementById("memberImage");

if(member.id){

    memberImage.src =
        `./img/${trp}_images/${member.id}.jpg`;

    // 画像ファイルが存在しなかった場合
    memberImage.onerror = function(){

        this.style.display = "none";

        document
        .querySelector(".left")
        .classList.add("noImage");

    };

}else{

    // img自体がない場合
    memberImage.style.display = "none";

    document
        .querySelector(".left")
        .classList.add("noImage");

}
    
document.getElementById("memberName").textContent =
    member.name;

document.getElementById("memberKana").textContent =
    member.furigana;

document.getElementById("memberGen").textContent =
    member.gen+"期";

document.getElementById("memberTrp").textContent =
    getTrpHistory(member);

setProfileItem("memberNickname", member.nickname);
setProfileItem("memberBirthday", member.birthday);
setProfileItem("memberBirthplace", member.birthplace);
setProfileItem("memberHeight", member.height);


//----------------------------
// 役職名変換
//----------------------------
function getPositionName(role){

    const names = {
        tophero: "トップスター",
        topheroine: "トップ娘役"
    };

    return names[role] || role;
}


//----------------------------
// 経歴
//----------------------------
function renderHistory(member){

    const container =
        document.getElementById("history");

    const events = [];


    // ---------------------------------
    // 入団
    // ---------------------------------

    if(member.join){

        const texts = [
            `${member.gen}期生として入団`
        ];

        // 入団日と最初の配属日が同じ場合だけ
        // 同じイベント内に組配属も表示
        if(
            member.history &&
            member.history.length > 0 &&
            member.history[0].from === member.join
        ){

            texts.push(
                `${getTrpName(member.history[0].trp)}に配属`
            );

        }

        events.push({
            date: member.join,
            texts: texts
        });

    }


    // ---------------------------------
    // 組替え・異動
    // ---------------------------------

    if(member.history){

        member.history.forEach((h, index)=>{

            // 入団と同日に配属されている場合は
            // 入団イベントですでに表示済み
            if(
                index === 0 &&
                h.from === member.join
            ){
                return;
            }

            let text;

            // 最初の所属
            if(index === 0){

                text =
                    `${getTrpName(h.trp)}に配属`;

            }

            // 2つ目以降
            else{

                text =
                    `${getTrpName(h.trp)}へ異動`;

            }

            events.push({
                date: h.from,
                texts: [text]
            });

        });

    }


    // ---------------------------------
    // トップ就任など
    // ---------------------------------

    if(member.position){

        member.position.forEach(pos=>{

            events.push({
                date: pos.from,
                texts: [
                    `${getPositionName(pos.role)}就任`
                ]
            });

        });

    }


    // ---------------------------------
    // 退団
    // ---------------------------------

    if(member.leave){

        events.push({
            date: member.leave,
            texts: ["退団"]
        });

    }


    // ---------------------------------
    // 古い順
    // ---------------------------------

    events.sort(
        (a,b)=>
            new Date(a.date)
            -
            new Date(b.date)
    );


    // ---------------------------------
    // データなし
    // ---------------------------------

    if(events.length === 0){

        container.parentElement.style.display =
            "none";

        return;

    }


    // ---------------------------------
    // 表示
    // ---------------------------------

    container.innerHTML =
        events
        .map(event=>{

            const ken =
                getKen(member, event.date);

            return `

                <div class="historyItem">

                    <div class="historyDate">
                        ${event.date}
                        ${ken ? `　研${ken}` : ""}
                    </div>

                    <div class="historyText">

                        ${
                            event.texts
                            .map(text =>
                                `<div>${text}</div>`
                            )
                            .join("")
                        }

                    </div>

                </div>

            `;

        })
        .join("");

}

renderHistory(member);



//----------------------------
// 名前比較
//----------------------------
function normalizeName(name){

    if(!name){
        return "";
    }

    return name
        .replace(/[ 　]+/g, "")
        .trim();
}
//----------------------------
// 複数人対応
//----------------------------
function splitNames(text){

    if(!text){
        return [];
    }

    return text
        .split(",")
        .map(name => name.trim())
        .filter(name => name !== "");
}


// ---------------------------------
// 劇場から公演種別を判定
// ---------------------------------
function getRevueType(theater){

    if(!theater){
        return "";
    }

    // 前後の空白を除去
    theater = theater.trim();

    if(
        theater.includes("宝塚大劇場")
    ){
        return "大劇場";
    }

    if(
        theater === "宝塚バウホール"
    ){
        return "バウ";
    }

    if(
        theater === "全国ツアー"
    ){
        return "全国ツアー";
    }

    return "東上";

}
// ---------------------------------
// 主演・ヒロイン履歴取得
// ---------------------------------
function getCareerHistory(member){

    const result = [];

    const memberName =
        normalizeName(member.name);


    revues.forEach(revue=>{

        const revueType =
            getRevueType(revue.theater);

        // 主演
        const heroes =
            splitNames(revue.hero);

        if(
            heroes.some(
                name =>
                    normalizeName(name)
                    === memberName
            )
        ){
            result.push({
                name: revue.name,
                date: revue.date,
                theater: revue.theater,
                kind: `${revueType}主演`
            });
        }

        // ヒロイン
        const heroines =
            splitNames(revue.heroine);

        if(
            heroines.some(
                name =>
                    normalizeName(name)
                    === memberName
            )
        ){
            result.push({
                name: revue.name,
                date: revue.date,
                theater: revue.theater,
                kind: `${revueType}ヒロイン`
            });
        }

        // 新公主演
        const newHeroes =
            splitNames(revue.new_hero);

        if(
            newHeroes.some(
                name =>
                    normalizeName(name)
                    === memberName
            )
        ){
            result.push({
                name: revue.name,
                date: revue.date,
                theater: revue.theater,
                kind: "新公主演"
            });
        }

        // 新公ヒロイン
        const newHeroines =
            splitNames(revue.new_heroine);

        if(
            newHeroines.some(
                name =>
                    normalizeName(name)
                    === memberName
            )
        ){
            result.push({
                name: revue.name,
                date: revue.date,
                theater: revue.theater,
                kind: "新公ヒロイン"
            });
        }

    });

    // 古い順
    result.sort(
        (a,b)=>
            new Date(a.date)
            -
            new Date(b.date)
    );

    return result;
}

// ---------------------------------
// 指定日時点の研究科を取得
// ---------------------------------
function getKen(member, targetDate){

    if(!member.join || !targetDate){
        return null;
    }

    const join = new Date(member.join);
    const target = new Date(targetDate);

    const joinYear = join.getFullYear();
    const targetYear = target.getFullYear();

    // 指定日の年の4月1日
    const aprilFirst =
        new Date(`${targetYear}-04-01`);

    let ken;

    if(target >= aprilFirst){

        ken =
            targetYear
            - joinYear
            + 1;

    }else{

        ken =
            targetYear
            - joinYear;

    }

    return ken;
}

// ---------------------------------
// 主演歴表示
// ---------------------------------
function renderCareer(member){

    const container =
        document.getElementById("career");

    const career =
        getCareerHistory(member);


    // 履歴がなければセクションごと非表示
    if(career.length === 0){

        container.parentElement.style.display =
            "none";

        return;
    }

    container.innerHTML =
        career
        .map(r=>`

            <div class="careerItem">

                <div class="careerDate">

                    <span class="careerDateInfo">
                        ${r.date}　研${getKen(member, r.date)}
                    </span>

                    <span class="careerKind">
                        ${r.kind}
                    </span>

                </div>

                <div class="careerTitle">
                    ${r.name}
                </div>

            </div>

        `)
        .join("");
}

renderCareer(member);