// =========================================
// 演出家データ取得
// =========================================

function getDirectors() {

    return directors.map(director => {

        const works = new Set();

        revues.forEach(revue => {

            (revue.title_parts || []).forEach(part => {

                if ((part.directors || []).includes(director.name)) {

                    works.add(
                        part.work_id || part.main || revue.id
                    );

                }
            });
        });

        return {
            id: director.id,
            name: director.name,
            count: works.size
        };

    });
}


// =========================================
// 一覧表示
// =========================================

function renderDirectors() {

    const container = document.getElementById("directorsList");
    const count = document.getElementById("directorCount");

    const directorList = getDirectors();

    container.replaceChildren();

    count.textContent = `${directorList.length}人`;

    directorList.forEach(director => {

        const link = document.createElement("a");
        link.className = "directorItem";

        // IDを使って既存の個人ページへ
        link.href =
            `director_detail.html?id=${encodeURIComponent(director.id)}`;

        const name = document.createElement("span");
        name.className = "directorName";
        name.textContent = director.name;

        const works = document.createElement("span");
        works.className = "directorWorkCount";
        works.textContent = `${director.count}作品`;

        link.appendChild(name);
        link.appendChild(works);

        container.appendChild(link);
    });
}

renderDirectors();