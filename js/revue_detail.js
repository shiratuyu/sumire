const params = new URLSearchParams(location.search);
const id = params.get("id");

const revue = revues.find(r => r.id === id);

// リンク作成用
function normalizeName(name){

    return name.replace(/\s/g, "");

}


function createMemberLink(name){

    const member = members.find(
        m => normalizeName(m.name) === normalizeName(name)
    );

    if(!member){
        return document.createTextNode(name);
    }

    const a = document.createElement("a");

    a.href = `member.html?id=${member.id}`;
    a.textContent = name;
    a.className = "memberLink";

    return a;
}

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

    function removeParentheses(text){

        if(!text){
            return "";
        }

        return text.replace(/（[^）]*）/g, "");
    }

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

                main.textContent = removeParentheses(part.main);

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

    function setMemberInfo(id, name){

        const valueElement =
            document.getElementById(id);

        if(!valueElement){
            return;
        }

        const labelElement =
            valueElement.previousElementSibling;


        if(name){

            valueElement.innerHTML = "";

            valueElement.appendChild(
                createMemberLink(name)
            );

        }else{

            if(labelElement){
                labelElement.style.display = "none";
            }

            valueElement.style.display = "none";

        }

    }

    setMemberInfo("revueHero", revue.hero);
    setMemberInfo("revueHeroine", revue.heroine);
    setMemberInfo("revueNewHero", revue.new_hero);
    setMemberInfo("revueNewHeroine", revue.new_heroine);


    // 日付変換
    function formatDate(dateString){

        if(!dateString){
            return "";
        }

        const [year, month, day] =
            dateString.split("-");

        return `${year}年${Number(month)}月${Number(day)}日`;
    }

    // =========================================
    // 公演期間
    // =========================================

    function renderSchedule(){

        const area =
            document.getElementById("revueSchedule");

        area.innerHTML = "";


        if(!revue.schedule || !revue.schedule.length){

            area.textContent =
                formatDate(revue.date);

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
                `${formatDate(item.from)} ～ ${formatDate(item.to)}`;


            box.appendChild(date);
            box.appendChild(theater);
            
            area.appendChild(box);

        });
    }


    // =========================================
    // 演出家
    // =========================================

    function renderDirectors(){

        const area =
            document.getElementById("revueDirectors");

        const label =
            area.previousElementSibling;

        const directorGroups =
            (revue.title_parts || [])
            .map(part => part.directors || [])
            .filter(directors => directors.length > 0);

        if(directorGroups.length === 0){

            label.style.display = "none";
            area.style.display = "none";

            return;

        }

        area.innerHTML = "";

        directorGroups.forEach((group, groupIndex)=>{

            group.forEach((name, index)=>{

                const director =
                    directors.find(
                        d => d.name === name
                    );

                if(director){

                    const a =
                        document.createElement("a");

                    a.href =
                        `director.html?id=${director.id}`;

                    a.textContent =
                        name;

                    a.className =
                        "directorLink";

                    area.appendChild(a);

                }else{

                    area.appendChild(
                        document.createTextNode(name)
                    );

                }


                // 同じ作品内は「・」
                if(index < group.length - 1){

                    area.appendChild(
                        document.createTextNode("・")
                    );

                }

            });


            // 別作品との間は「，」
            if(groupIndex < directorGroups.length - 1){

                area.appendChild(
                    document.createTextNode("，")
                );

            }

        });

    }


    // =========================================
    // 公式サイト
    // =========================================
