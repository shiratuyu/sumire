let selectedStatus = "active";
let selectedTrp = "all";


const birthdayList =
    document.getElementById(
        "birthdayList"
    );


// =========================================
// 誕生日解析
// =========================================

function parseBirthday(birthday){

    if(!birthday){
        return null;
    }


    const match =
        birthday.match(
            /(\d+)月(\d+)日/
        );


    if(!match){
        return null;
    }


    return {

        month:
            Number(match[1]),

        day:
            Number(match[2])

    };

}


// =========================================
// 現役判定
// =========================================

function isActive(member){

    return (
        member.leave === null ||
        member.leave === undefined ||
        member.leave === ""
    );

}


// =========================================
// 最終所属組取得
// =========================================

function getMemberTrp(member){

    if(
        !member.history ||
        member.history.length === 0
    ){
        return "";
    }


    // fromが新しい順に並べて
    // 最後に所属した組を取得
    const histories =
        [...member.history]
        .sort(
            (a,b) =>
                new Date(b.from)
                -
                new Date(a.from)
        );


    return histories[0].trp || "";

}

// =========================================
// 対象メンバー取得
// =========================================

function getBirthdayMembers(){

    let result =
        members
        .map(member=>{

            const birthday =
                parseBirthday(
                    member.birthday
                );


            return {

                ...member,

                birthdayData:
                    birthday,

                birthdayTrp:
                    getMemberTrp(
                        member
                    )

            };

        })


        // 誕生日不明を除外

        .filter(
            member =>
                member.birthdayData
        );


    // =====================================
    // 現役 / 全員
    // =====================================

    if(
        selectedStatus ===
        "active"
    ){

        result =
            result.filter(
                member =>
                    isActive(member)
            );

    }


    // =====================================
    // 組
    // =====================================

    if(
        selectedTrp !==
        "all"
    ){

        result =
            result.filter(
                member =>
                    member.birthdayTrp
                    ===
                    selectedTrp
            );

    }


    // =====================================
    // 誕生日順
    // =====================================

    result.sort(
        (a,b)=>{

            if(
                a.birthdayData.month
                !==
                b.birthdayData.month
            ){

                return (
                    a.birthdayData.month
                    -
                    b.birthdayData.month
                );

            }


            if(
                a.birthdayData.day
                !==
                b.birthdayData.day
            ){

                return (
                    a.birthdayData.day
                    -
                    b.birthdayData.day
                );

            }


            // 同じ誕生日なら期順

            return (
                (a.gen || 999)
                -
                (b.gen || 999)
            );

        }
    );


    return result;

}


// =========================================
// 誕生日一覧表示
// =========================================

function renderBirthdays(){

    const currentMembers =
        getBirthdayMembers();


    birthdayList.innerHTML = "";


    // =====================================
    // 0人
    // =====================================

    if(
        currentMembers.length === 0
    ){

        birthdayList.innerHTML = `

            <div class="birthdayEmpty">

                該当する生徒はいません

            </div>

        `;

        return;

    }


    // =====================================
    // 月ごとに表示
    // =====================================

    for(
        let month = 1;
        month <= 12;
        month++
    ){

        const monthMembers =
            currentMembers.filter(
                member =>
                    member.birthdayData.month
                    ===
                    month
            );


        // その月に誰もいなければ
        // 月自体を表示しない

        if(
            monthMembers.length === 0
        ){
            continue;
        }


        // =================================
        // 月ブロック
        // =================================

        const section =
            document.createElement(
                "section"
            );


        section.className =
            "birthdayMonth";


        section.innerHTML = `

            <h2 class="birthdayMonthTitle">

                ${month}月

            </h2>

            <div class="birthdayMonthList">
            </div>

        `;


        const monthList =
            section.querySelector(
                ".birthdayMonthList"
            );


        // =================================
        // 人物
        // =================================

        monthMembers.forEach(
            member=>{

                const item =
                    document.createElement(
                        "a"
                    );


                item.href =
                    `member.html?id=${member.id}`;


                item.className =
                    `birthdayItem ${member.birthdayTrp}`;


                item.innerHTML = `

                    <div class="birthdayDay">

                        ${member.birthdayData.day}日

                    </div>


                    <div class="birthdayName">

                        ${member.name}

                    </div>


                    <div class="birthdayGen">

                        ${
                            member.gen
                            ? `${member.gen}期`
                            : ""
                        }

                    </div>

                `;


                monthList.appendChild(
                    item
                );

            }
        );


        birthdayList.appendChild(
            section
        );

    }

}


// =========================================
// 現役 / 全員ボタン
// =========================================

document
    .querySelectorAll(
        ".statusBtn"
    )
    .forEach(btn=>{

        btn.addEventListener(
            "click",
            ()=>{

                selectedStatus =
                    btn.dataset.status;


                document
                    .querySelectorAll(
                        ".statusBtn"
                    )
                    .forEach(b=>{

                        b.classList.remove(
                            "active"
                        );

                    });


                btn.classList.add(
                    "active"
                );


                renderBirthdays();

            }
        );

    });


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


                renderBirthdays();

            }
        );

    });


// =========================================
// 初期表示
// =========================================

renderBirthdays();