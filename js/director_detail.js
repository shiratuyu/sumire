const params =
    new URLSearchParams(
        location.search
    );

const id =
    params.get("id");


const director =
    directors.find(
        d => d.id === id
    );


// =========================================
// フィルター
// =========================================

let venueFilter = "all";
let typeFilter = "all";


if(!director){

    document.body.innerHTML =
        "演出家が見つかりません";

}else{

    document.title =
        director.name;


    // ---------------------------------
    // 演出家名
    // ---------------------------------

    document
        .getElementById("directorName")
        .textContent =
        director.name;


    // ---------------------------------
    // タイトルの（）内を削除
    // ---------------------------------

    function removeParentheses(text){

        if(!text){
            return "";
        }

        return text.replace(
            /（[^）]*）/g,
            ""
        );

    }


    // ---------------------------------
    // 日付表示
    // ---------------------------------

    function formatDate(dateString){

        if(!dateString){
            return "";
        }

        const [
            year,
            month,
            day
        ] = dateString.split("-");

        return (
            `${year}年` +
            `${Number(month)}月` +
            `${Number(day)}日`
        );

    }


    // ---------------------------------
    // 芝居・ショー表示
    // ---------------------------------

    function getWorkTypeLabel(
        workType
    ){

        if(workType === "play"){
            return "芝居";
        }

        if(workType === "show"){
            return "ショー";
        }

        return "";

    }


    // ---------------------------------
    // 大劇場・別箱判定
    // ---------------------------------

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


    // ---------------------------------
    // 大劇場・別箱表示
    // ---------------------------------

    function getVenueTypeLabel(
        venueType
    ){

        if(venueType === "main"){
            return "大劇場";
        }

        return "別箱";

    }


    // ---------------------------------
    // 担当作品取得
    // ---------------------------------

    function getWorks(){

        const works = [];


        revues.forEach(revue=>{

            if(
                !revue.title_parts ||
                !revue.title_parts.length
            ){
                return;
            }


            const venueType =
                getVenueType(
                    revue
                );


            revue.title_parts.forEach(part=>{

                if(
                    !part.directors ||
                    !part.directors.includes(
                        director.name
                    )
                ){
                    return;
                }


                works.push({

                    revueId:
                        revue.id,

                    date:
                        revue.date,

                    trp:
                        revue.trp,

                    main:
                        removeParentheses(
                            part.main
                        ),

                    workType:
                        part.work_type
                        || "",

                    venueType:
                        venueType

                });

            });

        });


        works.sort(
            (a,b) =>
                new Date(b.date)
                -
                new Date(a.date)
        );


        return works;

    }


    // ---------------------------------
    // フィルター
    // ---------------------------------

    function filterWorks(
        works
    ){

        return works.filter(work=>{

            // -------------------------
            // 会場
            // -------------------------

            const venueMatch =

                venueFilter === "all"

                ||

                work.venueType ===
                venueFilter;


            // -------------------------
            // 作品種別
            // -------------------------

            const typeMatch =

                typeFilter === "all"

                ||

                work.workType ===
                typeFilter;


            return (
                venueMatch &&
                typeMatch
            );

        });

    }

    // ---------------------------------
    // 担当作品表示
    // ---------------------------------

    function renderWorks(){

        const area =
            document.getElementById(
                "workList"
            );


        let works =
            getWorks();


        works =
            filterWorks(
                works
            );


        if(works.length === 0){

            area.innerHTML =
                '<div class="workEmpty">該当する担当作品はありません</div>';

            return;

        }


        area.innerHTML =
            works
            .map(work=>`

                <a
                    class="workItem ${work.trp}"
                    href="revue_detail.html?id=${work.revueId}"
                >

                    <div class="workInfo">

                        <span class="workDate">
                            ${formatDate(work.date)}
                        </span>


                        ${
                            work.workType
                            ? `
                                <span class="workType">
                                    ${getWorkTypeLabel(
                                        work.workType
                                    )}
                                </span>
                            `
                            : ""
                        }


                        <span class="venueType">
                            ${getVenueTypeLabel(
                                work.venueType
                            )}
                        </span>

                    </div>


                    <div class="workTitle">

                        <span class="workMain">
                            ${work.main}
                        </span>

                    </div>

                </a>

            `)
            .join("");

    }


    // ---------------------------------
    // 会場フィルター
    // ---------------------------------

    document
        .querySelectorAll(
            ".venueFilterBtn"
        )
        .forEach(btn=>{

            btn.addEventListener(
                "click",
                ()=>{

                    venueFilter =
                        btn.dataset.filter;


                    document
                        .querySelectorAll(
                            ".venueFilterBtn"
                        )
                        .forEach(
                            b =>
                                b.classList.remove(
                                    "active"
                                )
                        );


                    btn.classList.add(
                        "active"
                    );


                    renderWorks();

                }
            );

        });


    // ---------------------------------
    // 作品フィルター
    // ---------------------------------

    document
        .querySelectorAll(
            ".typeFilterBtn"
        )
        .forEach(btn=>{

            btn.addEventListener(
                "click",
                ()=>{

                    typeFilter =
                        btn.dataset.filter;


                    document
                        .querySelectorAll(
                            ".typeFilterBtn"
                        )
                        .forEach(
                            b =>
                                b.classList.remove(
                                    "active"
                                )
                        );


                    btn.classList.add(
                        "active"
                    );


                    renderWorks();

                }
            );

        });

    renderWorks();

}