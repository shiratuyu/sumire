const BASE_DATE = new Date("2000-01-01");
const END_DATE = new Date();


// ---------------------------------
// 日付 → slider値
// ---------------------------------

function dateToSliderValue(date){

    const days =
        (date - BASE_DATE)
        /
        (1000 * 60 * 60 * 24);

    return Math.floor(days);

}


// ---------------------------------
// slider目盛り
// ---------------------------------

function createTicks(){

    const tickArea =
        document.getElementById("sliderTicks");

    tickArea.innerHTML = "";


    const years = [
        2000,
        2005,
        2010,
        2015,
        2020,
        2025
    ];


    const totalDays =
        (END_DATE - BASE_DATE)
        /
        (1000*60*60*24);


    years.forEach(year=>{


        const date =
            new Date(`${year}-01-01`);


        const days =
            (date - BASE_DATE)
            /
            (1000*60*60*24);


        const percent =
            days / totalDays * 100;


        const tick =
            document.createElement("div");


        tick.className =
            "tick";


        tick.style.left =
            percent + "%";


        tick.textContent =
            year;


        tickArea.appendChild(tick);

    });

}


createTicks();




// ---------------------------------
// 初期設定
// ---------------------------------

const slider =
    document.getElementById("slider");


slider.max =
    dateToSliderValue(END_DATE);


slider.value =
    dateToSliderValue(END_DATE);


const label =
    document.getElementById("dateLabel");


const container =
    document.getElementById("memberList");


slider.addEventListener(
    "input",
    update
);


let select = "all";
let typeSelect = "all";


document.querySelectorAll(".trpBtn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        // 選択された組を保存
        select = btn.dataset.trp;


        // いったん全ボタンからactiveを外す
        document
            .querySelectorAll(".trpBtn")
            .forEach(b => {
                b.classList.remove("active");
            });


        // 押したボタンだけactive
        btn.classList.add("active");


        // 表示更新
        update();

    });

});

document.querySelectorAll(".typeBtn")
.forEach(btn=>{

    btn.addEventListener(
        "click",
        ()=>{

            typeSelect =
                btn.dataset.type;


            document
                .querySelectorAll(".typeBtn")
                .forEach(
                    b => b.classList.remove("active")
                );


            btn.classList.add("active");


            update();

        }
    );

});


// ---------------------------------
// slider値 → 日付
// ---------------------------------

function sliderToDate(value){

    const d =
        new Date(BASE_DATE);

    d.setDate(
        d.getDate()
        +
        Number(value)
    );

    return d;

}



function formatDate(date){

    return date.toLocaleDateString(
        "ja-JP",
        {
            year:"numeric",
            month:"long",
            day:"numeric"
        }
    )
    +
    "時点";

}


// ---------------------------------
// 指定日時点の所属組取得
// ---------------------------------

function getTrpAtDate(member,target){


    if(!member.history){

        return null;

    }


    for(const h of member.history){


        const from =
            new Date(h.from);


        const to =
            h.to
            ?
            new Date(h.to)
            :
            new Date("9999-12-31");


        if(
            from <= target &&
            target < to
        ){

            return h.trp;

        }

    }


    return null;

}





// ---------------------------------
// 在籍判定
// ---------------------------------

function isActive(member,target){

    const join =
        new Date(member.join);


    const leave =
        member.leave
        ?
        new Date(member.leave)
        :
        new Date("9999-12-31");


    return (
        join <= target &&
        target < leave
    );

}


function getTopDate(member){

    if(!member.position){
        return null;
    }

    const top = member.position.find(p=>

        p.role=="tophero" ||
        p.role=="topheroine"

    );

    return top
        ? new Date(top.from)
        : null;

}



// ---------------------------------
// トップ判定
// ---------------------------------

function isTopAtDate(member, target){

    if(!member.position){
        return false;
    }

    return member.position.some(pos => {

        const from = new Date(pos.from);

        const to = pos.to
            ? new Date(pos.to)
            : new Date("9999-12-31");

        return (
            (pos.role === "tophero" ||
             pos.role === "topheroine")
            &&
            from <= target &&
            target < to
        );

    });

}


