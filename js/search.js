// =========================================
// 検索文字列の統一
// =========================================

function normalizeText(text) {
    return String(text ?? "")
        .normalize("NFKC")
        .toLowerCase()
        .replace(/[\s\u3000]/g, "");
}


// =========================================
// 検索処理
// =========================================

function searchData(keyword) {

    const query = normalizeText(keyword);

    if (!query) {
        return {
            members: [],
            revues: [],
            directors: []
        };
    }

    // 生徒
    const memberResults = members.filter(member => {

        const searchText = [
            member.name,
            member.furigana,
            member.gen ? `${member.gen}期` : ""
        ].join(" ");

        return normalizeText(searchText).includes(query);
    });


    // 公演
    const revueResults = revues.filter(revue => {

        const texts = [
            revue.name,
            revue.hero,
            revue.heroine,
            revue.new_hero,
            revue.new_heroine
        ];

        (revue.title_parts || []).forEach(part => {

            texts.push(
                part.pre,
                part.main,
                part.post,
                part.work_id
            );

            texts.push(...(part.directors || []));
        });

        return normalizeText(texts.join(" ")).includes(query);
    });


    // 演出家
    const directorResults = directors.filter(director => {

        return normalizeText(director.name).includes(query);

    });


    return {
        members: memberResults,
        revues: revueResults,
        directors: directorResults
    };
}


// =========================================
// 検索結果のカード作成
// =========================================

function createSearchItem(title, subtitle, href, colorClass = "all") {

    const link = document.createElement("a");
    link.className = `searchItem ${colorClass}`;
    link.href = href;

    const name = document.createElement("span");
    name.className = "searchItemName";
    name.textContent = title;

    const detail = document.createElement("span");
    detail.className = "searchItemDetail";
    detail.textContent = subtitle;

    link.appendChild(name);
    link.appendChild(detail);

    return link;
}


// =========================================
// 見出し作成
// =========================================

function createSearchSection(title, items) {

    if (items.length === 0) return null;

    const section = document.createElement("section");
    section.className = "searchSection";

    const heading = document.createElement("div");
    heading.className = "searchSectionHeading";

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const count = document.createElement("span");
    count.textContent = `${items.length}件`;

    heading.appendChild(h2);
    heading.appendChild(count);

    const list = document.createElement("div");
    list.className = "searchList";

    items.forEach(item => list.appendChild(item));

    section.appendChild(heading);
    section.appendChild(list);

    return section;
}


// =========================================
// 生徒の所属組取得
// =========================================

function getMemberTrp(member) {

    if (!member.history || member.history.length === 0) {
        return "all";
    }

    const histories = [...member.history].sort((a, b) =>
        (b.from || "").localeCompare(a.from || "")
    );

    return histories[0].trp || "all";
}


// =========================================
// 検索結果表示
// =========================================

function renderSearch(keyword) {

    const container = document.getElementById("searchResults");
    const message = document.getElementById("searchMessage");

    container.replaceChildren();

    if (!keyword.trim()) {
        message.textContent = "検索したい言葉を入力してください。";
        return;
    }

    const results = searchData(keyword);

    const total =
        results.members.length +
        results.revues.length +
        results.directors.length;

    message.textContent = `「${keyword}」の検索結果：${total}件`;

    if (total === 0) {
        const empty = document.createElement("p");
        empty.className = "searchEmpty";
        empty.textContent = "該当するデータがありません。";
        container.appendChild(empty);
        return;
    }


    // 生徒
    const memberItems = results.members.map(member => {

        return createSearchItem(
            member.name,
            member.gen ? `${member.gen}期` : "生徒",
            `member.html?id=${encodeURIComponent(member.id)}`,
            getMemberTrp(member)
        );

    });

    const memberSection = createSearchSection("生徒", memberItems);
    if (memberSection) container.appendChild(memberSection);

    
    // 演出家
    const directorItems = results.directors.map(director => {

        return createSearchItem(
            director.name,
            "演出家",
            `director_detail.html?id=${encodeURIComponent(director.id)}`,
            "all"
        );

    });

    const directorSection = createSearchSection("演出家", directorItems);
    if (directorSection) container.appendChild(directorSection);


    // 公演
    const revueItems = results.revues.map(revue => {

        const year = revue.date ? revue.date.slice(0, 4) + "年" : "";

        const item = createSearchItem(
            revue.name || (revue.title_parts || []).map(p => p.main).join(" / "),
            year,
            `revue_detail.html?id=${encodeURIComponent(revue.id)}`,
            revue.trp || "all"
        );

        // 検索語に一致した主演者・演出家を取得
        const matchedPeople = [
            { name: revue.hero, role: "主演" },
            { name: revue.heroine, role: "ヒロイン" },
            { name: revue.new_hero, role: "新公主演" },
            { name: revue.new_heroine, role: "新公ヒロイン" }
        ].filter(person =>
            person.name &&
            normalizeText(person.name).includes(normalizeText(keyword))
        );

        // 演出家も検索
        (revue.title_parts || []).forEach(part => {

            (part.directors || []).forEach(name => {

                if (normalizeText(name).includes(normalizeText(keyword))) {
                    matchedPeople.push({
                        name: name,
                        role: "演出"
                    });
                }

            });
        });

        // 重複を除去
        const uniquePeople = matchedPeople.filter((person, index, array) =>
            array.findIndex(p =>
                p.name === person.name && p.role === person.role
            ) === index
        );

        // 一致した人物を公演名の下に表示
        if (uniquePeople.length > 0) {

            const nameElement = item.querySelector(".searchItemName");

            const nameArea = document.createElement("div");
            nameArea.className = "searchItemNameArea";

            nameElement.replaceWith(nameArea);
            nameArea.appendChild(nameElement);

            const people = document.createElement("span");
            people.className = "searchMatchedPeople";

            people.textContent = uniquePeople
                .map(person => `${person.name}（${person.role}）`)
                .join("、");

            nameArea.appendChild(people);
        }

        return item;
    });

    const revueSection = createSearchSection("公演", revueItems);
    if (revueSection) container.appendChild(revueSection);

}


// =========================================
// イベント設定
// =========================================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function executeSearch() {

    const keyword = searchInput.value.trim();

    const url = new URL(window.location.href);

    if (keyword) {
        url.searchParams.set("q", keyword);
    } else {
        url.searchParams.delete("q");
    }

    window.history.replaceState(null, "", url);

    renderSearch(keyword);
}

searchButton.addEventListener("click", executeSearch);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.isComposing) {
        executeSearch();
    }
});

// 入力中にも検索結果を更新
searchInput.addEventListener("input", () => {
    renderSearch(searchInput.value.trim());
});

// URLから検索文字列を取得
const params = new URLSearchParams(window.location.search);
const initialKeyword = params.get("q") || "";

searchInput.value = initialKeyword;
renderSearch(initialKeyword);