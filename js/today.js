// =========================================
// 今日の日付
// =========================================

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();


// =========================================
// 月日一致判定
// =========================================

function isToday(dateStr) {
    if (!dateStr) return false;

    const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return false;

    return Number(match[2]) === month &&
           Number(match[3]) === day;
}


// =========================================
// 誕生日判定
// =========================================

function isBirthday(birthday) {
    if (!birthday) return false;

    const match = birthday.match(/(\d+)月(\d+)日/);
    if (!match) return false;

    return Number(match[1]) === month &&
           Number(match[2]) === day;
}


// =========================================
// 組カラー
// =========================================

function getTrp(member) {
    if (!member.history?.length) return "special";

    const histories = [...member.history]
        .sort((a, b) => b.from.localeCompare(a.from));

    return histories[0].trp || "special";
}


// =========================================
// 今日の出来事を取得
// =========================================

function getTodayEvents() {
    const events = [];

    // 誕生日
    members.forEach(member => {
        if (isBirthday(member.birthday)) {
            events.push({
                type: "birthday",
                year: null,
                text: `${member.name}（${member.gen}期）`,
                trp: getTrp(member),
                url: `member.html?id=${encodeURIComponent(member.id)}`
            });
        }
    });

    // 退団日
    members.forEach(member => {
        if (isToday(member.leave)) {
            events.push({
                type: "retirement",
                year: Number(member.leave.slice(0, 4)),
                text: `${member.name} 退団`,
                trp: getTrp(member),
                url: `member.html?id=${encodeURIComponent(member.id)}`
            });
        }
    });

    // トップスター・トップ娘役就任日
    members.forEach(member => {
        (member.position || []).forEach(position => {

            if (
                ["tophero", "topheroine"].includes(position.role) &&
                isToday(position.from)
            ) {
                const roleName =
                    position.role === "tophero"
                    ? "トップスター"
                    : "トップ娘役";

                events.push({
                    type: position.role,
                    year: Number(position.from.slice(0, 4)),
                    text: `${member.name} ${roleName}就任`,
                    trp: member.history?.find(h =>
                        h.from <= position.from &&
                        (!h.to || h.to >= position.from)
                    )?.trp || getTrp(member),
                    url: `member.html?id=${encodeURIComponent(member.id)}`
                });
            }

        });
    });

    // 公演初日・千秋楽
    revues.forEach(revue => {
        (revue.schedule || []).forEach(schedule => {

            const base = {
                trp: revue.trp,
                url: `revue_detail.html?id=${encodeURIComponent(revue.id)}`
            };

            if (isToday(schedule.from)) {
                events.push({
                    ...base,
                    type: "opening",
                    year: Number(schedule.from.slice(0, 4)),
                    text: `${revue.name} ${schedule.theater} 初日`
                });
            }

            if (isToday(schedule.to)) {
                events.push({
                    ...base,
                    type: "closing",
                    year: Number(schedule.to.slice(0, 4)),
                    text: `${revue.name} ${schedule.theater} 千秋楽`
                });
            }
        });
    });

    return events;
}


// =========================================
// 表示
// =========================================

function renderToday() {
    const container = document.getElementById("todayEvents");
    if (!container) return;

    const events = getTodayEvents();

    const birthdays = events.filter(e => e.type === "birthday");
    const anniversaries = events
        .filter(e => e.type !== "birthday")
        .filter(e => e.year <= today.getFullYear())
        .sort((a, b) => b.year - a.year);

    container.replaceChildren();

    function addGroup(title, items) {
        if (items.length === 0) return;

        const group = document.createElement("div");
        group.className = "todayGroup";

        const heading = document.createElement("h3");
        heading.textContent = title;
        group.appendChild(heading);

        items.forEach(event => {
            const link = document.createElement("a");
            link.className = `todayItem ${event.trp || "special"}`;
            link.href = event.url;

            if (event.year !== null) {
                const label = document.createElement("span");
                label.className = "todayYear";
                label.textContent = `${event.year}年`;
                link.appendChild(label);
            }

            const description = document.createElement("span");
            description.textContent = event.text;
            link.appendChild(description);

            group.appendChild(link);
        });

        container.appendChild(group);
    }

    addGroup("今日の誕生日", birthdays);
    addGroup("過去の記念日", anniversaries);

    if (events.length === 0) {
        container.textContent = "今日に該当する記念日はありません。";
    }
}

renderToday();