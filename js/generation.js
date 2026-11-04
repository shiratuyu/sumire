// =========================================
// 設定
// =========================================

const TRP_NAMES = {
    flower: "花組",
    moon: "月組",
    snow: "雪組",
    star: "星組",
    cosmos: "宙組",
    special: "専科"
};

let selectedGen = null;
let selectedStatus = "all";


// =========================================
// 所属組の取得
// =========================================

function getMemberTrp(member) {

    if (!member.history || member.history.length === 0) {
        return "";
    }

    const histories = [...member.history].sort(
        (a, b) => (b.from || "").localeCompare(a.from || "")
    );

    return histories[0].trp || "";
}


// =========================================
// 現役・OG判定
// =========================================

function isActiveMember(member) {

    if (!member.leave) return true;

    const today = new Date();
    const todayStr = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0")
    ].join("-");

    return member.leave >= todayStr;
}


// =========================================
// 期の選択肢を作成
// =========================================

function initializeGenerationSelect() {

    const select = document.getElementById("generationSelect");

    const generations = [
        ...new Set(
            members
                .map(member => Number(member.gen))
                .filter(gen => Number.isFinite(gen) && gen > 0)
        )
    ].sort((a, b) => b - a);

    generations.forEach(gen => {

        const option = document.createElement("option");

        option.value = gen;
        option.textContent = `${gen}期`;

        select.appendChild(option);
    });

    if (generations.length === 0) return;

    selectedGen = generations[0];
    select.value = String(selectedGen);

    select.addEventListener("change", () => {
        selectedGen = Number(select.value);
        renderGeneration();
    });
}


// =========================================
// 現役・OGボタン
// =========================================

function initializeStatusButtons() {

    document.querySelectorAll(".generationStatusBtn").forEach(button => {

        button.addEventListener("click", () => {

            selectedStatus = button.dataset.status;

            document.querySelectorAll(".generationStatusBtn").forEach(btn => {
                btn.classList.toggle(
                    "active",
                    btn.dataset.status === selectedStatus
                );
            });

            renderGeneration();
        });
    });
}


// =========================================
// 生徒一覧の取得
// =========================================

function getGenerationMembers() {

    return members
        .filter(member => Number(member.gen) === selectedGen)
        .filter(member => {

            const active = isActiveMember(member);

            if (selectedStatus === "active") return active;
            if (selectedStatus === "og") return !active;

            return true;
        })
        .sort((a, b) => {

            // rank が登録されている場合はその順番
            const rankA = Number(a.rank);
            const rankB = Number(b.rank);

            const hasRankA = Number.isFinite(rankA) && rankA > 0;
            const hasRankB = Number.isFinite(rankB) && rankB > 0;

            if (hasRankA && hasRankB) return rankA - rankB;
            if (hasRankA) return -1;
            if (hasRankB) return 1;

            return (a.furigana || a.name || "")
                .localeCompare(b.furigana || b.name || "", "ja");
        });
}


// =========================================
// 表示
// =========================================

function renderGeneration() {

    const container = document.getElementById("generationList");
    const title = document.getElementById("generationTitle");
    const count = document.getElementById("generationCount");

    container.replaceChildren();

    if (selectedGen === null) {
        title.textContent = "同期一覧";
        count.textContent = "";
        return;
    }

    const generationMembers = getGenerationMembers();

    title.textContent = `${selectedGen}期生`;
    count.textContent = `${generationMembers.length}人`;

    if (generationMembers.length === 0) {
        const empty = document.createElement("p");
        empty.className = "generationEmpty";
        empty.textContent = "該当する生徒はいません。";
        container.appendChild(empty);
        return;
    }

    generationMembers.forEach(member => {

        const trp = getMemberTrp(member);

        // 組未配属の場合は専科と同じ色を使用
        const colorClass = trp || "special";

        const card = document.createElement("a");
        card.className = `generationItem ${colorClass}`;
        card.href = `member.html?id=${encodeURIComponent(member.id)}`;

        const name = document.createElement("span");
        name.className = "generationName";
        name.textContent = member.name;

        const details = document.createElement("div");
        details.className = "generationDetails";

        const status = document.createElement("span");
        status.className = "generationStatus";
        status.textContent = isActiveMember(member) ? "現役" : "OG";

        details.appendChild(status);

        const info = document.createElement("div");
        info.className = "generationInfo";

        info.appendChild(name);
        info.appendChild(details);

        card.appendChild(info);

        container.appendChild(card);
    });
}


// =========================================
// 初期化
// =========================================

initializeGenerationSelect();
initializeStatusButtons();
renderGeneration();