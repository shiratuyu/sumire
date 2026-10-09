// =========================================
// 設定
// =========================================

const YEAR_HEIGHT = 120;
const YEAR_WIDTH = 65;
const COLUMN_WIDTH = 105;

const TROUPES = [
    {id: "flower", name: "花組"},
    {id: "moon", name: "月組"},
    {id: "snow", name: "雪組"},
    {id: "star", name: "星組"},
    {id: "cosmos", name: "宙組"}
];

const ROLES = [
    {id: "tophero", name: "トップスター"},
    {id: "topheroine", name: "トップ娘役"}
];


// =========================================
// 日付処理
// =========================================

function parseDate(dateStr) {
    if (!dateStr) return null;

    const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return null;

    return new Date(
        Number(match[1]),
        Number(match[2]) - 1,
        Number(match[3])
    );
}

function getDayNumber(date) {
    return Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    ) / 86400000;
}

function getYearPosition(date, startYear) {
    const year = date.getFullYear();

    const yearStart = new Date(year, 0, 1);
    const nextYearStart = new Date(year + 1, 0, 1);

    const elapsed = getDayNumber(date) - getDayNumber(yearStart);
    const total = getDayNumber(nextYearStart) - getDayNumber(yearStart);

    return (
        (year - startYear) +
        elapsed / total
    ) * YEAR_HEIGHT;
}


// =========================================
// 就任当時の組
// =========================================

function getTrpAtDate(member, dateStr) {
    const histories = member.history || [];

    const history = histories.find(h =>
        h.from <= dateStr &&
        (!h.to || h.to >= dateStr)
    );

    return history?.trp || "";
}


// =========================================
// トップ就任データ取得
// =========================================

function getTopPositions() {
    const result = [];

    members.forEach(member => {
        (member.position || []).forEach(position => {

            if (!ROLES.some(role => role.id === position.role)) {
                return;
            }

            const from = parseDate(position.from);
            if (!from) return;

            const to = parseDate(position.to);
            const trp = getTrpAtDate(member, position.from);

            if (!TROUPES.some(troupe => troupe.id === trp)) {
                return;
            }

            result.push({
                id: member.id,
                name: member.name,
                gen: member.gen,
                trp,
                role: position.role,
                from,
                to
            });
        });
    });

    return result;
}


// =========================================
// 年表表示
// =========================================

function renderTopTimeline() {
    const container = document.getElementById("topTimeline");
    if (!container) return;

    const positions = getTopPositions();

    if (positions.length === 0) {
        container.textContent = "トップ就任データがありません。";
        return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const startYear = Math.min(
        ...positions.map(p => p.from.getFullYear())
    );

    const endYear = today.getFullYear();
    const totalYears = endYear - startYear + 1;

    const chartHeight = totalYears * YEAR_HEIGHT;
    const chartWidth = YEAR_WIDTH + TROUPES.length * 2 * COLUMN_WIDTH;

    container.innerHTML = "";
    container.style.width = `${chartWidth}px`;

    // =====================================
    // 組ヘッダー
    // =====================================

    const header = document.createElement("div");
    header.className = "topTimelineHeader";
    header.style.width = `${chartWidth}px`;

    const yearHeader = document.createElement("div");
    yearHeader.className = "topYearHeader";
    yearHeader.style.width = `${YEAR_WIDTH}px`;
    header.appendChild(yearHeader);

    TROUPES.forEach(troupe => {
        const group = document.createElement("div");
        group.className = `topTrpHeader ${troupe.id}`;
        group.style.width = `${COLUMN_WIDTH * 2}px`;

        group.innerHTML = `
            <div class="topTrpName">${troupe.name}</div>
            <div class="topRoleNames">
                <div>トップスター</div>
                <div>トップ娘役</div>
            </div>
        `;

        header.appendChild(group);
    });

    container.appendChild(header);

    // =====================================
    // 年表本体
    // =====================================

    const body = document.createElement("div");
    body.className = "topTimelineBody";
    body.style.height = `${chartHeight}px`;
    body.style.width = `${chartWidth}px`;

    // 年・横線
    for (let year = startYear; year <= endYear; year++) {
        const y = (year - startYear) * YEAR_HEIGHT;

        const line = document.createElement("div");
        line.className = "topYearLine";
        line.style.top = `${y}px`;
        body.appendChild(line);

        const label = document.createElement("div");
        label.className = "topYearLabel";
        label.style.top = `${y}px`;
        label.style.width = `${YEAR_WIDTH}px`;
        label.textContent = year;

        body.appendChild(label);
    }

    // 組別の背景列
    TROUPES.forEach((troupe, trpIndex) => {
        ROLES.forEach((role, roleIndex) => {
            const column = document.createElement("div");
            column.className = `topTimelineColumn ${troupe.id}`;

            column.style.left =
                `${YEAR_WIDTH + (trpIndex * 2 + roleIndex) * COLUMN_WIDTH}px`;

            column.style.width = `${COLUMN_WIDTH}px`;
            column.style.height = `${chartHeight}px`;

            body.appendChild(column);
        });
    });

    // =====================================
    // 在任期間の帯
    // =====================================

    positions.forEach(position => {
        const trpIndex = TROUPES.findIndex(t => t.id === position.trp);
        const roleIndex = ROLES.findIndex(r => r.id === position.role);

        if (trpIndex < 0 || roleIndex < 0) return;

        const from = position.from;
        const to = position.to && position.to < today ? position.to : today;

        if (from > today) return;

        const top = getYearPosition(from, startYear);

        // 退任日を含めて表示
        const endDate = new Date(to);
        endDate.setDate(endDate.getDate() + 1);

        const bottom = Math.min(
            getYearPosition(endDate, startYear),
            chartHeight
        );

        const height = Math.max(bottom - top, 2);

        const band = document.createElement("a");
        band.className = `topPositionBand ${position.trp}`;

        band.href = `member.html?id=${encodeURIComponent(position.id)}`;
        
        const BAND_GAP = 4;
        band.style.left =
            `${YEAR_WIDTH + (trpIndex * 2 + roleIndex) * COLUMN_WIDTH + 6}px`;

        band.style.top = `${top + BAND_GAP / 2}px`;
        band.style.width = `${COLUMN_WIDTH - 12}px`;
        band.style.height = `${Math.max(height - BAND_GAP, 1)}px`;

        const name = document.createElement("span");
        name.className = "topPositionName";
        name.textContent = position.name;

        const gen = document.createElement("span");
        gen.className = "topPositionGen";
        gen.textContent = position.gen ? `${position.gen}期` : "";

        band.appendChild(name);
        band.appendChild(gen);

        band.title =
            `${position.name}（${position.gen}期）\n` +
            `${position.from.toLocaleDateString("ja-JP")} ～ ` +
            `${position.to ? position.to.toLocaleDateString("ja-JP") : "現在"}`;

        body.appendChild(band);
    });

    container.appendChild(body);
}

renderTopTimeline();