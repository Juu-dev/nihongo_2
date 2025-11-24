export const GRAMMAR_GROUP = {
    group1: "Thời Gian và Trình Tự",
    group2: "Nguyên Nhân, Lý Do, Điều Kiện",
    group3: "Sự Tương Phản, So Sánh, Tình trạng",
    group4: "Mức Độ, Phạm Vi, Giới Hạn",
    group5: "Ý Chí, Quyết Định, Cố Gắng",
    group6: "Mệnh Lệnh, Khuyên Bảo, Đề Xuất",
    group7: "Giả Định, Suy Đoán, Kết Luận",
    group8: "Dẫn Lời, Thông Tin",
    group9: "Phủ Định Kép, Khẳng Định Gián Tiếp",
    group10: "Các Mẫu Ngữ Pháp Khác",
}

export const GRAMMAR_DATA = [
    {
        id: 1,
        group: GRAMMAR_GROUP.group1,
        title: "うちに",
        structure: "Vru・N-no ・A(na)・A(i)",
        meaning: "Diễn tả việc làm V2 trong khi trạng thái V1 còn đang tiếp diễn, thường mang ý nghĩa tranh thủ hoặc trước khi một sự thay đổi xảy ra. Đôi khi dùng để diễn tả một sự việc V2 xảy ra trong lúc V1 đang tiếp diễn mà người nói không chủ ý hoặc không biết.",
        examples: [
            { original: "日本にいるうちに一度富士山に登ってみたい。", translate: "Trong khi còn đang ở Nhật, tôi muốn thử leo núi Phú Sĩ một lần." },
            { original: "明るいうちに、犬の散歩を済ませてしまおう。", translate: "Trong lúc trời còn sáng, hãy hoàn thành việc dắt chó đi dạo đi." },
            { original: "雨が降らないうちに、早く帰りましょう。", translate: "Trong lúc trời chưa mưa, hãy về nhà sớm thôi." },
            { original: "知らないうちに、テレビが壊れていた。", translate: "Tôi không biết từ lúc nào mà TV đã bị hỏng rồi." }
        ]
    },
    {
        id: 2,
        group: GRAMMAR_GROUP.group1,
        title: "間・間に",
        structure: "Vru ・N-no",
        meaning: "「間」 diễn tả một hành động・trạng thái V2 xảy ra suốt trong khoảng thời gian V1. 「間に」 diễn tả một hành động V2 xảy ra vào một thời điểm nào đó trong suốt khoảng thời gian V1. ",
        examples: [
            { original: "彼は会議の間ずっと眠りをしていた。", translate: "Anh ấy đã ngủ suốt trong cuộc họp." },
            { original: "留守の間にどろぼうが入った。", translate: "Trong lúc vắng nhà, trộm đã vào." },
            { original: "夏休みの間、ずっと祖母の家に滞재した。", translate: "Trong suốt kỳ nghỉ hè, tôi ở lại nhà bà." },
            { original: "お母さんが買い物に行っている間に、宿題を終わらせた。", translate: "Trong lúc mẹ đi mua sắm, tôi đã hoàn thành bài tập về nhà." }
        ]
    },
    {
        id: 4,
        group: GRAMMAR_GROUP.group1,
        title: "Vる・Vている・Vたところ",
        structure: "Vるところ・Vているところ・Vたところ:",
        meaning: "Biểu thị thời điểm của hành động: Vるところ (sắp sửa làm V); Vているところ (đang trong lúc làm V); Vたところ (vừa mới làm V xong).",
        examples: [
            { original: "ロケットは間もなく飛び立つところです。", translate: "Tên lửa sắp sửa phóng lên." },
            { original: "試験中、隣の人の答えを見ているところを先生に注意された。", translate: "Trong lúc thi, tôi bị giáo viên nhắc nhở vì nhìn bài của người bên cạnh." },
            { original: "今、ご飯を食べ終わったところだ。", translate: "Bây giờ tôi vừa mới ăn cơm xong." },
            { original: "ちょうど家を出ようとしたところです。", translate: "Tôi vừa đúng lúc đang định ra khỏi nhà." }
        ]
    },
    {
        id: 11,
        group: GRAMMAR_GROUP.group1,
        title: "ついでに",
        structure: "N-no ・Vru",
        meaning: "Diễn tả việc nhân tiện làm một hành động chính (V1), thì tiện thể làm thêm một hành động phụ (V2) nào đó. (Lưu ý: V1 là hành động chính, V2 là hành động phụ).",
        examples: [
            { original: "散歩のついでにこのはがきをポストに出してきて。", translate: "Nhân tiện đi dạo, gửi giùm tôi cái bưu thiếp này vào thùng thư nhé." },
            { original: "デパートへ買い物に行ったついでに、母の日のプレゼントも買ってきた。", translate: "Nhân tiện đi mua sắm ở cửa hàng bách hóa, tôi cũng mua luôn quà Ngày của Mẹ." },
            { original: "駅前の本屋に寄ったついでに、雑誌を買った。", translate: "Nhân tiện ghé qua hiệu sách trước ga, tôi đã mua một cuốn tạp chí." },
            { original: "銀行へ行くついでに、郵便局へも寄ろう。", translate: "Nhân tiện đi ngân hàng, ghé qua bưu điện luôn." }
        ]
    },
    {
        id: 81,
        group: GRAMMAR_GROUP.group1,
        title: "～最中に",
        structure: "Vている ・N+の",
        meaning: "Diễn tả việc một hành động khác (thường là bất ngờ hoặc gây cản trở) xảy ra đúng lúc (giữa lúc) một hành động・trạng thái V1 đang tiếp diễn. Nhấn mạnh sự đúng lúc.",
        examples: [
            { original: "会議の最中に停電になった。", translate: "Đúng lúc đang họp thì mất điện." },
            { original: "食事の最中に、友達から電話がかかってきた。", translate: "Đúng lúc đang ăn cơm thì có điện thoại từ bạn gọi đến." },
            { original: "スピーチの最中に、突然気分が悪くなった。", translate: "Đúng lúc đang phát biểu, đột nhiên tôi cảm thấy không khỏe." },
            { original: "発表の最中、急に資料が落ちてしまった。", translate: "Trong lúc đang trình bày, tài liệu đột nhiên bị rơi." }
        ]
    },
    {
        id: 82,
        group: GRAMMAR_GROUP.group1,
        title: "～たとたん",
        structure: "Vた",
        meaning: "Diễn tả một sự việc V2 xảy ra ngay lập tức, một cách bất ngờ, ngay sau khi hành động V1 vừa mới kết thúc. Hành động V2 thường là ngoài dự đoán của người nói.",
        examples: [
            { original: "窓を開けたとたん、強い風が入ってきた。", translate: "Vừa mới mở cửa sổ ra thì gió mạnh ùa vào." },
            { original: "空が暗くなったとたん、大粒の雨が降ってきた。", translate: "Vừa mới thấy trời tối sầm lại thì mưa hạt lớn đã rơi xuống." },
            { original: "ベルが鳴ったとたん、子どもたちは教室を飛び出した。", translate: "Vừa mới có chuông reo thì lũ trẻ đã nhảy ra khỏi lớp học." },
            { original: "彼がタバコを吸い始めたとたん、咳が出た。", translate: "Vừa mới thấy anh ta bắt đầu hút thuốc thì tôi đã bị ho." }
        ]
    },
    {
        id: 83,
        group: GRAMMAR_GROUP.group1,
        title: "～から～にかけて",
        structure: "～N～N",
        meaning: "Diễn tả một khoảng thời gian hoặc không gian không xác định rõ điểm bắt đầu và kết thúc, mà chỉ mang tính ước lượng, khái quát từ... đến....",
        examples: [
            { original: "このブドウは8月から9月にかけて収穫されます。", translate: "Loại nho này được thu hoạch từ tháng 8 đến tháng 9." },
            { original: "昨夜から今朝にかけて、強い風が吹いた。", translate: "Từ đêm qua đến sáng nay, gió mạnh đã thổi." },
            { original: "関東地方から東北地方にかけて、広い範囲で雪が降った。", translate: "Tuyết đã rơi trên một phạm vi rộng từ vùng Kanto đến vùng Tohoku." },
            { original: "昼前から午後にかけて、強い雨が降るでしょう。", translate: "Từ trước buổi trưa đến chiều, có lẽ trời sẽ mưa to." }
        ]
    },
    {
        id: 97,
        group: GRAMMAR_GROUP.group1,
        title: "Vたきり",
        structure: "Vたきり",
        meaning: "Diễn tả sau khi một hành động V1 xảy ra, thì không có sự thay đổi nào nữa, hoặc không xảy ra hành động tiếp theo như mong đợi. Thường mang sắc thái tiếc nuối hoặc bất mãn. (Nghĩa khác là chỉ).",
        examples: [
            { original: "ひろしは本屋へ行ったきり、まだ戻ってこない。", translate: "Hiroshi đi đến hiệu sách từ bận đó, vẫn chưa quay lại." },
            { original: "彼とは一度会ったきり、連絡がない。", translate: "Kể từ khi gặp anh ấy một lần, không có liên lạc gì nữa." },
            { original: "母は出かけたきり、まだ帰ってこない。", translate: "Mẹ tôi đi ra ngoài từ bận đó, vẫn chưa về nhà." },
            { original: "その本は、読んだきり、どこかに置いて忘れてしまった。", translate: "Cuốn sách đó, kể từ khi đọc xong, tôi đã để đâu đó và quên mất." }
        ]
    },
    {
        id: 101,
        group: GRAMMAR_GROUP.group1,
        title: "Vます+はじめる",
        structure: "Vます+はじめる",
        meaning: "Diễn tả hành động V bắt đầu xảy ra hoặc bắt đầu thực hiện. Thường chỉ sự bắt đầu của một trạng thái, hành động kéo dài.",
        examples: [
            { original: "日本語は二年前勉強しはじめた。", translate: "Tôi bắt đầu học tiếng Nhật từ hai năm trước." },
            { original: "桜の花が咲き始めましたね。", translate: "Hoa anh đào đã bắt đầu nở rồi nhỉ." },
            { original: "先週からうちで猫を飼い始めました。とても可愛いです。", translate: "Tôi bắt đầu nuôi mèo ở nhà từ tuần trước. Nó rất dễ thương." },
            { original: "「いただきます」と言って、みんな一緒に食べ始めました。", translate: "Mọi người nói 「いただきます」rồi bắt đầu ăn cùng nhau." }
        ]
    },
    {
        id: 102,
        group: GRAMMAR_GROUP.group1,
        title: "Vてはじめて",
        structure: "Vてはじめて",
        meaning: "Diễn tả việc kể từ khi làm V1, thì người nói mới lần đầu tiên nhận ra, hiểu ra hoặc có được một trải nghiệm V2 nào đó.",
        examples: [
            { original: "一人暮らしをして初めて、家族の大切さをわかってきた。", translate: "Kể từ khi sống một mình, tôi mới hiểu được tầm quan trọng của gia đình." },
            { original: "ガンになってはじめて、健康のありがたさがわかりました。", translate: "Chỉ khi bị ung thư, tôi mới hiểu được sự quý giá của sức khỏe." },
            { original: "東京にきてはじめて、自分の住む田舎との違いに気づいた。", translate: "Chỉ sau khi đến Tokyo, tôi mới nhận ra sự khác biệt với vùng quê tôi đang sống." },
            { original: "子供を産んではじめて、母の強さがわかりました。", translate: "Chỉ sau khi sinh con, tôi mới hiểu được sự mạnh mẽ của người mẹ." }
        ]
    },
    {
        id: 103,
        group: GRAMMAR_GROUP.group1,
        title: "Vます+たて",
        structure: "Vます+たて",
        meaning: "Diễn tả hành động V vừa mới hoàn thành xong. Thường dùng để khen ngợi chất lượng tốt nhất khi mới hoàn thành (ví dụ: món ăn, đồ vật, ...)",
        examples: [
            { original: "焼きたてのパンはおいしいですね。", translate: "Bánh mì vừa nướng xong ngon thật đấy." },
            { original: "これは炊きたてのご飯です。", translate: "Đây là cơm vừa nấu xong." },
            { original: "あのスーパーはとりたての新鮮な野菜を売っている。", translate: "Siêu thị kia đang bán rau tươi vừa hái." },
            { original: "出来立ての豚かつ（とんかつ）はさくさくしていますね。", translate: "Món thịt heo chiên xù vừa làm xong giòn tan nhỉ." }
        ]
    },
    {
        id: 105,
        group: GRAMMAR_GROUP.group1,
        title: "Vます+かけ",
        structure: "Vます+かけ",
        meaning: "Diễn tả một hành động V còn đang dang dở, chưa hoàn thành xong, hoặc đang trong giai đoạn bắt đầu làm V.",
        examples: [
            { original: "これは私の読みかけの本です。", translate: "Đây là cuốn sách tôi đang đọc dở." },
            { original: "お風呂に入りかけたときに、電話が鳴った。", translate: "Đúng lúc tôi sắp sửa vào bồn tắm thì điện thoại reo." },
            { original: "彼のことが好きだと言いかけてやめた。", translate: "Tôi định nói thích anh ấy nhưng lại dừng lại (nói dở)." },
            { original: "食べかけのリンゴを机の上に置いたまま出かけた。", translate: "Tôi để quả táo đang ăn dở trên bàn rồi đi ra ngoài." }
        ]
    },
    {
        id: 106,
        group: GRAMMAR_GROUP.group1,
        title: "Vます+上がる・上げる",
        structure: "Vます+上がる ・Vます+上げる",
        meaning: "Diễn tả hành động V được hoàn thành・kết thúc một cách trọn vẹn. Thường dùng với những hành động cần thời gian và nỗ lực để hoàn thành (ví dụ: viết, vẽ, xây dựng, ...).",
        examples: [
            { original: "やっとレポートを書き上がりました。", translate: "Cuối cùng thì tôi cũng viết xong báo cáo rồi." },
            { original: "ケーキが焼き上がりましたよ。", translate: "Bánh kem đã nướng xong rồi đấy." },
            { original: "ご飯が炊き上がった。", translate: "Cơm đã nấu xong." },
            { original: "プレゼント用のセーターを編み上げた。", translate: "Tôi đã đan xong chiếc áo len để làm quà tặng." }
        ]
    },

    {
        id: 3,
        group: GRAMMAR_GROUP.group2,
        title: "てからでないと・てからでなければ",
        structure: "V-Te",
        meaning: "Diễn tả điều kiện bắt buộc. Nếu không làm hành động V1, thì không thể thực hiện hoặc khó mà thực hiện hành động V2 được (V2 thường là thể phủ định, phủ định ý chí・khả năng).",
        examples: [
            { original: "家族と相談してからでないと、買うかどうかまだ決められない。", translate: "Nếu chưa thảo luận với gia đình, tôi vẫn chưa thể quyết định mua hay không." },
            { original: "この書類は、上司に確認してからでないと出せません。", translate: "Tài liệu này, nếu chưa được cấp trên xác nhận thì không thể gửi đi được." },
            { original: "免許を取ってからでないと、車は運転できません。", translate: "Nếu chưa lấy được bằng lái thì không thể lái xe ô tô được." },
            { original: "この薬は、食事をしてからでないと飲んではいけません。", translate: "Loại thuốc này, nếu chưa ăn cơm thì không được uống." }
        ]
    },
    {
        id: 20,
        group: GRAMMAR_GROUP.group2,
        title: "～ため(に)・～ためだ",
        structure: "Vru ・N-no",
        meaning: "Diễn tả nguyên nhân, lý do mang tính khách quan, thường dùng trong văn viết, thông báo, hoặc chỉ ra nguyên nhân dẫn đến một kết quả・hậu quả nào đó.",
        examples: [
            { original: "報告書にミスが多かったのは、よく見直しをしなかったためだろう。", translate: "Báo cáo có nhiều lỗi là do đã không kiểm tra lại kỹ lưỡng." },
            { original: "大雪のため、電車が遅延している。", translate: "Vì tuyết lớn, xe điện đang bị trễ giờ." },
            { original: "病気のため、学校を休んだ。", translate: "Vì bị bệnh nên tôi đã nghỉ học." },
            { original: "円高のため、海外旅行者が減少した。", translate: "Vì đồng Yên tăng giá, số lượng khách du lịch nước ngoài đã giảm." }
        ]
    },
    {
        id: 21,
        group: GRAMMAR_GROUP.group2,
        title: "～によって",
        structure: "N+によって",
        meaning: "1. Chỉ nguyên nhân dẫn đến một kết quả・hậu quả (thường là kết quả tiêu cực, mang tính trang trọng). 2. Chỉ phương tiện, cách thức để thực hiện hành động. 3. Chỉ sự tùy thuộc・khác nhau (dùng với 〜によっては).",
        examples: [
            { original: "材料不足によってたたみの生産はもうできなくなった。", translate: "Do thiếu nguyên liệu nên không thể sản xuất chiếu Tatami nữa." },
            { original: "外国語を学ぶことによって、考え方も知ることができる。", translate: "Nhờ vào việc học ngoại ngữ, chúng ta có thể biết được cả cách suy nghĩ (của họ)." },
            { original: "インターネットによって、瞬時に情報が手に入る。", translate: "Nhờ vào internet, thông tin có thể được nắm bắt trong tích tắc." },
            { original: "地震によって、多くの家が倒壊した。", translate: "Do động đất, nhiều ngôi nhà đã bị sụp đổ." }
        ]
    },
    {
        id: 22,
        group: GRAMMAR_GROUP.group2,
        title: "～から・ことから",
        structure: "Vru+ことから・N+から",
        meaning: "Diễn tả một cơ sở, căn cứ hoặc nguồn gốc để đưa ra một kết luận, suy đoán, hoặc phán đoán ở vế sau. (V2 là kết quả được rút ra từ V1).",
        examples: [
            { original: "顔がよく似ていることから、二人は親子だとすぐにわかった。", translate: "Vì khuôn mặt rất giống nhau, tôi liền biết ngay hai người là cha con・mẹ con." },
            { original: "何度も練習したことから、試合に勝つことができた。", translate: "Vì đã luyện tập nhiều lần nên chúng tôi đã có thể thắng trận đấu." },
            { original: "いつも真面目な彼が遅刻したことから、何かあったに違いない。", translate: "Vì người vốn nghiêm túc như anh ấy lại đi học muộn, chắc chắn là đã có chuyện gì đó xảy ra." },
            { original: "この山は形が富士山に似ていることから、『〇〇富士』と呼ばれている。", translate: "Vì ngọn núi này có hình dáng giống núi Phú Sĩ nên được gọi là 'Núi Phú Sĩ 〇〇'." }
        ]
    },
    {
        id: 23,
        group: GRAMMAR_GROUP.group2,
        title: "おかげだ・おかげで",
        structure: "N+no・Vru",
        meaning: "Diễn tả nhờ vào một nguyên nhân, sự giúp đỡ nào đó mà dẫn đến một kết quả tốt đẹp, tích cực ở vế sau. Đôi khi dùng để châm biếm, mỉa mai.",
        examples: [
            { original: "いい会社に就職が決まったのは先生のおかげです。ありがとうございます。", translate: "Việc tôi được nhận vào một công ty tốt là nhờ công ơn của thầy. Em xin cảm ơn ạ." },
            { original: "友達が手伝ってくれたおかげで、引っ越しが早く終わった。", translate: "Nhờ bạn bè giúp đỡ nên việc chuyển nhà đã kết thúc sớm." },
            { original: "早めに病院に行ったおかげで、大したことにはならなかった。", translate: "Nhờ đi bệnh viện sớm nên không có chuyện gì nghiêm trọng xảy ra." },
            { original: "皆さんの応援のおかげで、優勝することができました。", translate: "Nhờ sự cổ vũ của mọi người, chúng tôi đã có thể giành chiến thắng." }
        ]
    },
    {
        id: 24,
        group: GRAMMAR_GROUP.group2,
        title: "せいで・せいだ",
        structure: "Vru・N+no ・Ana+na",
        meaning: "Diễn tả do, tại vì một nguyên nhân nào đó mà dẫn đến một kết quả tiêu cực, xấu ở vế sau. Thường mang ý đổ lỗi, trách cứ.",
        examples: [
            { original: "最近、忙しかったせいで、かなり疲れている。", translate: "Dạo gần đây, do bận rộn nên tôi khá mệt mỏi." },
            { original: "電車の遅延のせいで、会議に遅れてしまった。", translate: "Tại việc xe điện bị trễ giờ nên tôi đã đến muộn cuộc họp." },
            { original: "彼の不注意なせいで、事故が起こった。", translate: "Do sự bất cẩn của anh ấy nên đã xảy ra tai nạn." },
            { original: "ゲームをしすぎたせいで、目が悪くなった。", translate: "Vì chơi game quá nhiều nên mắt tôi đã bị kém đi." }
        ]
    },
    {
        id: 25,
        group: GRAMMAR_GROUP.group2,
        title: "のだから・んだから",
        structure: "N・Na+na ・A・V",
        meaning: "Diễn tả vì thực sự là... (một sự thật, một lý do hiển nhiên) nên vế sau là một kết luận đương nhiên, hợp lý, hoặc là một lời khuyên, mệnh lệnh. Mang sắc thái nhấn mạnh lý do.",
        examples: [
            { original: "まだ子供なのだから、わからなくても仕方がないでしょう。", translate: "Vì còn là trẻ con, nên không hiểu cũng là điều đương nhiên." },
            { original: "もう大人なんだから、自分のことは自分で決めるべきだ。", translate: "Vì đã là người lớn rồi, nên phải tự quyết định việc của mình." },
            { original: "病気で熱があるんだから、無理しないで早く寝なさい。", translate: "Vì bị bệnh và đang sốt, nên đừng cố gắng mà hãy đi ngủ sớm đi." },
            { original: "約束したんだから、守るのが当たり前だ。", translate: "Vì đã hứa rồi, nên việc giữ lời là đương nhiên." }
        ]
    },
    {
        id: 26,
        group: GRAMMAR_GROUP.group2,
        title: "～(の)なら",
        structure: "Vru+(の)なら・N・Ana+なら",
        meaning: "Diễn tả điều kiện giả định cho một hành động, phán đoán ở vế sau. Người nói dựa trên thông tin hoặc giả định mà mình nghe được・đưa ra để yêu cầu・khuyên nhủ・phán đoán.",
        examples: [
            { original: "真相を知っているのなら、私に教えてほしい。", translate: "Nếu anh biết sự thật, xin hãy nói cho tôi biết." },
            { original: "雨が降るのなら、傘を持っていったほうがいい。", translate: "Nếu trời mưa, nên mang theo dù thì tốt hơn." },
            { original: "彼が行かないのなら、私も行かない。", translate: "Nếu anh ấy không đi, tôi cũng sẽ không đi." },
            { original: "旅行へ行くのなら、お土産を買ってきてね。", translate: "Nếu bạn đi du lịch, hãy mua quà lưu niệm về cho tôi nhé." }
        ]
    },
    {
        id: 27,
        group: GRAMMAR_GROUP.group2,
        title: "～ては・～(の)では",
        structure: "A+kuては・N・Naでは・Vては",
        meaning: "Diễn tả một điều kiện tiêu cực dẫn đến một kết quả tiêu cực. Thường mang ý nghĩa: nếu điều kiện V1・N・A này xảy ra thì kết quả V2 sẽ khó khăn, không thể thực hiện được hoặc sẽ dẫn đến hậu quả xấu.",
        examples: [
            { original: "この仕事に時給500円では人が見つかりません。", translate: "Với công việc này mà mức lương 500 yên một giờ thì không thể tìm được người đâu." },
            { original: "そんなに急いでいては、必ず事故を起こすよ。", translate: "Nếu cứ vội vã như thế, nhất định sẽ gây ra tai nạn đấy." },
            { original: "毎日徹夜をしては、体がもたないだろう。", translate: "Nếu ngày nào cũng thức trắng đêm thì cơ thể sẽ không chịu nổi đâu." },
            { original: "こんなに暑くては、外で遊べない。", translate: "Nếu nóng thế này thì không thể chơi bên ngoài được." }
        ]
    },
    {
        id: 28,
        group: GRAMMAR_GROUP.group2,
        title: "～さえ～ば・～さえ～なら",
        structure: "Vます+さえ～ば ・N+さえ～なら",
        meaning: "Diễn tả điều kiện tối thiểu để một sự việc xảy ra. Mang ý nghĩa: chỉ cần có điều kiện V1・N này là đủ, những điều kiện khác không quan trọng.",
        examples: [
            { original: "あなたさえそばにいてくだされば、ほかにはなにもいりません。", translate: "Chỉ cần có em ở bên cạnh, tôi không cần gì khác nữa." },
            { original: "水さえあれば、生きていける。", translate: "Chỉ cần có nước, tôi có thể sống được." },
            { original: "この問題はペンさえあれば、解ける。", translate: "Vấn đề này, chỉ cần có bút là có thể giải được." },
            { original: "天気さえよければ、今日の試合は中止にならないだろう。", translate: "Chỉ cần thời tiết tốt, trận đấu hôm nay sẽ không bị hoãn." }
        ]
    },
    {
        id: 30,
        group: GRAMMAR_GROUP.group2,
        title: "たとえ～ても・～でも",
        structure: "Vても ・N・Ana・Ai+でも",
        meaning: "Diễn tả sự nhượng bộ, đối lập mạnh mẽ. Mang ý nghĩa: cho dù có điều kiện V1・N・A xảy ra đi nữa thì kết quả V2 vẫn không thay đổi (V2 thường là ý chí, quyết tâm, phán đoán của người nói).",
        examples: [
            { original: "たとえ周りの人たちにどんなに反対されても、僕はプロの歌手になりたい。", translate: "Cho dù những người xung quanh có phản đối đến thế nào, tôi vẫn muốn trở thành ca sĩ chuyên nghiệp." },
            { original: "たとえ失敗しても、もう一度挑戦したい。", translate: "Cho dù thất bại, tôi vẫn muốn thử thách lại một lần nữa." },
            { original: "たとえ反対されても、自分の意見を曲げるつもりはない。", translate: "Cho dù bị phản đối, tôi vẫn không có ý định thay đổi ý kiến của mình." },
            { original: "たとえ誰にも理解されなくても、私はこの道を信じて進む。", translate: "Cho dù không được ai hiểu, tôi vẫn tin vào con đường này và tiếp tục tiến lên." }
        ]
    },
    {
        id: 75,
        group: GRAMMAR_GROUP.group2,
        title: "ばかりに",
        structure: "Vtaばかりに・Aばかりに",
        meaning: "Diễn tả chỉ vì・chỉ tại một nguyên nhân, lý do nào đó mà dẫn đến một kết quả xấu, ngoài ý muốn ở vế sau. Mang sắc thái hối tiếc, trách móc.",
        examples: [
            { original: "働きがないばかりに、妻にバカにされている。", translate: "Chỉ vì không có việc làm nên tôi bị vợ coi thường." },
            { original: "一言余計なことを言ったばかりに、彼女を怒らせてしまった。", translate: "Chỉ vì lỡ nói một lời thừa thãi nên tôi đã làm cô ấy giận." },
            { original: "うっかり傘を忘れたばかりに、びしょ濡れになってしまった。", translate: "Chỉ vì lỡ quên dù nên tôi đã bị ướt sũng." },
            { original: "お金がないばかりに、留学をあきらめた。", translate: "Chỉ vì không có tiền nên tôi đã từ bỏ việc du học." }
        ]
    },
    {
        id: 84,
        group: GRAMMAR_GROUP.group2,
        title: "～(んだ)もの・もん",
        structure: "Vる",
        meaning: "Diễn tả lý do cá nhân, chủ quan trong văn nói, dùng để giải thích, biện minh hoặc làm nũng. Mang sắc thái thân mật, nhẹ nhàng hơn so với から・ので. (Chỉ dùng ở cuối câu, thường là cho phụ nữ và trẻ em).",
        examples: [
            { original: "勉強しなかっただもん、仕方がない。", translate: "Ấy là tại vì tôi không học, nên đành chịu thôi." },
            { original: "「どうして食べないの？」「だって、お腹が空いてないんだもん。」", translate: "「Sao không ăn?」「Tại vì bụng tôi không đói mà.」" },
            { original: "今日はパーティーに行きたくない。だって、疲れているんだもの。", translate: "Hôm nay tôi không muốn đi tiệc. Bởi vì tôi mệt rồi." },
            { original: "「手伝ってあげようか？」「いいよ。簡単だもん。」", translate: "「Để tôi giúp cậu nhé?」「Thôi được rồi. Vì nó đơn giản mà.」" }
        ]
    },

    {
        id: 5,
        group: GRAMMAR_GROUP.group3,
        title: "とおり(に・だ)・どおり(に・だ)",
        structure: "Vru ・N-noとおり・N+どおり",
        meaning: "Diễn tả hành động V2 được thực hiện theo đúng như nội dung V1・N. Nếu N là danh từ chỉ hành động thì dùng 「〜どおり」. ",
        examples: [
            { original: "人生は自分の思うとおりにはいかない。", translate: "Cuộc đời không diễn ra theo đúng như mình nghĩ." },
            { original: "彼の言うとおりにしたら、うまくいった。", translate: "Nếu làm theo đúng như lời anh ấy nói, thì sẽ thành công." },
            { original: "設計図どおりに家を建てた。", translate: "Tôi đã xây nhà đúng theo bản thiết kế." },
            { original: "私が習ったとおりにやってみましょう。", translate: "Hãy thử làm đúng như những gì tôi đã học." }
        ]
    },
    {
        id: 6,
        group: GRAMMAR_GROUP.group3,
        title: "によって・によっては",
        structure: "N+",
        meaning: "「によって」 diễn tả sự khác biệt tùy vào từng đối tượng・trường hợp N. 「によっては」 diễn tả tùy vào từng trường hợp đặc biệt N mà có thể xảy ra một sự việc・kết quả khác (thường mang sắc thái ngoại lệ).",
        examples: [
            { original: "国によって習慣が違う。", translate: "Tùy vào mỗi quốc gia mà phong tục khác nhau." },
            { original: "明日は、所によっては、雨が降るかもしれない。", translate: "Ngày mai, tùy từng nơi có lẽ trời sẽ mưa." },
            { original: "人によって考え方はさまざまだ。", translate: "Cách suy nghĩ thì rất đa dạng tùy vào mỗi người." },
            { original: "場合によっては、予定を変更することもある。", translate: "Tùy vào trường hợp, có khi sẽ phải thay đổi kế hoạch." }
        ]
    },
    {
        id: 7,
        group: GRAMMAR_GROUP.group3,
        title: "たびに",
        structure: "Vru ・N-no",
        meaning: "Diễn tả một hành động V2 lặp lại cứ mỗi khi hành động V1・sự việc N xảy ra. V2 thường là một sự thật, một thói quen hoặc một cảm xúc lặp lại.",
        examples: [
            { original: "山に行くたびに雨に降られる。", translate: "Cứ mỗi lần tôi đi lên núi là lại gặp mưa." },
            { original: "この曲を聞くたびに、学生時代を思い出す。", translate: "Cứ mỗi khi nghe bài hát này, tôi lại nhớ về thời học sinh." },
            { original: "彼は会うたびに、新しいアイデアを出す。", translate: "Cứ mỗi lần gặp, anh ấy lại đưa ra một ý tưởng mới." },
            { original: "デパートへ行くたびに、何か余計なものを買ってしまう。", translate: "Cứ mỗi lần đi đến cửa hàng bách hóa, tôi lại mua thêm cái gì đó không cần thiết." }
        ]
    },
    {
        id: 8,
        group: GRAMMAR_GROUP.group3,
        title: "ば、～ほど",
        structure: "Thể điều kiện giả định trướcば ・Thể thông thường trước ほど",
        meaning: "Diễn tả mối quan hệ tỉ lệ thuận: càng V1・A・N thì càng V2・A・N (mức độ・trạng thái càng tăng lên).",
        examples: [
            { original: "物が増えれば増えるほど整理が大変になる。", translate: "Đồ vật càng nhiều thì việc sắp xếp càng vất vả." },
            { original: "練習すればするほど、上手に話せるようになる。", translate: "Càng luyện tập thì càng nói chuyện giỏi." },
            { original: "複雑な問題であればあるほど、解決に時間がかかる。", translate: "Vấn đề càng phức tạp thì càng tốn thời gian giải quyết." },
            { original: "給料が高ければ高いほどいい。", translate: "Lương càng cao thì càng tốt." }
        ]
    },
    {
        id: 15,
        group: GRAMMAR_GROUP.group3,
        title: "～に対して",
        structure: "Vru-no・N",
        meaning: "1. Chỉ đối tượng mà hành động V2 hướng tới. 2. Chỉ sự đối lập, tương phản giữa hai sự việc V1 và V2 (V1 là một sự thật, V2 là sự thật trái ngược).",
        examples: [
            { original: "目上の人に対して、敬語を使います。", translate: "Đối với người lớn tuổi hơn, chúng ta sử dụng kính ngữ." },
            { original: "大阪では大雨だったのに対して、東京はいい天気だった。", translate: "Trái ngược với Osaka trời mưa lớn, Tokyo lại có thời tiết đẹp." },
            { original: "お客様に対して、失礼な態度をとってはいけない。", translate: "Đối với khách hàng, không được có thái độ thất lễ." },
            { original: "兄は社交的なのに対して、弟は内気だ。", translate: "Trái ngược với anh trai hòa đồng, em trai lại nhút nhát." }
        ]
    },
    {
        id: 16,
        group: GRAMMAR_GROUP.group3,
        title: "～反面",
        structure: "Vru",
        meaning: "Diễn tả cùng một sự vật・sự việc có hai mặt đối lập cùng tồn tại. Mang ý nghĩa: một mặt thì có đặc điểm A, mặt khác thì lại có đặc điểm B (thường là sự đánh giá・cảm nhận).",
        examples: [
            { original: "都会の生活は面白いことが多い反面、ストレスも多い。", translate: "Cuộc sống thành thị có nhiều điều thú vị, mặt khác cũng có nhiều căng thẳng." },
            { original: "パソコンは便利な反面、トラブルも起きやすい。", translate: "Máy tính cá nhân tiện lợi, nhưng mặt khác cũng dễ xảy ra sự cố." },
            { original: "この薬はよく効く反面、副作用もある。", translate: "Thuốc này có hiệu quả tốt, nhưng mặt khác cũng có tác dụng phụ." },
            { original: "一人旅は自由な反面、寂しさも感じる。", translate: "Du lịch một mình thì tự do, nhưng mặt khác cũng cảm thấy cô đơn." }
        ]
    },
    {
        id: 17,
        group: GRAMMAR_GROUP.group3,
        title: "一方(で)",
        structure: "Vru",
        meaning: "1. Diễn tả hai hành động・trạng thái diễn ra đồng thời tại cùng một thời điểm. 2. Diễn tả hai mặt đối lập của một vấn đề (tương tự 反面, nhưng dùng được cho cả hành động).",
        examples: [
            { original: "会議では自分の意見を言う一方で、他の人の話もよく聞いてください。", translate: "Trong cuộc họp, một mặt thì hãy nói lên ý kiến của mình, mặt khác cũng hãy lắng nghe lời người khác." },
            { original: "地球上では、砂漠化が進む一方で、水害の被害も増えている。", translate: "Trên Trái Đất, một mặt thì sa mạc hóa đang diễn ra, mặt khác thiệt hại do lũ lụt cũng đang tăng lên." },
            { original: "彼女は外で働く一方で、家事もきちんとこなしている。", translate: "Cô ấy vừa đi làm bên ngoài, mặt khác vẫn chu toàn công việc nhà." },
            { original: "彼は真面目な学生である一方、サッカー部のエースでもある。", translate: "Anh ấy là một sinh viên nghiêm túc, đồng thời cũng là át chủ bài của đội bóng đá." }
        ]
    },
    {
        id: 18,
        group: GRAMMAR_GROUP.group3,
        title: "というより",
        structure: "Vru・N・Ana・Ai",
        meaning: "Diễn tả sự đính chính・so sánh về cách gọi tên・mô tả. Mang ý nghĩa: nên nói là Y thì đúng hơn là nói là X (X là mô tả・tên gọi ban đầu, Y là mô tả・tên gọi chính xác hơn).",
        examples: [
            { original: "みちこは歩くのが速い。歩くというより走るという感じだ。", translate: "Michiko đi rất nhanh. Cảm giác như không phải đi mà là chạy thì đúng hơn." },
            { original: "彼は知らないというより、教えたくないのだと思う。", translate: "Tôi nghĩ rằng anh ấy không phải là không biết, mà là không muốn nói thì đúng hơn." },
            { original: "今日の天気は晴れというより、快晴だ。", translate: "Thời tiết hôm nay không chỉ là nắng mà là trời quang mây tạnh thì đúng hơn." },
            { original: "彼女はきれいというより、かわいいという印象だ。", translate: "Cô ấy mang lại ấn tượng không phải là đẹp mà là dễ thương thì đúng hơn." }
        ]
    },
    {
        id: 19,
        group: GRAMMAR_GROUP.group3,
        title: "～かわりに",
        structure: "Vru",
        meaning: "1. Diễn tả sự thay thế: làm V2 thay cho V1. 2. Diễn tả sự bù đắp: một mặt có ưu điểm・khuyết điểm A, bù lại・đổi lại mặt khác lại có ưu điểm・khuyết điểm B.",
        examples: [
            { original: "リーさんに英語を教えてもっらっているかわりに、リーさんの仕事を手伝っている。", translate: "Tôi dạy tiếng Anh cho anh Lee, đổi lại anh ấy giúp tôi công việc." },
            { original: "私は料理を作るかわりに、弟が掃除をする。", translate: "Tôi nấu ăn, đổi lại em trai tôi dọn dẹp." },
            { original: "このスマホは高性能なかわりに、値段が高い。", translate: "Chiếc điện thoại thông minh này có hiệu suất cao, bù lại giá thì đắt." },
            { original: "部長は厳しいが、そのかわりに社員の面倒見がいい。", translate: "Trưởng phòng thì nghiêm khắc, nhưng bù lại rất quan tâm đến nhân viên." }
        ]
    },
    {
        id: 65,
        group: GRAMMAR_GROUP.group3,
        title: "(かの)ようだ・のようだ",
        structure: "N・Vru",
        meaning: "Diễn tả sự so sánh, ví von rằng sự vật・sự việc X giống như là Y (Y là một điều không có thật, hoặc không phải là sự thật), thể hiện sự suy đoán, cảm nhận mạnh mẽ của người nói.",
        examples: [
            { original: "今日は暖かくて、まるで春が来たかのようだ。", translate: "Hôm nay ấm áp, cứ như là mùa xuân đã đến vậy." },
            { original: "うちの夫はまるで赤ちゃんのようだ。", translate: "Chồng tôi cứ như là một đứa bé vậy." },
            { original: "彼女は背が高くて、まるでモデルのようだ。", translate: "Cô ấy cao ráo, cứ như là người mẫu vậy." },
            { original: "その絵はまるで生きているかのようだ。", translate: "Bức tranh đó cứ như là đang sống vậy." }
        ]
    },
    {
        id: 66,
        group: GRAMMAR_GROUP.group3,
        title: "～ように",
        structure: "Nno ・Vru",
        meaning: "1. So sánh: Giống như N・V. 2. Liệt kê ví dụ: Chẳng hạn như N.",
        examples: [
            { original: "人間のように、植物にも栄養が必要だ。", translate: "Giống như con người, thực vật cũng cần dinh dưỡng." },
            { original: "私はにんじんやピーマンのような濃い色の野菜が好きだ。", translate: "Tôi thích những loại rau có màu đậm như cà rốt và ớt chuông." },
            { original: "彼のように日本語が話せるようになりたい。", translate: "Tôi muốn có thể nói tiếng Nhật như anh ấy." },
            { original: "あの人の話し方は、まるで先生のようだ。", translate: "Cách nói chuyện của người đó cứ như là một giáo viên vậy." }
        ]
    },
    {
        id: 67,
        group: GRAMMAR_GROUP.group3,
        title: "ように",
        structure: "N+no・Vru",
        meaning: "Diễn tả việc hành động・trạng thái sau được thực hiện đúng như nội dung đã được nói, nghe, biết trước đó (V1・N).",
        examples: [
            { original: "前にも話したように、来週は私が日本にいません。", translate: "Đúng như tôi đã nói trước, tuần sau tôi không có mặt ở Nhật." },
            { original: "先生がおっしゃったように、この問題は難しい。", translate: "Đúng như lời giáo viên đã nói, vấn đề này rất khó." },
            { original: "皆さんがご存じのように、彼は去年のオリンピックの金メダリストです。", translate: "Như mọi người đều biết, anh ấy là người giành huy chương vàng Olympic năm ngoái." },
            { original: "私が書いたように、書類を作成してください。", translate: "Hãy tạo tài liệu đúng như những gì tôi đã viết." }
        ]
    },
    {
        id: 76,
        group: GRAMMAR_GROUP.group3,
        title: "。。も。。ば。。も",
        structure: "Nも。。ば Nも",
        meaning: "Diễn tả sự liệt kê đồng thời nhiều sự vật, sự việc, trạng thái. Mang ý nghĩa: vừa có N1, lại vừa có N2 (hoặc: vừa làm V1, lại vừa làm V2).",
        examples: [
            { original: "彼は心臓が悪いくせに酒も飲めば煙草も吸う", translate: "Anh ấy bị bệnh tim mà vừa uống rượu vừa hút thuốc." },
            { original: "この学校には、大学院生もいれば留学生もいる。", translate: "Ở trường này, có cả sinh viên cao học lẫn du học sinh." },
            { original: "私の故郷は海も近ければ山も近いので、とても住みやすい。", translate: "Quê tôi vừa gần biển lại vừa gần núi nên rất dễ sống." },
            { original: "彼女はピアノも弾けるし、歌も歌える。", translate: "Cô ấy vừa chơi được piano, lại vừa hát hay." }
        ]
    },
    {
        id: 95,
        group: GRAMMAR_GROUP.group3,
        title: "Vたまま・Vますっぱなし",
        structure: "Vたまま・Vますっぱなし",
        meaning: "Diễn tả hành động V2 được thực hiện trong khi vẫn giữ nguyên trạng thái V1. Thường dùng cho các hành động cần thiết phải thay đổi trạng thái nhưng lại bị bỏ quên・cố tình giữ nguyên (ví dụ: mặc nguyên quần áo, bật nguyên điện...).",
        examples: [
            { original: "テレビをつけっぱなしで寝てしました。", translate: "Tôi để TV bật nguyên rồi ngủ quên mất." },
            { original: "靴を履いたまま家に入ってはいけません。", translate: "Không được đi vào nhà khi vẫn còn mang giày." },
            { original: "あの家は留守らしい、洗濯物が２，３日前から干しっぱなしです。", translate: "Nhà đó hình như vắng người, quần áo phơi cứ để nguyên từ 2, 3 ngày trước." },
            { original: "彼は電気をつけっぱなしで出かけた。", translate: "Anh ấy để đèn bật nguyên rồi đi ra ngoài." }
        ]
    },
    {
        id: 98,
        group: GRAMMAR_GROUP.group3,
        title: "～ふりをする",
        structure: "Vる ・Ana+な・N+の",
        meaning: "Diễn tả hành động giả vờ là có・đang ở trạng thái V・N・A nào đó, nhưng thực tế thì không phải vậy. Thường là giả vờ để che giấu sự thật.",
        examples: [
            { original: "彼は政治について知っているふりをするが、本当は知らないと思う。", translate: "Anh ấy giả vờ biết về chính trị, nhưng tôi nghĩ thực ra là không biết." },
            { original: "知らないふりをして、そのまま通り過ぎた。", translate: "Tôi giả vờ như không biết và đi thẳng qua." },
            { original: "病気のふりをして、会社を休んだ。", translate: "Tôi giả vờ bị bệnh để nghỉ làm ở công ty." },
            { original: "彼女は聞こえないふりをしている。", translate: "Cô ấy giả vờ như không nghe thấy." }
        ]
    },
    {
        id: 99,
        group: GRAMMAR_GROUP.group3,
        title: "～くせに",
        structure: "Vる ・Ana+な ・N+の",
        meaning: "Diễn tả sự tương phản, đối lập giữa hai vế V1・N・A và V2. Mang ý nghĩa mặc dù (V1・N・A) vậy mà (V2), thường mang sắc thái chê trách, coi thường đối với hành động・trạng thái V2.",
        examples: [
            { original: "知っているくせに、教えてくれなかった。", translate: "Mặc dù biết vậy mà không chịu nói cho tôi biết." },
            { original: "彼は学生のくせに、あまり勉強しない。", translate: "Mặc dù là học sinh vậy mà anh ấy không học hành gì cả." },
            { original: "体の弱い父は、薬を飲まないくせに、元気だと言い張る。", translate: "Bố tôi cơ thể yếu, mặc dù không uống thuốc vậy mà vẫn cứ khăng khăng là khỏe." },
            { original: "お金がないくせに、高いものを買いたがる。", translate: "Mặc dù không có tiền vậy mà cứ muốn mua đồ đắt tiền." }
        ]
    },

    {
        id: 9,
        group: GRAMMAR_GROUP.group4,
        title: "ぐらい",
        structure: "N・Vru",
        meaning: "1. Mức độ・phạm vi: Cỡ bằng N・V (so sánh, ước lượng). 2. Tối thiểu: Chí ít・Ít ra cũng phải có・làm V・N (nhấn mạnh mức độ tối thiểu).",
        examples: [
            { original: "日曜日ぐらい休ませてください。", translate: "Ít nhất thì cũng cho tôi nghỉ vào Chủ Nhật đi." },
            { original: "うちの娘ぐらいの女の子が泣いていた。", translate: "Có một cô bé cỡ bằng con gái tôi đang khóc." },
            { original: "彼女ぐらいの成績があれば、志望校に合格できるだろう。", translate: "Nếu có thành tích cỡ như cô ấy, có lẽ sẽ đỗ vào trường mong muốn." },
            { original: "10分ぐらいで終わる簡単な仕事だ。", translate: "Đó là một công việc đơn giản chỉ mất khoảng 10 phút để hoàn thành." }
        ]
    },
    {
        id: 10,
        group: GRAMMAR_GROUP.group4,
        title: "くらい・ほど",
        structure: "Vru・N",
        meaning: "Diễn tả sự so sánh, mức độ tột cùng. Mang ý nghĩa: đến mức, tới mức. Thường dùng để cường điệu hóa sự việc hoặc cảm xúc.",
        examples: [
            { original: "毎日食べたいくらいだ。", translate: "Ngon đến mức ngày nào cũng muốn ăn." },
            { original: "この小説は涙が出るほど感動的だった。", translate: "Cuốn tiểu thuyết này cảm động đến mức làm tôi rơi nước mắt." },
            { original: "彼は疲れて、立っていられないくらいだった。", translate: "Anh ấy mệt đến mức không thể đứng vững được." },
            { original: "そんなに怒るほどのことではないだろう。", translate: "Chắc là chuyện này không đến mức phải giận dữ như vậy đâu." }
        ]
    },
    {
        id: 12,
        group: GRAMMAR_GROUP.group4,
        title: "くらい～Nはない・ほど～Nはない",
        structure: "N+",
        meaning: "Diễn tả sự so sánh tuyệt đối. Mang ý nghĩa: Không có N nào bằng V・A・N1. Dùng để nhấn mạnh N1 là tốt nhất, tồi tệ nhất, hay nhất... (mức độ cao nhất).",
        examples: [
            { original: "私は料理を作ることぐらい楽しいことはないと思っています。", translate: "Tôi nghĩ không có việc gì vui bằng việc nấu ăn." },
            { original: "テストはどいやなものはない", translate: "Không có thứ gì đáng ghét bằng bài kiểm tra." },
            { original: "彼ほど親切な人はいない。", translate: "Không có ai tốt bụng bằng anh ấy." },
            { original: "彼女くらい歌が上手な人には会ったことがない。", translate: "Tôi chưa từng gặp ai hát hay bằng cô ấy." }
        ]
    },
    {
        id: 13,
        group: GRAMMAR_GROUP.group4,
        title: "ぐらいなら・くらいなら",
        structure: "Vru",
        meaning: "Diễn tả sự lựa chọn tương đối. Mang ý nghĩa: nếu phải làm hành động V1 (một điều khó khăn, không mong muốn) thì thà làm hành động V2 (V2 thường đi kèm với ほうがいい ・ほうがましだ).",
        examples: [
            { original: "あいつに助けてもらうくらいなら、死んだほうがました。", translate: "Nếu phải nhận sự giúp đỡ của hắn ta, thà chết còn hơn." },
            { original: "満員電車に乗るくらいなら、歩いたほうがましだ。", translate: "Nếu phải đi tàu điện đông người như vậy, thà đi bộ còn hơn." },
            { original: "嫌いなものを無理して食べるくらいなら、何も食べない方がいい。", translate: "Nếu phải cố gắng ăn thứ mình ghét, thà không ăn gì còn hơn." },
            { original: "一人で旅行に行くくらいなら、行かないほうがいい。", translate: "Nếu phải đi du lịch một mình, thà không đi còn hơn." }
        ]
    },
    {
        id: 14,
        group: GRAMMAR_GROUP.group4,
        title: "Nに限る",
        structure: "N・Vru",
        meaning: "Diễn tả sự khẳng định tuyệt đối. Mang ý nghĩa: Là nhất, là tốt nhất. Thường thể hiện kinh nghiệm, cảm nhận cá nhân hoặc chân lý.",
        examples: [
            { original: "やっぱり映画は映画館で見るに限る。", translate: "Quả thật, xem phim ở rạp là tuyệt nhất." },
            { original: "疲れている時は早く寝るに限るよ。", translate: "Lúc mệt mỏi thì ngủ sớm là tốt nhất đấy." },
            { original: "寒い日はやっぱり鍋に限るよね。", translate: "Ngày lạnh thì quả thật món lẩu là tuyệt nhất nhỉ." },
            { original: "風邪予防はやっぱり手洗い、うがいに限る。", translate: "Phòng ngừa cảm cúm thì rửa tay, súc miệng là tốt nhất." }
        ]
    },
    {
        id: 29,
        group: GRAMMAR_GROUP.group4,
        title: "N+さえ",
        structure: "N+さえ",
        meaning: "Diễn tả mức độ cao・phạm vi rộng. Mang ý nghĩa: ngay cả・đến cả N (một điều hiển nhiên・tối thiểu) cũng... (thường đi với phủ định để nhấn mạnh sự thiếu thốn, hoặc dùng để liệt kê ví dụ tối thiểu).",
        examples: [
            { original: "冷蔵庫には卵さえ入っていない。", translate: "Trong tủ lạnh đến cả trứng cũng không còn." },
            { original: "彼は日本語さえ話せない。", translate: "Anh ấy đến cả tiếng Nhật cũng không nói được." },
            { original: "忙しくて、食事をする時間さえない。", translate: "Vì bận rộn nên đến cả thời gian ăn uống cũng không có." },
            { original: "この問題は先生でさえ解けなかった。", translate: "Vấn đề này đến cả giáo viên cũng không giải được." }
        ]
    },
    {
        id: 56,
        group: GRAMMAR_GROUP.group4,
        title: "N+でも",
        structure: "N+でも",
        meaning: "1. Mức độ cao・phạm vi rộng: Thậm chí・Ngay cả N cũng. 2. Liệt kê ví dụ (tùy ý): Những thứ như là N (thể hiện sự lựa chọn không quan trọng, chẳng hạn như N).",
        examples: [
            { original: "そんなことは子供でも知っている。", translate: "Chuyện đó thì đến cả trẻ con cũng biết." },
            { original: "お茶でも飲みましょうか。", translate: "Uống trà hay gì đó nhé?" },
            { original: "私でよければ、手伝いでもしましょうか。", translate: "Nếu tôi được thì để tôi giúp đỡ (những việc nhỏ nhặt) nhé?" },
            { original: "疲れている時は、甘いものでも食べたい。", translate: "Khi mệt, tôi muốn ăn thứ gì đó ngọt." }
        ]
    },
    {
        id: 57,
        group: GRAMMAR_GROUP.group4,
        title: "も",
        structure: "N+も",
        meaning: "Diễn tả sự nhấn mạnh vào số lượng, sự đầy đủ (đi kèm với phủ định thì mang ý hoàn toàn không), hoặc sự bao hàm, mở rộng đến ngay cả (tương tự như さえ・まで).",
        examples: [
            { original: "一日も休まないで学校に通った。", translate: "Tôi đến trường mà không nghỉ dù chỉ một ngày." },
            { original: "こんなに高い山の上にも店がある。", translate: "Trên đỉnh núi cao như thế này cũng có cửa hàng." },
            { original: "私はお酒を一口も飲まない。", translate: "Tôi không uống dù chỉ một ngụm rượu." },
            { original: "何一つも心配いらない。", translate: "Không cần lo lắng bất cứ điều gì cả." }
        ]
    },
    {
        id: 58,
        group: GRAMMAR_GROUP.group4,
        title: "まで",
        structure: "N+まで",
        meaning: "Diễn tả sự bao hàm ngoài dự kiến. Mang ý nghĩa: Tới cả N (một phạm vi, đối tượng vượt quá mong đợi) cũng nằm trong phạm vi đó.",
        examples: [
            { original: "会ったことがない人まで年賀状を出した。", translate: "Tôi đã gửi thiệp chúc Tết tới cả những người chưa từng gặp mặt." },
            { original: "彼は家族にまで秘密にしていた。", translate: "Anh ấy đã giữ bí mật tới cả gia đình." },
            { original: "自分の親友にまで騙された。", translate: "Tôi đã bị lừa bởi cả người bạn thân của mình." },
            { original: "子供の将来を心配して、夜も眠れないほどだ。", translate: "Lo lắng cho tương lai của con cái đến mức đêm cũng không ngủ được." }
        ]
    },
    {
        id: 61,
        group: GRAMMAR_GROUP.group4,
        title: "～にとって",
        structure: "N+",
        meaning: "Diễn tả sự đánh giá, cảm nhận, quan điểm được nhìn nhận đối với N (một người, một nhóm, một tổ chức nào đó) hay từ lập trường của N.",
        examples: [
            { original: "若い女性にとって買い物は楽しいことです。", translate: "Đối với phụ nữ trẻ, mua sắm là một niềm vui." },
            { original: "私にとって、家族が一番大切だ。", translate: "Đối với tôi, gia đình là quan trọng nhất." },
            { original: "彼にとって、仕事の成功がすべてだ。", translate: "Đối với anh ấy, thành công trong công việc là tất cả." },
            { original: "子供たちにとって、公園は大切な遊び場だ。", translate: "Đối với trẻ em, công viên là nơi vui chơi quan trọng." }
        ]
    },
    {
        id: 62,
        group: GRAMMAR_GROUP.group4,
        title: "～として",
        structure: "N+",
        meaning: "Diễn tả tư cách, vai trò, chức năng của N (một người, một vật, hoặc một hành động). Mang ý nghĩa: với tư cách là・với vai trò là N.",
        examples: [
            { original: "私はコーヒーカップを花びんとして使っています。", translate: "Tôi đang dùng cốc cà phê như một cái bình hoa." },
            { original: "彼は留学生として日本に来た。", translate: "Anh ấy đến Nhật với tư cách là du học sinh." },
            { original: "この国では、彼の意見は専門家の意見として尊重されている。", translate: "Ở đất nước này, ý kiến của anh ấy được tôn trọng với tư cách là ý kiến của một chuyên gia." },
            { original: "彼女はボランティアとして、老人ホームで働いている。", translate: "Cô ấy đang làm việc tại viện dưỡng lão với vai trò là tình nguyện viên." }
        ]
    },
    {
        id: 63,
        group: GRAMMAR_GROUP.group4,
        title: "ことがある・こともある",
        structure: "Vru",
        meaning: "Diễn tả sự việc V thỉnh thoảng, đôi khi xảy ra. (Khác với Vたことがある là kinh nghiệm: đã từng làm V).",
        examples: [
            { original: "妻は僕が話しかけても返事をしないことがある。", translate: "Có lúc vợ tôi không trả lời dù tôi có bắt chuyện." },
            { original: "彼は時々、人の名前を間違えることがある。", translate: "Anh ấy thỉnh thoảng có lúc nhầm tên người khác." },
            { original: "忙しいので、昼ご飯を食べないこともある。", translate: "Vì bận rộn nên có lúc tôi cũng không ăn trưa." },
            { original: "私は朝ごはんをパンで済ませることがある。", translate: "Có lúc tôi ăn sáng qua loa bằng bánh mì." }
        ]
    },
    {
        id: 70,
        group: GRAMMAR_GROUP.group4,
        title: "N (+trợ từ) ばかり",
        structure: "N+ばかり",
        meaning: "Diễn tả sự tập trung quá mức vào N. Mang ý nghĩa: chỉ toàn là N, không có hoặc rất ít thứ khác (thường mang sắc thái tiêu cực, bất mãn).",
        examples: [
            { original: "夜遅く変な電話ばかりかかってくる。", translate: "Khuya rồi mà cứ toàn là cuộc điện thoại lạ gọi đến." },
            { original: "このクラスは女子学生ばかりだ。", translate: "Lớp học này chỉ toàn là nữ sinh." },
            { original: "部屋がほこりばかりで、掃除が必要だ。", translate: "Phòng toàn là bụi, cần phải dọn dẹp." },
            { original: "最近は雨ばかりで、洗濯物が乾かない。", translate: "Dạo gần đây toàn mưa nên quần áo giặt không khô được." }
        ]
    },
    {
        id: 71,
        group: GRAMMAR_GROUP.group4,
        title: "Vてばかりいる",
        structure: "Vてばかりいる",
        meaning: "Diễn tả việc chỉ làm hành động V (một cách lặp đi lặp lại) và không làm việc khác. Mang sắc thái tiêu cực, chỉ trích vì sự lười biếng hoặc quá đà.",
        examples: [
            { original: "彼は寝てばかりいる。", translate: "Anh ấy cứ ngủ suốt ngày." },
            { original: "彼は文句を言ってばかりで、何もしない。", translate: "Anh ấy cứ than phiền suốt mà không làm gì cả." },
            { original: "テレビを見てばかりで、勉強しない。", translate: "Cứ xem TV suốt mà không chịu học." },
            { original: "最近、彼は家に帰るとテレビを見てばかりいる。", translate: "Gần đây, anh ấy cứ về nhà là lại xem TV suốt." }
        ]
    },
    {
        id: 73,
        group: GRAMMAR_GROUP.group4,
        title: "ばかりか=ばかりでなく",
        structure: "Vru・N・Ana・Ai",
        meaning: "Diễn tả sự liệt kê tăng tiến, không chỉ... mà còn. Mang ý nghĩa: không chỉ sự việc V1・N・A (đã hiển nhiên), mà còn cả sự việc V2 (mức độ cao hơn, hoặc ngoài dự đoán).",
        examples: [
            { original: "会社の同僚ばかりか家族までが私をバカにしている。", translate: "Không chỉ đồng nghiệp công ty mà đến cả gia đình cũng coi thường tôi." },
            { original: "山田さんは英語ばかりでなく中国語も話せる。", translate: "Anh Yamada không chỉ nói được tiếng Anh mà còn nói được cả tiếng Trung." },
            { original: "彼は頭がいいばかりか、スポーツも得意だ。", translate: "Anh ấy không chỉ thông minh mà còn giỏi cả thể thao." },
            { original: "彼女は歌が上手なばかりでなく、ピアノも弾ける。", translate: "Cô ấy không chỉ hát hay mà còn chơi được cả piano." }
        ]
    },
    {
        id: 74,
        group: GRAMMAR_GROUP.group4,
        title: "Vるばかりだ",
        structure: "Vるばかりだ",
        meaning: "1. Xu hướng: Chỉ ra một trạng thái, tình hình cứ V (cứ xấu đi, cứ tốt lên, ...), không có dấu hiệu thay đổi. 2. Hoàn tất: Hành động V đã được chuẩn bị xong, chỉ còn chờ hành động cuối cùng・cơ hội để thực hiện.",
        examples: [
            { original: "父の病気は悪くなるばかりでした。", translate: "Bệnh của bố tôi cứ ngày càng xấu đi." },
            { original: "荷物もみんな用意して、すぐにも出かけるばかりです。", translate: "Hành lý đã chuẩn bị xong hết, chỉ còn chờ đi ra ngoài ngay thôi." },
            { original: "一度環境が悪化すると、改善するのは難しく、悪くなるばかりだ。", translate: "Một khi môi trường đã xấu đi, việc cải thiện là khó và chỉ có xấu đi mà thôi." },
            { original: "あとは彼女からの返事を待つばかりだ。", translate: "Còn lại chỉ là chờ đợi câu trả lời từ cô ấy." }
        ]
    },
    {
        id: 88,
        group: GRAMMAR_GROUP.group4,
        title: "～にすぎない",
        structure: "Vる・N+にすぎない",
        meaning: "Diễn tả sự giới hạn, khiêm tốn. Mang ý nghĩa: chỉ là, đơn giản chỉ là N・V mà thôi, không có gì hơn thế (thường dùng để đánh giá khách quan một sự thật).",
        examples: [
            { original: "彼はただ子供にすぎないから、一人暮らすことをできないよ。", translate: "Anh ấy chỉ là một đứa trẻ, nên không thể sống một mình được đâu." },
            { original: "それは単なるうわさにすぎない。", translate: "Đó chỉ là một lời đồn đại mà thôi." },
            { original: "会議で私の役割は、資料を配ることにすぎなかった。", translate: "Trong cuộc họp, vai trò của tôi chỉ đơn giản là phát tài liệu." },
            { original: "私にできることは、慰めの言葉をかけることにすぎない。", translate: "Điều tôi có thể làm chỉ là nói những lời an ủi mà thôi." }
        ]
    },
    {
        id: 93,
        group: GRAMMAR_GROUP.group4,
        title: "～しかない・～ほか(は)ない",
        structure: "Vる",
        meaning: "Diễn tả sự giới hạn, bắt buộc. Mang ý nghĩa: không còn cách nào khác ngoài việc làm V, đành phải V (vì không có sự lựa chọn nào khác).",
        examples: [
            { original: "新しいのを買うしかない。", translate: "Không còn cách nào khác ngoài việc mua cái mới." },
            { original: "上司の命令ので、従うほかはない。", translate: "Vì là mệnh lệnh của cấp trên nên đành phải tuân theo thôi." },
            { original: "バスが行ってしまったので、歩いて行くしかなかった。", translate: "Vì xe buýt đã đi rồi nên tôi không còn cách nào khác ngoài đi bộ." },
            { original: "事故で電車が止まったので、復旧を待つほかない。", translate: "Vì tàu điện dừng do tai nạn nên đành phải đợi phục hồi thôi." }
        ]
    },
    {
        id: 96,
        group: GRAMMAR_GROUP.group4,
        title: "N+きり・N+っきり",
        structure: "N+",
        meaning: "Diễn tả sự giới hạn về số lượng hoặc đối tượng. Mang ý nghĩa: chỉ có N mà thôi (tương tự だけ). (「っきり」thân mật hơn).",
        examples: [
            { original: "2人っきりで話したいです。", translate: "Tôi muốn nói chuyện chỉ có hai người thôi." },
            { original: "財布には千円きりしか残っていない。", translate: "Trong ví chỉ còn lại 1000 yên." },
            { original: "彼に会ったのは一度きりだ。", translate: "Tôi chỉ gặp anh ấy có một lần duy nhất." },
            { original: "今日は彼女ときり二人でデートした。", translate: "Hôm nay tôi đã hẹn hò chỉ có hai người với cô ấy." }
        ]
    },
    {
        id: 107,
        group: GRAMMAR_GROUP.group4,
        title: "N+だらけ",
        structure: "N+だらけ",
        meaning: "Diễn tả một trạng thái đầy, toàn là N (N thường là những thứ bẩn thỉu, tiêu cực, gây khó chịu như: bụi, vết thương, lỗi sai, máu, ...).",
        examples: [
            { original: "毎日サッカーをしているので、傷だらけになった。", translate: "Vì ngày nào cũng đá bóng nên người tôi toàn là vết thương." },
            { original: "彼のレポートは間違いだらけだった。", translate: "Bản báo cáo của anh ấy toàn là lỗi sai." },
            { original: "服が泥だらけになった。", translate: "Quần áo bị lấm bùn hết." },
            { original: "この本は漢字だらけで、読みにくい。", translate: "Cuốn sách này toàn là chữ Hán, rất khó đọc." }
        ]
    },
    {
        id: 108,
        group: GRAMMAR_GROUP.group4,
        title: "Vます+きる・切れる",
        structure: "Vます+きる・切れる",
        meaning: "Vきる: 1. Hoàn thành V một cách triệt để, trọn vẹn. 2. Làm V hết sức, hết mức. V切れる: Diễn tả khả năng hoàn thành hết, làm hết V.",
        examples: [
            { original: "ご飯の量が多くて、食べきれなかった。", translate: "Lượng cơm quá nhiều nên tôi không thể ăn hết được." },
            { original: "長い小説を2日間で読み切った。", translate: "Tôi đã đọc xong hoàn toàn cuốn tiểu thuyết dài trong 2 ngày." },
            { original: "数え切れないほどたくさん星が光っている。", translate: "Có rất nhiều ngôi sao đang tỏa sáng đến mức không thể đếm hết được." },
            { original: "こんなにたくさんの仕事を一日ではやりきれない。", translate: "Không thể hoàn thành hết từng này công việc chỉ trong một ngày được." }
        ]
    },
    {
        id: 110,
        group: GRAMMAR_GROUP.group4,
        title: "Vます+通す",
        structure: "Vます+通す",
        meaning: "Diễn tả hành động V được thực hiện liên tục, suốt từ đầu đến cuối, hoặc kiên trì thực hiện V đến cùng, bất chấp khó khăn hay phản đối.",
        examples: [
            { original: "彼は何を聞かれても、黙り通した。", translate: "Anh ấy bị hỏi bất cứ điều gì cũng giữ im lặng suốt." },
            { original: "自分の決めたことを最後までやり通す。", translate: "Tôi sẽ làm điều mình đã quyết định đến cùng." },
            { original: "私は反対意見を押し切り、自分の考えを言い通した。", translate: "Tôi đã bác bỏ ý kiến phản đối và giữ vững quan điểm của mình đến cùng." },
            { original: "彼は一度も休まずに、働き通した。", translate: "Anh ấy đã làm việc liên tục mà không nghỉ một lần nào." }
        ]
    },

    {
        id: 45,
        group: GRAMMAR_GROUP.group5,
        title: "させてもらいたい・させていただきたい・させてほしい",
        structure: "Vさせ+てもらう・ていただく・てほしい",
        meaning: "Diễn tả mong muốn được ai đó cho phép mình làm một hành động V nào đó. (させてほしい: mong muốn, させてもらいたい: mong muốn được nhận sự cho phép, させていただきたい: hình thức khiêm nhường hơn của させてもらいたい).",
        examples: [
            { original: "私に行かせてほしいんです。", translate: "Tôi muốn được cho phép đi." },
            { original: "この件は僕に任せていただきたいです。", translate: "Tôi muốn được giao phó việc này cho tôi." },
            { original: "明日、早退させていただきたいのですが。", translate: "Tôi muốn xin phép được về sớm vào ngày mai." },
            { original: "子供たちに自由に遊ばせてあげたい。", translate: "Tôi muốn cho phép lũ trẻ được chơi đùa tự do." }
        ]
    },
    {
        id: 51,
        group: GRAMMAR_GROUP.group5,
        title: "ことにする・ことにしている",
        structure: "Vru・Vnai",
        meaning: "ことにする: Diễn tả quyết định của cá nhân về việc làm V hoặc không làm V. ことにしている: Diễn tả thói quen mà người nói tự quyết định và duy trì.",
        examples: [
            { original: "冷蔵庫が壊れたので、新しいのを買うことにした。", translate: "Vì tủ lạnh bị hỏng nên tôi đã quyết định mua cái mới." },
            { original: "明日からジョギングをすることにした。", translate: "Tôi quyết định sẽ bắt đầu chạy bộ từ ngày mai." },
            { original: "健康のために、エレベーターを使わないことにしている。", translate: "Để vì sức khỏe, tôi quyết định không dùng thang máy (thành thói quen)." },
            { original: "試験前は、夜10時以降は勉強しないことにしている。", translate: "Trước kỳ thi, tôi quyết định không học sau 10 giờ tối (thành thói quen)." }
        ]
    },
    {
        id: 52,
        group: GRAMMAR_GROUP.group5,
        title: "～ようにする・～ようにしている",
        structure: "Vru・Vnai",
        meaning: "ようにする: Diễn tả sự cố gắng thực hiện một hành động V nào đó. ようにしている: Diễn tả việc duy trì một thói quen cố gắng, nỗ lực thực hiện V (tương tự ことにしている nhưng thiên về nỗ lực cá nhân).",
        examples: [
            { original: "私はなるべく自分で料理を作って食べるようにしている。", translate: "Tôi cố gắng tự nấu ăn và ăn càng nhiều càng tốt." },
            { original: "毎日、8時間寝るように心がけている。", translate: "Tôi cố gắng ngủ 8 tiếng mỗi ngày." },
            { original: "日本語の新聞を毎日読むようにしている。", translate: "Tôi cố gắng duy trì thói quen đọc báo tiếng Nhật mỗi ngày." },
            { original: "遅刻しないように、いつもより早く家を出るようにする。", translate: "Tôi cố gắng ra khỏi nhà sớm hơn bình thường để không bị muộn." }
        ]
    },
    {
        id: 53,
        group: GRAMMAR_GROUP.group5,
        title: "(よ)うとする",
        structure: "Ý chí + と する",
        meaning: "Diễn tả hành động định làm V, sắp sửa làm V, hoặc cố gắng làm V. Thường dùng để chỉ thời điểm ngay trước khi hành động xảy ra, hoặc sự nỗ lực nhưng chưa thành công.",
        examples: [
            { original: "家を出ようとしたとき、突然大雨が降り出した。", translate: "Đúng lúc tôi định ra khỏi nhà thì trời đột nhiên đổ mưa lớn." },
            { original: "お風呂に入ろうとしたら、電話が掛かってきた。", translate: "Đúng lúc tôi định đi tắm thì có điện thoại gọi đến." },
            { original: "学生が教室を出ようとしたとき、先生が呼び止めた。", translate: "Khi học sinh vừa định ra khỏi lớp, giáo viên đã gọi lại." },
            { original: "電車に乗ろうとしたときに、ドアが急に閉まって乗れなかった。", translate: "Đúng lúc tôi định lên tàu thì cửa đột nhiên đóng lại nên không lên được." }
        ]
    },

    {
        id: 44,
        group: GRAMMAR_GROUP.group6,
        title: "てもらいたい・ていただきたい・てほしい",
        structure: "Vte",
        meaning: "Diễn tả mong muốn người khác làm gì cho mình. (てほしい: mong muốn thông thường, てもらいたい: mong muốn được nhận V, ていただきたい: hình thức khiêm nhường hơn, trang trọng hơn).",
        examples: [
            { original: "この書類、ちょっと見ていただきたいいんですが。", translate: "Tôi muốn nhờ anh・chị xem qua tài liệu này một chút." },
            { original: "年を取った親にはもう無理をしてほしくない。", translate: "Tôi không muốn bố mẹ già của mình phải làm việc quá sức nữa." },
            { original: "先生に、私のレポートを直してもらいたい。", translate: "Tôi muốn nhờ giáo viên sửa bài báo cáo của tôi." },
            { original: "子供たちには、いつも笑顔でいてほしい。", translate: "Tôi muốn lũ trẻ luôn mỉm cười." }
        ]
    },
    {
        id: 46,
        group: GRAMMAR_GROUP.group6,
        title: "～といい・～ばいい・～たらいい",
        structure: "Vru・Vba・Vta + いい",
        meaning: "1. Ước vọng: Ước gì・Mong là (thể hiện mong muốn cho điều tốt đẹp trong tương lai). 2. Lời khuyên: Nên làm V thì tốt hơn, hoặc đưa ra đề xuất.",
        examples: [
            { original: "生まれてくる子が男の子だったらいいのだが。", translate: "Ước gì đứa bé sắp sinh là con trai nhỉ." },
            { original: "若いうちに色々苦労したらいいと思う。", translate: "Tôi nghĩ nên trải qua nhiều khó khăn khi còn trẻ thì tốt hơn." },
            { original: "新しいパソコンが買えるといいなあ。", translate: "Ước gì tôi có thể mua được một chiếc máy tính mới." },
            { original: "分からないことがあったら、先生に聞けばいいよ。", translate: "Nếu có điều gì không hiểu, hỏi giáo viên là được rồi." }
        ]
    },
    {
        id: 47,
        group: GRAMMAR_GROUP.group6,
        title: "命令(しろ)・禁止(な)",
        structure: "Vろ・Vるな (Mệnh lệnh)",
        meaning: "Diễn tả sự mệnh lệnh (Vろ) hoặc cấm đoán (Vるな) một cách mạnh mẽ, dứt khoát. Thường dùng trong quân đội, với người dưới, hoặc trong các biển báo.",
        examples: [
            { original: "引っ越しを手伝ってくれと友達に頼んだ。", translate: "Tôi đã nhờ bạn bè giúp đỡ chuyển nhà." },
            { original: "父は医者にお酒を飲むなと言われている。", translate: "Bố tôi bị bác sĩ bảo là không được uống rượu." },
            { original: "「うるさい！静かにしろ！」", translate: "「Ồn ào quá! Hãy im lặng đi!」" },
            { original: "危険だから、この川で泳ぐな。", translate: "Vì nguy hiểm nên không được bơi ở con sông này." }
        ]
    },
    {
        id: 48,
        group: GRAMMAR_GROUP.group6,
        title: "～こと",
        structure: "Vru・Vnai",
        meaning: "Diễn tả quy tắc, lệnh cấm, yêu cầu bắt buộc, thường dùng trong văn viết, thông báo, quy định. Mang ý nghĩa: Phải・Không được (giống như một mệnh lệnh cứng nhắc).",
        examples: [
            { original: "休む時、必ず学校に連絡すること。", translate: "Khi nghỉ phải nhất định liên lạc với trường." },
            { original: "ここにゴミを捨てないこと。", translate: "Không được vứt rác ở đây." },
            { original: "試験中は、携帯電話の電源を切ること。", translate: "Trong lúc thi, phải tắt nguồn điện thoại di động." },
            { original: "授業中は、私語をしないこと。", translate: "Trong giờ học, không được nói chuyện riêng." }
        ]
    },
    {
        id: 49,
        group: GRAMMAR_GROUP.group6,
        title: "～べきだ・～べき・～べきではない",
        structure: "Vる + べきだ",
        meaning: "Diễn tả một lời khuyên, nghĩa vụ, đạo đức nên làm hoặc không nên làm. Mang ý nghĩa: Nên・Cần phải làm V (vì đó là điều hiển nhiên, hợp lẽ).",
        examples: [
            { original: "もう少し話し合ってから決めるべきだ。", translate: "Nên quyết định sau khi đã bàn bạc kỹ hơn một chút." },
            { original: "簡単に辞めるべきではない。", translate: "Không nên dễ dàng từ bỏ." },
            { original: "約束は守るべきだ。", translate: "Nên giữ lời hứa." },
            { original: "年上の人には丁寧な言葉遣いをするべきだ。", translate: "Nên sử dụng từ ngữ lịch sự với người lớn tuổi hơn." }
        ]
    },
    {
        id: 50,
        group: GRAMMAR_GROUP.group6,
        title: "～たらどうか",
        structure: "Vta",
        meaning: "Diễn tả một lời đề xuất, khuyên bảo nhẹ nhàng. Mang ý nghĩa: thử làm V xem sao・có lẽ nên V.",
        examples: [
            { original: "一度健康診断を受けたらどうでしょうか。", translate: "Thử đi kiểm tra sức khỏe một lần xem sao?" },
            { original: "疲れているようだから、少し休んだらどうか。", translate: "Có vẻ cậu đang mệt, thử nghỉ ngơi một chút xem sao?" },
            { original: "彼にも相談してみたらどうか。", translate: "Thử tham khảo ý kiến của anh ấy xem sao?" },
            { original: "困っているなら、先生に助けを求めたらどうですか。", translate: "Nếu đang gặp khó khăn, thử nhờ giáo viên giúp đỡ xem sao?" }
        ]
    },
    {
        id: 64,
        group: GRAMMAR_GROUP.group6,
        title: "ことはない",
        structure: "Vru",
        meaning: "Diễn tả sự không cần thiết phải làm hành động V. Mang ý nghĩa: Không cần phải V (vì nó không quan trọng, không bắt buộc, hoặc không cần lo lắng).",
        examples: [
            { original: "そんなに心配することはありませんよ。", translate: "Không cần phải lo lắng đến mức đó đâu." },
            { original: "急ぐことはない。ゆっくりで大丈夫だ。", translate: "Không cần phải vội. Từ từ thôi cũng được." },
            { original: "まだ時間があるから、焦ることはない。", translate: "Vì vẫn còn thời gian nên không cần phải gấp gáp." },
            { original: "昨日も来たんだから、わざわざ今日来ることはないよ。", translate: "Hôm qua cũng đã đến rồi, nên không cần phải cố ý đến hôm nay đâu." }
        ]
    },
    {
        id: 69,
        group: GRAMMAR_GROUP.group6,
        title: "～よう(に)いう・注意する・頼む",
        structure: "Vru・Vnai + よう(に)",
        meaning: "Diễn tả việc dẫn lời gián tiếp của các hành động mệnh lệnh・yêu cầu・chú ý. Mang ý nghĩa: Bảo・Chú ý・Nhờ ai đó hãy làm V hoặc đừng làm V.",
        examples: [
            { original: "すぐ家に帰るように言われました。", translate: "Tôi bị bảo là phải về nhà ngay lập tức." },
            { original: "これからは遅刻しないように注意しておきます。", translate: "Từ giờ tôi sẽ chú ý để không bị muộn nữa." },
            { original: "先生に、宿題を忘れないように頼まれた。", translate: "Tôi được giáo viên nhờ là đừng quên bài tập về nhà." },
            { original: "母に、体に気をつけるように言われた。", translate: "Tôi được mẹ bảo là hãy giữ gìn sức khỏe." }
        ]
    },

    {
        id: 36,
        group: GRAMMAR_GROUP.group7,
        title: "わけだ",
        structure: "Vru・A・N + na",
        meaning: "Diễn tả kết luận, sự hợp lý được rút ra từ một sự thật, lý do đã biết. Mang ý nghĩa: Vậy là・Hóa ra là・Thảo nào (đó là kết quả đương nhiên).",
        examples: [
            { original: "じゃ今から出れば9時に着くわけだ。", translate: "Vậy là nếu đi từ bây giờ thì sẽ đến lúc 9 giờ." },
            { original: "あの二人は夫婦だから、顔が似ているわけだ。", translate: "Hai người đó là vợ chồng, nên khuôn mặt giống nhau là phải rồi." },
            { original: "円高になったから、輸入品が安くなるわけだ。", translate: "Vì đồng Yên tăng giá nên hàng nhập khẩu trở nên rẻ hơn là điều đương nhiên." },
            { original: "Aさんはアメリカ育ちだから、英語が上手なわけだ。", translate: "Anh A lớn lên ở Mỹ, vậy nên tiếng Anh giỏi là phải rồi." }
        ]
    },
    {
        id: 37,
        group: GRAMMAR_GROUP.group7,
        title: "～はずがない・～わけがない",
        structure: "Vru",
        meaning: "Diễn tả sự phủ định mạnh mẽ một khả năng, một sự việc. Mang ý nghĩa: Chắc chắn không・Làm gì có chuyện (vì có một lý do, căn cứ vững chắc để phủ định).",
        examples: [
            { original: "あの店が今日休みのはずはありません。電話で確認したんですから。", translate: "Cửa hàng đó chắc chắn không nghỉ hôm nay. Vì tôi đã xác nhận qua điện thoại rồi." },
            { original: "あんなに勉強したのだから、不合格になるはずがない。", translate: "Vì đã học nhiều như thế nên không thể nào trượt được." },
            { original: "鍵をかけたはずがない。どこかに忘れたのだろう。", translate: "Tôi chắc chắn đã khóa cửa. Chắc là quên ở đâu đó rồi." },
            { original: "彼がそんなひどいことをするわけがない。", translate: "Không có chuyện anh ấy làm một điều tồi tệ như vậy đâu." }
        ]
    },
    {
        id: 38,
        group: GRAMMAR_GROUP.group7,
        title: "～とは限らない",
        structure: "Vru",
        meaning: "Diễn tả sự phủ định một phần, phủ định sự tuyệt đối. Mang ý nghĩa: Không nhất thiết・Chưa chắc đã là như thế (dùng để cảnh báo không nên quá tự tin vào một sự thật).",
        examples: [
            { original: "日本語を教えているのは日本人とは限らない。", translate: "Người dạy tiếng Nhật không nhất thiết phải là người Nhật." },
            { original: "高いものが必ずしもいいものだとは限らない。", translate: "Đồ đắt tiền chưa chắc đã là đồ tốt." },
            { original: "努力すれば、必ず成功するとは限らない。", translate: "Không nhất thiết cứ cố gắng là sẽ thành công." },
            { original: "経験があるからといって、すべてを知っているとは限らない。", translate: "Không phải cứ có kinh nghiệm là biết hết mọi thứ." }
        ]
    },
    {
        id: 39,
        group: GRAMMAR_GROUP.group7,
        title: "～わけではない・～というわけではない・～のではない",
        structure: "Vru",
        meaning: "Diễn tả sự phủ định gián tiếp, phủ định một phần. Mang ý nghĩa: Không phải là・Không hẳn là・Không có nghĩa là (phủ định một giả định, một sự thật hiển nhiên).",
        examples: [
            { original: "特別においしいわけではない。", translate: "Không hẳn là đặc biệt ngon." },
            { original: "日本語が話せないわけではないが、自信がない。", translate: "Không phải là tôi không nói được tiếng Nhật, nhưng tôi không tự tin." },
            { original: "嫌いなわけではないが、あまり食べない。", translate: "Không phải là ghét nhưng tôi không ăn nhiều lắm." },
            { original: "お金がないから旅行に行かないというわけではない。", translate: "Không có nghĩa là tôi không đi du lịch vì không có tiền." }
        ]
    },
    {
        id: 40,
        group: GRAMMAR_GROUP.group7,
        title: "わけにはいかない",
        structure: "Vる",
        meaning: "Diễn tả sự bất khả thi về mặt đạo đức, trách nhiệm, quy tắc hoặc tình thế xã hội. Mang ý nghĩa: Không thể V (dù muốn cũng không làm được).",
        examples: [
            { original: "仕事を休むわけにはいかない。", translate: "Tôi không thể nghỉ việc được (vì trách nhiệm・quy tắc)." },
            { original: "病気の父を一人にして、遊びに行くわけにはいかない。", translate: "Tôi không thể để bố đang bệnh một mình mà đi chơi được (vì đạo đức)." },
            { original: "親友の頼みを断るわけにはいかない。", translate: "Tôi không thể từ chối lời nhờ vả của bạn thân được." },
            { original: "試験中に、隣の人の答えを見るわけにはいかない。", translate: "Trong lúc thi, không thể nhìn bài của người bên cạnh được." }
        ]
    },
    {
        id: 54,
        group: GRAMMAR_GROUP.group7,
        title: "～つもりだ",
        structure: "N+no ・Ana+na ・Vta",
        meaning: "Diễn tả sự nhận định, suy nghĩ chủ quan của người nói, dù thực tế có thể khác. Mang ý nghĩa: Cứ tưởng rằng・Cứ cho rằng (thường dùng để bày tỏ sự ngộ nhận hoặc đánh giá bản thân).",
        examples: [
            { original: "私は今年77歳ですが、まだまだ若いつもりです。", translate: "Năm nay tôi 77 tuổi rồi nhưng vẫn cứ nghĩ mình còn trẻ lắm." },
            { original: "私はこの辺りの地理はよく知っているつもりだった。", translate: "Tôi đã cứ nghĩ là mình rất hiểu rõ địa lý khu vực này." },
            { original: "彼は自分はなんでもできるつもりでいる。", translate: "Anh ấy cứ nghĩ rằng mình có thể làm được mọi thứ." },
            { original: "パソコンは使いこなしているつもりだったが、まだ知らない機能がたくさんあった。", translate: "Tôi cứ tưởng rằng mình đã sử dụng máy tính thành thạo rồi nhưng vẫn còn nhiều chức năng chưa biết." }
        ]
    },
    {
        id: 85,
        group: GRAMMAR_GROUP.group7,
        title: "～に決まっている",
        structure: "Vる ・N・Ana+に決まっている",
        meaning: "Diễn tả sự phán đoán, suy luận chắc chắn, mang tính chủ quan của người nói. Mang ý nghĩa: Nhất định・Chắc chắn là như thế, không cần phải nghi ngờ.",
        examples: [
            { original: "親に反対されるに決まっている。", translate: "Chắc chắn là sẽ bị bố mẹ phản đối." },
            { original: "あんなに練習したんだから、成功するに決まっている。", translate: "Vì đã luyện tập nhiều như thế, nhất định sẽ thành công." },
            { original: "こんなに遅い時間では、店は閉まっているに決まっている。", translate: "Vào giờ khuya thế này, chắc chắn cửa hàng đã đóng cửa rồi." },
            { original: "彼女が言ったことは嘘に決まっている。", translate: "Những gì cô ấy nói chắc chắn là lời nói dối." }
        ]
    },
    {
        id: 86,
        group: GRAMMAR_GROUP.group7,
        title: "～に違いない",
        structure: "Vる ・N・Ana+に違いない",
        meaning: "Diễn tả sự phán đoán, suy luận chắc chắn, mang tính khách quan dựa trên bằng chứng, cơ sở. Mang ý nghĩa: Chắc chắn là・Nhất định là như thế.",
        examples: [
            { original: "誰かが持っていたに違いない。", translate: "Chắc chắn là ai đó đã cầm đi rồi." },
            { original: "こんなにいい天気なんだから、明日は遠足に行くに違いない。", translate: "Thời tiết tốt thế này, nhất định ngày mai sẽ đi dã ngoại." },
            { original: "彼は日本語がペラペラだ。日本に住んでいたに違いない。", translate: "Anh ấy nói tiếng Nhật rất trôi chảy. Chắc chắn là đã từng sống ở Nhật." },
            { original: "あの二人はいつも一緒にいる。恋人に違いない。", translate: "Hai người đó lúc nào cũng ở cùng nhau. Chắc chắn là người yêu rồi." }
        ]
    },
    {
        id: 87,
        group: GRAMMAR_GROUP.group7,
        title: "～おそれがある",
        structure: "Vru・N+の",
        meaning: "Diễn tả sự lo lắng, e ngại về một khả năng, kết quả xấu sẽ xảy ra trong tương lai. Thường dùng trong các thông báo, cảnh báo chính thức. Mang ý nghĩa: E là, e rằng.",
        examples: [
            { original: "この建物が倒れるおそれがある。", translate: "E rằng tòa nhà này có nguy cơ bị đổ." },
            { original: "大雨で、川が氾濫するおそれがある。", translate: "Do mưa lớn, e rằng sông có thể bị lụt." },
            { original: "このまま温暖化が進むと、異常気象が増えるおそれがある。", translate: "Nếu cứ tiếp tục nóng lên toàn cầu như thế này, e rằng hiện tượng thời tiết bất thường sẽ tăng lên." },
            { original: "台風が近づいているので、交通機関に影響が出るおそれがある。", translate: "Vì bão đang đến gần nên e rằng giao thông công cộng sẽ bị ảnh hưởng." }
        ]
    },
    {
        id: 90,
        group: GRAMMAR_GROUP.group7,
        title: "～ものか・もんか",
        structure: "Vる",
        meaning: "Diễn tả sự phủ định mạnh mẽ, quyết tâm không làm V. Mang ý nghĩa: Không đời nào・Nhất định không (dùng trong văn nói, thể hiện cảm xúc mạnh).",
        examples: [
            { original: "明日までに終わるものか。", translate: "Không đời nào kết thúc trước ngày mai được." },
            { original: "二度とあんな店に行くものか。", translate: "Không đời nào tôi đến cái quán đó lần thứ hai." },
            { original: "あんな辛い経験は、もうするものか。", translate: "Không đời nào tôi trải qua kinh nghiệm đau khổ như thế nữa." },
            { original: "人に頼るもんか。自分でやってみせる。", translate: "Không đời nào dựa dẫm vào người khác. Tôi sẽ tự mình làm cho mà xem." }
        ]
    },
    {
        id: 91,
        group: GRAMMAR_GROUP.group7,
        title: "～としたら・～とすれば",
        structure: "Vる",
        meaning: "Diễn tả sự giả định, đặt ra tình huống (có thể khó xảy ra hoặc không chắc chắn) để đưa ra một kết luận, suy luận ở vế sau. Mang ý nghĩa: Giả sử・Nếu như V.",
        examples: [
            { original: "その話が本当だとしたら、うれしいです。", translate: "Giả sử câu chuyện đó là thật, tôi sẽ rất vui." },
            { original: "もし、もう一度人生をやり直せる（やりなおせる）としたら、何がしたいですか。", translate: "Giả sử có thể làm lại cuộc đời một lần nữa, bạn muốn làm gì?" },
            { original: "彼女が犯人だとすれば、動機は何だろう。", translate: "Giả sử cô ấy là thủ phạm, động cơ là gì nhỉ?" },
            { original: "宝くじが当たったとしたら、何をしたいですか。", translate: "Giả sử trúng số độc đắc, bạn muốn làm gì?" }
        ]
    },

    {
        id: 31,
        group: GRAMMAR_GROUP.group8,
        title: "～ということだ・～とのことだ",
        structure: "Vru",
        meaning: "Diễn tả sự truyền đạt lại thông tin mà người nói nghe được. Mang ý nghĩa: Nghe nói là・Theo như... (とのことだ trang trọng hơn, dùng cho thông báo chính thức).",
        examples: [
            { original: "この道路は来週から工場が始まるということです。", translate: "Nghe nói con đường này sẽ bắt đầu được xây dựng từ tuần sau." },
            { original: "田中さんは来月、日本へ帰国するとのことだ。", translate: "Nghe nói anh Tanaka sẽ về nước vào tháng sau." },
            { original: "天気予報によると、明日は雪が降るということだ。", translate: "Theo dự báo thời tiết, nghe nói ngày mai trời sẽ có tuyết rơi." },
            { original: "部長からのメールによると、会議は中止になったとのことです。", translate: "Theo email từ trưởng phòng, nghe nói cuộc họp đã bị hủy." }
        ]
    },
    {
        id: 32,
        group: GRAMMAR_GROUP.group8,
        title: "～と言われている",
        structure: "Vru",
        meaning: "Diễn tả một ý kiến, nhận định chung của mọi người hoặc một nhóm người nào đó. Mang ý nghĩa: Được cho rằng・Người ta nói rằng.",
        examples: [
            { original: "この泉の水を飲めば若がえるといわれている。", translate: "Người ta nói rằng nếu uống nước suối này sẽ trẻ lại." },
            { original: "納豆は体にいいと言われている。", translate: "Đậu Natto được cho là tốt cho sức khỏe." },
            { original: "この地域は治安が良いと言われている。", translate: "Khu vực này được cho là có an ninh tốt." },
            { original: "環境問題は世界で最も重要な問題の一つだと言われている。", translate: "Vấn đề môi trường được cho là một trong những vấn đề quan trọng nhất trên thế giới." }
        ]
    },
    {
        id: 33,
        group: GRAMMAR_GROUP.group8,
        title: "～とか",
        structure: "Vru",
        meaning: "Diễn tả sự truyền đạt lại thông tin một cách mơ hồ, không chắc chắn, hoặc dùng để liệt kê ví dụ. Mang ý nghĩa: Nghe đâu... thì phải・Chẳng hạn như V.",
        examples: [
            { original: "隣の娘さんは来月結婚式を挙げるとか。", translate: "Nghe đâu con gái nhà hàng xóm sẽ tổ chức lễ cưới vào tháng sau thì phải." },
            { original: "彼は有名な俳優の弟だとか。", translate: "Nghe đâu anh ấy là em trai của một diễn viên nổi tiếng thì phải." },
            { original: "彼女は試験で満点を取ったとか。", translate: "Nghe đâu cô ấy đạt điểm tuyệt đối trong kỳ thi thì phải." },
            { original: "あの店はとても美味しいとかで、いつも混んでいる。", translate: "Nghe nói quán đó rất ngon nên lúc nào cũng đông khách." }
        ]
    },
    {
        id: 34,
        group: GRAMMAR_GROUP.group8,
        title: "って～",
        structure: "Vru",
        meaning: "Diễn tả sự trích dẫn lời nói hoặc truyền đạt lại nội dung một cách thân mật, suồng sã (viết tắt của と言っていた・ということ). Mang ý nghĩa: Rằng (văn nói).",
        examples: [
            { original: "彼はすぐ来るって言っています。", translate: "Anh ấy nói rằng anh ấy sẽ đến ngay." },
            { original: "「明日テストだよ」って先生が言ってた。", translate: "Giáo viên nói rằng 「Ngày mai có bài kiểm tra đấy」." },
            { original: "田中さんが「もう帰る」って。", translate: "Anh Tanaka nói là 「Về đây」." },
            { original: "このニュース、本当だっけ？", translate: "Cái tin này, là thật hả?" }
        ]
    },
    {
        id: 35,
        group: GRAMMAR_GROUP.group8,
        title: "～という",
        structure: "Vru",
        meaning: "Diễn tả sự truyền đạt lại thông tin mà người nói nghe được. Thường dùng trong văn viết, báo chí, hoặc mang tính học thuật. Mang ý nghĩa: Nghe nói・Được biết là (văn cứng, trang trọng).",
        examples: [
            { original: "この辺りは昔、広い野原だったという。", translate: "Nghe nói khu vực này ngày xưa là một cánh đồng rộng lớn." },
            { original: "この病気は、めったに治らないという。", translate: "Nghe nói căn bệnh này hiếm khi được chữa khỏi." },
            { original: "その作家の小説は、若者の間で人気があるという。", translate: "Nghe nói tiểu thuyết của tác giả đó đang được giới trẻ yêu thích." },
            { original: "調査の結果、消費者の意識が変化しているということが分かった。", translate: "Kết quả điều tra cho thấy ý thức của người tiêu dùng đang thay đổi." }
        ]
    },

    {
        id: 41,
        group: GRAMMAR_GROUP.group9,
        title: "ないわけにはいかない",
        structure: "Vnai",
        meaning: "Diễn tả sự khẳng định bắt buộc. Mang ý nghĩa: Không thể không V (dù không muốn nhưng vẫn phải làm V vì nghĩa vụ, quy tắc, hay tình thế). (Là phủ định của わけにはいかない).",
        examples: [
            { original: "買わないわけにはいかない", translate: "Không thể không mua được (buộc phải mua)." },
            { original: "会議があるので、出席しないわけにはいかない。", translate: "Vì có cuộc họp nên không thể không tham dự được (buộc phải tham dự)." },
            { original: "上司に頼まれた仕事だから、やらないわけにはいかない。", translate: "Vì là công việc được cấp trên giao phó nên không thể không làm được (buộc phải làm)." },
            { original: "親友の誘いだから、断るわけにはいかない。", translate: "Vì là lời mời của bạn thân nên không thể không đi được (buộc phải chấp nhận)." }
        ]
    },
    {
        id: 42,
        group: GRAMMAR_GROUP.group9,
        title: "～ないことはない",
        structure: "Vnai",
        meaning: "Diễn tả sự khẳng định gián tiếp, khẳng định một phần. Mang ý nghĩa: Không phải là không V (tức là có thể V・có làm V, nhưng thường kèm theo hạn chế, điều kiện, hoặc không được như mong đợi).",
        examples: [
            { original: "歩けないことはないが、かなり時間がかかりますよ", translate: "Không phải là không đi bộ được, nhưng sẽ tốn khá nhiều thời gian đấy." },
            { original: "この問題、分からないことはないが、少し難しい。", translate: "Không phải là tôi không hiểu vấn đề này, nhưng có hơi khó một chút." },
            { original: "食べないことはないが、あまり好きではない。", translate: "Không phải là tôi không ăn được, nhưng tôi không thích lắm." },
            { original: "料理ができないことはないが、あまり得意じゃない。", translate: "Không phải là tôi không thể nấu ăn, nhưng tôi không giỏi lắm." }
        ]
    },
    {
        id: 43,
        group: GRAMMAR_GROUP.group9,
        title: "～ことは～が～",
        structure: "VることはVるが",
        meaning: "Diễn tả sự thừa nhận một sự thật V1・A・N, nhưng ngay sau đó là sự hạn chế, đối lập V2. Mang ý nghĩa: Có thì có thật đấy, nhưng mà... (thường mang sắc thái tiêu cực・bất mãn).",
        examples: [
            { original: "読んだことは読んだが、全然分からない。", translate: "Đọc thì có đọc thật đấy, nhưng hoàn toàn không hiểu gì cả." },
            { original: "歌えることは歌えるが、上手ではない。", translate: "Hát thì có hát được thật đấy, nhưng không hay." },
            { original: "きれいなことはきれいだが、値段が高すぎる。", translate: "Đẹp thì đẹp thật đấy, nhưng giá quá đắt." },
            { original: "やったことはやったが、自信がない。", translate: "Làm thì có làm thật đấy, nhưng không tự tin." }
        ]
    },

    {
        id: 55,
        group: GRAMMAR_GROUP.group10,
        title: "こそ",
        structure: "N+",
        meaning: "Diễn tả sự nhấn mạnh mạnh mẽ vào đối tượng N (chủ thể, thời gian, lý do). Mang ý nghĩa: Chính N (chứ không phải cái khác) mới là... (thường thể hiện cảm xúc mạnh hoặc sự khẳng định).",
        examples: [
            { original: "親だからこそ自分の子を厳しくしかるのだ。", translate: "Chính vì là bố mẹ nên mới nghiêm khắc la mắng con cái." },
            { original: "今こそ、皆で力を合わせる時だ。", translate: "Chính lúc này là lúc mọi người cần phải hợp lực lại." },
            { original: "あなたこそ、この仕事をやるべきだ。", translate: "Chính bạn mới là người nên làm công việc này." },
            { original: "愛情があるからこそ、厳しいことも言うのだ。", translate: "Chính vì có tình yêu nên mới nói những lời nghiêm khắc." }
        ]
    },
    {
        id: 59,
        group: GRAMMAR_GROUP.group10,
        title: "など・なんか・なんて",
        structure: "N+",
        meaning: "1. Liệt kê ví dụ: Chẳng hạn như N. 2. Coi nhẹ・Khinh thường: Những thứ như N (なんか・なんて mang sắc thái khinh thường, coi nhẹ hơn など).",
        examples: [
            { original: "この服などはいかがですか。", translate: "Chiếc áo này chẳng hạn, bạn thấy thế nào?" },
            { original: "ダイエットなんかしたくない。", translate: "Tôi không muốn (làm những việc như) ăn kiêng đâu." },
            { original: "タバコなんて体に悪いだけだ。", translate: "Những thứ như thuốc lá chỉ có hại cho cơ thể thôi." },
            { original: "お茶とかコーヒーとか、何か飲むものはありますか。", translate: "Bạn có thứ gì để uống, như trà hay cà phê chẳng hạn không?" }
        ]
    },
    {
        id: 60,
        group: GRAMMAR_GROUP.group10,
        title: "～について",
        structure: "N+",
        meaning: "Diễn tả chủ đề, đối tượng của hành động・nội dung. Mang ý nghĩa: Về N.",
        examples: [
            { original: "入学手続きについて聞きたいのですが。", translate: "Tôi muốn hỏi về thủ tục nhập học." },
            { original: "日本の文化について研究している。", translate: "Tôi đang nghiên cứu về văn hóa Nhật Bản." },
            { original: "会議では、新商品の開発について話し合った。", translate: "Trong cuộc họp, chúng tôi đã thảo luận về việc phát triển sản phẩm mới." },
            { original: "この問題について、どう思いますか。", translate: "Bạn nghĩ sao về vấn đề này?" }
        ]
    },
    {
        id: 68,
        group: GRAMMAR_GROUP.group10,
        title: "～ように",
        structure: "N+no ・Vru",
        meaning: "Diễn tả mục đích, mục tiêu của hành động V2. Mang ý nghĩa: làm V2 để V1・trạng thái N xảy ra (thường dùng với V khả năng・V tiềm năng hoặc V thể hiện sự thay đổi trạng thái).",
        examples: [
            { original: "よく眠れるようにワインを少し飲んだ。", translate: "Tôi đã uống một chút rượu vang để có thể ngủ ngon." },
            { original: "早く日本語が話せるようになるために、毎日勉強している。", translate: "Để có thể nói được tiếng Nhật nhanh hơn, tôi học mỗi ngày." },
            { original: "風邪をひかないように、気をつけてください。", translate: "Hãy cẩn thận để không bị cảm lạnh." },
            { original: "遅れないように、急いでください。", translate: "Hãy nhanh lên để không bị trễ." }
        ]
    },
    {
        id: 79,
        group: GRAMMAR_GROUP.group10,
        title: "～がる",
        structure: "Vたいがる",
        meaning: "Diễn tả cảm xúc, mong muốn của người thứ ba (ngôi thứ ba) mà người nói quan sát được thông qua hành động, thái độ. (Không dùng cho bản thân người nói - ngôi thứ nhất).",
        examples: [
            { original: "彼はいつも私の給料の額を知りたがっている。", translate: "Anh ấy lúc nào cũng muốn biết mức lương của tôi." },
            { original: "子供は新しいおもちゃを欲しがっている。", translate: "Đứa trẻ đang muốn có món đồ chơi mới." },
            { original: "妹は一人で留守番をするのを怖がっている。", translate: "Em gái tôi sợ phải ở nhà một mình." },
            { original: "母は私のことを心配している。", translate: "Mẹ tôi đang lo lắng cho tôi." }
        ]
    },
    {
        id: 80,
        group: GRAMMAR_GROUP.group10,
        title: "～てたまらない・～てならない・～てしょうがない",
        structure: "Vte",
        meaning: "Diễn tả một cảm xúc, trạng thái mạnh mẽ, không thể kiềm chế được. Mang ý nghĩa: Rất・Cực kỳ (đến nỗi không chịu được). (てならない thường dùng cho những cảm xúc tự nhiên phát sinh).",
        examples: [
            { original: "暑くてたまらない。", translate: "Nóng không chịu nổi." },
            { original: "母のことを心配してならない。", translate: "Tôi lo lắng cho mẹ không yên." },
            { original: "さびしくてしょうがない。", translate: "Cô đơn không chịu được." },
            { original: "彼のことが知りたくてたまらない。", translate: "Tôi muốn biết về anh ấy đến mức không thể kiềm chế được." }
        ]
    },
    {
        id: 89,
        group: GRAMMAR_GROUP.group10,
        title: "～ことか・ことに・ことだ",
        structure: "Vる",
        meaning: "Diễn tả sự cảm thán, khen ngợi hoặc chỉ trích mạnh mẽ. Mang ý nghĩa: Thật là... biết bao! (thường dùng trong văn viết hoặc tình huống trang trọng).",
        examples: [
            { original: "どんなにうれしいことか。", translate: "Thật là vui sướng biết bao!" },
            { original: "あの時の母の優しさが、どんなにありがたかったことか。", translate: "Lòng tốt của mẹ lúc đó thật là đáng quý biết bao." },
            { original: "富士山の景色は、なんと美しいことか。", translate: "Cảnh núi Phú Sĩ thật là đẹp biết bao!" },
            { original: "こんなに美味しい料理は、もう二度と食べられないだろう。", translate: "Món ăn ngon như thế này, chắc không thể ăn lần thứ hai được nữa." }
        ]
    },
    {
        id: 92,
        group: GRAMMAR_GROUP.group10,
        title: "～を通じて・～を通して",
        structure: "N+",
        meaning: "1. Kênh・Phương tiện: Thông qua・Qua N (một người, phương tiện, tổ chức) mà thực hiện hành động. 2. Thời gian・Phạm vi: Trong suốt khoảng thời gian N (giống như 間).",
        examples: [
            { original: "子供たちはスポーツを通して、いろいろなことを学ぶことができる。", translate: "Trẻ em có thể học được nhiều điều thông qua thể thao." },
            { original: "インターネットを通じて、世界のニュースを知る。", translate: "Tôi biết được tin tức thế giới thông qua Internet." },
            { original: "一年を通じて、この地域は温暖だ。", translate: "Trong suốt cả năm, khu vực này có khí hậu ôn hòa." },
            { original: "部長を通じて、社長に企画書を提出した。", translate: "Tôi đã nộp bản kế hoạch cho giám đốc thông qua trưởng phòng." }
        ]
    },
    {
        id: 94,
        group: GRAMMAR_GROUP.group10,
        title: "～をこめて",
        structure: "N",
        meaning: "Diễn tả hành động V được thực hiện bằng cách gửi gắm một cảm xúc, tấm lòng (N) vào đó. Mang ý nghĩa: Với tất cả (tấm lòng・tình cảm) N.",
        examples: [
            { original: "平和へのお願いをこめて、この歌を作りました。", translate: "Tôi đã viết bài hát này với tất cả ước nguyện vì hòa bình." },
            { original: "心を込めて書いた手紙を母に送った。", translate: "Tôi đã gửi cho mẹ lá thư được viết bằng cả tấm lòng." },
            { original: "愛を込めて、お弁当を作った。", translate: "Tôi đã làm hộp cơm bento với tất cả tình yêu thương." },
            { original: "感謝の気持ちを込めて、プレゼントを贈った。", translate: "Tôi đã tặng món quà này với tất cả lòng biết ơn." }
        ]
    },
    {
        id: 100,
        group: GRAMMAR_GROUP.group10,
        title: "N1はもちろん、N2も",
        structure: "N1はもちろん、N2も",
        meaning: "Diễn tả sự liệt kê tăng tiến. Mang ý nghĩa: N1 là đương nhiên rồi, nhưng N2 cũng (nhấn mạnh N2).",
        examples: [
            { original: "彼は英語はもちろん、フランス語も話せる。", translate: "Anh ấy tiếng Anh thì là đương nhiên rồi, mà tiếng Pháp cũng nói được." },
            { original: "彼女は料理はもちろん、お菓子作りも得意だ。", translate: "Cô ấy nấu ăn thì là đương nhiên rồi, mà làm bánh kẹo cũng giỏi." },
            { original: "この店は味はもちろん、サービスも素晴らしい。", translate: "Quán này hương vị thì là đương nhiên rồi, mà dịch vụ cũng tuyệt vời." },
            { original: "東京はもちろん、大阪でもこの商品は売れている。", translate: "Sản phẩm này không chỉ bán chạy ở Tokyo, mà ở Osaka cũng bán chạy." }
        ]
    },
    {
        id: 104,
        group: GRAMMAR_GROUP.group10,
        title: "Nをはじめ(として)",
        structure: "N+",
        meaning: "Diễn tả sự liệt kê có tính tiêu biểu. Mang ý nghĩa: Trước tiên phải kể đến là N (N là đại diện tiêu biểu nhất trong một nhóm, sau đó là những cái khác).",
        examples: [
            { original: "富士山をはじめ、各地の有名な山に登りましょう。", translate: "Chúng ta hãy leo các ngọn núi nổi tiếng ở các địa phương, trước tiên là núi Phú Sĩ." },
            { original: "ホストファミリーをはじめ、多くの方々にお世話になりました。", translate: "Tôi đã nhận được sự giúp đỡ từ rất nhiều người, trước tiên là gia đình host." },
            { original: "会議には、社長をはじめ、各部署の代表が出席した。", translate: "Trong cuộc họp có sự tham dự của đại diện các phòng ban, trước tiên là giám đốc." },
            { original: "臭豆腐をはじめとする台湾料理では、小籠包、ルーロー飯などが有名です。", translate: "Trong các món ăn Đài Loan, tiêu biểu là Đậu phụ thối, còn có Xiao Long Bao, Cơm thịt kho Lǔ Ròu Fàn... cũng nổi tiếng." }
        ]
    },
    {
        id: 109,
        group: GRAMMAR_GROUP.group10,
        title: "Vます+出す",
        structure: "Vます+出す",
        meaning: "Diễn tả hành động V bắt đầu xảy ra một cách đột ngột, bất ngờ (thường dùng cho các hành động thể hiện âm thanh, trạng thái như: cười, khóc, mưa, cháy).",
        examples: [
            { original: "彼は私の顔を見ると、突然笑い出した。", translate: "Anh ấy nhìn thấy mặt tôi thì đột nhiên bật cười." },
            { original: "子供が急に泣き出したので、びっくりした。", translate: "Đứa trẻ đột nhiên bật khóc nên tôi rất bất ngờ." },
            { original: "雨が降り出した。", translate: "Trời bắt đầu đổ mưa (một cách đột ngột)." },
            { original: "誰かが叫び出した。", translate: "Ai đó đột nhiên kêu lên." }
        ]
    },
    {
        id: 111,
        group: GRAMMAR_GROUP.group10,
        title: "Vます+がち",
        structure: "Vます+がち",
        meaning: "Diễn tả một hành động V thường hay xảy ra, hoặc có khuynh hướng làm V. Thường mang sắc thái tiêu cực hoặc bất mãn với thói quen đó.",
        examples: [
            { original: "最近、忘れがちだ。", translate: "Gần đây tôi hay quên." },
            { original: "彼は病気がちです。", translate: "Anh ấy thường hay bị bệnh." },
            { original: "最近、仕事が忙しくなりがちです。", translate: "Gần đây công việc có xu hướng trở nên bận rộn hơn." },
            { original: "冬は曇りがちだ。", translate: "Mùa đông thường hay có mây." }
        ]
    },
];