// ---------------------------------
// 回数集計
// ---------------------------------

function getCareerCount(member, target){
    
    const count = {

        shinko: 0,
        bow: 0,
        toujou: 0,
        tour: 0

    };

    // トップ就任日
    let topDate = null;

    if(member.position){

        const top = member.position.find(p=>

            p.role==="tophero" ||
            p.role==="topheroine"

        );

        if(top){

            topDate = new Date(top.from);

        }

    }

    revues.forEach(revue=>{

        const revueDate =
            new Date(revue.date);

        // 未来は数えない
        if(revueDate > target){
            return;
        }

        if(revue.hero){

            const heroes =
                revue.hero
                .split(",")
                .map(x=>x.trim());
            
            if(
                heroes.includes(member.name)
            ){
                
                // トップ就任後は数えない
                if(
                    topDate &&
                    revueDate >= topDate
                ){
                    return;
                }

                const score =
                    1 / heroes.length;

                switch(revue.theater){

                    case "宝塚バウホール":
                        count.bow += score;
                        break;

                    case "全国ツアー":
                        count.tour += score;
                        break;

                    case "宝塚大劇場, 東京宝塚劇場":
                        // 大劇場は数えない
                        break;

                    default:
                        count.toujou += score;
                        break;

                }

            }

        }

        if(revue.heroine){

            const heroines =
                revue.heroine
                .split(",")
                .map(x=>x.trim());

            if(
                heroines.includes(member.name)
            ){

                if(
                    topDate &&
                    revueDate >= topDate
                ){
                    return;
                }

                const score =
                    1 / heroines.length;

                switch(revue.theater){

                    case "宝塚バウホール":
                        count.bow += score;
                        break;

                    case "全国ツアー":
                        count.tour += score;
                        break;

                    case "宝塚大劇場, 東京宝塚劇場":
                        break;

                    default:
                        count.toujou += score;
                        break;

                }

            }

        }

        if(revue.new_hero){

            const heroes =
                revue.new_hero
                .split(",")
                .map(x=>x.trim());

            if(
                heroes.includes(member.name)
            ){

                count.shinko +=
                    1 / heroes.length;

            }

        }


        if(revue.new_heroine){

            const heroines =
                revue.new_heroine
                .split(",")
                .map(x=>x.trim());

            if(
                heroines.includes(member.name)
            ){

                count.shinko +=
                    1 / heroines.length;

            }

        }

    });

    return count;

}

// ---------------------------------
// 表示文字列
// ---------------------------------

function formatCount(value){

    if(Number.isInteger(value)){
        return value;
    }

    return value.toFixed(1);

}


function formatCareer(count){

    let text = "";

    if(count.shinko){

        text +=
            `新公${formatCount(count.shinko)} `;

    }

    if(count.bow){

        text +=
            `バウ${formatCount(count.bow)} `;

    }

    if(count.toujou){

        text +=
            `東上${formatCount(count.toujou)} `;

    }

    if(count.tour){

        text +=
            `全ツ${formatCount(count.tour)}`;

    }

    return text.trim();

}


// ---------------------------------
// 指定日時点メンバー取得
// ---------------------------------
function getCurrentMembers(target){

    // ---------------------------------
    // 指定日時点で在籍している人
    // ---------------------------------

    let result =
        members.filter(
            member =>
                isActive(
                    member,
                    target
                )
        );


    // ---------------------------------
    // 組フィルター
    // ---------------------------------

    if(select !== "all"){

        result =
            result.filter(
                member =>
                    getTrpAtDate(
                        member,
                        target
                    )
                    === select
            );

    }


    // ---------------------------------
    // 男役・娘役フィルター
    // ---------------------------------

    if(typeSelect !== "all"){

        result =
            result.filter(
                member =>
                    member.type === typeSelect
            );

    }


    // ---------------------------------
    // 並び替え
    // ---------------------------------

    return result.sort(
        (a,b)=>{

            // 期順
            if(a.gen !== b.gen){

                return a.gen - b.gen;

            }


            // 同期で両方rankあり
            if(
                a.rank != null &&
                b.rank != null
            ){

                return a.rank - b.rank;

            }


            // aだけrankあり
            if(a.rank != null){

                return -1;

            }


            // bだけrankあり
            if(b.rank != null){

                return 1;

            }


            // rankなし同士
            return (
                new Date(a.join)
                -
                new Date(b.join)
            );

        }
    );

}


