const revues = [
  {
    "name": "The London Way, Ivresse Vague",
    "trp": "cosmos",
    "date": "2027-01-30",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "桜木 みなと",
    "heroine": "春乃 さくら"
  },
  {
    "name": "Snowing!!",
    "trp": "snow",
    "date": "2027-01-05",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "Monte-Cristo－le spectacle musical－",
    "trp": "snow",
    "date": "2026-12-24",
    "theater": "梅田芸術劇場メインホール, 東京国際フォーラムホールC",
    "hero": "朝美 絢",
    "heroine": "音彩 唯"
  },
  {
    "name": "天穹のアルテミス, Belle Époque",
    "trp": "moon",
    "date": "2026-12-12",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "鳳月 杏",
    "heroine": "天紫 珠李"
  },
  {
    "name": "酔いどれ御免！",
    "trp": "cosmos",
    "date": "2026-11-06",
    "theater": "梅田芸術劇場シアター・ドラマシティ, KAAT神奈川芸術劇場",
    "hero": "鷹翔 千空"
  },
  {
    "name": "再会, Diamond IMPULSE",
    "trp": "cosmos",
    "date": "2026-10-27",
    "theater": "全国ツアー",
    "hero": "桜木 みなと",
    "heroine": "春乃 さくら"
  },
  {
    "name": "エリザベート－愛と死の輪舞－",
    "trp": "flower",
    "date": "2026-10-17",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "永久輝 せあ",
    "heroine": "星空 美咲"
  },
  {
    "name": "稲妻開化譚－イナズマカイカタン－",
    "trp": "moon",
    "date": "2026-09-13",
    "theater": "兵庫県立芸術文化センター阪急中ホール, KAAT神奈川芸術劇場",
    "hero": "風間 柚乃",
    "heroine": "白河 りり"
  },
  {
    "name": "NINE",
    "trp": "moon",
    "date": "2026-09-10",
    "theater": "東急シアターオーブ",
    "hero": "鳳月 杏",
    "heroine": "天紫 珠李"
  },
  {
    "name": "RRR × TAKA”R”AZUKA ～√Rama～",
    "trp": "star",
    "date": "2026-08-29",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "暁 千星",
    "heroine": "詩 ちづる"
  },
  {
    "name": "赤と黒",
    "trp": "flower",
    "date": "2026-07-28",
    "theater": "宝塚バウホール",
    "hero": "侑輝 大弥"
  },
  {
    "name": "マジシャンの憂鬱, EXCITER!!2026",
    "trp": "flower",
    "date": "2026-07-22",
    "theater": "全国ツアー",
    "hero": "永久輝 せあ",
    "heroine": "星空 美咲"
  },
  {
    "name": "ポーの一族",
    "trp": "snow",
    "date": "2026-07-11",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "朝美 絢",
    "heroine": "音彩 唯",
    "new_hero": "華世 京",
    "new_heroine": "澄花 まい"
  },
  {
    "name": "銀二貫",
    "trp": "star",
    "date": "2026-06-12",
    "theater": "宝塚バウホール",
    "hero": "稀惺 かずと",
    "heroine": "乙華 菜乃"
  },
  {
    "name": "花より男子II",
    "trp": "star",
    "date": "2026-06-09",
    "theater": "御園座",
    "hero": "暁 千星",
    "heroine": "詩 ちづる"
  },
  {
    "name": "黒蜥蜴, Diamond IMPULSE",
    "trp": "cosmos",
    "date": "2026-05-23",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "桜木 みなと",
    "heroine": "春乃 さくら",
    "new_hero": "鳳城 のあん",
    "new_heroine": "梨恋 あやめ"
  },
  {
    "name": "DayDream Dali",
    "trp": "snow",
    "date": "2026-04-15",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 東京建物 Brillia HALL",
    "hero": "瀬央 ゆりあ"
  },
  {
    "name": "波うららかに、めおと日和",
    "trp": "snow",
    "date": "2026-04-13",
    "theater": "梅田芸術劇場メインホール",
    "hero": "朝美 絢",
    "heroine": "音彩 唯"
  },
  {
    "name": "RYOFU, 水晶宮殿",
    "trp": "moon",
    "date": "2026-04-04",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "鳳月 杏",
    "heroine": "天紫 珠李",
    "new_hero": "美颯 りひと",
    "new_heroine": "薫乃 咲月"
  },
  {
    "name": "Beautiful SKY !!",
    "trp": "cosmos",
    "date": "2026-03-07",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "愛するには短すぎる, VIVA! FESTA! 2026 in HAKATA",
    "trp": "cosmos",
    "date": "2026-03-04",
    "theater": "博多座",
    "hero": "桜木 みなと",
    "heroine": "春乃 さくら"
  },
  {
    "name": "蒼月抄, EL DESEO",
    "trp": "flower",
    "date": "2026-02-14",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "永久輝 せあ",
    "heroine": "星空 美咲",
    "new_hero": "鏡 星珠",
    "new_heroine": "翠笙 芹南"
  },
  {
    "name": "雨にじむ渤海",
    "trp": "moon",
    "date": "2026-01-21",
    "theater": "宝塚バウホール",
    "hero": "礼華 はる",
    "heroine": "乃々 れいあ"
  },
  {
    "name": "侍タイムスリッパー",
    "trp": "moon",
    "date": "2026-01-09",
    "theater": "東京国際フォーラムホールC, 東京建物 Brillia Hall 箕面",
    "hero": "鳳月 杏",
    "heroine": "天紫 珠李"
  },
  {
    "name": "恋する天動説, DYNAMIC NOVA",
    "trp": "star",
    "date": "2026-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "暁 千星",
    "heroine": "詩 ちづる",
    "new_hero": "大希 颯",
    "new_heroine": "碧羽 陽"
  },
  {
    "name": "DEAN",
    "trp": "flower",
    "date": "2025-11-17",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "極美 慎",
    "heroine": "美羽 愛"
  },
  {
    "name": "Goethe！",
    "trp": "flower",
    "date": "2025-11-16",
    "theater": "東京国際フォーラムホールC, 梅田芸術劇場メインホール",
    "hero": "永久輝 せあ",
    "heroine": "星空 美咲"
  },
  {
    "name": "ボー・ブランメル～美しすぎた男～, Prayer～祈り～",
    "trp": "snow",
    "date": "2025-11-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "朝美 絢",
    "heroine": "夢白 あや",
    "new_hero": "律希 奏",
    "new_heroine": "華純 沙那"
  },
  {
    "name": "アレクサンダー",
    "trp": "star",
    "date": "2025-09-30",
    "theater": "宝塚バウホール, 東京建物 Brillia HALL",
    "hero": "天飛 華音",
    "heroine": "瑠璃 花夏"
  },
  {
    "name": "ダンサ セレナータ, Tiara Azul -Destino-II",
    "trp": "star",
    "date": "2025-09-27",
    "theater": "全国ツアー",
    "hero": "暁 千星",
    "heroine": "詩 ちづる"
  },
  {
    "name": "PRINCE OF LEGEND, BAYSIDE STAR",
    "trp": "cosmos",
    "date": "2025-09-13",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "桜木 みなと",
    "heroine": "春乃 さくら",
    "new_hero": "大路 りせ",
    "new_heroine": "風羽 咲季"
  },
  {
    "name": "ステップ・バイ・ミー",
    "trp": "snow",
    "date": "2025-08-19",
    "theater": "宝塚バウホール",
    "hero": "華世 京",
    "heroine": "星沢 ありさ"
  },
  {
    "name": "An American in Paris",
    "trp": "snow",
    "date": "2025-08-14",
    "theater": "御園座",
    "hero": "朝美 絢",
    "heroine": "音彩 唯"
  },
  {
    "name": "GUYS AND DOLLS",
    "trp": "moon",
    "date": "2025-07-26",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "鳳月 杏",
    "heroine": "天紫 珠李",
    "new_hero": "雅 耀",
    "new_heroine": "帆華 なつ海"
  },
  {
    "name": "RED STONE",
    "trp": "cosmos",
    "date": "2025-06-20",
    "theater": "KAAT神奈川芸術劇場, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "水美 舞斗",
    "heroine": "きよら 羽龍"
  },
  {
    "name": "ZORRO THE MUSICAL",
    "trp": "cosmos",
    "date": "2025-06-14",
    "theater": "東急シアターオーブ, 梅田芸術劇場メインホール",
    "hero": "桜木 みなと",
    "heroine": "春乃 さくら"
  },
  {
    "name": "悪魔城ドラキュラ, 愛 Love Revue！",
    "trp": "flower",
    "date": "2025-06-07",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "永久輝 せあ",
    "heroine": "星空 美咲",
    "new_hero": "夏希 真斗",
    "new_heroine": "彩葉 ゆめ"
  },
  {
    "name": "Twinkle Moon",
    "trp": "moon",
    "date": "2025-05-10",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "花の業平, PHOENIX RISING",
    "trp": "moon",
    "date": "2025-04-28",
    "theater": "全国ツアー",
    "hero": "鳳月 杏",
    "heroine": "天紫 珠李"
  },
  {
    "name": "阿修羅城の瞳, エスペラント!",
    "trp": "star",
    "date": "2025-04-19",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "礼 真琴",
    "new_hero": "稀惺 かずと",
    "new_heroine": "詩 ちづる"
  },
  {
    "name": "儚き星の照らす海の果てに",
    "trp": "flower",
    "date": "2025-03-21",
    "theater": "宝塚バウホール",
    "hero": "希波 らいと",
    "heroine": "二葉 ゆゆ"
  },
  {
    "name": "ROBIN THE HERO, オーヴァチュア！",
    "trp": "snow",
    "date": "2025-03-12",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "朝美 絢",
    "heroine": "夢白 あや",
    "new_hero": "苑利 香輝",
    "new_heroine": "愛空 みなみ"
  },
  {
    "name": "マジシャンの憂鬱, Jubilee",
    "trp": "flower",
    "date": "2025-03-08",
    "theater": "博多座",
    "hero": "永久輝 せあ",
    "heroine": "星空 美咲"
  },
  {
    "name": "にぎたつの海に月出づ",
    "trp": "star",
    "date": "2025-01-24",
    "theater": "宝塚バウホール",
    "hero": "極美 慎",
    "heroine": "詩 ちづる"
  },
  {
    "name": "ANTHEM－アンセム－",
    "trp": "star",
    "date": "2025-01-18",
    "theater": "日本武道館",
    "hero": "礼 真琴"
  },
  {
    "name": "宝塚110年の恋のうた, Razzle Dazzle",
    "trp": "cosmos",
    "date": "2025-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "芹香 斗亜",
    "heroine": "春乃 さくら",
    "new_hero": "泉堂 成",
    "new_heroine": "花恋 こまち"
  },
  {
    "name": "FORMOSA!!",
    "trp": "snow",
    "date": "2024-12-02",
    "theater": "梅田芸術劇場シアター・ドラマシティ, KAAT神奈川芸術劇場",
    "hero": "縣 千",
    "heroine": "音彩 唯"
  },
  {
    "name": "愛の不時着",
    "trp": "snow",
    "date": "2024-11-30",
    "theater": "東京建物 Brillia HALL, 梅田芸術劇場メインホール",
    "hero": "朝美 絢",
    "heroine": "夢白 あや"
  },
  {
    "name": "ゴールデン・リバティ, PHOENIX RISING",
    "trp": "moon",
    "date": "2024-11-16",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "鳳月 杏",
    "heroine": "天紫 珠李",
    "new_hero": "七城 雅",
    "new_heroine": "美渦 せいか"
  },
  {
    "name": "大海賊, Heat on Beat! －Evolution－",
    "trp": "cosmos",
    "date": "2024-10-22",
    "theater": "全国ツアー",
    "hero": "芹香 斗亜",
    "heroine": "春乃 さくら"
  },
  {
    "name": "MY BLUE HEAVEN －わたしのあおぞら－",
    "trp": "cosmos",
    "date": "2024-10-12",
    "theater": "宝塚バウホール",
    "hero": "風色 日向",
    "heroine": "山吹 ひばり"
  },
  {
    "name": "エンジェリックライ, Jubilee",
    "trp": "flower",
    "date": "2024-09-28",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "永久輝 せあ",
    "heroine": "星空 美咲",
    "new_hero": "美空 真瑠",
    "new_heroine": "初音 夢"
  },
  {
    "name": "BLUFF",
    "trp": "moon",
    "date": "2024-08-30",
    "theater": "東京芸術劇場プレイハウス, 宝塚バウホール",
    "hero": "風間 柚乃",
    "heroine": "花妃 舞音"
  },
  {
    "name": "琥珀色の雨にぬれて, Grande TAKARAZUKA 110!",
    "trp": "moon",
    "date": "2024-08-22",
    "theater": "全国ツアー",
    "hero": "鳳月 杏",
    "heroine": "天紫 珠李"
  },
  {
    "name": "記憶にございません！, Tiara Azul －Destino－",
    "trp": "star",
    "date": "2024-08-17",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳",
    "new_hero": "御剣 海",
    "new_heroine": "綾音 美蘭"
  },
  {
    "name": "Liefie－愛しい人－",
    "trp": "flower",
    "date": "2024-07-17",
    "theater": "梅田芸術劇場シアター・ドラマシティ",
    "hero": "聖乃 あすか",
    "heroine": "七彩 はづき"
  },
  {
    "name": "ドン・ジュアン",
    "trp": "flower",
    "date": "2024-07-16",
    "theater": "御園座",
    "hero": "永久輝 せあ",
    "heroine": "星空 美咲"
  },
  {
    "name": "ベルサイユのばら",
    "trp": "snow",
    "date": "2024-07-06",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "彩風 咲奈",
    "heroine": "夢白 あや",
    "new_hero": "蒼波 黎也",
    "new_heroine": "白綺 華"
  },
  {
    "name": "Le Grand Escalier ―ル・グラン・エスカリエ―",
    "trp": "cosmos",
    "date": "2024-06-20",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "芹香 斗亜",
    "heroine": "春乃 さくら"
  },
  {
    "name": "夜明けの光芒",
    "trp": "star",
    "date": "2024-06-03",
    "theater": "東京建物 Brillia HALL",
    "hero": "暁 千星",
    "heroine": "瑠璃 花夏"
  },
  {
    "name": "BIG FISH",
    "trp": "star",
    "date": "2024-05-30",
    "theater": "東急シアターオーブ",
    "hero": "礼 真琴",
    "heroine": "小桜 ほのか"
  },
  {
    "name": "39 Steps",
    "trp": "snow",
    "date": "2024-04-24",
    "theater": "宝塚バウホール",
    "hero": "凪七 瑠海",
    "heroine": "野々花 ひまり"
  },
  {
    "name": "ALL BY MYSELF",
    "trp": "snow",
    "date": "2024-04-15",
    "theater": "相模女子大学グリーンホール, NHK大阪ホール",
    "hero": "彩風 咲奈"
  },
  {
    "name": "仮面のロマネスク, Gato Bonito!!",
    "trp": "snow",
    "date": "2024-04-12",
    "theater": "全国ツアー",
    "hero": "朝美 絢",
    "heroine": "夢白 あや"
  },
  {
    "name": "Eternal Voice 消え残る想い, Grande TAKARAZUKA 110!",
    "trp": "moon",
    "date": "2024-03-30",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "月城 かなと",
    "heroine": "海乃 美月",
    "new_hero": "雅 耀",
    "new_heroine": "乃々 れいあ"
  },
  {
    "name": "アルカンシェル",
    "trp": "flower",
    "date": "2024-02-10",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚香 光",
    "heroine": "星風 まどか",
    "new_hero": "天城 れいん",
    "new_heroine": "七彩 はづき"
  },
  {
    "name": "Golden Dead Schiele",
    "trp": "moon",
    "date": "2024-01-24",
    "theater": "宝塚バウホール",
    "hero": "彩海 せら",
    "heroine": "白河 りり"
  },
  {
    "name": "G.O.A.T",
    "trp": "moon",
    "date": "2024-01-17",
    "theater": "梅田芸術劇場メインホール",
    "hero": "月城 かなと",
    "heroine": "海乃 美月"
  },
  {
    "name": "RRR × TAKA\"R\"AZUKA ～√Bheem～, VIOLETOPIA",
    "trp": "star",
    "date": "2024-01-05",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳",
    "new_hero": "大希 颯",
    "new_heroine": "乙華 菜乃"
  },
  {
    "name": "BE SHINING!!",
    "trp": "flower",
    "date": "2023-11-28",
    "theater": "昭和女子大学人見記念講堂, 神戸国際会館こくさいホール",
    "hero": "柚香 光"
  },
  {
    "name": "激情, GRAND MIRAGE!",
    "trp": "flower",
    "date": "2023-11-17",
    "theater": "全国ツアー",
    "hero": "永久輝 せあ",
    "heroine": "星空 美咲"
  },
  {
    "name": "ボイルド・ドイル・オンザ・トイル・トレイル, FROZEN HOLIDAY",
    "trp": "snow",
    "date": "2023-11-10",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "彩風 咲奈",
    "heroine": "夢白 あや",
    "new_hero": "華世 京",
    "new_heroine": "星沢 ありさ"
  },
  {
    "name": "My Last Joke―虚構に生きる―",
    "trp": "star",
    "date": "2023-10-18",
    "theater": "宝塚バウホール",
    "hero": "天飛 華音",
    "heroine": "詩 ちづる"
  },
  {
    "name": "ME AND MY GIRL",
    "trp": "star",
    "date": "2023-10-09",
    "theater": "博多座",
    "hero": "水美 舞斗, 暁 千星",
    "heroine": "舞空 瞳"
  },
  {
    "name": "PAGAD, Sky Fantasy!",
    "trp": "cosmos",
    "date": "2023-09-29",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "芹香 斗亜",
    "heroine": "春乃 さくら"
  },
  {
    "name": "双曲線上のカルテ",
    "trp": "snow",
    "date": "2023-08-28",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "和希 そら",
    "heroine": "華純 沙那"
  },
  {
    "name": "愛するには短すぎる, ジュエル・ド・パリ!!",
    "trp": "snow",
    "date": "2023-08-25",
    "theater": "全国ツアー",
    "hero": "彩風 咲奈",
    "heroine": "夢白 あや"
  },
  {
    "name": "フリューゲル -君がくれた翼-, 万華鏡百景色",
    "trp": "moon",
    "date": "2023-08-18",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "月城 かなと",
    "heroine": "海乃 美月",
    "new_hero": "瑠皇 りあ",
    "new_heroine": "花妃 舞音"
  },
  {
    "name": "Xcalibur エクスカリバー",
    "trp": "cosmos",
    "date": "2023-07-23",
    "theater": "東京建物 Brillia HALL",
    "hero": "芹香 斗亜",
    "heroine": "春乃 さくら"
  },
  {
    "name": "大逆転裁判",
    "trp": "cosmos",
    "date": "2023-07-19",
    "theater": "梅田芸術劇場シアター・ドラマシティ, KAAT神奈川芸術劇場",
    "hero": "瑠風 輝",
    "heroine": "山吹 ひばり"
  },
  {
    "name": "鴛鴦歌合戦, GRAND MIRAGE!",
    "trp": "flower",
    "date": "2023-07-07",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚香 光",
    "heroine": "星風 まどか",
    "new_hero": "天城 れいん",
    "new_heroine": "朝葉 ことの"
  },
  {
    "name": "月の燈影",
    "trp": "moon",
    "date": "2023-06-14",
    "theater": "宝塚バウホール",
    "hero": "礼華 はる",
    "heroine": "花妃 舞音"
  },
  {
    "name": "DEATH TAKES A HOLIDAY",
    "trp": "moon",
    "date": "2023-06-12",
    "theater": "東急シアターオーブ",
    "hero": "月城 かなと",
    "heroine": "海乃 美月"
  },
  {
    "name": "1789-バスティーユの恋人たち-",
    "trp": "star",
    "date": "2023-06-02",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳",
    "new_hero": "稀惺 かずと",
    "new_heroine": "詩 ちづる"
  },
  {
    "name": "舞姫",
    "trp": "flower",
    "date": "2023-05-03",
    "theater": "宝塚バウホール",
    "hero": "聖乃 あすか",
    "heroine": "美羽 愛"
  },
  {
    "name": "二人だけの戦場",
    "trp": "flower",
    "date": "2023-04-29",
    "theater": "梅田芸術劇場メインホール, 東京建物 Brillia HALL",
    "hero": "柚香 光",
    "heroine": "星風 まどか"
  },
  {
    "name": "Lilacの夢路, ジュエル・ド・パリ!!",
    "trp": "snow",
    "date": "2023-04-22",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "彩風 咲奈",
    "heroine": "夢白 あや",
    "new_hero": "紀城 ゆりや",
    "new_heroine": "音彩 唯"
  },
  {
    "name": "Stella Voice",
    "trp": "star",
    "date": "2023-04-01",
    "theater": "宝塚バウホール",
    "hero": "天華 えま"
  },
  {
    "name": "バレンシアの熱い花, パッション・ダムール・アゲイン！",
    "trp": "star",
    "date": "2023-03-26",
    "theater": "全国ツアー",
    "hero": "凪七 瑠海",
    "heroine": "舞空 瞳"
  },
  {
    "name": "赤と黒",
    "trp": "star",
    "date": "2023-03-21",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "礼 真琴",
    "heroine": "暁 千星"
  },
  {
    "name": "カジノ・ロワイヤル ～我が名はボンド～",
    "trp": "cosmos",
    "date": "2023-03-11",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "真風 涼帆",
    "heroine": "潤 花",
    "new_hero": "大路 りせ",
    "new_heroine": "美星 帆那"
  },
  {
    "name": "BONNIE & CLYDE",
    "trp": "snow",
    "date": "2023-02-06",
    "theater": "御園座",
    "hero": "彩風 咲奈",
    "heroine": "夢白 あや"
  },
  {
    "name": "応天の門, Deep Sea -海神たちのカルナバル-",
    "trp": "moon",
    "date": "2023-02-04",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "月城 かなと",
    "heroine": "海乃 美月",
    "new_hero": "七城 雅",
    "new_heroine": "羽音 みか"
  },
  {
    "name": "海辺のストルーエンセ",
    "trp": "snow",
    "date": "2023-02-03",
    "theater": "KAAT神奈川芸術劇場, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "朝美 絢",
    "heroine": "音彩 唯"
  },
  {
    "name": "MAKAZE IZM",
    "trp": "cosmos",
    "date": "2023-01-09",
    "theater": "東京国際フォーラムホールC",
    "hero": "真風 涼帆",
    "heroine": "潤 花"
  },
  {
    "name": "夢現の先に",
    "trp": "cosmos",
    "date": "2023-01-05",
    "theater": "宝塚バウホール",
    "hero": "鷹翔 千空",
    "heroine": "山吹 ひばり"
  },
  {
    "name": "うたかたの恋, ENCHANTEMENT -華麗なる香水-",
    "trp": "flower",
    "date": "2023-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚香 光",
    "heroine": "星風 まどか",
    "new_hero": "希波 らいと",
    "new_heroine": "七彩 はづき"
  },
  {
    "name": "ELPIDIO",
    "trp": "moon",
    "date": "2022-11-21",
    "theater": "KAAT神奈川芸術劇場, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "鳳月 杏",
    "heroine": "彩 みちる"
  },
  {
    "name": "ブラック・ジャック 危険な賭け, FULL SWING!",
    "trp": "moon",
    "date": "2022-11-18",
    "theater": "全国ツアー",
    "hero": "月城 かなと",
    "heroine": "海乃 美月"
  },
  {
    "name": "ディミトリ～曙光に散る、紫の花～, JAGUAR BEAT－ジャガービート－",
    "trp": "star",
    "date": "2022-11-12",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳",
    "new_hero": "天飛 華音",
    "new_heroine": "藍羽 ひより"
  },
  {
    "name": "殉情",
    "trp": "flower",
    "date": "2022-10-13",
    "theater": "宝塚バウホール",
    "hero": "帆純 まひろ, 一之瀬 航季",
    "heroine": "朝葉 ことの, 美羽 愛"
  },
  {
    "name": "フィレンツェに燃える, Fashionable Empire",
    "trp": "flower",
    "date": "2022-10-14",
    "theater": "全国ツアー",
    "hero": "柚香 光",
    "heroine": "星風 まどか"
  },
  {
    "name": "蒼穹の昴",
    "trp": "snow",
    "date": "2022-10-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "彩風 咲奈",
    "heroine": "朝月 希和",
    "new_hero": "華世 京",
    "new_heroine": "音彩 唯"
  },
  {
    "name": "ベアタ・ベアトリクス",
    "trp": "star",
    "date": "2022-09-08",
    "theater": "宝塚バウホール",
    "hero": "極美 慎",
    "heroine": "小桜 ほのか"
  },
  {
    "name": "モンテ・クリスト伯, Gran Cantante!!",
    "trp": "star",
    "date": "2022-09-01",
    "theater": "全国ツアー",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳"
  },
  {
    "name": "HiGH&LOW　－THE PREQUEL－, Capricciosa!!",
    "trp": "cosmos",
    "date": "2022-08-27",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "真風 涼帆",
    "heroine": "潤 花",
    "new_hero": "亜音 有星",
    "new_heroine": "山吹 ひばり"
  },
  {
    "name": "ODYSSEY－The Age of Discovery－",
    "trp": "snow",
    "date": "2022-07-21",
    "theater": "梅田芸術劇場メインホール",
    "hero": "彩風 咲奈",
    "heroine": "朝月 希和"
  },
  {
    "name": "心中・恋の大和路",
    "trp": "snow",
    "date": "2022-07-20",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "和希 そら",
    "heroine": "夢白 あや"
  },
  {
    "name": "グレート・ギャツビー",
    "trp": "moon",
    "date": "2022-07-16",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "月城 かなと",
    "heroine": "海乃 美月",
    "new_hero": "彩海 せら",
    "new_heroine": "きよら 羽龍"
  },
  {
    "name": "カルト・ワイン",
    "trp": "cosmos",
    "date": "2022-06-17",
    "theater": "東京建物 Brillia HALL, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "桜木 みなと",
    "heroine": "春乃 さくら"
  },
  {
    "name": "FLY WITH ME",
    "trp": "cosmos",
    "date": "2022-06-10",
    "theater": "東京ガーデンシアター",
    "hero": "真風 涼帆"
  },
  {
    "name": "巡礼の年〜リスト・フェレンツ、魂の彷徨〜, Fashionable Empire",
    "trp": "flower",
    "date": "2022-06-04",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚香 光",
    "heroine": "星風 まどか",
    "new_hero": "侑輝 大弥",
    "new_heroine": "星空 美咲"
  },
  {
    "name": "Rain on Neptune",
    "trp": "moon",
    "date": "2022-05-14",
    "theater": "舞浜アンフィシアター",
    "hero": "月城 かなと",
    "heroine": "海乃 美月"
  },
  {
    "name": "ブエノスアイレスの風",
    "trp": "moon",
    "date": "2022-05-03",
    "theater": "日本青年館ホール, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "暁 千星",
    "heroine": "天紫 珠李"
  },
  {
    "name": "めぐり会いは再び next generation－真夜中の依頼人－, Gran Cantante!!",
    "trp": "star",
    "date": "2022-04-23",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳",
    "new_hero": "咲城 けい",
    "new_heroine": "詩 ちづる"
  },
  {
    "name": "冬霞の巴里",
    "trp": "flower",
    "date": "2022-03-25",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 東京建物 Brillia HALL",
    "hero": "永久輝 せあ",
    "heroine": "星空 美咲"
  },
  {
    "name": "TOP HAT",
    "trp": "flower",
    "date": "2022-03-21",
    "theater": "梅田芸術劇場メインホール",
    "hero": "柚香 光",
    "heroine": "星風 まどか"
  },
  {
    "name": "夢介千両みやげ, Sensational!",
    "trp": "snow",
    "date": "2022-03-19",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "彩風 咲奈",
    "heroine": "朝月 希和",
    "new_hero": "縣 千",
    "new_heroine": "華純 沙那"
  },
  {
    "name": "王家に捧ぐ歌",
    "trp": "star",
    "date": "2022-02-08",
    "theater": "御園座",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳"
  },
  {
    "name": "NEVER SAY GOODBYE",
    "trp": "cosmos",
    "date": "2022-02-05",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "真風 涼帆",
    "heroine": "潤 花",
    "new_hero": "風色 日向",
    "new_heroine": "春乃 さくら"
  },
  {
    "name": "ザ・ジェントル・ライアー ～英国的、紳士と淑女のゲーム～",
    "trp": "star",
    "date": "2022-02-01",
    "theater": "宝塚バウホール, KAAT神奈川芸術劇場",
    "hero": "瀬央 ゆりあ"
  },
  {
    "name": "Sweet Little Rock 'n' Roll",
    "trp": "snow",
    "date": "2022-01-14",
    "theater": "宝塚バウホール",
    "hero": "縣 千",
    "heroine": "夢白 あや"
  },
  {
    "name": "今夜、ロマンス劇場で, FULL SWING!",
    "trp": "moon",
    "date": "2022-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "月城 かなと",
    "heroine": "海乃 美月",
    "new_hero": "礼華 はる",
    "new_heroine": "花妃 舞音"
  },
  {
    "name": "バロンの末裔, アクアヴィーテ!!",
    "trp": "cosmos",
    "date": "2021-11-21",
    "theater": "全国ツアー",
    "hero": "真風 涼帆",
    "heroine": "潤 花"
  },
  {
    "name": "プロミセス、プロミセス",
    "trp": "cosmos",
    "date": "2021-11-13",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 東京建物 Brillia HALL",
    "hero": "芹香 斗亜",
    "heroine": "天彩 峰里"
  },
  {
    "name": "元禄バロックロック, The Fascination!",
    "trp": "flower",
    "date": "2021-11-06",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚香 光",
    "heroine": "星風 まどか",
    "new_hero": "希波 らいと",
    "new_heroine": "美羽 愛"
  },
  {
    "name": "川霧の橋, Dream Chaser　－新たな夢へ－",
    "trp": "moon",
    "date": "2021-10-11",
    "theater": "博多座",
    "hero": "月城 かなと",
    "heroine": "海乃 美月"
  },
  {
    "name": "LOVE AND ALL THAT JAZZ",
    "trp": "moon",
    "date": "2021-10-07",
    "theater": "宝塚バウホール",
    "hero": "風間 柚乃",
    "heroine": "きよら 羽龍"
  },
  {
    "name": "柳生忍法帖, モアー・ダンディズム！",
    "trp": "star",
    "date": "2021-09-18",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳",
    "new_hero": "天飛 華音",
    "new_heroine": "瑠璃 花夏"
  },
  {
    "name": "哀しみのコルドバ, Cool Beast!!",
    "trp": "flower",
    "date": "2021-08-25",
    "theater": "全国ツアー",
    "hero": "柚香 光",
    "heroine": "星風 まどか"
  },
  {
    "name": "銀ちゃんの恋",
    "trp": "flower",
    "date": "2021-08-16",
    "theater": "KAAT神奈川芸術劇場, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "水美 舞斗",
    "heroine": "星空 美咲"
  },
  {
    "name": "CITY HUNTER, Fire Fever!",
    "trp": "snow",
    "date": "2021-08-07",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "彩風 咲奈",
    "heroine": "朝月 希和",
    "new_hero": "縣 千",
    "new_heroine": "音彩 唯"
  },
  {
    "name": "婆娑羅の玄孫",
    "trp": "star",
    "date": "2021-07-09",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 東京芸術劇場プレイハウス",
    "hero": "轟 悠"
  },
  {
    "name": "VERDAD!!",
    "trp": "star",
    "date": "2021-07-02",
    "theater": "舞浜アンフィシアター",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳"
  },
  {
    "name": "マノン",
    "trp": "star",
    "date": "2021-07-01",
    "theater": "宝塚バウホール, KAAT神奈川芸術劇場",
    "hero": "愛月 ひかる",
    "heroine": "有沙 瞳"
  },
  {
    "name": "シャーロック・ホームズ－The Game Is Afoot!－, Délicieux!－甘美なる巴里－",
    "trp": "cosmos",
    "date": "2021-06-26",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "真風 涼帆",
    "heroine": "潤 花",
    "new_hero": "亜音 有星",
    "new_heroine": "山吹 ひばり"
  },
  {
    "name": "ヴェネチアの紋章, ル・ポァゾン 愛の媚薬 －Again－",
    "trp": "snow",
    "date": "2021-06-02",
    "theater": "全国ツアー",
    "hero": "彩風 咲奈",
    "heroine": "朝月 希和"
  },
  {
    "name": "ほんものの魔法使",
    "trp": "snow",
    "date": "2021-05-21",
    "theater": "宝塚バウホール, KAAT神奈川芸術劇場",
    "hero": "朝美 絢",
    "heroine": "野々花 ひまり"
  },
  {
    "name": "桜嵐記, Dream Chaser",
    "trp": "moon",
    "date": "2021-05-15",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "珠城 りょう",
    "heroine": "美園 さくら",
    "new_hero": "礼華 はる",
    "new_heroine": "きよら 羽龍"
  },
  {
    "name": "夢千鳥",
    "trp": "cosmos",
    "date": "2021-04-22",
    "theater": "宝塚バウホール",
    "hero": "和希 そら",
    "heroine": "天彩 峰里"
  },
  {
    "name": "Hotel Svizra House ホテル スヴィッツラ ハウス",
    "trp": "cosmos",
    "date": "2021-04-10",
    "theater": "東京建物 Brillia HALL, 梅田芸術劇場メインホール",
    "hero": "真風 涼帆",
    "heroine": "潤 花"
  },
  {
    "name": "アウグストゥス－尊厳ある者－, Cool Beast!!",
    "trp": "flower",
    "date": "2021-04-02",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚香 光",
    "heroine": "華 優希"
  },
  {
    "name": "幽霊刑事～サヨナラする、その前に～",
    "trp": "moon",
    "date": "2021-03-07",
    "theater": "宝塚バウホール",
    "hero": "珠城 りょう",
    "heroine": "天紫 珠李"
  },
  {
    "name": "ダル・レークの恋",
    "trp": "moon",
    "date": "2021-02-16",
    "theater": "TBS赤坂ACTシアター, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "月城 かなと",
    "heroine": "海乃 美月"
  },
  {
    "name": "ロミオとジュリエット",
    "trp": "star",
    "date": "2021-02-14",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳"
  },
  {
    "name": "PRINCE OF ROSES－王冠に導かれし男－",
    "trp": "flower",
    "date": "2021-01-28",
    "theater": "宝塚バウホール",
    "hero": "聖乃 あすか",
    "heroine": "星空 美咲"
  },
  {
    "name": "Eternità",
    "trp": "moon",
    "date": "2021-01-15",
    "theater": "宝塚バウホール",
    "hero": "珠城 りょう"
  },
  {
    "name": "NICE WORK IF YOU CAN GET IT",
    "trp": "flower",
    "date": "2021-01-09",
    "theater": "東京国際フォーラムホールC, 梅田芸術劇場メインホール",
    "hero": "柚香 光",
    "heroine": "華 優希"
  },
  {
    "name": "f f f　－フォルティッシッシモ－, シルクロード～盗賊と宝石～",
    "trp": "snow",
    "date": "2021-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "望海 風斗",
    "heroine": "真彩 希帆"
  },
  {
    "name": "シラノ・ド・ベルジュラック",
    "trp": "star",
    "date": "2020-12-04",
    "theater": "梅田芸術劇場シアター・ドラマシティ",
    "hero": "轟 悠",
    "heroine": "小桜 ほのか"
  },
  {
    "name": "エル・アルコン－鷹－, Ｒａｙ　-星の光線-",
    "trp": "star",
    "date": "2020-11-20",
    "theater": "梅田芸術劇場メインホール",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳"
  },
  {
    "name": "アナスタシア",
    "trp": "cosmos",
    "date": "2020-11-07",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか"
  },
  {
    "name": "ピガール狂騒曲, WELCOME TO TAKARAZUKA　－雪と月と花と－",
    "trp": "moon",
    "date": "2020-09-25",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "珠城 りょう",
    "heroine": "美園 さくら"
  },
  {
    "name": "NOW! ZOOM ME!!",
    "trp": "snow",
    "date": "2020-09-11",
    "theater": "宝塚大劇場",
    "hero": "望海 風斗",
    "heroine": "真彩 希帆"
  },
  {
    "name": "炎のボレロ, Music Revolution!　-New Spirit-",
    "trp": "snow",
    "date": "2020-08-29",
    "theater": "梅田芸術劇場メインホール",
    "hero": "彩風 咲奈",
    "heroine": "潤 花"
  },
  {
    "name": "壮麗帝",
    "trp": "cosmos",
    "date": "2020-08-14",
    "theater": "梅田芸術劇場シアター・ドラマシティ",
    "hero": "桜木 みなと",
    "heroine": "遥羽 らら"
  },
  {
    "name": "FLYING SAPA －フライング サパ－",
    "trp": "cosmos",
    "date": "2020-08-01",
    "theater": "梅田芸術劇場メインホール, 日生劇場",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか"
  },
  {
    "name": "はいからさんが通る",
    "trp": "flower",
    "date": "2020-07-17",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚香 光",
    "heroine": "華 優希"
  },
  {
    "name": "赤と黒",
    "trp": "moon",
    "date": "2020-02-10",
    "theater": "御園座",
    "hero": "珠城 りょう",
    "heroine": "美園 さくら"
  },
  {
    "name": "出島小宇宙戦争",
    "trp": "moon",
    "date": "2020-02-08",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 東京建物 Brillia HALL",
    "hero": "鳳月 杏",
    "heroine": "海乃 美月"
  },
  {
    "name": "眩耀の谷　～舞い降りた新星～, Ｒａｙ　-星の光線-",
    "trp": "star",
    "date": "2020-02-07",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳",
    "new_hero": "碧海 さりお",
    "new_heroine": "桜庭 舞"
  },
  {
    "name": "DANCE OLYMPIA",
    "trp": "flower",
    "date": "2020-01-07",
    "theater": "東京国際フォーラムホールC,",
    "hero": "柚香 光",
    "heroine": "華 優希"
  },
  {
    "name": "マスカレード・ホテル",
    "trp": "flower",
    "date": "2020-01-05",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "瀬戸 かずや",
    "heroine": "朝月 希和"
  },
  {
    "name": "ONCE UPON A TIME IN AMERICA",
    "trp": "snow",
    "date": "2020-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "望海 風斗",
    "heroine": "真彩 希帆",
    "new_hero": "諏訪 さき",
    "new_heroine": "潤 花"
  },
  {
    "name": "龍の宮物語",
    "trp": "star",
    "date": "2019-11-28",
    "theater": "宝塚バウホール",
    "hero": "瀬央 ゆりあ",
    "heroine": "有沙 瞳"
  },
  {
    "name": "ロックオペラ　モーツァルト",
    "trp": "star",
    "date": "2019-11-20",
    "theater": "東京建物 Brillia HALL",
    "hero": "礼 真琴",
    "heroine": "舞空 瞳"
  },
  {
    "name": "El Japón －イスパニアのサムライ－, アクアヴィーテ！！",
    "trp": "cosmos",
    "date": "2019-11-15",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか",
    "new_hero": "風色 日向",
    "new_heroine": "花宮 沙羅"
  },
  {
    "name": "はばたけ黄金の翼よ, Music Revolution!",
    "trp": "snow",
    "date": "2019-10-12",
    "theater": "全国ツアー",
    "hero": "望海 風斗",
    "heroine": "真彩 希帆"
  },
  {
    "name": "ハリウッド・ゴシップ",
    "trp": "snow",
    "date": "2019-10-11",
    "theater": "梅田芸術劇場シアター・ドラマシティ",
    "hero": "彩風 咲奈",
    "heroine": "潤 花"
  },
  {
    "name": "I AM FROM AUSTRIA－故郷は甘き調べ－",
    "trp": "moon",
    "date": "2019-10-04",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "珠城 りょう",
    "heroine": "美園 さくら",
    "new_hero": "英 かおと",
    "new_heroine": "白河 りり"
  },
  {
    "name": "リッツ・ホテルくらいに大きなダイヤモンド",
    "trp": "cosmos",
    "date": "2019-09-05",
    "theater": "宝塚バウホール",
    "hero": "瑠風 輝",
    "heroine": "夢白 あや"
  },
  {
    "name": "追憶のバルセロナ, NICE GUY!!",
    "trp": "cosmos",
    "date": "2019-08-31",
    "theater": "全国ツアー",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか"
  },
  {
    "name": "A Fairy Tale －青い薔薇の精－, シャルム！",
    "trp": "flower",
    "date": "2019-08-23",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "明日海 りお",
    "heroine": "華 優希",
    "new_hero": "聖乃 あすか",
    "new_heroine": "都姫 ここ"
  },
  {
    "name": "チェ・ゲバラ",
    "trp": "moon",
    "date": "2019-07-30",
    "theater": "日本青年館ホール, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "轟 悠",
    "heroine": "天紫 珠李"
  },
  {
    "name": "ON THE TOWN",
    "trp": "moon",
    "date": "2019-07-27",
    "theater": "梅田芸術劇場メインホール",
    "hero": "珠城 りょう",
    "heroine": "美園 さくら"
  },
  {
    "name": "GOD OF STARS-食聖-, Éclair Brillant",
    "trp": "star",
    "date": "2019-07-12",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里",
    "new_hero": "天飛 華音",
    "new_heroine": "舞空 瞳"
  },
  {
    "name": "恋スルARENA",
    "trp": "flower",
    "date": "2019-06-25",
    "theater": "横浜アリーナ",
    "hero": "明日海 りお",
    "heroine": "華 優希"
  },
  {
    "name": "花より男子",
    "trp": "flower",
    "date": "2019-06-15",
    "theater": "TBS赤坂ACTシアター",
    "hero": "柚香 光",
    "heroine": "城妃 美伶"
  },
  {
    "name": "壬生義士伝, Music Revolution!",
    "trp": "snow",
    "date": "2019-05-31",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "望海 風斗",
    "heroine": "真彩 希帆",
    "new_hero": "彩海 せら",
    "new_heroine": "彩 みちる"
  },
  {
    "name": "Dream On!",
    "trp": "flower",
    "date": "2019-05-20",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "鎌足−夢のまほろば、大和し美し−",
    "trp": "star",
    "date": "2019-05-19",
    "theater": "日本青年館ホール",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里"
  },
  {
    "name": "アルジェの男, ESTRELLAS ～星たち～",
    "trp": "star",
    "date": "2019-05-04",
    "theater": "全国ツアー",
    "hero": "礼 真琴",
    "heroine": "音波 みのり"
  },
  {
    "name": "オーシャンズ11",
    "trp": "cosmos",
    "date": "2019-04-19",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか",
    "new_hero": "鷹翔 千空",
    "new_heroine": "夢白 あや"
  },
  {
    "name": "PR×PRince",
    "trp": "snow",
    "date": "2019-03-28",
    "theater": "宝塚バウホール",
    "hero": "永久輝 せあ",
    "heroine": "潤 花"
  },
  {
    "name": "20世紀号に乗って",
    "trp": "snow",
    "date": "2019-03-22",
    "theater": "東急シアターオーブ",
    "hero": "望海 風斗",
    "heroine": "真彩 希帆"
  },
  {
    "name": "夢現無双, クルンテープ　天使の都",
    "trp": "moon",
    "date": "2019-03-15",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "珠城 りょう",
    "heroine": "美園 さくら",
    "new_hero": "風間 柚乃",
    "new_heroine": "天紫 珠李"
  },
  {
    "name": "群盗-Die Räuber-",
    "trp": "cosmos",
    "date": "2019-02-26",
    "theater": "日本青年館ホール",
    "hero": "芹香 斗亜",
    "heroine": "天彩 峰里"
  },
  {
    "name": "CASANOVA",
    "trp": "flower",
    "date": "2019-02-08",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "明日海 りお",
    "heroine": "仙名 彩世",
    "new_hero": "帆純 まひろ",
    "new_heroine": "華 優希"
  },
  {
    "name": "黒い瞳, VIVA！ FESTA！ in HAKATA",
    "trp": "cosmos",
    "date": "2019-02-02",
    "theater": "博多座",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか"
  },
  {
    "name": "Anna Karenina",
    "trp": "moon",
    "date": "2019-01-10",
    "theater": "宝塚バウホール",
    "hero": "美弥 るりか",
    "heroine": "海乃 美月"
  },
  {
    "name": "ON THE TOWN",
    "trp": "moon",
    "date": "2019-01-06",
    "theater": "東京国際フォーラムホールC",
    "hero": "珠城 りょう",
    "heroine": "美園 さくら"
  },
  {
    "name": "霧深きエルベのほとり, ESTRELLAS ～星たち～",
    "trp": "star",
    "date": "2019-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里",
    "new_hero": "極美 慎",
    "new_heroine": "水乃 ゆり"
  },
  {
    "name": "Delight Holiday",
    "trp": "flower",
    "date": "2018-11-30",
    "theater": "舞浜アンフィシアター",
    "hero": "明日海 りお",
    "heroine": "仙名 彩世"
  },
  {
    "name": "メランコリック・ジゴロ, EXCITER!!2018",
    "trp": "flower",
    "date": "2018-11-22",
    "theater": "全国ツアー",
    "hero": "柚香 光",
    "heroine": "華 優希, 舞空 瞳"
  },
  {
    "name": "蘭陵王—美しすぎる武将—",
    "trp": "flower",
    "date": "2018-11-20",
    "theater": "梅田芸術劇場シアター・ドラマシティ, KAAT神奈川芸術劇場",
    "hero": "凪七 瑠海",
    "heroine": "音 くり寿"
  },
  {
    "name": "ファントム",
    "trp": "snow",
    "date": "2018-11-09",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "望海 風斗",
    "heroine": "真彩 希帆",
    "new_hero": "綾 凰華",
    "new_heroine": "野々花 ひまり"
  },
  {
    "name": "デビュタント",
    "trp": "star",
    "date": "2018-10-11",
    "theater": "宝塚バウホール",
    "hero": "瀬央 ゆりあ"
  },
  {
    "name": "異人たちのルネサンス, 白鷺の城",
    "trp": "cosmos",
    "date": "2018-10-05",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか",
    "new_hero": "瑠風 輝",
    "new_heroine": "夢白 あや"
  },
  {
    "name": "Thunderbolt Fantasy東離劍遊紀, Killer Rouge／星秀☆煌紅",
    "trp": "star",
    "date": "2018-08-31",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里"
  },
  {
    "name": "エリザベート－愛と死の輪舞－",
    "trp": "moon",
    "date": "2018-08-24",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "珠城 りょう",
    "heroine": "愛希 れいか",
    "new_hero": "暁 千星",
    "new_heroine": "美園 さくら"
  },
  {
    "name": "New Wave! －星－",
    "trp": "star",
    "date": "2018-08-22",
    "theater": "宝塚バウホール",
    "hero": "瀬央 ゆりあ, 紫藤 りゅう"
  },
  {
    "name": "ハッスル メイツ！",
    "trp": "cosmos",
    "date": "2018-08-02",
    "theater": "宝塚バウホール",
    "hero": "和希 そら",
    "heroine": "天彩 峰里"
  },
  {
    "name": "WEST SIDE STORY",
    "trp": "cosmos",
    "date": "2018-07-24",
    "theater": "梅田芸術劇場メインホール",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか"
  },
  {
    "name": "MESSIAH −異聞・天草四郎−, BEAUTIFUL GARDEN −百花繚乱−",
    "trp": "flower",
    "date": "2018-07-13",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "明日海 りお",
    "heroine": "仙名 彩世",
    "new_hero": "聖乃 あすか",
    "new_heroine": "舞空 瞳"
  },
  {
    "name": "愛聖女－Sainte♡d'Amour－",
    "trp": "moon",
    "date": "2018-07-01",
    "theater": "宝塚バウホール",
    "heroine": "愛希 れいか"
  },
  {
    "name": "雨に唄えば",
    "trp": "moon",
    "date": "2018-06-16",
    "theater": "TBS赤坂ACTシアター",
    "hero": "珠城 りょう",
    "heroine": "美園 さくら"
  },
  {
    "name": "THE LAST PARTY ～S.Fitzgerald's last day～",
    "trp": "moon",
    "date": "2018-06-14",
    "theater": "日本青年館ホール, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "月城 かなと",
    "heroine": "海乃 美月"
  },
  {
    "name": "凱旋門, Gato Bonito!!",
    "trp": "snow",
    "date": "2018-06-08",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "轟 悠",
    "heroine": "真彩 希帆",
    "new_hero": "縣 千",
    "new_heroine": "潤 花"
  },
  {
    "name": "Senhor CRUZEIRO!",
    "trp": "flower",
    "date": "2018-05-10",
    "theater": "宝塚バウホール",
    "hero": "水美 舞斗"
  },
  {
    "name": "あかねさす紫の花, Santé!!",
    "trp": "flower",
    "date": "2018-05-04",
    "theater": "博多座",
    "hero": "明日海 りお",
    "heroine": "仙名 彩世"
  },
  {
    "name": "ANOTHER WORLD, Killer Rouge",
    "trp": "star",
    "date": "2018-04-27",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里",
    "new_hero": "天華 えま",
    "new_heroine": "星蘭 ひとみ"
  },
  {
    "name": "義経妖狐夢幻桜",
    "trp": "snow",
    "date": "2018-03-29",
    "theater": "宝塚バウホール",
    "hero": "朝美 絢",
    "heroine": "星南 のぞみ"
  },
  {
    "name": "誠の群像, SUPER VOYAGER!",
    "trp": "snow",
    "date": "2018-03-23",
    "theater": "全国ツアー",
    "hero": "望海 風斗",
    "heroine": "真彩 希帆"
  },
  {
    "name": "天は赤い河のほとり, シトラスの風－Sunrise－",
    "trp": "cosmos",
    "date": "2018-03-16",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか",
    "new_hero": "鷹翔 千空",
    "new_heroine": "天彩 峰里"
  },
  {
    "name": "カンパニー -努力、情熱、そして仲間たち-, BADDY－悪党は月からやって来る－",
    "trp": "moon",
    "date": "2018-02-09",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "珠城 りょう",
    "heroine": "愛希 れいか",
    "new_hero": "風間 柚乃",
    "new_heroine": "美園 さくら"
  },
  {
    "name": "ドクトル・ジバゴ",
    "trp": "star",
    "date": "2018-02-04",
    "theater": "梅田芸術劇場シアター・ドラマシティ, TBS赤坂ACTシアター",
    "hero": "轟 悠",
    "heroine": "有沙 瞳"
  },
  {
    "name": "うたかたの恋, Bouquet de TAKARAZUKA",
    "trp": "star",
    "date": "2018-02-02",
    "theater": "中日劇場",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里"
  },
  {
    "name": "WEST SIDE STORY",
    "trp": "cosmos",
    "date": "2018-01-12",
    "theater": "東京国際フォーラムホールC",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか"
  },
  {
    "name": "不滅の棘",
    "trp": "cosmos",
    "date": "2018-01-07",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "愛月 ひかる",
    "heroine": "遥羽 らら"
  },
  {
    "name": "ポーの一族",
    "trp": "flower",
    "date": "2018-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "明日海 りお",
    "heroine": "仙名 彩世",
    "new_hero": "聖乃 あすか",
    "new_heroine": "城妃 美伶"
  },
  {
    "name": "Arkadia －アルカディア－",
    "trp": "moon",
    "date": "2017-12-01",
    "theater": "宝塚バウホール",
    "hero": "暁 千星",
    "heroine": "美園 さくら"
  },
  {
    "name": "鳳凰伝, CRYSTAL TAKARAZUKA－イメージの結晶－",
    "trp": "moon",
    "date": "2017-11-17",
    "theater": "全国ツアー",
    "hero": "珠城 りょう",
    "heroine": "愛希 れいか"
  },
  {
    "name": "ひかりふる路 〜革命家、マクシミリアン・ロベスピエール〜, SUPER VOYAGER!",
    "trp": "snow",
    "date": "2017-11-10",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "望海 風斗",
    "heroine": "真彩 希帆",
    "new_hero": "綾 凰華",
    "new_heroine": "潤 花"
  },
  {
    "name": "ハンナのお花屋さん —Hanna's Florist—",
    "trp": "flower",
    "date": "2017-10-09",
    "theater": "TBS赤坂ACTシアター",
    "hero": "明日海 りお",
    "heroine": "仙名 彩世"
  },
  {
    "name": "はいからさんが通る",
    "trp": "flower",
    "date": "2017-10-07",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "柚香 光",
    "heroine": "華 優希"
  },
  {
    "name": "ベルリン、わが愛, Bouquet de TAKARAZUKA",
    "trp": "star",
    "date": "2017-09-29",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里",
    "new_hero": "極美 慎",
    "new_heroine": "星蘭 ひとみ"
  },
  {
    "name": "CAPTAIN NEMO",
    "trp": "snow",
    "date": "2017-08-29",
    "theater": "日本青年館ホール, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "彩風 咲奈",
    "heroine": "彩 みちる"
  },
  {
    "name": "琥珀色の雨にぬれて, \"D\"ramatic S!",
    "trp": "snow",
    "date": "2017-08-25",
    "theater": "全国ツアー",
    "hero": "望海 風斗",
    "heroine": "真彩 希帆"
  },
  {
    "name": "神々の土地, クラシカル ビジュー",
    "trp": "cosmos",
    "date": "2017-08-18",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "朝夏 まなと",
    "new_hero": "瑠風 輝"
  },
  {
    "name": "オーム・シャンティ・オーム －恋する輪廻－",
    "trp": "star",
    "date": "2017-07-22",
    "theater": "梅田芸術劇場メインホール",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里"
  },
  {
    "name": "阿弖流為 -ATERUI-",
    "trp": "star",
    "date": "2017-07-15",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "礼 真琴",
    "heroine": "有沙 瞳"
  },
  {
    "name": "All for One ～ダルタニアンと太陽王～",
    "trp": "moon",
    "date": "2017-07-14",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "珠城 りょう",
    "heroine": "愛希 れいか",
    "new_hero": "蓮 つかさ",
    "new_heroine": "結愛 かれん"
  },
  {
    "name": "パーシャルタイムトラベル 時空の果てに",
    "trp": "cosmos",
    "date": "2017-06-09",
    "theater": "宝塚バウホール",
    "hero": "桜木 みなと",
    "heroine": "星風 まどか"
  },
  {
    "name": "A Motion",
    "trp": "cosmos",
    "date": "2017-06-06",
    "theater": "梅田芸術劇場メインホール, 文京シビックホール",
    "hero": "朝夏 まなと"
  },
  {
    "name": "邪馬台国の風, Santé!!",
    "trp": "flower",
    "date": "2017-06-02",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "明日海 りお",
    "heroine": "仙名 彩世",
    "new_hero": "飛龍 つかさ",
    "new_heroine": "華 優希"
  },
  {
    "name": "長崎しぐれ坂, カルーセル輪舞曲",
    "trp": "moon",
    "date": "2017-05-04",
    "theater": "博多座",
    "hero": "轟 悠",
    "heroine": "愛希 れいか"
  },
  {
    "name": "瑠璃色の刻",
    "trp": "moon",
    "date": "2017-04-29",
    "theater": "梅田芸術劇場シアター・ドラマシティ, TBS赤坂ACTシアター",
    "hero": "美弥 るりか",
    "heroine": "海乃 美月"
  },
  {
    "name": "幕末太陽傳, Dramatic \"S\"!",
    "trp": "snow",
    "date": "2017-04-21",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ",
    "new_hero": "永久輝 せあ",
    "new_heroine": "野々花 ひまり"
  },
  {
    "name": "仮面のロマネスク, EXCITER!!2017",
    "trp": "flower",
    "date": "2017-03-18",
    "theater": "全国ツアー",
    "hero": "明日海 りお",
    "heroine": "仙名 彩世"
  },
  {
    "name": "MY HERO",
    "trp": "flower",
    "date": "2017-03-16",
    "theater": "TBS赤坂ACTシアター, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "芹香 斗亜",
    "heroine": "朝月 希和, 音 くり寿"
  },
  {
    "name": "THE SCARLET PIMPERNEL",
    "trp": "star",
    "date": "2017-03-10",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里",
    "new_hero": "天華 えま",
    "new_heroine": "有沙 瞳"
  },
  {
    "name": "New Wave! －雪－",
    "trp": "snow",
    "date": "2017-02-09",
    "theater": "宝塚バウホール",
    "hero": "月城 かなと, 永久輝 せあ"
  },
  {
    "name": "星逢一夜, Greatest HITS！",
    "trp": "snow",
    "date": "2017-02-04",
    "theater": "中日劇場",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ"
  },
  {
    "name": "王妃の館 －Château de la Reine－, VIVA！ FESTA！",
    "trp": "cosmos",
    "date": "2017-02-03",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "朝夏 まなと",
    "heroine": "実咲 凜音",
    "new_hero": "留依 蒔世",
    "new_heroine": "遥羽 らら"
  },
  {
    "name": "燃ゆる風 －軍師・竹中半兵衛－",
    "trp": "star",
    "date": "2017-01-12",
    "theater": "宝塚バウホール",
    "hero": "七海 ひろき",
    "heroine": "真彩 希帆"
  },
  {
    "name": "オーム・シャンティ・オーム －恋する輪廻－",
    "trp": "star",
    "date": "2017-01-06",
    "theater": "東京国際フォーラムホールC, 梅田芸術劇場メインホール",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里"
  },
  {
    "name": "グランドホテル, カルーセル輪舞曲",
    "trp": "moon",
    "date": "2017-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "珠城 りょう",
    "heroine": "愛希 れいか",
    "new_hero": "夢奈 瑠音",
    "new_heroine": "海乃美月"
  },
  {
    "name": "双頭の鷲",
    "trp": "cosmos",
    "date": "2016-11-22",
    "theater": "宝塚バウホール",
    "hero": "轟 悠",
    "heroine": "実咲 凜音"
  },
  {
    "name": "バレンシアの熱い花, HOT EYES!!",
    "trp": "cosmos",
    "date": "2016-11-18",
    "theater": "全国ツアー",
    "hero": "朝夏 まなと",
    "heroine": "伶美 うらら"
  },
  {
    "name": "金色の砂漠, 雪華抄",
    "trp": "flower",
    "date": "2016-11-11",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "明日海 りお",
    "heroine": "花乃 まりあ",
    "new_hero": "綺城 ひか理",
    "new_heroine": "城妃 美伶"
  },
  {
    "name": "Bow Singing Workshop-月-, Bow Singing Workshop",
    "trp": "moon",
    "date": "2016-10-30",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "アーサー王伝説",
    "trp": "moon",
    "date": "2016-10-14",
    "theater": "文京シビックホール, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "珠城 りょう",
    "heroine": "愛希 れいか"
  },
  {
    "name": "FALSTAFF",
    "trp": "moon",
    "date": "2016-10-10",
    "theater": "宝塚バウホール",
    "hero": "星条 海斗",
    "heroine": "美園 さくら"
  },
  {
    "name": "私立探偵ケイレブ・ハント, Greatest HITS！",
    "trp": "snow",
    "date": "2016-10-07",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ",
    "new_hero": "永久輝 せあ",
    "new_heroine": "星南 のぞみ"
  },
  {
    "name": "アイラブアインシュタイン",
    "trp": "flower",
    "date": "2016-09-15",
    "theater": "宝塚バウホール",
    "hero": "瀬戸 かずや",
    "heroine": "桜咲 彩花, 城妃 美伶"
  },
  {
    "name": "仮面のロマネスク, Melodia　－熱く美しき旋律－",
    "trp": "flower",
    "date": "2016-09-02",
    "theater": "全国ツアー",
    "hero": "明日海 りお",
    "heroine": "花乃 まりあ"
  },
  {
    "name": "桜華に舞え, ロマンス！！",
    "trp": "star",
    "date": "2016-08-26",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "北翔 海莉",
    "heroine": "妃海 風",
    "new_hero": "天華 えま",
    "new_heroine": "小桜 ほのか"
  },
  {
    "name": "Bow Singing Workshop-花-, Bow Singing Workshop",
    "trp": "flower",
    "date": "2016-08-11",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "Bow Singing Workshop-雪-",
    "trp": "snow",
    "date": "2016-07-28",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "エリザベート－愛と死の輪舞－",
    "trp": "cosmos",
    "date": "2016-07-22",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "朝夏 まなと",
    "heroine": "実咲 凜音",
    "new_hero": "瑠風 輝",
    "new_heroine": "星風 まどか"
  },
  {
    "name": "One Voice",
    "trp": "star",
    "date": "2016-07-03",
    "theater": "宝塚バウホール",
    "hero": "北翔 海莉"
  },
  {
    "name": "Bow Singing Workshop-星-",
    "trp": "star",
    "date": "2016-06-26",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "ドン・ジュアン",
    "trp": "snow",
    "date": "2016-06-18",
    "theater": "KAAT神奈川芸術劇場, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "望海 風斗",
    "heroine": "彩 みちる"
  },
  {
    "name": "ローマの休日",
    "trp": "snow",
    "date": "2016-06-14",
    "theater": "中日劇場, TBS赤坂ACTシアター",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ"
  },
  {
    "name": "NOBUNAGA＜信長＞ －下天の夢－, Forever　LOVE!!",
    "trp": "moon",
    "date": "2016-06-10",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか",
    "new_hero": "暁 千星",
    "new_heroine": "紫乃 小雪"
  },
  {
    "name": "Bow Singing Workshop-宙-",
    "trp": "cosmos",
    "date": "2016-06-02",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "王家に捧ぐ歌",
    "trp": "cosmos",
    "date": "2016-05-05",
    "theater": "博多座",
    "hero": "朝夏 まなと",
    "heroine": "実咲 凛音"
  },
  {
    "name": "ヴァンパイア・サクセション",
    "trp": "cosmos",
    "date": "2016-05-03",
    "theater": "梅田芸術劇場シアター・ドラマシティ, KAAT神奈川芸術劇場",
    "hero": "真風 涼帆",
    "heroine": "星風 まどか"
  },
  {
    "name": "ME AND MY GIRL",
    "trp": "flower",
    "date": "2016-04-29",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "明日海 りお",
    "heroine": "花乃 まりあ",
    "new_hero": "優波 慧, 綺城 ひか理",
    "new_heroine": "城妃 美伶, 音 くり寿"
  },
  {
    "name": "Voice",
    "trp": "moon",
    "date": "2016-03-26",
    "theater": "赤坂ACTシアター, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "龍 真咲"
  },
  {
    "name": "激情, Apasionado!!III",
    "trp": "moon",
    "date": "2016-03-19",
    "theater": "全国ツアー",
    "hero": "珠城 りょう",
    "heroine": "愛希 れいか"
  },
  {
    "name": "こうもり, THE ENTERTAINER！",
    "trp": "star",
    "date": "2016-03-18",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "北翔 海莉",
    "heroine": "妃海 風",
    "new_hero": "紫藤 りゅう",
    "new_heroine": "真彩 希帆"
  },
  {
    "name": "For the people —リンカーン 自由を求めた男—",
    "trp": "flower",
    "date": "2016-02-13",
    "theater": "梅田芸術劇場シアター・ドラマシティ, KAAT神奈川芸術劇場",
    "hero": "轟 悠",
    "heroine": "仙名 彩世"
  },
  {
    "name": "るろうに剣心",
    "trp": "snow",
    "date": "2016-02-05",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ",
    "new_hero": "永久輝 せあ",
    "new_heroine": "彩 みちる"
  },
  {
    "name": "Ernest in Love",
    "trp": "flower",
    "date": "2016-02-03",
    "theater": "梅田芸術劇場メインホール, 中日劇場",
    "hero": "明日海 りお",
    "heroine": "花乃 まりあ"
  },
  {
    "name": "鈴蘭　—思い出の淵から見えるものは—",
    "trp": "star",
    "date": "2016-01-21",
    "theater": "宝塚バウホール",
    "hero": "礼 真琴",
    "heroine": "真彩 希帆"
  },
  {
    "name": "LOVE & DREAM",
    "trp": "star",
    "date": "2016-01-06",
    "theater": "東京国際フォーラムホールC, 梅田芸術劇場メインホール",
    "hero": "北翔 海莉",
    "heroine": "妃海 風"
  },
  {
    "name": "Shakespeare 〜空に満つるは、尽きせぬ言の葉〜, HOT EYES!!",
    "trp": "cosmos",
    "date": "2016-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "朝夏 まなと",
    "heroine": "実咲 凜音",
    "new_hero": "瑠風 輝",
    "new_heroine": "遥羽 らら"
  },
  {
    "name": "哀しみのコルドバ, La Esmeralda",
    "trp": "snow",
    "date": "2015-11-21",
    "theater": "全国ツアー",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ"
  },
  {
    "name": "銀二貫",
    "trp": "snow",
    "date": "2015-11-19",
    "theater": "宝塚バウホール",
    "hero": "月城 かなと",
    "heroine": "有沙 瞳"
  },
  {
    "name": "舞音-MANON-, GOLDEN JAZZ",
    "trp": "moon",
    "date": "2015-11-13",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか",
    "new_hero": "朝美 絢",
    "new_heroine": "叶羽 時"
  },
  {
    "name": "相続人の肖像",
    "trp": "cosmos",
    "date": "2015-10-15",
    "theater": "宝塚バウホール",
    "hero": "桜木 みなと",
    "heroine": "星風 まどか"
  },
  {
    "name": "メランコリック・ジゴロ, シトラスの風III",
    "trp": "cosmos",
    "date": "2015-10-10",
    "theater": "全国ツアー",
    "hero": "朝夏 まなと",
    "heroine": "実咲 凜音"
  },
  {
    "name": "新源氏物語, Melodia　－熱く美しき旋律－",
    "trp": "flower",
    "date": "2015-10-02",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "明日海 りお",
    "heroine": "花乃 まりあ",
    "new_hero": "柚香 光",
    "new_heroine": "朝月 希和"
  },
  {
    "name": "DRAGON NIGHT!!",
    "trp": "moon",
    "date": "2015-09-01",
    "theater": "梅田芸術劇場シアター・ドラマシティ",
    "hero": "龍 真咲"
  },
  {
    "name": "A－EN",
    "trp": "moon",
    "date": "2015-08-29",
    "theater": "宝塚バウホール",
    "hero": "朝美 絢, 暁 千星",
    "heroine": "紫乃 小雪, 美園 さくら"
  },
  {
    "name": "ガイズ＆ドールズ",
    "trp": "star",
    "date": "2015-08-21",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "北翔 海莉",
    "heroine": "妃海 風",
    "new_hero": "瀬央 ゆりあ",
    "new_heroine": "綺咲 愛里"
  },
  {
    "name": "スターダム",
    "trp": "flower",
    "date": "2015-07-24",
    "theater": "宝塚バウホール",
    "hero": "鳳月 杏"
  },
  {
    "name": "星逢一夜, La Esmeralda",
    "trp": "snow",
    "date": "2015-07-17",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ",
    "new_hero": "月城 かなと",
    "new_heroine": "彩 みちる"
  },
  {
    "name": "ベルサイユのばら—フェルゼンとマリー・アントワネット編—, 宝塚幻想曲",
    "trp": "flower",
    "date": "2015-07-10",
    "theater": "梅田芸術劇場メインホール, 台湾国家戯劇院",
    "hero": "明日海 りお",
    "heroine": "花乃 まりあ"
  },
  {
    "name": "キャッチ・ミー・イフ・ユー・キャン",
    "trp": "star",
    "date": "2015-06-17",
    "theater": "TBS赤坂ACTシアター, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "紅 ゆずる",
    "heroine": "綺咲 愛里"
  },
  {
    "name": "大海賊, Amour それは･･･",
    "trp": "star",
    "date": "2015-06-12",
    "theater": "全国ツアー",
    "hero": "北翔 海莉",
    "heroine": "妃海 風"
  },
  {
    "name": "王家に捧ぐ歌",
    "trp": "cosmos",
    "date": "2015-06-05",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "朝夏 まなと",
    "heroine": "実咲 凜音",
    "new_hero": "桜木 みなと",
    "new_heroine": "星風 まどか"
  },
  {
    "name": "アル・カポネ　—スカーフェイスに秘められた真実—",
    "trp": "snow",
    "date": "2015-05-09",
    "theater": "梅田芸術劇場シアター・ドラマシティ, TBS赤坂ACTシアター",
    "hero": "望海 風斗",
    "heroine": "大湖 せしる"
  },
  {
    "name": "星影の人, ファンシー・ガイ！",
    "trp": "snow",
    "date": "2015-05-02",
    "theater": "博多座",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ"
  },
  {
    "name": "1789　－バスティーユの恋人たち－",
    "trp": "moon",
    "date": "2015-04-24",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか",
    "new_hero": "暁 千星",
    "new_heroine": "美園 さくら"
  },
  {
    "name": "New Wave! －宙－",
    "trp": "cosmos",
    "date": "2015-04-02",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "TOP HAT",
    "trp": "cosmos",
    "date": "2015-03-25",
    "theater": "梅田芸術劇場メインホール, TBS赤坂ACTシアター",
    "hero": "朝夏 まなと",
    "heroine": "実咲 凜音"
  },
  {
    "name": "カリスタの海に抱かれて, 宝塚幻想曲",
    "trp": "flower",
    "date": "2015-03-13",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "明日海 りお",
    "heroine": "花乃 まりあ",
    "new_hero": "水美 舞斗",
    "new_heroine": "城妃 美伶"
  },
  {
    "name": "黒豹の如く, Dear DIAMOND!!",
    "trp": "star",
    "date": "2015-02-06",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "礼 真琴",
    "new_heroine": "綺咲 愛里"
  },
  {
    "name": "風と共に去りぬ",
    "trp": "moon",
    "date": "2015-02-07",
    "theater": "中日劇場",
    "hero": "轟 悠",
    "heroine": "龍 真咲"
  },
  {
    "name": "Bandito －義賊 サルヴァトーレ・ジュリアーノ－",
    "trp": "moon",
    "date": "2015-01-30",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "珠城 りょう",
    "heroine": "早乙女 わかば"
  },
  {
    "name": "Ernest in Love",
    "trp": "flower",
    "date": "2015-01-07",
    "theater": "東京国際フォーラムホールC",
    "hero": "明日海 りお",
    "heroine": "花乃 まりあ"
  },
  {
    "name": "風の次郎吉 －大江戸夜飛翔－",
    "trp": "flower",
    "date": "2015-01-04",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "北翔 海莉",
    "heroine": "仙名 彩世, 桜咲 彩花"
  },
  {
    "name": "ルパン三世　—王妃の首飾りを追え！—, ファンシー・ガイ！",
    "trp": "snow",
    "date": "2015-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ",
    "new_hero": "永久輝 せあ",
    "new_heroine": "星南 のぞみ"
  },
  {
    "name": "アルカサル ～王城～",
    "trp": "star",
    "date": "2014-12-04",
    "theater": "宝塚バウホール",
    "hero": "十碧 れいや, 麻央 侑希",
    "heroine": "妃海 風"
  },
  {
    "name": "REON in BUDOKAN～LEGEND～",
    "trp": "star",
    "date": "2014-11-22",
    "theater": "日本武道館",
    "hero": "柚希 礼音"
  },
  {
    "name": "風と共に去りぬ",
    "trp": "star",
    "date": "2014-11-14",
    "theater": "全国ツアー",
    "hero": "紅 ゆずる",
    "heroine": "礼 真琴"
  },
  {
    "name": "白夜の誓い —グスタフIII世、誇り高き王の戦い—, PHOENIX 宝塚!! —蘇る愛—",
    "trp": "cosmos",
    "date": "2014-11-07",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "凰稀 かなめ",
    "heroine": "実咲 凜音",
    "new_hero": "桜木 みなと",
    "new_heroine": "伶美 うらら"
  },
  {
    "name": "パルムの僧院 —美しき愛の囚人—",
    "trp": "snow",
    "date": "2014-10-23",
    "theater": "宝塚バウホール",
    "hero": "彩風 咲奈",
    "heroine": "大湖 せしる, 星乃 あんり"
  },
  {
    "name": "伯爵令嬢",
    "trp": "snow",
    "date": "2014-10-11",
    "theater": "日生劇場",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ"
  },
  {
    "name": "PUCK, CRYSTAL TAKARAZUKA－イメージの結晶－",
    "trp": "moon",
    "date": "2014-09-26",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか",
    "new_hero": "朝美 絢",
    "new_heroine": "海乃 美月"
  },
  {
    "name": "SANCTUARY",
    "trp": "cosmos",
    "date": "2014-09-06",
    "theater": "宝塚バウホール",
    "hero": "愛月 ひかる",
    "heroine": "伶美 うらら"
  },
  {
    "name": "ベルサイユのばら—フェルゼンとマリー・アントワネット編—",
    "trp": "cosmos",
    "date": "2014-08-29",
    "theater": "全国ツアー",
    "hero": "朝夏 まなと",
    "heroine": "実咲 凛音"
  },
  {
    "name": "エリザベート－愛と死の輪舞－",
    "trp": "flower",
    "date": "2014-08-22",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "明日海 りお",
    "heroine": "蘭乃 はな",
    "new_hero": "柚香 光",
    "new_heroine": "花乃 まりあ"
  },
  {
    "name": "THE KINGDOM",
    "trp": "moon",
    "date": "2014-07-23",
    "theater": "日本青年館ホール, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "凪七 瑠海, 美弥 るりか",
    "heroine": "早乙女 わかば, 海乃 美月"
  },
  {
    "name": "The Lost Glory —美しき幻影—, パッショネイト宝塚！",
    "trp": "star",
    "date": "2014-07-18",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "麻央 侑希",
    "new_heroine": "綺咲 愛里"
  },
  {
    "name": "宝塚をどり, 明日への指針 －センチュリー号の航海日誌－, TAKARAZUKA 花詩集100!!",
    "trp": "moon",
    "date": "2014-07-12",
    "theater": "博多座",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか"
  },
  {
    "name": "ノクターン －遠い夏の日の記憶－",
    "trp": "flower",
    "date": "2014-06-21",
    "theater": "宝塚バウホール",
    "hero": "柚香 光",
    "heroine": "華耀 きらり"
  },
  {
    "name": "ベルサイユのばら—フェルゼンとマリー・アントワネット編—",
    "trp": "flower",
    "date": "2014-06-12",
    "theater": "中日劇場",
    "hero": "明日海 りお",
    "heroine": "蘭乃 はな"
  },
  {
    "name": "一夢庵風流記 前田慶次, My Dream TAKARAZUKA",
    "trp": "snow",
    "date": "2014-06-06",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "壮 一帆",
    "heroine": "愛加 あゆ",
    "new_hero": "月城 かなと",
    "new_heroine": "有沙 瞳"
  },
  {
    "name": "かもめ",
    "trp": "star",
    "date": "2014-05-22",
    "theater": "宝塚バウホール",
    "hero": "礼 真琴",
    "heroine": "城妃 美伶"
  },
  {
    "name": "太陽王 ～ル・ロワ・ソレイユ～",
    "trp": "star",
    "date": "2014-05-17",
    "theater": "東急シアターオーブ",
    "hero": "柚希 礼音"
  },
  {
    "name": "ベルサイユのばら—オスカル編—",
    "trp": "cosmos",
    "date": "2014-05-02",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "凰稀 かなめ",
    "heroine": "実咲 凜音",
    "new_hero": "和希 そら",
    "new_heroine": "伶美 うらら"
  },
  {
    "name": "明日への指針 －センチュリー号の航海日誌－, TAKARAZUKA 花詩集100!!, 宝塚をどり",
    "trp": "moon",
    "date": "2014-03-21",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか",
    "new_hero": "珠城 りょう, 暁 千星",
    "new_heroine": "海乃 美月"
  },
  {
    "name": "心中・恋の大和路",
    "trp": "snow",
    "date": "2014-03-14",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "壮 一帆",
    "heroine": "愛加 あゆ"
  },
  {
    "name": "ベルサイユのばら－オスカルとアンドレ編－",
    "trp": "snow",
    "date": "2014-03-07",
    "theater": "全国ツアー",
    "hero": "早霧 せいな",
    "heroine": "咲妃 みゆ"
  },
  {
    "name": "翼ある人びと—ブラームスとクララ・シューマン—",
    "trp": "cosmos",
    "date": "2014-02-08",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館ホール",
    "hero": "朝夏 まなと",
    "heroine": "伶美 うらら"
  },
  {
    "name": "ラスト・タイクーン —ハリウッドの帝王、不滅の愛—, TAKARAZUKA ∞ 夢眩",
    "trp": "flower",
    "date": "2014-02-07",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "蘭寿 とむ",
    "heroine": "蘭乃 はな",
    "new_hero": "柚香 光",
    "new_heroine": "華雅 りりか"
  },
  {
    "name": "ロバート・キャパ 魂の記録, シトラスの風II",
    "trp": "cosmos",
    "date": "2014-02-04",
    "theater": "中日劇場",
    "hero": "凰稀 かなめ",
    "heroine": "実咲 凜音"
  },
  {
    "name": "New Wave! －月－",
    "trp": "moon",
    "date": "2014-01-18",
    "theater": "宝塚バウホール",
    "hero": null
  },
  {
    "name": "風と共に去りぬ",
    "trp": "moon",
    "date": "2014-01-11",
    "theater": "梅田芸術劇場メインホール",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか"
  },
  {
    "name": "眠らない男・ナポレオン —愛と栄光の涯に—",
    "trp": "star",
    "date": "2014-01-01",
    "theater": "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "礼 真琴",
    "new_heroine": "妃海 風"
  },
  {
    "name": "月雲の皇子",
    "trp": "moon",
    "date": "2013-12-17",
    "theater": "天王洲銀河劇場",
    "hero": "珠城 りょう",
    "heroine": "咲妃 みゆ"
  },
  {
    "name": "New Wave! −花−",
    "trp": "flower",
    "date": "2013-12-12",
    "theater": "宝塚バウホール"
  },
  {
    "name": "THE MERRY WIDOW",
    "trp": "moon",
    "date": "2013-11-23",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "北翔 海莉",
    "heroine": "咲妃 みゆ"
  },
  {
    "name": "JIN−仁−, Fantastic Energy!",
    "trp": "moon",
    "date": "2013-11-15",
    "theater": "全国ツアー",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか"
  },
  {
    "name": "Shall we ダンス?, CONGRATULATIONS 宝塚!!",
    "trp": "snow",
    "date": "2013-11-08",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "壮 一帆",
    "heroine": "愛加 あゆ",
    "new_hero": "月城 かなと",
    "new_heroine": "夢華 あみ"
  },
  {
    "name": "日のあたる方へ　―私という名の他者―",
    "trp": "star",
    "date": "2013-10-07",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "真風 涼帆",
    "heroine": "妃海 風"
  },
  {
    "name": "第二章",
    "trp": "special",
    "date": "2013-10-03",
    "theater": "宝塚バウホール",
    "hero": "轟 悠",
    "heroine": "夢咲 ねね"
  },
  {
    "name": "風と共に去りぬ",
    "trp": "cosmos",
    "date": "2013-09-27",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "凰稀 かなめ",
    "heroine": "実咲 凛音",
    "new_hero": "蒼羽 りく",
    "new_heroine": "花乃 まりあ"
  },
  {
    "name": "REON!!II",
    "trp": "star",
    "date": "2013-09-27",
    "theater": "東京国際フォーラムホールC, 博多座",
    "hero": "柚希 礼音"
  },
  {
    "name": "春雷",
    "trp": "snow",
    "date": "2013-08-29",
    "theater": "宝塚バウホール",
    "hero": "彩凪 翔",
    "heroine": "大湖 せしる"
  },
  {
    "name": "若き日の唄は忘れじ, ナルシス・ノアールⅡ",
    "trp": "snow",
    "date": "2013-08-23",
    "theater": "全国ツアー",
    "hero": "壮 一帆",
    "heroine": "愛加 あゆ"
  },
  {
    "name": "愛と革命の詩 −アンドレア・シェニエ−, Mr. Swing!",
    "trp": "flower",
    "date": "2013-08-16",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "蘭寿 とむ",
    "heroine": "蘭乃 はな",
    "new_hero": "芹香 斗亜",
    "new_heroine": "朝月 希和"
  },
  {
    "name": "the WILD Meets the WILD",
    "trp": "cosmos",
    "date": "2013-07-25",
    "theater": "宝塚バウホール",
    "hero": "蓮水 ゆうや, 七海 ひろき",
    "heroine": "花乃 まりあ"
  },
  {
    "name": "うたかたの恋, Amour de 99!! －99年の愛－",
    "trp": "cosmos",
    "date": "2013-07-19",
    "theater": "全国ツアー",
    "hero": "凰稀 かなめ",
    "heroine": "実咲 凛音"
  },
  {
    "name": "ルパン −ARSÈNE LUPIN−, Fantastic Energy!",
    "trp": "moon",
    "date": "2013-07-12",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか",
    "new_hero": "珠城 りょう",
    "new_heroine": "咲妃 みゆ"
  },
  {
    "name": "戦国BASARA −真田幸村編−",
    "trp": "flower",
    "date": "2013-06-15",
    "theater": "東急シアターオーブ",
    "hero": "蘭寿 とむ",
    "heroine": "蘭乃 はな"
  },
  {
    "name": "フォーエバー・ガーシュイン −五線譜に描く夢−",
    "trp": "flower",
    "date": "2013-06-07",
    "theater": "宝塚バウホール",
    "hero": "芹香 斗亜",
    "heroine": "仙名 彩世"
  },
  {
    "name": "ロミオとジュリエット",
    "trp": "star",
    "date": "2013-05-31",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "礼 真琴",
    "new_heroine": "城妃 美伶"
  },
  {
    "name": "ME AND MY GIRL",
    "trp": "moon",
    "date": "2013-05-04",
    "theater": "梅田芸術劇場メインホール",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか"
  },
  {
    "name": "月雲の皇子",
    "trp": "moon",
    "date": "2013-05-02",
    "theater": "宝塚バウホール",
    "hero": "珠城 りょう",
    "heroine": "咲妃 みゆ"
  },
  {
    "name": "ベルサイユのばら −フェルゼン編−",
    "trp": "snow",
    "date": "2013-04-19",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "壮 一帆",
    "heroine": "愛加 あゆ",
    "new_hero": "彩風 咲奈",
    "new_heroine": "夢華 あみ"
  },
  {
    "name": "南太平洋",
    "trp": "star",
    "date": "2013-03-19",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "轟 悠",
    "heroine": "妃海 風"
  },
  {
    "name": "モンテ・クリスト伯, Amour de 99!! －99年の愛－",
    "trp": "cosmos",
    "date": "2013-03-15",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "凰稀 かなめ",
    "heroine": "実咲 凛音",
    "new_hero": "愛月 ひかる",
    "new_heroine": "花乃 まりあ"
  },
  {
    "name": "怪盗楚留香外伝－花盗人－, 宝塚ジャポニズム〜序破急〜, Étoile de TAKARAZUKA",
    "trp": "star",
    "date": "2013-03-08",
    "theater": "中日劇場, 台北国家戯劇院",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね"
  },
  {
    "name": "ブラック・ジャック　許されざる者への挽歌",
    "trp": "snow",
    "date": "2013-02-09",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "未涼 亜希"
  },
  {
    "name": "オーシャンズ11",
    "trp": "flower",
    "date": "2013-02-08",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "蘭寿 とむ",
    "heroine": "蘭乃 はな",
    "new_hero": "芹香 斗亜",
    "new_heroine": "桜咲 彩花"
  },
  {
    "name": "若き日の唄は忘れじ, Shining Rhythm! －新たなる誕生－",
    "trp": "snow",
    "date": "2013-02-05",
    "theater": "中日劇場",
    "hero": "壮 一帆",
    "heroine": "愛加 あゆ"
  },
  {
    "name": "逆転裁判3　検事マイルズ･エッジワース",
    "trp": "cosmos",
    "date": "2013-01-09",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "悠未 ひろ",
    "heroine": "すみれ乃 麗"
  },
  {
    "name": "銀河英雄伝説＠TAKARAZUKA",
    "trp": "cosmos",
    "date": "2013-01-05",
    "theater": "博多座",
    "hero": "凰稀 かなめ",
    "heroine": "実咲 凛音"
  },
  {
    "name": "ベルサイユのばら −オスカルとアンドレ編−",
    "trp": "moon",
    "date": "2013-01-01",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "龍 真咲, 明日海 りお",
    "heroine": "愛希 れいか",
    "new_hero": "煌月 爽矢"
  },
  {
    "name": "おかしな二人 −THE ODD COUPLE by Neil Simon−",
    "trp": "special",
    "date": "2012-12-07",
    "theater": "日本青年館大ホール",
    "hero": "轟 悠, 華形 ひかる"
  },
  {
    "name": "Streak of Light −一筋の光…−",
    "trp": "flower",
    "date": "2012-11-22",
    "theater": "日本青年館大ホール, 梅田芸術劇場シアター・ドラマシティ",
    "hero": "蘭寿 とむ",
    "heroine": "蘭乃 はな"
  },
  {
    "name": "めぐり会いは再び2nd, 宝塚ジャポニズム〜序破急〜, Étoile de TAKARAZUKA",
    "trp": "star",
    "date": "2012-11-16",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "十碧 れいや",
    "new_heroine": "妃海 風"
  },
  {
    "name": "Victorian Jazz",
    "trp": "flower",
    "date": "2012-11-15",
    "theater": "宝塚バウホール",
    "hero": "望海 風斗",
    "heroine": "桜咲 彩花"
  },
  {
    "name": "愛するには短すぎる, Heat on Beat!",
    "trp": "moon",
    "date": "2012-10-20",
    "theater": "全国ツアー",
    "hero": "龍 真咲",
    "heroine": "愛希 れいか"
  },
  {
    "name": "JIN−仁−, GOLD SPARK！－この一瞬を永遠に―",
    "trp": "snow",
    "date": "2012-10-12",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "音月 桂",
    "heroine": "舞羽 美海",
    "new_hero": "彩風 咲奈",
    "new_heroine": "透水 さらさ"
  },
  {
    "name": "春の雪",
    "trp": "moon",
    "date": "2012-10-11",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "明日海 りお",
    "heroine": "咲妃 みゆ"
  },
  {
    "name": "琥珀色の雨にぬれて, Celebrity －セレブリティー",
    "trp": "star",
    "date": "2012-09-08",
    "theater": "全国ツアー",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね"
  },
  {
    "name": "ジャン・ルイ・ファージョン −王妃の調香師−",
    "trp": "star",
    "date": "2012-09-06",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "紅 ゆずる",
    "heroine": "早乙女 わかば"
  },
  {
    "name": "銀河英雄伝説＠TAKARAZUKA",
    "trp": "cosmos",
    "date": "2012-08-31",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "凰稀 かなめ",
    "heroine": "実咲 凛音",
    "new_hero": "蒼羽 りく",
    "new_heroine": "花乃 まりあ"
  },
  {
    "name": "サン＝テグジュペリ −星の王子さまになった操縦士−, CONGA!!",
    "trp": "flower",
    "date": "2012-07-27",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "蘭寿 とむ",
    "heroine": "蘭乃 はな",
    "new_hero": "芹香 斗亜",
    "new_heroine": "春妃 うらら"
  },
  {
    "name": "双曲線上のカルテ",
    "trp": "snow",
    "date": "2012-07-19",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "早霧 せいな",
    "heroine": "星乃 あんり"
  },
  {
    "name": "フットルース",
    "trp": "snow",
    "date": "2012-07-07",
    "theater": "梅田芸術劇場メインホール, 博多座",
    "hero": "音月 桂",
    "heroine": "舞羽 美海"
  },
  {
    "name": "ロミオとジュリエット",
    "trp": "moon",
    "date": "2012-06-22",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "龍 真咲, 明日海 りお",
    "heroine": "愛希 れいか",
    "new_hero": "珠城 りょう",
    "new_heroine": "咲妃 みゆ"
  },
  {
    "name": "ダンサ　セレナータ, Celebrity －セレブリティー",
    "trp": "star",
    "date": "2012-05-18",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "真風 涼帆",
    "new_heroine": "早乙女 わかば"
  },
  {
    "name": "近松・恋の道行",
    "trp": "flower",
    "date": "2012-05-03",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "愛音 羽麗",
    "heroine": "実咲 凛音"
  },
  {
    "name": "長い春の果てに, カノン －Our Melody－",
    "trp": "flower",
    "date": "2012-04-28",
    "theater": "全国ツアー",
    "hero": "蘭寿 とむ",
    "heroine": "蘭乃 はな"
  },
  {
    "name": "華やかなりし日々, クライマックス －Cry - Max－",
    "trp": "cosmos",
    "date": "2012-04-13",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花",
    "new_hero": "愛月 ひかる",
    "new_heroine": "伶美 うらら"
  },
  {
    "name": "ドン・カルロス, Shining Rhythm!",
    "trp": "snow",
    "date": "2012-03-09",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "音月 桂",
    "heroine": "舞羽 美海",
    "new_hero": "彩凪 翔",
    "new_heroine": "星乃 あんり"
  },
  {
    "name": "REON!!",
    "trp": "star",
    "date": "2012-03-08",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "柚希 礼音"
  },
  {
    "name": "天使のはしご",
    "trp": "star",
    "date": "2012-03-07",
    "theater": "日本青年館大ホール, 宝塚バウホール",
    "hero": "涼 紫央",
    "heroine": "音波 みのり"
  },
  {
    "name": "エドワード8世−王冠を賭けた恋−, Misty Station －霧の終着駅－",
    "trp": "moon",
    "date": "2012-02-03",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "霧矢 大夢",
    "heroine": "蒼乃 夕妃",
    "new_hero": "珠城 りょう",
    "new_heroine": "愛希 れいか"
  },
  {
    "name": "仮面のロマネスク, Apasionado!!Ⅱ",
    "trp": "cosmos",
    "date": "2012-02-01",
    "theater": "中日劇場",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花"
  },
  {
    "name": "ロバート・キャパ　魂の記録",
    "trp": "cosmos",
    "date": "2012-01-27",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "凰稀 かなめ",
    "heroine": "伶美 うらら"
  },
  {
    "name": "インフィニティ −限りなき世界−",
    "trp": "snow",
    "date": "2012-01-05",
    "theater": "宝塚バウホール",
    "hero": "未涼 亜希"
  },
  {
    "name": "復活 −恋が終わり、愛が残った−, カノン －Our Melody－",
    "trp": "flower",
    "date": "2012-01-01",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "蘭寿 とむ",
    "heroine": "蘭乃 はな",
    "new_hero": "鳳 真由",
    "new_heroine": "実咲 凛音"
  },
  {
    "name": "Samourai",
    "trp": "snow",
    "date": "2011-12-23",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "音月 桂",
    "heroine": "舞羽 美海"
  },
  {
    "name": "我が愛は山の彼方に, Dance Romanesque",
    "trp": "moon",
    "date": "2011-11-19",
    "theater": "全国ツアー",
    "hero": "霧矢 大夢",
    "heroine": "蒼乃 夕妃"
  },
  {
    "name": "アリスの恋人",
    "trp": "moon",
    "date": "2011-11-17",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "明日海 りお",
    "heroine": "愛希 れいか"
  },
  {
    "name": "オーシャンズ11",
    "trp": "star",
    "date": "2011-11-11",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "真風 涼帆",
    "new_heroine": "音波 みのり"
  },
  {
    "name": "カナリア",
    "trp": "flower",
    "date": "2011-10-18",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "壮 一帆",
    "heroine": "実咲 凛音"
  },
  {
    "name": "小さな花がひらいた, ル・ポァゾン 愛の媚薬Ⅱ",
    "trp": "flower",
    "date": "2011-10-15",
    "theater": "全国ツアー",
    "hero": "蘭寿 とむ",
    "heroine": "蘭乃 はな"
  },
  {
    "name": "クラシコ・イタリアーノ, NICE GUY!!",
    "trp": "cosmos",
    "date": "2011-10-07",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花",
    "new_hero": "澄輝 さやと",
    "new_heroine": "伶美 うらら"
  },
  {
    "name": "おかしな二人",
    "trp": "special",
    "date": "2011-09-15",
    "theater": "宝塚バウホール",
    "hero": "轟 悠, 未沙 のえる"
  },
  {
    "name": "仮面の男, ROYAL STRAIGHT FLUSH!!",
    "trp": "snow",
    "date": "2011-09-02",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "音月 桂",
    "heroine": "舞羽 美海",
    "new_hero": "彩凪 翔",
    "new_heroine": "星乃 あんり"
  },
  {
    "name": "ランスロット",
    "trp": "star",
    "date": "2011-08-26",
    "theater": "宝塚バウホール",
    "hero": "真風 涼帆",
    "heroine": "早乙女 わかば"
  },
  {
    "name": "ヴァレンチノ",
    "trp": "cosmos",
    "date": "2011-08-13",
    "theater": "日本青年館大ホール",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花"
  },
  {
    "name": "ノバ･ボサ･ノバ, めぐり会いは再び",
    "trp": "star",
    "date": "2011-08-01",
    "theater": "博多座, 中日劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね"
  },
  {
    "name": "アルジェの男, Dance Romanesque",
    "trp": "moon",
    "date": "2011-07-29",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "霧矢 大夢",
    "heroine": "蒼乃 夕妃",
    "new_hero": "紫門 ゆりや",
    "new_heroine": "愛希 れいか"
  },
  {
    "name": "灼熱の彼方",
    "trp": "snow",
    "date": "2011-07-07",
    "theater": "宝塚バウホール",
    "hero": "彩凪 翔, 彩風 咲奈",
    "heroine": "星乃 あんり, 夢華 あみ"
  },
  {
    "name": "ハウ・トゥー・サクシード",
    "trp": "snow",
    "date": "2011-07-01",
    "theater": "梅田芸術劇場メインホール",
    "hero": "音月 桂",
    "heroine": "舞羽 美海"
  },
  {
    "name": "ファントム",
    "trp": "flower",
    "date": "2011-06-24",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "蘭寿 とむ",
    "heroine": "蘭乃 はな",
    "new_hero": "鳳 真由",
    "new_heroine": "実咲 凛音"
  },
  {
    "name": "美しき生涯, ルナロッサ",
    "trp": "cosmos",
    "date": "2011-05-20",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花",
    "new_hero": "愛月 ひかる",
    "new_heroine": "瀬音 リサ"
  },
  {
    "name": "ニジンスキー",
    "trp": "snow",
    "date": "2011-04-28",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "早霧 せいな",
    "heroine": "愛加 あゆ"
  },
  {
    "name": "黒い瞳, ロック・オン！",
    "trp": "snow",
    "date": "2011-04-23",
    "theater": "全国ツアー",
    "hero": "音月 桂",
    "heroine": "舞羽 美海"
  },
  {
    "name": "ノバ･ボサ･ノバ, めぐり会いは再び",
    "trp": "star",
    "date": "2011-04-15",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "麻央 侑希",
    "new_heroine": "早乙女 わかば"
  },
  {
    "name": "バラの国の王子, ONE",
    "trp": "moon",
    "date": "2011-03-11",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "霧矢 大夢",
    "heroine": "蒼乃 夕妃",
    "new_hero": "煌月 爽矢",
    "new_heroine": "愛風 ゆめ"
  },
  {
    "name": "ヴァレンチノ",
    "trp": "cosmos",
    "date": "2011-03-08",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花"
  },
  {
    "name": "記者と皇帝",
    "trp": "cosmos",
    "date": "2011-03-04",
    "theater": "日本青年館大ホール, 宝塚バウホール",
    "hero": "北翔 海莉",
    "heroine": "すみれ乃 麗"
  },
  {
    "name": "愛のプレリュード, La Paradis!!",
    "trp": "flower",
    "date": "2011-02-04",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "真飛 聖",
    "heroine": "蘭乃 はな",
    "new_hero": "大河 凛",
    "new_heroine": "桜咲 彩花"
  },
  {
    "name": "愛するには短すぎる, ル・ポァゾン 愛の媚薬Ⅱ",
    "trp": "star",
    "date": "2011-02-01",
    "theater": "中日劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね"
  },
  {
    "name": "メイちゃんの執事−私の命に代えてお守りします−",
    "trp": "star",
    "date": "2011-01-29",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "紅 ゆずる",
    "heroine": "音波 みのり"
  },
  {
    "name": "Dancing Heroes！",
    "trp": "moon",
    "date": "2011-01-08",
    "theater": "宝塚バウホール",
    "hero": "桐生 園加"
  },
  {
    "name": "ロミオとジュリエット",
    "trp": "snow",
    "date": "2011-01-01",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "音月 桂",
    "heroine": "舞羽 美海, 夢華 あみ",
    "new_hero": "彩風 咲奈",
    "new_heroine": "愛加 あゆ"
  },
  {
    "name": "STUDIO 54",
    "trp": "moon",
    "date": "2010-12-23",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "霧矢 大夢",
    "heroine": "蒼乃 夕妃"
  },
  {
    "name": "CODE HERO／コード・ヒーロー",
    "trp": "flower",
    "date": "2010-11-18",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "朝夏 まなと",
    "heroine": "実咲 凛音"
  },
  {
    "name": "メランコリック・ジゴロ −あぶない相続人−, ラブ・シンフォニー",
    "trp": "flower",
    "date": "2010-11-13",
    "theater": "全国ツアー",
    "hero": "真飛 聖",
    "heroine": "蘭乃 はな"
  },
  {
    "name": "誰がために鐘は鳴る",
    "trp": "cosmos",
    "date": "2010-11-12",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花",
    "new_hero": "愛月 ひかる",
    "new_heroine": "すみれ乃 麗"
  },
  {
    "name": "オネーギンEvgeny Onegin −あるダンディの肖像−",
    "trp": "snow",
    "date": "2010-10-15",
    "theater": "日本青年館大ホール, 宝塚バウホール",
    "hero": "轟 悠",
    "heroine": "舞羽 美海"
  },
  {
    "name": "はじめて愛した",
    "trp": "snow",
    "date": "2010-10-13",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "音月 桂",
    "heroine": "愛加 あゆ"
  },
  {
    "name": "愛と青春の旅立ち, 宝塚花の踊り絵巻 −秋の踊り−",
    "trp": "star",
    "date": "2010-10-08",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "芹香 斗亜",
    "new_heroine": "音波 みのり"
  },
  {
    "name": "銀ちゃんの恋",
    "trp": "cosmos",
    "date": "2010-09-04",
    "theater": "全国ツアー",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花"
  },
  {
    "name": "ジプシー男爵 −Der Zigeuner Baron−, Rhapsodic Moon",
    "trp": "moon",
    "date": "2010-09-03",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "霧矢 大夢",
    "heroine": "蒼乃 夕妃",
    "new_hero": "宇月 颯",
    "new_heroine": "花陽 みら"
  },
  {
    "name": "“R”ising!!",
    "trp": "cosmos",
    "date": "2010-09-02",
    "theater": "宝塚バウホール, 昭和女子大学人見記念講堂",
    "hero": "蘭寿 とむ"
  },
  {
    "name": "摩天楼狂詩曲 −君に歌う愛−",
    "trp": "star",
    "date": "2010-08-12",
    "theater": "宝塚バウホール",
    "hero": "夢乃 聖夏",
    "heroine": "華雅 りりか"
  },
  {
    "name": "麗しのサブリナ, EXCITER!!",
    "trp": "flower",
    "date": "2010-07-30",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "真飛 聖",
    "heroine": "蘭乃 はな",
    "new_hero": "瀬戸 かずや",
    "new_heroine": "実咲 凛音"
  },
  {
    "name": "ロミオとジュリエット",
    "trp": "star",
    "date": "2010-07-10",
    "theater": "梅田芸術劇場メインホール, 博多座",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね"
  },
  {
    "name": "ロジェ, ロック・オン！",
    "trp": "snow",
    "date": "2010-06-25",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "水 夏希",
    "heroine": "愛原 実花",
    "new_hero": "彩風 咲奈",
    "new_heroine": "夢華 あみ"
  },
  {
    "name": "TRAFALGAR −ネルソン、その愛と奇跡−, ファンキー・サンシャイン",
    "trp": "cosmos",
    "date": "2010-05-21",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花",
    "new_hero": "蒼羽 りく",
    "new_heroine": "すみれ乃 麗"
  },
  {
    "name": "リラの壁の囚人たち",
    "trp": "star",
    "date": "2010-05-07",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "凰稀 かなめ",
    "heroine": "白華 れみ"
  },
  {
    "name": "激情 −ホセとカルメン−, BOLERO －ある愛－",
    "trp": "star",
    "date": "2010-04-24",
    "theater": "全国ツアー",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね"
  },
  {
    "name": "THE SCARLET PIMPERNEL",
    "trp": "moon",
    "date": "2010-04-16",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "霧矢 大夢",
    "heroine": "蒼乃 夕妃",
    "new_hero": "珠城 りょう",
    "new_heroine": "彩星 りおん"
  },
  {
    "name": "Je Chante −終わりなき喝采−",
    "trp": "cosmos",
    "date": "2010-03-18",
    "theater": "宝塚バウホール",
    "hero": "凪七 瑠海",
    "heroine": "花影 アリス"
  },
  {
    "name": "虞美人−新たなる伝説−",
    "trp": "flower",
    "date": "2010-03-12",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "真飛 聖",
    "heroine": "桜乃 彩音",
    "new_hero": "鳳 真由",
    "new_heroine": "天咲 千華"
  },
  {
    "name": "シャングリラ　−水之城−",
    "trp": "cosmos",
    "date": "2010-03-09",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花"
  },
  {
    "name": "ソルフェリーノの夜明け −アンリー・デュナンの生涯−, Carnevale 睡夢 －水面に浮かぶ風景－",
    "trp": "snow",
    "date": "2010-02-05",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "水 夏希",
    "heroine": "愛原 実花",
    "new_hero": "彩風 咲奈",
    "new_heroine": "愛加 あゆ"
  },
  {
    "name": "HAMLET!!",
    "trp": "moon",
    "date": "2010-02-04",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "龍 真咲",
    "heroine": "蘭乃 はな"
  },
  {
    "name": "紫子 −とりかえばや異聞−, Heat on Beat!",
    "trp": "moon",
    "date": "2010-02-01",
    "theater": "中日劇場",
    "hero": "霧矢 大夢",
    "heroine": "蒼乃 夕妃"
  },
  {
    "name": "BUND／NEON 上海−深緋の嘆きの河−",
    "trp": "flower",
    "date": "2010-01-07",
    "theater": "宝塚バウホール",
    "hero": "朝夏 まなと",
    "heroine": "白華 れみ"
  },
  {
    "name": "ハプスブルクの宝剣 −魂に宿る光−, BOLERO －ある愛－",
    "trp": "star",
    "date": "2010-01-01",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "美弥 るりか",
    "new_heroine": "早乙女 わかば"
  },
  {
    "name": "相棒",
    "trp": "flower",
    "date": "2009-12-23",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "真飛 聖",
    "heroine": "桜乃 彩音"
  },
  {
    "name": "雪景色",
    "trp": "snow",
    "date": "2009-11-19",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "早霧 せいな, 沙央 くらま？",
    "heroine": "舞羽 美海"
  },
  {
    "name": "情熱のバルセロナ, RIO DE BRAVO!!",
    "trp": "snow",
    "date": "2009-11-14",
    "theater": "全国ツアー",
    "hero": "水 夏希",
    "heroine": "愛原 実花"
  },
  {
    "name": "カサブランカ",
    "trp": "cosmos",
    "date": "2009-11-13",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花",
    "new_hero": "凪七 瑠海",
    "new_heroine": "藤咲 えり"
  },
  {
    "name": "コインブラ物語",
    "trp": "star",
    "date": "2009-10-13",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "轟 悠",
    "heroine": "蒼乃 夕妃"
  },
  {
    "name": "ラスト プレイ −祈りのように−, Heat on Beat!",
    "trp": "moon",
    "date": "2009-10-09",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "瀬奈 じゅん",
    "new_hero": "明日海 りお"
  },
  {
    "name": "再会, ソウル・オブ・シバ!! －夢のシューズを履いた舞神－",
    "trp": "star",
    "date": "2009-10-07",
    "theater": "全国ツアー",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね"
  },
  {
    "name": "外伝ベルサイユのばら −アンドレ編−, EXCITER!!",
    "trp": "flower",
    "date": "2009-09-04",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "真飛 聖",
    "heroine": "桜乃 彩音",
    "new_hero": "望海 風斗",
    "new_heroine": "天咲 千華"
  },
  {
    "name": "逆転裁判2−蘇る真実、再び・・・−",
    "trp": "cosmos",
    "date": "2009-08-20",
    "theater": "宝塚バウホール, 赤坂ACTシアター",
    "hero": "蘭寿 とむ",
    "heroine": "純矢 ちとせ"
  },
  {
    "name": "大江山花伝−燃えつきてこそ−, Apasionado!!Ⅱ",
    "trp": "cosmos",
    "date": "2009-08-03",
    "theater": "博多座",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花"
  },
  {
    "name": "ロシアン・ブルー −魔女への鉄槌−, RIO DE BRAVO!!",
    "trp": "snow",
    "date": "2009-07-31",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "水 夏希",
    "heroine": "愛原 実花",
    "new_hero": "蓮城 まこと",
    "new_heroine": "愛加 あゆ"
  },
  {
    "name": "フィフティ・フィフティ",
    "trp": "flower",
    "date": "2009-07-09",
    "theater": "宝塚バウホール",
    "hero": "華形 ひかる, 真野 すがた",
    "heroine": "華耀 きらり, 白華 れみ"
  },
  {
    "name": "ME AND MY GIRL",
    "trp": "flower",
    "date": "2009-07-04",
    "theater": "梅田芸術劇場メインホール",
    "hero": "真飛 聖",
    "heroine": "桜乃 彩音"
  },
  {
    "name": "太王四神記 Ver.II −新たなる王の旅立ち−",
    "trp": "star",
    "date": "2009-06-26",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね",
    "new_hero": "真風 涼帆",
    "new_heroine": "蒼乃 夕妃"
  },
  {
    "name": "エリザベート −愛と死の輪舞−",
    "trp": "moon",
    "date": "2009-05-22",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "瀬奈 じゅん",
    "heroine": "凪七 瑠海",
    "new_hero": "明日海 りお",
    "new_heroine": "羽桜 しずく"
  },
  {
    "name": "オグリ！",
    "trp": "flower",
    "date": "2009-05-08",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "壮 一帆",
    "heroine": "野々 すみ花"
  },
  {
    "name": "哀しみのコルドバ, Red Hot SeaⅡ",
    "trp": "flower",
    "date": "2009-05-02",
    "theater": "全国ツアー",
    "hero": "真飛 聖",
    "heroine": "桜乃 彩音"
  },
  {
    "name": "薔薇に降る雨, Amour それは…",
    "trp": "cosmos",
    "date": "2009-04-17",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "大和 悠河",
    "heroine": "陽月 華",
    "new_hero": "七海 ひろき",
    "new_heroine": "愛花 ちさき"
  },
  {
    "name": "ZORRO 仮面のメサイア, 風の錦絵",
    "trp": "snow",
    "date": "2009-03-13",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "水 夏希",
    "heroine": "白羽 ゆり",
    "new_hero": "香綾 しずる",
    "new_heroine": "愛原 実花"
  },
  {
    "name": "二人の貴公子",
    "trp": "moon",
    "date": "2009-03-12",
    "theater": "宝塚バウホール",
    "hero": "龍 真咲, 明日海 りお",
    "heroine": "羽桜 しずく"
  },
  {
    "name": "SAUDADE −Jにまつわる幾つかの所以−",
    "trp": "moon",
    "date": "2009-03-06",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 昭和女子大学人見記念講堂",
    "hero": "瀬奈 じゅん"
  },
  {
    "name": "My dear New Orleans, ア ビヤント",
    "trp": "star",
    "date": "2009-02-06",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "安蘭 けい",
    "heroine": "遠野 あすか",
    "new_hero": "真風 涼帆",
    "new_heroine": "蒼乃 夕妃"
  },
  {
    "name": "逆転裁判−蘇る真実−",
    "trp": "cosmos",
    "date": "2009-02-05",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "蘭寿 とむ",
    "heroine": "美羽 あさひ"
  },
  {
    "name": "外伝 ベルサイユのばら　-アンドレ編-, ダンシング・フォー・ユー",
    "trp": "cosmos",
    "date": "2009-02-01",
    "theater": "中日劇場",
    "hero": "大和 悠河",
    "heroine": "陽月 華"
  },
  {
    "name": "忘れ雪",
    "trp": "snow",
    "date": "2009-01-08",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "音月 桂",
    "heroine": "舞羽 美海"
  },
  {
    "name": "太王四神記−チュシンの星のもとに−",
    "trp": "flower",
    "date": "2009-01-01",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "真飛 聖",
    "heroine": "桜乃 彩音",
    "new_hero": "望海 風斗",
    "new_heroine": "野々 すみ花"
  },
  {
    "name": "カラマーゾフの兄弟",
    "trp": "snow",
    "date": "2008-12-13",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 赤坂ACTシアター",
    "hero": "水 夏希",
    "heroine": "白羽 ゆり"
  },
  {
    "name": "外伝 ベルサイユのばら -ベルナール編-, ネオ・ダンディズム！Ⅲ",
    "trp": "star",
    "date": "2008-11-08",
    "theater": "全国ツアー",
    "hero": "安蘭 けい",
    "heroine": "遠野 あすか"
  },
  {
    "name": "夢の浮橋, Apasionado!!",
    "trp": "moon",
    "date": "2008-11-07",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "瀬奈 じゅん",
    "heroine": "羽桜 しずく",
    "new_hero": "明日海 りお",
    "new_heroine": "蘭乃 はな"
  },
  {
    "name": "ブエノスアイレスの風－光と影の狭間を吹き抜けてゆく…－",
    "trp": "star",
    "date": "2008-11-01",
    "theater": "日本青年館大ホール, 宝塚バウホール",
    "hero": "柚希 礼音",
    "heroine": "夢咲 ねね"
  },
  {
    "name": "銀ちゃんの恋",
    "trp": "flower",
    "date": "2008-10-03",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "大空 祐飛",
    "heroine": "野々 すみ花"
  },
  {
    "name": "Paradise Prince, ダンシング・フォー・ユー",
    "trp": "cosmos",
    "date": "2008-09-26",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "大和 悠河",
    "heroine": "陽月 華",
    "new_hero": "鳳翔 大",
    "new_heroine": "愛花 ちさき"
  },
  {
    "name": "外伝 ベルサイユのばら　-アラン編-, エンター・ザ・レビュー",
    "trp": "flower",
    "date": "2008-09-20",
    "theater": "全国ツアー",
    "hero": "真飛 聖",
    "heroine": "桜乃 彩音"
  },
  {
    "name": "グレート・ギャツビー",
    "trp": "moon",
    "date": "2008-09-01",
    "theater": "日生劇場",
    "hero": "瀬奈 じゅん",
    "heroine": "城咲 あい"
  },
  {
    "name": "マリポーサの花, ソロモンの指輪",
    "trp": "snow",
    "date": "2008-08-08",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "水 夏希",
    "heroine": "白羽 ゆり",
    "new_hero": "大湖 せしる",
    "new_heroine": "舞羽 美海"
  },
  {
    "name": "ME AND MY GIRL",
    "trp": "moon",
    "date": "2008-08-01",
    "theater": "博多座",
    "hero": "霧矢 大夢",
    "heroine": "羽桜 しずく"
  },
  {
    "name": "雨に唄えば",
    "trp": "cosmos",
    "date": "2008-07-05",
    "theater": "梅田芸術劇場メインホール",
    "hero": "大和 悠河",
    "heroine": "花影 アリス"
  },
  {
    "name": "殉情",
    "trp": "cosmos",
    "date": "2008-06-28",
    "theater": "宝塚バウホール",
    "hero": "早霧 せいな, 蓮水 ゆうや",
    "heroine": "和音 美桜, すみれ乃 麗"
  },
  {
    "name": "THE SCARLET PIMPERNEL",
    "trp": "star",
    "date": "2008-06-20",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "安蘭 けい",
    "heroine": "遠野 あすか",
    "new_hero": "紅 ゆずる",
    "new_heroine": "蒼乃 夕妃"
  },
  {
    "name": "凍てついた明日－ボニー&クライドとの邂逅－",
    "trp": "snow",
    "date": "2008-05-24",
    "theater": "宝塚バウホール",
    "hero": "凰稀 かなめ",
    "heroine": "愛原 実花, 大月 さゆ"
  },
  {
    "name": "外伝 ベルサイユのばら -ジェローデル編-, ミロワール －鏡のエンドレス・ドリームズ－",
    "trp": "snow",
    "date": "2008-05-17",
    "theater": "全国ツアー",
    "hero": "水 夏希",
    "heroine": "白羽 ゆり"
  },
  {
    "name": "愛と死のアラビア－高潔なアラブの戦士となったイギリス人－, Red Hot Sea",
    "trp": "flower",
    "date": "2008-05-09",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "真飛 聖",
    "heroine": "桜乃 彩音",
    "new_hero": "朝夏 まなと",
    "new_heroine": "白華 れみ"
  },
  {
    "name": "ANNA KARENINA",
    "trp": "star",
    "date": "2008-04-05",
    "theater": "宝塚バウホール",
    "hero": "夢乃 聖夏, 麻尋 しゅん",
    "heroine": "蒼乃 夕妃, 妃咲, せあら"
  },
  {
    "name": "ME AND MY GIRL",
    "trp": "moon",
    "date": "2008-03-21",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "瀬奈 じゅん",
    "heroine": "彩乃 かなみ",
    "new_hero": "明日海 りお",
    "new_heroine": "羽桜 しずく"
  },
  {
    "name": "舞姫－MAIHIME－",
    "trp": "flower",
    "date": "2008-03-14",
    "theater": "日本青年館大ホール",
    "hero": "愛音 羽麗",
    "heroine": "野々 すみ花"
  },
  {
    "name": "赤と黒",
    "trp": "star",
    "date": "2008-03-13",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール, 愛知厚生年金会館",
    "hero": "安蘭 けい",
    "heroine": "遠野 あすか"
  },
  {
    "name": "黎明の風－侍ジェントルマン　白洲次郎の挑戦－, Passion 愛の旅",
    "trp": "cosmos",
    "date": "2008-02-08",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "轟 悠, 大和 悠河",
    "heroine": "和音 美桜",
    "new_hero": "鳳翔 大, 蓮水 ゆうや",
    "new_heroine": "花影 アリス"
  },
  {
    "name": "蒼いくちづけ－ドラキュラ伯爵の恋－",
    "trp": "flower",
    "date": "2008-02-07",
    "theater": "宝塚バウホール",
    "hero": "真野 すがた, 朝夏 まなと",
    "heroine": "華耀きらり, 月野姫花"
  },
  {
    "name": "メラ ン コリック・ジゴロ－あぶない相続人－, ラブ・シンフォニーⅡ",
    "trp": "flower",
    "date": "2008-02-02",
    "theater": "中日劇場",
    "hero": "真飛 聖",
    "heroine": "桜乃 彩音"
  },
  {
    "name": "ホフマン物語",
    "trp": "moon",
    "date": "2008-01-02",
    "theater": "宝塚バウホール",
    "hero": "明日海 りお, 青樹 泉"
  },
  {
    "name": "君を愛してる－Je t'aime－, ミロワール －鏡のエンドレス・ドリームズー",
    "trp": "snow",
    "date": "2008-01-01",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "水 夏希",
    "heroine": "白羽 ゆり",
    "new_hero": "蓮城 まこと",
    "new_heroine": "愛原 実花"
  },
  {
    "name": "HOLLYWOOD LOVER",
    "trp": "moon",
    "date": "2007-12-15",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "大空 祐飛",
    "heroine": "城咲 あい"
  },
  {
    "name": "A-“R”ex",
    "trp": "moon",
    "date": "2007-12-14",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "瀬奈 じゅん",
    "heroine": "彩乃 かなみ"
  },
  {
    "name": "THE SECOND LIFE",
    "trp": "cosmos",
    "date": "2007-11-10",
    "theater": "宝塚バウホール",
    "hero": "北翔 海莉",
    "heroine": "和音 美桜"
  },
  {
    "name": "エル・アルコンー鷹ー, レビュー・オルキスー蘭の星ー",
    "trp": "star",
    "date": "2007-11-02",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "安蘭 けい",
    "heroine": "遠野 あすか",
    "new_hero": "夢乃 聖夏",
    "new_heroine": "稀鳥 まりや"
  },
  {
    "name": "バレンシアの熱い花, 宙 FANTASISTA!!",
    "trp": "cosmos",
    "date": "2007-10-30",
    "theater": "全国ツアー",
    "hero": "大和 悠河",
    "heroine": "陽月 華"
  },
  {
    "name": "シルバー･ローズ・クロニクル",
    "trp": "snow",
    "date": "2007-10-05",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "彩吹 真央",
    "heroine": "大月 さゆ"
  },
  {
    "name": "アデュー・マルセイユ−マルセイユへ愛を込めて−, ラブ・シンフォニー",
    "trp": "flower",
    "date": "2007-09-21",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "春野 寿美礼",
    "heroine": "桜乃 彩音",
    "new_hero": "朝夏 まなと",
    "new_heroine": "野々 すみ花"
  },
  {
    "name": "星影の人−沖田総司・まぼろしの青春−, Joyfil!!Ⅱ",
    "trp": "snow",
    "date": "2007-09-15",
    "theater": "全国ツアー",
    "hero": "水 夏希",
    "heroine": "白羽 ゆり"
  },
  {
    "name": "Kean",
    "trp": "star",
    "date": "2007-09-01",
    "theater": "日生劇場",
    "hero": "轟 悠",
    "heroine": "蒼乃夕妃, 南海まり"
  },
  {
    "name": "MAHOROBA−遥か彼方YAMATO−, マジシャンの憂鬱",
    "trp": "moon",
    "date": "2007-08-03",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "瀬奈 じゅん",
    "heroine": "彩乃 かなみ",
    "new_hero": "龍 真咲",
    "new_heroine": "夢咲 ねね"
  },
  {
    "name": "シークレット・ハンター −この世で、俺に盗めぬものはない−, ネオ・ダンディズム！Ⅱ－男の美学－",
    "trp": "star",
    "date": "2007-08-01",
    "theater": "博多座",
    "hero": "安蘭 けい",
    "heroine": "遠野 あすか"
  },
  {
    "name": "ハロー！ダンシング",
    "trp": "flower",
    "date": "2007-07-28",
    "theater": "宝塚バウホール"
  },
  {
    "name": "源氏物語　あさきゆめみしII",
    "trp": "flower",
    "date": "2007-07-07",
    "theater": "梅田芸術劇場メインホール",
    "hero": "春野 寿美礼",
    "heroine": "桜乃 彩音"
  },
  {
    "name": "バレンシアの熱い花, 宙 FANTASISTA!",
    "trp": "cosmos",
    "date": "2007-06-22",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "大和 悠河",
    "heroine": "陽月 華",
    "new_hero": "春風 弥里",
    "new_heroine": "花影 アリス"
  },
  {
    "name": "舞姫−MAIHIME−",
    "trp": "flower",
    "date": "2007-06-16",
    "theater": "宝塚バウホール",
    "hero": "愛音 羽麗",
    "heroine": "野々 すみ花"
  },
  {
    "name": "ダル・レークの恋",
    "trp": "moon",
    "date": "2007-05-22",
    "theater": "全国ツアー",
    "hero": "瀬奈 じゅん",
    "heroine": "彩乃 かなみ"
  },
  {
    "name": "大坂侍−けったいな人々−",
    "trp": "moon",
    "date": "2007-05-19",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "霧矢 大夢",
    "heroine": "夢咲 ねね"
  },
  {
    "name": "ハロー！ダンシング",
    "trp": "moon",
    "date": "2007-05-06",
    "theater": "宝塚バウホール"
  },
  {
    "name": "エリザベート−愛と死の輪舞−",
    "trp": "snow",
    "date": "2007-05-04",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "水 夏希",
    "heroine": "白羽 ゆり",
    "new_hero": "沙央 くらま",
    "new_heroine": "大月 さゆ"
  },
  {
    "name": "NEVER SLEEP",
    "trp": "cosmos",
    "date": "2007-04-07",
    "theater": "宝塚バウホール, 日本青年館大ホール",
    "hero": "蘭寿 とむ",
    "heroine": "美羽 あさひ"
  },
  {
    "name": "シークレット・ハンター −この世で、俺に盗めぬものはない−, さくら −妖しいまでに美しいおまえ−",
    "trp": "star",
    "date": "2007-03-23",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "安蘭 けい",
    "heroine": "遠野 あすか",
    "new_hero": "麻尋 しゅん",
    "new_heroine": "羽桜 しずく"
  },
  {
    "name": "ハロー！ダンシング",
    "trp": "cosmos",
    "date": "2007-03-17",
    "theater": "宝塚バウホール"
  },
  {
    "name": "Ａ／Ｌ −怪盗ルパンの青春−",
    "trp": "cosmos",
    "date": "2007-03-15",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール, 中日劇場",
    "hero": "大和 悠河",
    "heroine": "陽月 華"
  },
  {
    "name": "ノン ノン シュガー!!",
    "trp": "snow",
    "date": "2007-02-24",
    "theater": "宝塚バウホール",
    "hero": "音月 桂",
    "heroine": "大月 さゆ"
  },
  {
    "name": "明智小五郎の事件簿―黒蜥蜴, TUXEDO JAZZ",
    "trp": "flower",
    "date": "2007-02-09",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "春野 寿美礼",
    "heroine": "桜乃 彩音",
    "new_hero": "朝夏 まなと",
    "new_heroine": "野々 すみ花"
  },
  {
    "name": "ハロー！ダンシング",
    "trp": "snow",
    "date": "2007-02-03",
    "theater": "宝塚バウホール"
  },
  {
    "name": "星影の人−沖田総司・まぼろしの青春−, Joyfil!!Ⅱ",
    "trp": "snow",
    "date": "2007-02-02",
    "theater": "中日劇場",
    "hero": "水 夏希",
    "heroine": "白羽 ゆり"
  },
  {
    "name": "ハロー！ダンシング",
    "trp": "star",
    "date": "2007-01-20",
    "theater": "宝塚バウホール"
  },
  {
    "name": "Hallelujah GO! GO!",
    "trp": "star",
    "date": "2007-01-02",
    "theater": "宝塚バウホール",
    "hero": "柚希 礼音",
    "heroine": "陽月 華"
  },
  {
    "name": "パリの空よりも高く, ファンシー・ダンス",
    "trp": "moon",
    "date": "2007-01-01",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "瀬奈 じゅん",
    "heroine": "彩乃 かなみ",
    "new_hero": "龍 真咲",
    "new_heroine": "夢咲 ねね"
  },
  {
    "name": "ヘイズ･コード",
    "trp": "star",
    "date": "2006-12-15",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "安蘭 けい",
    "heroine": "遠野 あすか"
  },
  {
    "name": "MIND TRAVELLER −記憶の旅人−",
    "trp": "flower",
    "date": "2006-11-10",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール",
    "hero": "真飛 聖",
    "heroine": "華城 季帆"
  },
  {
    "name": "うたかたの恋, エンター・ザ・レビュー",
    "trp": "flower",
    "date": "2006-11-04",
    "theater": "全国ツアー",
    "hero": "春野 寿美礼",
    "heroine": "桜乃 彩音"
  },
  {
    "name": "維新回天・竜馬伝！−硬派・坂本竜馬III−, ザ・クラシック ーI LOVE CHOPINー",
    "trp": "cosmos",
    "date": "2006-11-03",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "貴城 けい",
    "heroine": "紫城 るい",
    "new_hero": "早霧 せいな",
    "new_heroine": "和音 美桜"
  },
  {
    "name": "オクラホマ！",
    "trp": "moon",
    "date": "2006-10-05",
    "theater": "日生劇場",
    "hero": "轟 悠",
    "heroine": "城咲 あい"
  },
  {
    "name": "あかねさす紫の花, レ・ビジュー・ブリアン －きらめく宝石の詩－",
    "trp": "moon",
    "date": "2006-10-01",
    "theater": "全国ツアー",
    "hero": "瀬奈 じゅん",
    "heroine": "彩乃 かなみ"
  },
  {
    "name": "堕天使の涙, タランテラ！",
    "trp": "snow",
    "date": "2006-09-22",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "朝海 ひかる",
    "heroine": "舞風 りら",
    "new_hero": "凰稀 かなめ",
    "new_heroine": "大月 さゆ"
  },
  {
    "name": "Young Bloods!! -Cosmo∞-",
    "trp": "cosmos",
    "date": "2006-08-31",
    "theater": "宝塚バウホール",
    "hero": "十輝 いりす"
  },
  {
    "name": "UNDERSTUDY",
    "trp": "cosmos",
    "date": "2006-08-17",
    "theater": "宝塚バウホール",
    "hero": "七帆 ひかる",
    "heroine": "花影 アリス"
  },
  {
    "name": "愛するには短すぎる, ネオ・ダンディズム！-男の美学-",
    "trp": "star",
    "date": "2006-08-11",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "湖月 わたる",
    "heroine": "白羽 ゆり",
    "new_hero": "和 涼華",
    "new_heroine": "陽月 華"
  },
  {
    "name": "コパカバーナ",
    "trp": "cosmos",
    "date": "2006-08-01",
    "theater": "博多座",
    "hero": "貴城 けい",
    "heroine": "紫城 るい"
  },
  {
    "name": "Young Bloods!!-魔夏の吹雪-",
    "trp": "snow",
    "date": "2006-07-06",
    "theater": "宝塚バウホール",
    "hero": "凰稀 かなめ",
    "heroine": "大月 さゆ"
  },
  {
    "name": "ベルサイユのばら-オスカル編-",
    "trp": "snow",
    "date": "2006-07-01",
    "theater": "全国ツアー",
    "hero": "水 夏希",
    "heroine": "舞風 りら"
  },
  {
    "name": "ファントム",
    "trp": "flower",
    "date": "2006-06-23",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "春野 寿美礼",
    "heroine": "桜乃 彩音",
    "new_hero": "望月 理世",
    "new_heroine": "華城 季帆"
  },
  {
    "name": "やらずの雨",
    "trp": "snow",
    "date": "2006-06-16",
    "theater": "宝塚バウホール",
    "hero": "音月 桂",
    "heroine": "純矢 ちとせ"
  },
  {
    "name": "コパカバーナ",
    "trp": "star",
    "date": "2006-06-03",
    "theater": "梅田芸術劇場メインホール",
    "hero": "湖月 わたる",
    "heroine": "白羽 ゆり"
  },
  {
    "name": "フェット・アンペリアル -帝国の祝祭-",
    "trp": "star",
    "date": "2006-06-02",
    "theater": "宝塚バウホール",
    "hero": "立樹 遥",
    "heroine": "陽月 華"
  },
  {
    "name": "Young Bloods!! -Twinkle Twinkle STAR-",
    "trp": "star",
    "date": "2006-05-18",
    "theater": "宝塚バウホール",
    "hero": "柚希 礼音"
  },
  {
    "name": "暁のローマ−ジュリアス・シーザーより−, レ・ビジュー・ブリアン －きらめく宝石の詩－",
    "trp": "moon",
    "date": "2006-05-12",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "轟 悠, 瀬奈 じゅん",
    "heroine": "彩乃 かなみ",
    "new_hero": "星条 海斗, 龍 真咲",
    "new_heroine": "白華 れみ"
  },
  {
    "name": "Young Bloods!! −青春花模様−",
    "trp": "flower",
    "date": "2006-04-08",
    "theater": "宝塚バウホール",
    "hero": "桐生 園加",
    "heroine": "澪乃 せいら"
  },
  {
    "name": "NEVER SAY GOODBYE -ある愛の軌跡-",
    "trp": "cosmos",
    "date": "2006-03-24",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "和央 ようか",
    "heroine": "花總 まり",
    "new_hero": "早霧 せいな",
    "new_heroine": "花影 アリス"
  },
  {
    "name": "スカウト",
    "trp": "flower",
    "date": "2006-03-24",
    "theater": "宝塚バウホール",
    "hero": "蘭寿 とむ",
    "heroine": "華城 季帆"
  },
  {
    "name": "THE LAST PARTY〜S.Fitzgerald’s last day〜 フィッツジェラルド最後の一日",
    "trp": "moon",
    "date": "2006-03-19",
    "theater": "東京芸術劇場中ホール",
    "hero": "大空 祐飛",
    "heroine": "彩乃 かなみ"
  },
  {
    "name": "Appartement Cinéma",
    "trp": "flower",
    "date": "2006-03-17",
    "theater": "梅田芸術劇場シアター・ドラマシティ, 日本青年館大ホール, 愛知厚生年金会館",
    "hero": "春野 寿美礼",
    "heroine": "桜乃 彩音"
  },
  {
    "name": "Young Bloods!! -Sparkling MOON-",
    "trp": "moon",
    "date": "2006-02-25",
    "theater": "宝塚バウホール",
    "hero": "龍 真咲",
    "heroine": "白華 れみ"
  },
  {
    "name": "ベルサイユのばら -オスカル編-",
    "trp": "snow",
    "date": "2006-02-10",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "朝海 ひかる",
    "heroine": "舞風 りら",
    "new_hero": "沙央 くらま",
    "new_heroine": "晴華 みどり"
  },
  {
    "name": "想夫恋 −言の葉もなき、君の心−",
    "trp": "moon",
    "date": "2006-02-03",
    "theater": "宝塚バウホール",
    "hero": "北翔 海莉",
    "heroine": "城咲 あい"
  },
  {
    "name": "THE LAST PARTY〜S.Fitzgerald’s last day〜 フィッツジェラルド最後の一日",
    "trp": "cosmos",
    "date": "2006-02-02",
    "theater": "日本青年館大ホール",
    "hero": "大和 悠河",
    "heroine": "紫城 るい"
  },
  {
    "name": "あかねさす紫の花, REVUE OF DREAMS",
    "trp": "moon",
    "date": "2006-01-31",
    "theater": "中日劇場",
    "hero": "瀬奈 じゅん",
    "heroine": "彩乃 かなみ"
  },
  {
    "name": "不滅の恋人たちへ",
    "trp": "cosmos",
    "date": "2006-01-02",
    "theater": "宝塚バウホール",
    "hero": "大和 悠河",
    "heroine": "紫城 るい"
  },
  {
    "name": "ベルサイユのばら −フェルゼンとマリー・アントワネット編−",
    "trp": "star",
    "date": "2006-01-01",
    "theater":  "宝塚大劇場, 東京宝塚劇場",
    "hero": "湖月 わたる",
    "heroine": "白羽 ゆり",
    "new_hero": "柚希 礼音",
    "new_heroine": "陽月 華"
  }
];