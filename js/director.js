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
    // 組名
    // ---------------------------------

    function getTrpName(trp){

        const names = {
            flower:"花組",
            moon:"月組",
            snow:"雪組",
            star:"星組",
            cosmos:"宙組",
            special:"専科"
        };

        return names[trp] || "";

    }


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
    // 担当作品表示
    // ---------------------------------

    function renderWorks(){

        const area =
            document.getElementById(
                "workList"
            );

        const works =
            getWorks();


        if(works.length === 0){

            area.innerHTML =
                '<div class="workEmpty">担当作品はありません</div>';

            return;

        }


        area.innerHTML =
            works
            .map(work=>`

                <a
                    class="workItem"
                    href="revue_detail.html?id=${work.revueId}"
                >

                    <div class="workInfo">

                        <span class="workDate">
                            ${formatDate(work.date)}
                        </span>

                        <span class="workTrp">
                            ${getTrpName(work.trp)}
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


    renderWorks();

}