// ---------------------------------
// 個別組表示用
// ---------------------------------

function groupByGenNormal(memberList){


    return memberList.reduce(
        (groups,member)=>{


            if(!groups[member.gen]){

                groups[member.gen]=[];

            }


            groups[member.gen].push(member);


            return groups;


        },
        {}
    );

}




// ---------------------------------
// 全組表示用
// ---------------------------------

function groupByGenMatrix(memberList,target){

    return memberList.reduce(
        (groups,member)=>{

            const gen =
                member.gen;


            const trp =
                getTrpAtDate(
                    member,
                    target
                );


            if(!groups[gen]){

                groups[gen]={};

            }


            if(!groups[gen][trp]){

                groups[gen][trp]=[];

            }


            groups[gen][trp].push(member);


            return groups;

        },
        {}
    );

}




// ---------------------------------
// 個別組render
// ---------------------------------

function renderNormal(groups, target){

    container.innerHTML="";

    for(const gen of Object.keys(groups)){

        const row =
            document.createElement("div");

        row.className =
            "genRow";

        row.innerHTML = `

        <div class="genLabel">
            ${gen}期
        </div>

        <div class="memberArea">

        ${
            groups[gen]
            .map(member=>{

                const count =
                    getCareerCount(
                        member,
                        target
                    );

                const career =
                    formatCareer(count);

                const topMark =
                    isTopAtDate(member,target)
                    ? '<span class="topMark"></span>'
                    : "";

                return `
                    <div class="member">

                        <a
                            href="member.html?id=${member.id}"
                            class="memberLink  ${select} ${member.type}"
                        >

                            <div class="memberName">
                                ${topMark}
                                ${member.name.replace(/　/g,"")}
                            </div>
                        
                        </a>

                            ${
                                career
                                ? `<div class="career">${career}</div>`
                                : ""
                            }

                    </div>
    `               ;

            })
            .join("")
        }

        </div>

        `;


        container.appendChild(row);


    }

}





// ---------------------------------
// 全組render
// ---------------------------------

function renderMatrix(groups, target){

    container.innerHTML="";

    const trps = [
        "flower",
        "moon",
        "snow",
        "star",
        "cosmos"
    ];


    for(const gen of Object.keys(groups)){

        const row =
            document.createElement("div");

        row.className =
            "matrixRow";

        row.innerHTML = `

        <div class="genLabel">
            ${gen}期
        </div>

        ${
        trps.map(trp=>{


            const members =
                groups[gen][trp]
                ||
                [];

            return `

            <div class="memberArea">

            ${
                members
                .map(member=>{

                    const count =
                        getCareerCount(
                            member,
                            target
                        );

                    const career =
                        formatCareer(count);

                    const topMark =
                        isTopAtDate(member,target)
                        ? '<span class="topMark"></span>'
                        : "";

                    return `
                        <div class="member">

                            <a
                                href="member.html?id=${member.id}"
                                class="memberLink ${trp} ${member.type}"
                            >

                                <div class="memberName">
                                    ${topMark}
                                    ${member.name.replace(/　/g,"")}
                                </div>
                            </a>

                                ${
                                    career
                                    ? `<div class="career">${career}</div>`
                                    : ""
                                }

                        </div>
        `               ;

                })
                .join("")
            }

            </div>

            `;

        }).join("")
        }
        `;

        container.appendChild(row);

    }

}




// ---------------------------------
// 更新
// ---------------------------------

function update(){


    const target =
        sliderToDate(
            slider.value
        );



    label.textContent =
        formatDate(target);



    const currentMembers =
        getCurrentMembers(target);



    if(select === "all"){


        const groups =
            groupByGenMatrix(
                currentMembers,
                target
            );


        renderMatrix(
            groups, target
        );


    }else{


        const groups =
            groupByGenNormal(
                currentMembers
            );


        renderNormal(
            groups, target
        );


    }


}


update()

window.addEventListener("pageshow", ()=>{

    update();

});