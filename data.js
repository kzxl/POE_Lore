// ================================
// POE LORE — ALL DATA
// ================================

export const NAV_ITEMS = [
    { id: 'origin', label: 'Khởi Nguyên' },
    { id: 'winter', label: 'Mùa Đông' },
    { id: 'vaal', label: 'Vaal' },
    { id: 'eternal', label: 'Đế Chế' },
    { id: 'modern', label: 'Hiện Đại' },
    { id: 'poe2', label: 'POE 2' },
    { id: 'items', label: 'Vật Phẩm' },
    { id: 'world', label: 'Thế Giới' },
];

export const LORE = {
    origin: {
        era: 'Kỷ I',
        title: 'Thời Tiền Sử & Khởi Nguyên',
        subtitle: 'Những thực thể đầu tiên và nền văn minh đã mất',
        cards: [
            {
                icon: '🌊',
                title: 'Kalandra và Hồ Bí Ẩn',
                text: `Thực thể đầu tiên được biết đến trong lịch sử Wraeclast là <strong>Kalandra</strong> — một sinh vật cổ đại và huyền bí, có khả năng xuất hiện từ trước cả các vị thần. Bà bị giam giữ trong một hồ nước bí ẩn — <strong>Lake of Kalandra</strong> — một cõi giới trung gian giữa thực tại và ảo ảnh. Kalandra sở hữu sức mạnh <strong>phản chiếu và nhân đôi</strong> vạn vật, được cho là nguồn gốc của <strong>Mirror of Kalandra</strong> — vật phẩm quý giá nhất game. Bà khinh miệt các vị thần, gọi họ là <em>"Kẻ Trộm Đức Hạnh" (Thieves of Virtue)</em>, và cho rằng tôn giáo chỉ là việc con người tự tạo ra kẻ săn mồi cho chính mình.`,
                quote: 'Kalandra có thể là thực thể quyền năng nhất Wraeclast — vượt trên cả các vị thần.',
            },
            {
                icon: '🏔️',
                title: 'Nền Văn Minh Tiền Sử (Proto-Vaal)',
                text: `Trước cả nền văn minh Vaal, Wraeclast đã tồn tại một nền văn minh <strong>tiên tiến vượt bậc</strong> — được gọi là "Proto-Vaal" trong game files. Nền văn minh này sở hữu công nghệ vượt xa thời đại, nhưng đã bị xóa sổ bởi một thảm họa không rõ nguồn gốc. Dấu tích của họ vẫn tồn tại bên dưới các tàn tích Vaal và sâu trong <strong>Mỏ Azurite (Azurite Mine)</strong> — nơi thợ mỏ Niko liên tục khai phá. Thời kỳ này, các <strong>Titan</strong> — những sinh vật khổng lồ — cư ngụ trong núi lửa và có thể là nguồn gốc tạo ra một số Virtue Gems đầu tiên qua hoạt động núi lửa.`,
            },
            {
                icon: '🌟',
                title: 'Các Thế Lực Vũ Trụ',
                text: `Ngoài các vị thần thường, Wraeclast còn tồn tại các <strong>Thế Lực Vũ Trụ (Cosmic Entities)</strong> — những "Xung Lực" (Impulses) vượt trên cả thần linh. <strong>Chaos</strong> là một trong số đó — thực thể có khả năng quan sát đa dòng thời gian, thao túng vận mệnh qua sự ngẫu nhiên. Chaos chỉ định <strong>Trialmaster</strong> để giám sát các Thử Thách Hỗn Mang. <strong>The Maven</strong> — thực thể ngoài hành tinh, đến Wraeclast để "sưu tầm" các trận chiến như trò vui.`,
            },
        ],
        table: {
            headers: ['Thần', 'Vai trò', 'Liên quan'],
            rows: [
                ['Innocence', 'Thần Ánh Sáng, được tôn thờ như vị cứu tinh', 'Templar, Giáo đoàn'],
                ['Sin', 'Anh em Innocence, bị ruồng rẫy, tạo ra The Beast', 'Dark Ember, thaumaturgy'],
                ['Tukohama', 'Thần Chiến Tranh của người Karui', 'Lừa dối King Kaom'],
                ['Kitava', 'Thần Đói Khát, kẻ hủy diệt Oriath', 'Boss Act 5 & 10'],
                ['Hinekora', 'Thần Chết, cai quản linh hồn người Karui', 'Afterlife'],
                ['Arakaali', 'Nữ Thần Nhện, Mẹ của Bóng Tối', 'Act 7 Boss'],
                ['Solaris & Lunaris', 'Thần Mặt Trời & Mặt Trăng', 'Act 8 Bosses'],
                ['Garukhan', 'Thần Gió của người Maraketh', 'Act 9'],
                ['Shakari', 'Nữ Thần Sa Mạc, Mẹ của Bọ Cạp', 'Act 9'],
            ],
            caption: 'Các Vị Thần & Thế Lực',
        },
    },

    winter: {
        era: 'Kỷ II',
        title: 'Mùa Đông Thế Giới',
        subtitle: 'The Great Wasting — Khi bóng tối nuốt chửng ánh sáng',
        cards: [
            {
                icon: '❄️',
                title: 'Thảm Họa Toàn Cầu',
                text: `Người <strong>Maraketh</strong> gọi là <em>"Mùa Đông của Thế Giới"</em>, người <strong>Karui</strong> gọi là <em>"Đại Hoang Tàn"</em>. Đây là sự kiện hủy diệt quy mô lớn đầu tiên trong lịch sử: Núi lửa phun trào trên diện rộng, tro bụi che kín bầu trời trong nhiều năm. Mặt trời biến mất, thế giới chìm trong bóng tối và giá lạnh. Mùa màng chết hết, các bộ lạc lan rộng sự chết đói.`,
            },
            {
                icon: '👹',
                title: 'Lightless — Sinh Vật Bóng Tối',
                text: `Trong bóng tối vĩnh hằng, <strong>Lightless</strong> xuất hiện — những sinh vật chưa từng được thấy trước đó, sống dựa vào sự vắng mặt của ánh sáng. Chúng tấn công và tàn sát các nền văn minh non trẻ bao gồm người <strong>Maraketh</strong>, <strong>Azmeri</strong> và <strong>Karui</strong>. Người Azmeri gần như bị diệt chủng, buộc phải ẩn náu trong các hang núi Azmerian.`,
            },
            {
                icon: '⚔️',
                title: 'Order of the Djinn & Sự Giải Phóng',
                text: `<strong>Giáo Đoàn Djinn (Order of the Djinn)</strong> — một tổ chức bí ẩn gồm các chiến binh và pháp sư — đã đứng lên chiến đấu, cuối cùng đánh bại Lightless và khôi phục ánh sáng mặt trời. Chiến thắng này đưa <strong>Innocence</strong> — người được tôn thờ trong cuộc chiến — từ một nhân vật phàm trần trở thành <strong>vị thần</strong>. Trong khi đó <strong>Sin</strong>, anh em của Innocence, bị ghét bỏ và demonize hóa mặc dù cũng đóng góp vào chiến thắng.`,
            },
            {
                icon: '🐉',
                title: 'Sự Ra Đời của The Beast',
                text: `<strong>Sin</strong>, trong cơn giận dữ và phẫn uất vì bị ruồng bỏ trong khi Innocence được tôn vinh, đã gieo một <strong>"Tàn Lửa Bóng Tối" (Dark Ember)</strong> xuống sâu trong lòng đất. Từ Dark Ember, một sinh vật khổng lồ xuất hiện — <strong>The Beast</strong>. Nó trở thành <strong>nguồn gốc của mọi phép thuật (thaumaturgy)</strong> trong Wraeclast, biến đổi năng lượng thần thánh thành dạng vật chất — tạo ra <strong>Virtue Gems</strong>. The Beast cũng phát ra một tần số đặc biệt đặt <strong>tất cả các vị thần vào giấc ngủ</strong>, chấm dứt sự can thiệp trực tiếp của thần linh vào thế giới phàm.`,
                quote: 'The Beast giống như con trai ngọc — biến đổi năng lượng thần thánh thành Virtue Gems, tựa như trai biến cát thành ngọc trai.',
            },
        ],
    },

    vaal: {
        era: 'Kỷ III',
        title: 'Nền Văn Minh Vaal',
        subtitle: '~900 – 400 BIC — Nền văn minh rực rỡ nhất và cũng bi thảm nhất',
        cards: [
            {
                icon: '🏛️',
                title: 'Khởi Đầu Huy Hoàng',
                text: `Người Vaal là <strong>nền văn minh lớn đầu tiên</strong> trên Wraeclast. Họ phát hiện ra <strong>Virtue Gems</strong> bên dưới <strong>Núi Veruso</strong> và gọi chúng là <strong>"Nước Mắt của Maji" (Tears of Maji)</strong>. Không giống các nền văn minh sau, người Vaal sử dụng phép thuật dựa trên <strong>hiến tế máu (blood thaumaturgy)</strong> — máu người là nhiên liệu cho Virtue Gems. Họ phát triển hệ thống Side Areas, tạo ra các không gian phụ ẩn giấu trong thực tại.`,
            },
            {
                icon: '🔬',
                title: 'Thành Tựu Thaumaturgy',
                text: `Người Vaal đạt đến trình độ phép thuật mà các nền văn minh sau không thể sánh bằng. Họ xây dựng <strong>Kim Tự Tháp Cổ Đại (Ancient Pyramid)</strong> cao vút trời, <strong>Tàn Tích Vaal</strong> với hệ thống bẫy phức tạp vẫn hoạt động sau hàng ngàn năm. Công nghệ sinh-thần học cho phép họ tạo ra <strong>Vaal Constructs</strong> — những cỗ máy sinh học kết hợp phép thuật. Nhưng tất cả đều chạy bằng máu — máu nô lệ, máu tù binh.`,
            },
            {
                icon: '👑',
                title: 'Nữ Hoàng Atziri — Bông Hồng Trong Máu',
                text: `<strong>Atziri</strong> — Nữ Hoàng cuối cùng của Vaal — là hiện thân của sự kiêu ngạo và tàn ác. Bà bị ám ảnh bởi <strong>sắc đẹp vĩnh hằng và sự bất tử</strong>. Luôn có mặt gương bên mình, Atziri ra lệnh hiến tế hàng ngàn người để duy trì nhan sắc. Vật phẩm <strong>Atziri's Mirror</strong> trong game chính là biểu tượng cho sự phù phiếm này — phản chiếu hex curse lại kẻ thù.`,
            },
            {
                icon: '💀',
                title: 'Doryani và Đại Thảm Họa',
                text: `<strong>Doryani</strong> — thầy phép kiêm nhà khoa học thiên tài — phục vụ Atziri. Hắn tạo ra <strong>Doryani's Fist, Doryani's Catalyst, Doryani's Invitation</strong> — những vật phẩm thí nghiệm với năng lượng lightning. Doryani thực hiện nghi lễ cuối cùng để ban cho Atziri sự bất tử. Kết quả: <strong>Đại Thảm Họa Vaal (~400 BIC)</strong> — năng lượng mất kiểm soát xé toạc thực tại, toàn bộ nền văn minh bị xóa sổ trong một đêm. Người Vaal biến thành sinh vật đột biến, bất tử méo mó, hoặc bị đẩy vào <strong>Vaal Side Areas</strong> — những mảnh không gian bị phong ấn.`,
                warning: 'Atziri không chết — bà bị giam trong một chiều không gian khác, vẫn có thể được triệu hồi qua Vaal Fragments.',
            },
        ],
        table: {
            headers: ['Lĩnh vực', 'Mô tả', 'Di sản trong game'],
            rows: [
                ['Thaumaturgy máu', 'Phép thuật chạy bằng hiến tế máu người', 'Vaal Skills, Vaal Gems'],
                ['Kiến trúc', 'Kim Tự Tháp, Tàn Tích với bẫy ngàn năm', 'Vaal Side Areas'],
                ['Virtue Gems', '"Nước Mắt của Maji" — gems đầu tiên', 'Tất cả skill gems'],
                ['Corruption', 'Biến đổi vật chất qua năng lượng tối', 'Vaal Orb, Corrupted items'],
                ['Sinh-thần học', 'Cỗ máy sinh học + phép thuật', 'Vaal Constructs, Bosses'],
            ],
            caption: 'Thành Tựu & Di Sản Văn Minh Vaal',
        },
    },

    eternal: {
        era: 'Kỷ IV',
        title: 'Đế Chế Vĩnh Cửu',
        subtitle: '1 IC – ~1339 IC — Từ vinh quang đến sự hủy diệt',
        cards: [
            {
                icon: '⚜️',
                title: 'Sự Trỗi Dậy của Azmeri',
                text: `Sau sự sụp đổ của Vaal, người <strong>Azmeri</strong> từ Dãy Núi Azmerian — những người sống sót sau Mùa Đông Thế Giới nhờ ẩn náu trong hang núi — nổi lên thống trị. <strong>Tarcus Veruso</strong> dẫn quân chinh phục vùng đất phì nhiêu, thành lập thành phố <strong>Sarn</strong> vào năm <strong>1 IC (Imperialis Conceptus)</strong>. Sarn nhanh chóng trở thành thủ đô huy hoàng nhất mà Wraeclast từng thấy — tháp Gemling Queen, Library of Oriath, và hàng ngàn công trình thaumaturgy.`,
            },
            {
                icon: '⛓️',
                title: 'Hệ Thống Nô Lệ & Kẻ Bị Trị',
                text: `Đế Chế duy trì quyền lực qua <strong>nô dịch hóa</strong> ba dân tộc: Người <strong>Ezomyte</strong> phía bắc — dân tộc to lớn, mạnh mẽ — bị dùng làm lao động nặng và đấu sĩ. Người <strong>Maraketh</strong> sa mạc — chiến binh du mục — bị đàn áp tàn bạo. Người <strong>Karui</strong> — bộ lạc chiến binh hải đảo — bị bắt làm nô lệ sau khi tướng <strong>Lioneye</strong> đánh bại họ (dù Lioneye cũng tử trận — để lại di sản <strong>Lioneye's Watch</strong>).`,
            },
            {
                icon: '🔮',
                title: 'Hoàng Đế Chitus & Malachai — Kỷ Nguyên Vàng Đen',
                text: `<strong>Hoàng Đế Chitus</strong> đưa Đế Chế lên đỉnh cao bằng cách bổ nhiệm <strong>Malachai</strong> — thầy phép thiên tài nhưng điên loạn — làm cố vấn tối cao. Malachai phát triển hệ thống khai thác Virtue Gems quy mô công nghiệp từ Núi Veruso, thí nghiệm trên con người để hiểu cơ chế Gems. <strong>Lady Dialla</strong> — người yêu của Malachai — trở thành vật thí nghiệm đầu tiên, bị biến thành <strong>"Gem Queen"</strong> — con người nửa gem nửa xương thịt, bất tử nhưng đau khổ vĩnh viễn. Doryani's Catalyst và nhiều vật phẩm thí nghiệm ra đời trong giai đoạn này.`,
                quote: 'Lady Dialla — "Gem Queen" — vật thí nghiệm bi thảm nhất lịch sử, bất tử trong đau khổ.',
            },
            {
                icon: '🗡️',
                title: 'Cuộc Nổi Dậy Thanh Khiết (~1333 IC)',
                text: `<strong>Purity Rebellion</strong> — cuộc cách mạng đẫm máu nhất lịch sử Đế Chế. <strong>High Templar Voll</strong> — kẻ cuồng tín chống thaumaturgy — lãnh đạo quân nổi dậy. <strong>King Kaom</strong> mang 500 chiến binh Karui tinh nhuệ đổ bộ, đánh bại nhiều tướng lĩnh Đế Chế (để lại di sản <strong>Kaom's Heart</strong> — giáp huyền thoại). Kiếm sĩ <strong>Daresso</strong> chiến đấu vì tình yêu với Merveil. Voll đánh bại Chitus, lên ngôi, nhưng phạm sai lầm <strong>tha mạng Malachai</strong> với điều kiện phá hủy Virtue Gems.`,
            },
            {
                icon: '💀',
                title: 'Đại Thảm Họa — The Cataclysm (~1339 IC)',
                text: `Malachai <strong>phản bội</strong>. Hắn bí mật tạo <strong>Rapture Device</strong> — thiết bị hút năng lượng từ Lady Dialla để mở cổng vào <strong>The Beast</strong>. Mục tiêu: chiếm đoạt sức mạnh Beast, trở thành thực thể toàn năng. Khi kích hoạt, năng lượng mất kiểm soát tạo ra <strong>The Cataclysm</strong> — Đại Thảm Họa hủy diệt hoàn toàn Đế Chế Vĩnh Cửu. Sarn biến thành đống hoang tàn tràn ngập undead. Wraeclast trở thành <strong>vùng đất bị nguyền rủa</strong> — đất đai nhiễm corruption, người chết sống dậy, quái vật tràn ngập.`,
                warning: 'Malachai không chết — hắn sống bên trong The Beast, trở thành một phần của nó, chờ đợi trong The Nightmare.',
            },
        ],
        table: {
            headers: ['Nhân vật', 'Vai trò', 'Di sản trong game'],
            rows: [
                ['Tarcus Veruso', 'Sáng lập Sarn & Đế Chế', 'Núi Veruso (nơi tìm Gems)'],
                ['Emperor Chitus', 'Hoàng Đế đỉnh cao quyền lực', 'Chitus\' Plum (unique flask)'],
                ['Malachai', 'Thầy phép thiên tài, kẻ phản bội', 'Act 4 Final Boss'],
                ['Lady Dialla', '"Gem Queen" — nạn nhân thí nghiệm', 'NPC Act 3 & 4'],
                ['High Templar Voll', 'Lãnh đạo Purity Rebellion', 'Voll\'s Devotion (amulet)'],
                ['King Kaom', 'Vua Karui, chiến binh huyền thoại', 'Kaom\'s Heart (body armour)'],
                ['Daresso', 'Kiếm sĩ chiến đấu vì tình yêu', 'Daresso\'s Defiance (body armour)'],
                ['General Lioneye', 'Tướng Đế Chế đánh Karui', 'Lioneye\'s Watch, Lioneye\'s Glare'],
                ['Merveil', 'Nàng tiên cá bị nguyền (vợ Daresso)', 'Act 1 Boss'],
            ],
            caption: 'Nhân Vật & Di Sản Trong Game',
        },
    },

    modern: {
        era: 'Kỷ V',
        title: 'Thời Hiện Đại — Path of Exile 1',
        subtitle: 'Hành trình của Exile trên vùng đất bị nguyền',
        cards: [
            {
                icon: '⛓️',
                title: 'Wraeclast — Thuộc Địa Lưu Đày',
                text: `Sau Đại Thảm Họa, Wraeclast trở thành vùng đất chết — đất đai <em>"thấm đẫm sức mạnh đen tối cổ đại"</em>, sinh vật hoang dã bị biến dạng, undead lang thang khắp nơi. Quốc gia <strong>Oriath</strong> — đảo quốc hải quân hùng mạnh ngoài khơi — sử dụng Wraeclast làm thuộc địa lưu đày cho tội phạm. Exile bị xích, ném lên thuyền, đày đến Wraeclast — nơi "không ai trở về".`,
            },
            {
                icon: '🏰',
                title: 'Oriath — Đảo Quốc Thần Quyền',
                text: `Oriath được cai trị bởi <strong>Giáo Đoàn Templar</strong> dưới quyền <strong>High Templar Dominus</strong> — kẻ bí mật thí nghiệm với Virtue Gems, cố gắng tái tạo thí nghiệm của Malachai. Dominus đến Wraeclast xây dựng phòng thí nghiệm tại Sarn, biến con người thành <strong>Miscreations</strong> — sinh vật đột biến. Người dân Oriath sống dưới ách thống trị tôn giáo, mọi phản kháng đều bị đày đến Wraeclast.`,
            },
        ],
        timeline: [
            {
                date: 'Act 1',
                title: 'Bờ Biển Hoang Dã',
                text: 'Exile dạt vào bờ biển, được cứu bởi dân cư <strong>Lioneye\'s Watch</strong>. Khám phá hang động, chiến đấu với undead và sinh vật hoang dã. Đánh bại <strong>Merveil</strong> — nàng tiên cá bị nguyền, từng là vợ của kiếm sĩ Daresso, bị biến đổi bởi <strong>Star of Wraeclast</strong> (unique amulet).',
            },
            {
                date: 'Act 2',
                title: 'Rừng Rậm & Giáo Phái Vaal',
                text: 'Xâm nhập rừng rậm hoang dã. Gặp <strong>Alira, Kraityn, Oak</strong> — ba thủ lĩnh bandit tranh giành quyền lực. Khám phá tàn tích Vaal, đối đầu với <strong>Vaal Oversoul</strong> — cỗ máy sinh học cổ đại vẫn hoạt động sau hàng ngàn năm.',
            },
            {
                date: 'Act 3',
                title: 'Sarn — Thành Phố Chết',
                text: 'Tiến vào <strong>Sarn</strong> hoang phế — thủ đô cũ giờ tràn ngập Undying (zombie thông minh) và Miscreations của Dominus. Gặp <strong>Lady Dialla</strong> (Gem Queen) — NPC then chốt giúp hiểu về lịch sử. Đánh bại <strong>Dominus</strong> trên đỉnh Sceptre of God.',
            },
            {
                date: 'Act 4',
                title: '⚠️ Xâm Nhập The Beast',
                text: 'Đi qua <strong>Highgate</strong> — ngôi làng Maraketh. Xâm nhập vào bên trong <strong>The Beast</strong> — một không gian kinh hoàng gọi là <strong>The Nightmare</strong>. Đối đầu linh hồn bị giam: <strong>Kaom</strong> (bị Malachai lừa hiến tế 500 chiến binh), <strong>Daresso</strong> (mắc kẹt trong ảo mộng). Cuối cùng giết <strong>Malachai</strong> và <strong>The Beast</strong>.',
            },
            {
                date: 'Act 5',
                title: '🔥 Trở Về Oriath — Kitava Thức Tỉnh',
                text: 'Exile trở về Oriath, phát hiện đảo quốc đang trong hỗn loạn. Cái chết của The Beast đã <strong>đánh thức tất cả các vị thần</strong>! <strong>Kitava — Thần Đói Khát</strong> của Karui trỗi dậy, nuốt chửng Oriath. Trận chiến đầu tiên với Kitava — Exile thua, mất tất cả Resistance (game mechanic).',
            },
            {
                date: 'Act 6-7',
                title: 'Wraeclast Biến Đổi',
                text: 'Quay lại Wraeclast — mọi thứ đã thay đổi hoàn toàn. Các vị thần thức dậy gây ra thiên tai: <strong>Tukohama</strong> đốt rừng, <strong>Arakaali</strong> (Nữ Thần Nhện) xây tổ trong hang động, <strong>Gruthkul</strong> thống trị đất hoang. Exile chiến đấu với từng vị thần, được <strong>Sin</strong> giúp đỡ — hấp thụ sức mạnh mỗi vị thần bị đánh bại.',
            },
            {
                date: 'Act 8-9',
                title: 'Sarn Ngập Nước & Cuộc Chiến Thần Linh',
                text: 'Sarn bị biến thành đầm lầy bởi sức mạnh thần linh. Đối đầu <strong>Solaris & Lunaris</strong> (Thần Mặt Trời & Mặt Trăng). Chiến đấu qua sa mạc Ngangari, đánh bại <strong>Garukhan</strong> (Thần Gió) và <strong>Shakari</strong> (Nữ Thần Sa Mạc). Thu thập đủ sức mạnh thần thánh.',
            },
            {
                date: 'Act 10',
                title: '⚔️ Trận Chiến Cuối Cùng',
                text: 'Oriath đã bị Kitava tàn phá. Với sức mạnh tổng hợp từ các vị thần, cùng sự hỗ trợ của <strong>Sin</strong> và <strong>Innocence</strong> (đã được cứu chuộc, từ bỏ sự tàn ác), Exile đánh bại <strong>Kitava</strong> trong trận chiến sử thi. Sin hy sinh phần lớn sức mạnh thần thánh.',
            },
        ],
        summary: {
            title: 'Kết Thúc POE 1',
            items: [
                '✅ The Beast bị giết — nguồn gốc thaumaturgy bị phá hủy',
                '✅ Malachai bị tiêu diệt vĩnh viễn',
                '✅ Kitava bị đánh bại, Oriath được giải phóng',
                '✅ Innocence được cứu chuộc, trở thành đồng minh',
                '✅ Sin hy sinh sức mạnh thần thánh để giúp Exile',
                '⚠️ Các vị thần đã thức tỉnh — thế giới không bao giờ như cũ',
                '⚠️ Corruption vẫn lan rộng trên Wraeclast',
                '⚠️ The Elder, The Shaper — các thế lực endgame vẫn đe dọa',
            ],
        },
    },

    poe2: {
        era: 'Kỷ VI',
        title: 'Path of Exile 2',
        subtitle: '20 năm sau khi Kitava bị đánh bại',
        cards: [
            {
                icon: '🔥',
                title: 'Thế Giới 20 Năm Sau',
                text: `<strong>20 năm</strong> sau sự kiện POE 1. Wraeclast đã thay đổi nhưng vẫn đầy nguy hiểm. Các nền văn minh cổ đại được khám phá sâu hơn — đặc biệt là <strong>nền văn minh tiền sử Proto-Vaal</strong>. Xung đột mới giữa các phe phái, thế lực bóng tối mới trỗi dậy từ những góc khuất chưa từng được khám phá.`,
            },
            {
                icon: '🗺️',
                title: 'Exile Mới & Câu Chuyện Mới',
                text: `Người chơi đóng vai một <strong>Exile mới</strong> với 6 class hoàn toàn mới: <strong>Warrior, Ranger, Sorceress, Monk, Mercenary, Witch</strong>. Hệ thống skill gem cách mạng — gem gắn trực tiếp vào nhân vật thay vì equipment. Khám phá vùng đất mới, đối mặt boss mới, và dần hé lộ những bí mật về <strong>nguồn gốc thực sự của Wraeclast</strong>.`,
            },
            {
                icon: '⚡',
                title: 'The Count of Ogham & Mối Đe Dọa Mới',
                text: `Một trong những antagonist chính là <strong>The Count of Ogham</strong> — kẻ thống trị vùng đất Ogham bằng necromancy. Hắn chỉ huy đạo quân undead khổng lồ, đe dọa những vùng đất còn sống sót. Những thế lực cổ đại khác cũng đang trỗi dậy — có thể liên quan đến nền văn minh Proto-Vaal và những bí ẩn sâu trong lòng đất.`,
            },
        ],
    },

    items: {
        era: 'Bách Khoa',
        title: 'Vật Phẩm Huyền Thoại',
        subtitle: 'Virtue Gems, Currency Orbs và Unique Items — mỗi vật phẩm đều mang một câu chuyện',
        cards: [
            {
                icon: '💎',
                title: 'Virtue Gems — Nguồn Gốc Mọi Sức Mạnh',
                text: `<strong>Virtue Gems</strong> là nền tảng của toàn bộ hệ thống phép thuật trong POE. Chúng là <strong>kết tinh năng lượng của The Beast</strong> — tương tự như trai biến cát thành ngọc trai, Beast biến năng lượng thần thánh thành dạng vật chất kết tinh. Người Vaal gọi chúng là <strong>"Nước Mắt của Maji" (Tears of Maji)</strong> và là nền văn minh đầu tiên khai thác chúng từ <strong>Núi Veruso</strong>. Một số lý thuyết cho rằng Gems có thể có nguồn gốc từ các Titan tiền sử — tạo ra qua hoạt động núi lửa trước cả khi Beast xuất hiện. Mỗi Virtue Gem chứa một <strong>"Ý Chí" (Volition)</strong> — một dạng ý thức nguyên thủy cho phép người sử dụng thi triển phép thuật.`,
                quote: 'Virtue Gems — không chỉ là công cụ phép thuật, mà là mảnh vỡ ý chí của một thực thể vũ trụ.',
            },
            {
                icon: '🔴',
                title: 'Vaal Gems & Corruption',
                text: `Người Vaal phát triển kỹ thuật <strong>Corruption</strong> — biến đổi Virtue Gems bằng năng lượng tối. <strong>Vaal Gems</strong> là phiên bản corrupted của skill gems thường, cho phép thi triển phiên bản <strong>cực mạnh nhưng tốn souls</strong> thay vì mana. <strong>Vaal Orb</strong> trong game là di sản trực tiếp — corrupt một item để thay đổi hoàn toàn, có thể cực tốt hoặc phá hủy. Kỹ thuật này cũng là nguyên nhân gián tiếp gây ra Đại Thảm Họa Vaal.`,
            },
        ],
        table: {
            headers: ['Currency', 'Ý Nghĩa Lore', 'Chức năng'],
            rows: [
                ['Mirror of Kalandra', 'Mảnh sức mạnh phản chiếu của Kalandra — thực thể cổ đại bị giam trong hồ. Vật phẩm quý nhất game', 'Nhân đôi chính xác 1 non-unique item'],
                ['Chaos Orb', 'Kết tinh sức mạnh Chaos — thực thể vũ trụ thao túng vận mệnh qua sự ngẫu nhiên', 'Re-roll ngẫu nhiên mods trên rare item'],
                ['Exalted Orb', 'Mang khuôn mặt méo mó — có thể là linh hồn bị giam hoặc tinh chất cô đọng thaumaturgy', 'Thêm 1 mod ngẫu nhiên vào rare item'],
                ['Divine Orb', 'Tinh chỉnh — đại diện cho sự hoàn hảo hóa, sức mạnh tối ưu hóa vật chất', 'Re-roll giá trị số của mods (giữ nguyên mod)'],
                ['Vaal Orb', 'Di sản kỹ thuật corruption của người Vaal — biến đổi bản chất vật phẩm', 'Corrupt item — thay đổi không thể đảo ngược'],
                ['Alchemy Orb', 'Biến vật thường thành phi thường — phép thuật nền tảng nhất của thaumaturgy', 'Nâng normal item lên rare'],
                ['Regal Orb', 'Khuôn mặt hoàng gia — nâng cấp đẳng cấp vật phẩm', 'Nâng magic lên rare (giữ mods)'],
            ],
            caption: '💰 Currency Orbs & Lore',
        },
    },

    world: {
        era: 'Phụ Lục',
        title: 'Thế Giới Wraeclast',
        subtitle: 'Địa điểm, dân tộc, thế lực và unique items huyền thoại',
        locations: {
            headers: ['Địa điểm', 'Mô tả', 'Ý nghĩa'],
            rows: [
                ['Sarn', 'Thủ đô Đế Chế Vĩnh Cửu — giờ hoang tàn tràn ngập Undying', 'Act 3, 8'],
                ['Oriath', 'Đảo quốc Templar, nơi Exile bị đày đi', 'Act 5, 10'],
                ["Lioneye's Watch", 'Pháo đài của tướng Lioneye, nơi Exile đặt chân đầu tiên', 'Act 1 Town'],
                ['Highgate', 'Làng Maraketh cạnh lối vào The Beast', 'Act 4, 9 Town'],
                ['Tàn Tích Vaal', 'Di tích ngàn năm với bẫy vẫn hoạt động', 'Vaal Side Areas'],
                ['Núi Veruso', 'Nơi tìm thấy Virtue Gems đầu tiên', 'Nguồn gốc Gems'],
                ['The Beast', 'Sinh vật khổng lồ dưới lòng đất, nguồn thaumaturgy', 'Act 4 Dungeon'],
                ['Atlas of Worlds', 'Mạng lưới vô hạn các thế giới song song', 'Endgame Maps'],
                ['Azurite Mine', 'Mỏ sâu vô tận chứa di tích Proto-Vaal', 'Delve League'],
            ],
        },
        races: {
            headers: ['Dân tộc', 'Đặc điểm', 'Lịch sử'],
            rows: [
                ['Azmeri', 'Người sáng lập Đế Chế Vĩnh Cửu', 'Sống sót Mùa Đông nhờ hang núi'],
                ['Karui', 'Chiến binh mạnh mẽ, thờ nhiều vị thần', 'Bị Đế Chế nô dịch, nổi dậy cùng Kaom'],
                ['Maraketh', 'Dân du mục sa mạc, cưỡi thú', 'Sống sót Mùa Đông, bị đàn áp'],
                ['Ezomyte', 'Dân tộc to lớn phía bắc', 'Bị Đế Chế bắt làm nô lệ & đấu sĩ'],
                ['Vaal', 'Nền văn minh cổ đại đã diệt vong', 'Phát hiện Virtue Gems, bị hủy diệt'],
                ['Eternal', 'Hậu duệ Azmeri thời Đế Chế', 'Cai trị → sụp đổ cùng Đại Thảm Họa'],
            ],
        },
        uniques: {
            headers: ['Vật phẩm', 'Loại', 'Câu chuyện'],
            rows: [
                ["Kaom's Heart", 'Body Armour', 'Giáp của Vua Kaom — +500 HP nhưng không có socket. Tượng trưng sức mạnh thô bạo Karui — không cần phép thuật, chỉ cần sức mạnh thuần túy.'],
                ['Starforge', 'Sword', 'Kiếm cổ đại do Watchers of Decay rèn để giam giữ The Elder. High Templar Venarius đã rút kiếm, giải phóng Elder. Chuyển mọi sát thương thành physical.'],
                ["Atziri's Mirror", 'Shield', 'Gương Nữ Hoàng Atziri — biểu tượng sự phù phiếm. Phản chiếu hex curse lại kẻ thù, như Atziri phản chiếu mọi sự phán xét.'],
                ["Doryani's Catalyst", 'Sceptre', 'Cây quyền trượng thí nghiệm của Doryani — tăng mọi elemental damage. Công cụ hắn dùng để nghiên cứu sự bất tử.'],
                ["Voll's Devotion", 'Amulet', 'Bùa hộ mệnh của High Templar Voll — sinh Endurance Charge khi dùng Power Charge. Tượng trưng đức tin cuồng tín.'],
                ["Lioneye's Glare", 'Bow', 'Cung của tướng Lioneye — hits không bao giờ miss. Đại diện cho sự chính xác quân sự tuyệt đối của Đế Chế.'],
                ['Headhunter', 'Belt', 'Đai lưng của thợ săn đầu — giết rare monster hấp thụ mods của chúng. Một trong những item hiếm và mạnh nhất game.'],
                ['Mageblood', 'Belt', 'Kết nối trực tiếp với dòng máu phép thuật — tự động kích hoạt flask. Di sản thí nghiệm sinh-thần học Vaal.'],
            ],
        },
    },
};
