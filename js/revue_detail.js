const params = new URLSearchParams(location.search);
const id = params.get("id");

const revue = revues.find(r => r.id === id);


// 公演が見つからない場合

if(!revue){

    document.body.innerHTML = "公演が見つかりません";

}else{


    // =========================================
    // 組名
    // =========================================

    function getTrpName(trp){

        const names = {
            flower:"花組",
            moon:"月組",
            snow:"雪組",
            star:"星組",
            cosmos:"宙組",
            special:"専科",
            all:"全組"
        };

        return names[trp] || "";
    }


    // =========================================
    // ヘッダー
    // =========================================

    document.querySelector(".top-heading").classList.add(revue.trp);


    // =========================================
    // タイトル
    // =========================================

    function renderTitle(){

        const area = document.getElementById("titleArea");

        area.innerHTML = "";

        if(revue.title_parts && revue.title_parts.length){

            revue.title_parts.forEach(part=>{

                const block = document.createElement("div");

                block.className = "titleBlock";


                if(part.pre){

                    const pre = document.createElement("div");

                    pre.className = "titlePre";

                    pre.textContent = part.pre;

                    block.appendChild(pre);
                }


                const titleLine = document.createElement("div");

                titleLine.className = "titleLine";


                const main = document.createElement("span");

                main.className = "titleMain";

                main.textContent = part.main;

                titleLine.appendChild(main);


                if(part.post){

                    const post = document.createElement("span");

                    post.className = "titlePost";

                    post.textContent = part.post;

                    titleLine.appendChild(post);

                }


                block.appendChild(titleLine);


                area.appendChild(block);

            });

        }else{

            const title = document.createElement("div");

            title.className = "titleMain";

            title.textContent = revue.name;

            area.appendChild(title);

        }
    }


    // =========================================
    // 基本情報
    // =========================================

    function setInfo(id, value){

        const valueElement = document.getElementById(id);

        if(!valueElement){
            return;
        }

        const labelElement =
            valueElement.previousElementSibling;


        if(value){

            valueElement.textContent = value;

        }else{

            if(labelElement){
                labelElement.style.display = "none";
            }

            valueElement.style.display = "none";

        }
    }


    setInfo("revueTrp", getTrpName(revue.trp));
    setInfo("revueHero", revue.hero);
    setInfo("revueHeroine", revue.heroine);
    setInfo("revueNewHero", revue.new_hero);
    setInfo("revueNewHeroine", revue.new_heroine);


    // =========================================
    // 公演期間
    // =========================================

    function renderSchedule(){

        const area =
            document.getElementById("revueSchedule");

        area.innerHTML = "";


        if(!revue.schedule || !revue.schedule.length){

            area.textContent =
                revue.date || "";

            return;
        }


        revue.schedule.forEach(item=>{

            const box =
                document.createElement("div");

            box.className =
                "scheduleItem";


            const theater =
                document.createElement("div");

            theater.className =
                "scheduleTheater";

            theater.textContent =
                item.theater;


            const date =
                document.createElement("div");

            date.className =
                "scheduleDate";

            date.textContent =
                `${item.from} ～ ${item.to}`;


            box.appendChild(theater);
            box.appendChild(date);

            area.appendChild(box);

        });
    }


    // =========================================
    // 演出家
    // =========================================

    function renderDirectors(){

        const area =
            document.getElementById("revueDirectors");

        area.innerHTML = "";


        if(!revue.directors || !revue.directors.length){

            const label =
                area.previousElementSibling;

            if(label){
                label.style.display = "none";
            }

            area.style.display = "none";

            return;
        }


        revue.directors.forEach(name=>{

            const span =
                document.createElement("span");

            span.className =
                "director";

            span.textContent = name;

            area.appendChild(span);

        });
    }


    // =========================================
    // 公式サイト
    // =========================================

    function renderOfficial(){

        const area =
            document.getElementById("revueOfficial");

        area.innerHTML = "";


        if(!revue.official_url){

            const label =
                area.previousElementSibling;

            if(label){
                label.style.display = "none";
            }

            area.style.display = "none";

            return;
        }


        const a =
            document.createElement("a");

        a.href =
            revue.official_url;

        a.target =
            "_blank";

        a.rel =
            "noopener noreferrer";

        a.textContent =
            "公式サイト";

        area.appendChild(a);
    }


    // =========================================
    // 主な配役
    // =========================================

    function renderMainCast(){

        const area =
            document.getElementById("castTable");

        area.innerHTML = "";


        if(!revue.main_cast || !revue.main_cast.length){

            area.closest(".detailSection").style.display =
                "none";

            return;
        }


        const hasNew =
            revue.main_cast.some(
                item =>
                    item.new_members &&
                    item.new_members.length
            );


        const header =
            document.createElement("div");

        header.className =
            "castHeader";


        if(hasNew){

            header.innerHTML =
                "<div>役名</div><div>本公演</div><div>新人公演</div>";

        }else{

            header.innerHTML =
                "<div>役名</div><div>本公演</div><div></div>";

        }


        area.appendChild(header);


        revue.main_cast.forEach(item=>{

            const row =
                document.createElement("div");

            row.className =
                "castRow";


            const role =
                document.createElement("div");

            role.className =
                "castRole";

            role.textContent =
                item.role;


            const members =
                document.createElement("div");

            members.className =
                "castMembers";

            members.textContent =
                item.members.join("\n");


            const newMembers =
                document.createElement("div");

            newMembers.className =
                "castMembers";


            if(item.new_members && item.new_members.length){

                newMembers.textContent =
                    item.new_members.join("\n");

            }else{

                newMembers.classList.add(
                    "castEmpty"
                );

                newMembers.textContent = "";

            }


            row.appendChild(role);
            row.appendChild(members);
            row.appendChild(newMembers);

            area.appendChild(row);

        });
    }


    // =========================================
    // 出演者
    // =========================================

    function renderCast(){

        const area =
            document.getElementById("castList");

        area.innerHTML = "";


        if(!revue.cast || !revue.cast.length){

            area.textContent =
                "全出演者が主な配役に掲載されています";

            return;
        }


        revue.cast.forEach(name=>{

            const div =
                document.createElement("div");

            div.className =
                "castMember";

            div.textContent =
                name;

            area.appendChild(div);

        });
    }


    // =========================================
    // 階段降り
    // =========================================

    function renderKaidan(){

        const area =
            document.getElementById("kaidanList");

        area.innerHTML = "";


        if(!revue.kaidan || !revue.kaidan.length){

            area.closest(".detailSection").style.display =
                "none";

            return;
        }


        revue.kaidan.forEach((step, index)=>{

            const row =
                document.createElement("div");

            row.className =
                "kaidanRow";


            const members =
                document.createElement("div");

            members.className =
                "kaidanMembers";


            step.members.forEach(member=>{

                const item =
                    document.createElement("span");

                item.className =
                    "kaidanMember";


                let text =
                    member.name;

                const labels = [];


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


                if(labels.length){

                    text +=
                        `（${labels.join("・")}）`;

                }


                item.textContent =
                    text;

                members.appendChild(item);

            });


            row.appendChild(members);

            area.appendChild(row);


            // 最後以外に矢印

            if(index < revue.kaidan.length - 1){

                const arrow =
                    document.createElement("div");

                arrow.className =
                    "kaidanArrow";

                arrow.textContent =
                    "↓";

                area.appendChild(arrow);

            }

        });
    }


    // =========================================
    // 実行
    // =========================================

    renderTitle();
    renderSchedule();
    renderDirectors();
    renderOfficial();
    renderMainCast();
    renderCast();
    renderKaidan();

}