/*
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
*/

    // =========================================
    // 主な配役
    // =========================================

    function renderMainCast(){

        const area = document.getElementById("castTable");

        area.innerHTML = "";

        if(!revue.main_cast || !revue.main_cast.length){

            area.closest(".detailSection").style.display = "none";

            return;
        }


        const hasNew = revue.main_cast.some(
            item => item.new_members && item.new_members.length
        );


        if(hasNew){

            area.classList.add("hasNew");

        }else{

            area.classList.add("noNew");

        }


        // 見出し

        const header = document.createElement("div");

        header.className = "castHeader";


        const roleHeader = document.createElement("div");
        roleHeader.textContent = "役名";

        const memberHeader = document.createElement("div");
        memberHeader.textContent = "本公演";


        header.appendChild(roleHeader);
        header.appendChild(memberHeader);


        if(hasNew){

            const newHeader = document.createElement("div");

            newHeader.textContent = "新人公演";

            header.appendChild(newHeader);

        }


        area.appendChild(header);


        // 配役

        revue.main_cast.forEach(item=>{

            const row = document.createElement("div");

            row.className = "castRow";


            // 役名

            const role = document.createElement("div");

            role.className = "castRole";

            role.textContent = item.role;


            // 本公演

            const membersArea = document.createElement("div");

            membersArea.className = "castMembers";


            item.members.forEach((name, index)=>{

                membersArea.appendChild(
                    createMemberLink(name)
                );

                if(index < item.members.length - 1){

                    membersArea.appendChild(
                        document.createElement("br")
                    );

                }

            });


            row.appendChild(role);
            row.appendChild(membersArea);


            // 新人公演

            if(hasNew){

                const newMembersArea = document.createElement("div");

                newMembersArea.className = "castMembers";


                if(item.new_members && item.new_members.length){

                    item.new_members.forEach((name, index)=>{

                        newMembersArea.appendChild(
                            createMemberLink(name)
                        );

                        if(index < item.new_members.length - 1){

                            newMembersArea.appendChild(
                                document.createElement("br")
                            );

                        }

                    });

                }


                row.appendChild(newMembersArea);

            }


            area.appendChild(row);

        });

    }


    // =========================================
    // 配役比較
    // =========================================

    function getCurrentWorkId(){

        if(
            !revue.title_parts ||
            !revue.title_parts.length
        ){
            return null;
        }


        // まず芝居作品を優先
        const play =
            revue.title_parts.find(
                part =>
                    part.work_type === "play"
                    &&
                    part.work_id
            );


        if(play){
            return play.work_id;
        }


        // 芝居指定がない場合は
        // 最初の work_id を使用
        const part =
            revue.title_parts.find(
                part =>
                    part.work_id
            );


        return part
            ? part.work_id
            : null;

    }


    // =========================================
    // 同じ作品の公演取得
    // =========================================

    function getSameWorkRevues(workId, mode){

        if(!workId){
            return [];
        }


        const matches =
            revues.filter(r=>{

                if(
                    !r.title_parts ||
                    !r.title_parts.length
                ){
                    return false;
                }


                if(
                    !r.main_cast ||
                    !r.main_cast.length
                ){
                    return false;
                }


                const sameWork =
                    r.title_parts.some(
                        part =>
                            part.work_id === workId
                    );


                if(!sameWork){
                    return false;
                }


                // 新公比較の場合
                if(mode === "new"){

                    const hasNew =
                        r.main_cast.some(
                            item =>
                                item.new_members &&
                                item.new_members.length
                        );

                    if(!hasNew){
                        return false;
                    }

                }


                return true;

            });


        matches.sort(
            (a,b) =>
                new Date(a.date)
                -
                new Date(b.date)
        );


        return matches;

    }


    function normalizeRoleName(role){

        if(!role){
            return "";
        }


        return role
            .replace(/（新人公演）/g, "")
            .replace(/\(新人公演\)/g, "")
            .replace(/（[^）]*）/g, "")
            .replace(/\([^)]*\)/g, "")
            .replace(/\[[^\]]*\]/g, "")
            .replace(/【[^】]*】/g, "")
            .trim();

    }

    // =========================================
    // 公演ごとの配役取得
    // =========================================

    function getCastByRole(revueData, mode){

        const castMap = {};


        if(
            !revueData.main_cast ||
            !revueData.main_cast.length
        ){
            return castMap;
        }


        revueData.main_cast.forEach(item=>{

            if(!item.role){
                return;
            }


            // 本公演比較では
            // 「新人公演」を含む役名を除外
            if(
                mode === "main" &&
                item.role.includes("新人公演")
            ){
                return;
            }


            const roles =
                item.role
                    .split(/[\/／]/)
                    .map(
                        role =>
                            normalizeRoleName(
                                role
                            )
                    )
                    .filter(
                        role =>
                            role !== ""
                    );


            // 比較対象となる出演者
            let targetMembers = [];


            if(mode === "new"){

                targetMembers =
                    item.new_members || [];

            }else{

                targetMembers =
                    item.members || [];

            }


            // その公演で配役がないものは除外
            if(!targetMembers.length){
                return;
            }


            roles.forEach(role=>{

                if(!castMap[role]){
                    castMap[role] = [];
                }


                targetMembers.forEach(name=>{

                    if(
                        !castMap[role].includes(
                            name
                        )
                    ){
                        castMap[role].push(
                            name
                        );
                    }

                });

            });

        });


        return castMap;

    }


    // =========================================
    // 比較表表示
    // =========================================

    function renderCastComparison(){

        const mainButton =
            document.getElementById(
                "castComparisonBtn"
            );

        const newButton =
            document.getElementById(
                "newCastComparisonBtn"
            );

        const table =
            document.getElementById(
                "castComparisonTable"
            );


        if(
            !mainButton ||
            !newButton ||
            !table
        ){
            return;
        }


        const workId =
            getCurrentWorkId();


        const mainRevues =
            getSameWorkRevues(
                workId,
                "main"
            );


        const newRevues =
            getSameWorkRevues(
                workId,
                "new"
            );


        // =====================================
        // ボタン表示
        // =====================================

        if(mainRevues.length >= 2){

            mainButton.style.display =
                "block";

        }else{

            mainButton.style.display =
                "none";

        }


        if(newRevues.length >= 2){

            newButton.style.display =
                "block";

        }else{

            newButton.style.display =
                "none";

        }


        // どちらも比較できない場合
        if(
            mainRevues.length < 2 &&
            newRevues.length < 2
        ){

            table.style.display =
                "none";

            return;
        }


        // =====================================
        // 比較表を作る関数
        // =====================================

        function showComparison(mode){

            const sameRevues =
                mode === "new"
                    ? newRevues
                    : mainRevues;


            const roles = [];


            // ---------------------------------
            // 全公演から役名を取得
            // ---------------------------------

            sameRevues.forEach(r=>{

                r.main_cast.forEach(item=>{

                    if(!item.role){
                        return;
                    }


                    // 本公演のみ除外
                    if(
                        mode === "main" &&
                        item.role.includes(
                            "新人公演"
                        )
                    ){
                        return;
                    }


                    const members =
                        mode === "new"
                            ? item.new_members || []
                            : item.members || [];


                    // 対象の出演者がいない行は不要
                    if(!members.length){
                        return;
                    }


                    const splitRoles =
                        item.role
                            .split(/[\/／]/)
                            .map(
                                role =>
                                    normalizeRoleName(
                                        role
                                    )
                            )
                            .filter(
                                role =>
                                    role !== ""
                            );


                    splitRoles.forEach(role=>{

                        if(
                            !roles.includes(
                                role
                            )
                        ){
                            roles.push(
                                role
                            );
                        }

                    });

                });

            });


            // =================================
            // 比較表
            // =================================

            table.innerHTML = "";


            const comparison =
                document.createElement(
                    "div"
                );

            comparison.className =
                "comparisonGrid";


            if(window.innerWidth <= 600){

                comparison.style.gridTemplateColumns =
                    `105px repeat(${sameRevues.length}, minmax(110px, 1fr))`;

            }else{

                comparison.style.gridTemplateColumns =
                    `180px repeat(${sameRevues.length}, minmax(150px, 1fr))`;

            }


            // =================================
            // 見出し
            // =================================

            const roleHeader =
                document.createElement(
                    "div"
                );

            roleHeader.className =
                "comparisonHeader";

            roleHeader.textContent =
                "役名";

            comparison.appendChild(
                roleHeader
            );


            sameRevues.forEach(r=>{

                const header =
                    document.createElement(
                        "div"
                    );

                header.className =
                    "comparisonHeader";


                const year =
                    document.createElement(
                        "div"
                    );

                year.className =
                    "comparisonYear";

                year.textContent =
                    `${new Date(r.date).getFullYear()}年`;


                const trp =
                    document.createElement(
                        "div"
                    );

                trp.className =
                    "comparisonTrp";

                trp.textContent =
                    getTrpName(
                        r.trp
                    );


                header.appendChild(
                    year
                );

                header.appendChild(
                    trp
                );


                comparison.appendChild(
                    header
                );

            });


            // =================================
            // 配役
            // =================================

            const castMaps =
                sameRevues.map(
                    r =>
                        getCastByRole(
                            r,
                            mode
                        )
                );


            roles.forEach(roleName=>{

                const role =
                    document.createElement(
                        "div"
                    );

                role.className =
                    "comparisonRole";

                role.textContent =
                    roleName;

                comparison.appendChild(
                    role
                );


                castMaps.forEach(castMap=>{

                    const memberArea =
                        document.createElement(
                            "div"
                        );

                    memberArea.className =
                        "comparisonMembers";


                    const names =
                        castMap[roleName]
                        || [];


                    if(names.length){

                        names.forEach(
                            (name, index)=>{

                                memberArea.appendChild(
                                    createMemberLink(
                                        name
                                    )
                                );


                                if(
                                    index <
                                    names.length - 1
                                ){

                                    memberArea.appendChild(
                                        document.createElement(
                                            "br"
                                        )
                                    );

                                }

                            }
                        );

                    }else{

                        memberArea.textContent =
                            "－";

                    }


                    comparison.appendChild(
                        memberArea
                    );

                });

            });


            table.appendChild(
                comparison
            );

            table.style.display =
                "block";

        }


        // =====================================
        // 現在開いている比較
        // =====================================

        let currentMode = null;


        // =====================================
        // 本公演比較ボタン
        // =====================================

        mainButton.addEventListener(
            "click",
            ()=>{

                if(currentMode === "main"){

                    table.style.display =
                        "none";

                    currentMode = null;

                    mainButton.textContent =
                        "配役比較";

                    newButton.textContent =
                        "新公比較";

                    return;

                }


                showComparison(
                    "main"
                );

                currentMode =
                    "main";

                mainButton.textContent =
                    "配役比較を閉じる";

                newButton.textContent =
                    "新公比較";

            }
        );


        // =====================================
        // 新公比較ボタン
        // =====================================

        newButton.addEventListener(
            "click",
            ()=>{

                if(currentMode === "new"){

                    table.style.display =
                        "none";

                    currentMode = null;

                    newButton.textContent =
                        "新公比較";

                    mainButton.textContent =
                        "配役比較";

                    return;

                }


                showComparison(
                    "new"
                );

                currentMode =
                    "new";

                newButton.textContent =
                    "新公比較を閉じる";

                mainButton.textContent =
                    "配役比較";

            }
        );

    }


    // =========================================
    // 出演者
    // =========================================

    function renderCast(){

        const area =
            document.getElementById("castList");

        const title =
            document.getElementById("castTitle");

        area.innerHTML = "";


        // 主な配役がある場合は「他の出演者」

        if(revue.main_cast && revue.main_cast.length){

            title.textContent = "他の出演者";

        }else{

            title.textContent = "出演者";

        }


        if(!revue.cast || !revue.cast.length){

            area.closest(".detailSection").style.display = "none";

            return;
        }


        revue.cast.forEach(name=>{

            const div =
                document.createElement("div");

            div.className =
                "castMember";

            div.appendChild(createMemberLink(name));

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


                // 人名をリンクとして追加

                item.appendChild(
                    createMemberLink(member.name)
                );


                // ラベル

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

                    const label =
                        document.createElement("span");

                    label.className =
                        "kaidanLabel";

                    label.textContent =
                        `（${labels.join("・")}）`;

                    item.appendChild(label);

                }


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
    //renderOfficial();
    renderMainCast();
    renderCastComparison();
    renderCast();
    renderKaidan();

}