import { GRAMMAR_GROUP } from "./grammar_data.js"

export const EXERCISE_TYPE = {
    type1: "Chọn đúng cấu trúc ngữ pháp",
    type2: "Sắp xếp câu",
    type3: "Bài tập biến đổi câu",
    type4: "Bài tập điền trợ từ",
}

export const EXERCISE_DATA = {
    [GRAMMAR_GROUP.group1]: [
        // ==============================================================================================
        // 1. Bài tập chọn đúng cấu trúc ngữ pháp (26 câu)
        // ==============================================================================================

        //うち（に）
        { id: 1, type: EXERCISE_TYPE.type1, question: "Tôi muốn tranh thủ lúc còn ở Nhật để thử leo núi Phú Sĩ một lần.", grammar: "うちに", data: { options: ["日本にいるうちに一度富士山に登ってみたい。", "日本にいるかわりに一度富士山に登ってみたい。", "日本にいてからでないと一度富士山に登ってみたい。"], answer: 0 } },
        { id: 2, type: EXERCISE_TYPE.type1, question: "Trong lúc đang nghe nhạc thì ngủ mất.", grammar: "うちに", data: { options: ["音楽を聞いているうちに、眠ってしまった。", "音楽を聞いてばかりで、眠ってしまった。", "音楽を聞いたところで、眠ってしまった。"], answer: 0 } },
        { id: 3, type: EXERCISE_TYPE.type1, question: "Trước khi trời tối, hãy nhanh chóng quay về nhà.", grammar: "うちに", data: { options: ["暗くならないうちに、急いで家に帰ろう。", "暗くなる間、急いで家に帰ろう。", "暗くならないばかりに、急いで家に帰ろう。"], answer: 0 } },

        // 間/間に
        { id: 4, type: EXERCISE_TYPE.type1, question: "Anh ta ngủ gật suốt buổi họp.", grammar: "間", data: { options: ["彼は会議の間ずっと眠りをしていた。", "彼は会議の最中にずっと眠りをしていた。", "彼は会議のとたんにずっと眠りをしていた。"], answer: 0 } },
        { id: 5, type: EXERCISE_TYPE.type1, question: "Trong lúc tôi vắng nhà, đã có kẻ trộm vào nhà.", grammar: "間に", data: { options: ["留守の間にどろぼうが入った。", "留守のきりどろぼうが入った。", "留守にかけてどろぼうが入った。"], answer: 0 } },
        { id: 6, type: EXERCISE_TYPE.type1, question: "Hãy gọi điện cho tôi trong thời gian tôi đang đi ra ngoài.", grammar: "間に", data: { options: ["私が外出している間に電話してください。", "私が外出するうちには電話してください。", "私が外出してばかりに電話してください。"], answer: 0 } },

        // てからでないと/てからでなければ
        { id: 7, type: EXERCISE_TYPE.type1, question: "Nếu không thảo luận với gia đình, tôi không thể quyết định mua hay không.", grammar: "てからでないと", data: { options: ["家族と相談してからでないと、買うかどうかまだ決められない。", "家族と相談しているうちに、買うかどうかまだ決められない。", "家族と相談したばかりに、買うかどうかまだ決められない。"], answer: 0 } },
        { id: 8, type: EXERCISE_TYPE.type1, question: "Nếu không xác nhận lịch trình, không thể đặt chỗ được.", grammar: "てからでなければ", data: { options: ["スケジュールを確認してからでなければ、予約できません。", "スケジュールを確認するところでなければ、予約できません。", "スケジュールを確認したたびに、予約できません。"], answer: 0 } },
        { id: 9, type: EXERCISE_TYPE.type1, question: "Nếu không xin phép mẹ, tôi không thể ra ngoài chơi.", grammar: "てからでないと", data: { options: ["母に許可をもらってからでないと、遊びに行ってはいけない。", "母に許可をもらううちに、遊びに行ってはいけない。", "母に許可をもらうついでに、遊びに行ってはいけない。"], answer: 0 } },

        // Vる/Vている/Vたところ
        { id: 10, type: EXERCISE_TYPE.type1, question: "Tên lửa sắp sửa phóng.", grammar: "Vるところ", data: { options: ["ロケットは間もなく飛び立つところです。", "ロケットは間もなく飛び立ったところです。", "ロケットは間もなく飛び立っているところです。"], answer: 0 } },
        { id: 11, type: EXERCISE_TYPE.type1, question: "Tôi vừa mới nhận được thư của bạn tôi.", grammar: "Vたところ", data: { options: ["友達からメールを受け取ったところだ。", "友達からメールを受け取るたびにだ。", "友達からメールを受け取っているところだ。"], answer: 0 } },
        { id: 12, type: EXERCISE_TYPE.type1, question: "Giáo viên đã nhắc nhở tôi lúc đang nhìn bài kiểm tra của người bên cạnh.", grammar: "Vているところ", data: { options: ["隣の人の答えを見ているとことを先生に注意された。", "隣の人の答えを見たところで先生に注意された。", "隣の人の答えを見るうちに先生に注意された。"], answer: 0 } },

        // ついでに
        { id: 13, type: EXERCISE_TYPE.type1, question: "Nhân tiện đi dạo thì hãy bỏ bưu thiếp vào hòm thư.", grammar: "ついでに", data: { options: ["散歩のついでにこのはがきをポストに出してきて。", "散歩の間このはがきをポストに出してきて。", "散歩したきりこのはがきをポストに出してきて。"], answer: 0 } },
        { id: 14, type: EXERCISE_TYPE.type1, question: "Nhân tiện đến cửa hàng tiện lợi, mua giúp tôi sữa đi.", grammar: "ついでに", data: { options: ["コンビニに行ったついでに、牛乳を買ってきて。", "コンビニに行ったばかりに、牛乳を買ってきて。", "コンビニに行ったとたんに、牛乳を買ってきて。"], answer: 0 } },

        // ～最中に
        { id: 15, type: EXERCISE_TYPE.type1, question: "Đúng lúc đang họp thì mất điện.", grammar: "～最中に", data: { options: ["会議の最中に停電になった。", "会議のうちに停電になった。", "会議の間ずっと停電になった。"], answer: 0 } },
        { id: 16, type: EXERCISE_TYPE.type1, question: "Đúng lúc tôi đang nói chuyện quan trọng thì có điện thoại reo.", grammar: "～最中に", data: { options: ["大事な話をしている最中に、電話が鳴った。", "大事な話をするうちに、電話が鳴った。", "大事な話をしたばかりに、電話が鳴った。"], answer: 0 } },

        // ～たとたん
        { id: 17, type: EXERCISE_TYPE.type1, question: "Tôi vừa mới mở cửa sổ ra thì có một luồng gió mạnh tràn vào.", grammar: "～たとたん", data: { options: ["窓を開けたとたん、強い風が入ってきた。", "窓を開けているうちに、強い風が入ってきた。", "窓を開けたきり、強い風が入ってきた。"], answer: 0 } },
        { id: 18, type: EXERCISE_TYPE.type1, question: "Vừa nhìn thấy mặt tôi, anh ấy đột nhiên bật cười.", grammar: "～たとたん", data: { options: ["彼は私の顔を見た途端、突然笑い出した。", "彼は私の顔を見ているところに、突然笑い出した。", "彼は私の顔を見るついでに、突然笑い出した。"], answer: 0 } },

        // ～から～にかけて
        { id: 19, type: EXERCISE_TYPE.type1, question: "Nho này được thu hoạch từ tháng 8 đến tháng 9.", grammar: "～から～にかけて", data: { options: ["このブドウは8月から9月にかけて収穫されます。", "このブドウは8月と9月の間収穫されます。", "このブドウは8月のうちに9月まで収穫されます。"], answer: 0 } },
        { id: 20, type: EXERCISE_TYPE.type1, question: "Trời mưa lớn từ buổi chiều đến tối.", grammar: "～から～にかけて", data: { options: ["午後から夕方にかけて、大雨が降った。", "午後と夕方のきり、大雨が降った。", "午後は夕方までばかりで、大雨が降った。"], answer: 0 } },

        // Vたきり
        { id: 21, type: EXERCISE_TYPE.type1, question: "Hiroshi kể từ khi đi hiệu sách, vẫn chưa thấy quay trở về.", grammar: "Vたきり", data: { options: ["ひろしは本屋へ行ったきり、まだ戻ってこない。", "ひろしは本屋へ行ったついでに、まだ戻ってこない。", "ひろしは本屋へ行くまでに、まだ戻ってこない。"], answer: 0 } },

        // Vてはじめて
        { id: 22, type: EXERCISE_TYPE.type1, question: "Kể từ khi sống một mình tôi mới hiểu được tầm quan trọng của gia đình.", grammar: "Vてはじめて", data: { options: ["一人暮らしをして初めて、家族の大切さをわかってきた。", "一人暮らしをするところで、家族の大切さをわかってきた。", "一人暮らしをすることによって、家族の大切さをわかってきた。"], answer: 0 } },

        // Vます+たて
        { id: 23, type: EXERCISE_TYPE.type1, question: "Bánh mì mới nướng xong rất ngon nhỉ.", grammar: "Vます+たて", data: { options: ["焼きたてのパンはおいしいですね。", "焼いたばかりのパンはおいしいですね。", "焼きながらのパンはおいしいですね。"], answer: 0 } },

        // Vます+かけ
        { id: 24, type: EXERCISE_TYPE.type1, question: "Đây là cuốn sách tôi đang đọc dở.", grammar: "Vます+かけ", data: { options: ["これは私の読みかけの本です。", "これは私の読んだところの本です。", "これは私の読んでいる間にの本です。"], answer: 0 } },

        // Vます+上がる/上げる
        { id: 25, type: EXERCISE_TYPE.type1, question: "Cuối cùng thì cũng đã viết xong báo cáo?", grammar: "Vます+上がる", data: { options: ["やっとレポートを書き上がりましたか?", "やっとレポートを書きついでにしましたか?", "やっとレポートを書いているうちに終わりましたか?"], answer: 0 } },

        // Vます+はじめる
        { id: 26, type: EXERCISE_TYPE.type1, question: "Tôi bắt đầu học tiếng Nhật 2 năm trước.", grammar: "Vます+はじめる", data: { options: ["日本語は二年前勉強しはじめた。", "日本語は二年前勉強したきりだ。", "日本語は二年前勉強するどころだ。"], answer: 0 } },

        // ==============================================================================================
        // 2. Bài Tập Sắp Xếp Câu (10 câu)
        // ==============================================================================================

        // うち（に）
        { id: 27, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Trong lúc còn khoẻ, tôi muốn đi du lịch nhiều nơi", grammar: "うちに", data: { parts: ["元気な", "いろいろな", "旅行したい。", "うちに、", "ところへ"], correct: ["元気な", "うちに、", "いろいろな", "ところへ", "旅行したい。"] } },

        // 間/間に
        { id: 28, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Bố tôi ngủ suốt thời gian tôi tắm", grammar: "間", data: { parts: ["父は", "シャワーを", "浴びている", "寝ていた。", "間", "私が"], correct: ["私が", "シャワーを", "浴びている", "間、", "父は", "寝ていた。"] } },

        // てからでないと/てからでなければ
        { id: 29, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nếu không đi kiểm tra sức khỏe, tôi không thể yên tâm", grammar: "てからでないと", data: { parts: ["安心できない。", "健康診断を", "からでないと、", "受けて"], correct: ["健康診断を", "受けて", "からでないと、", "安心できない。"] } },

        // Vる/Vている/Vたところ
        { id: 30, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Cô ấy đang ở phòng khách, đang nói chuyện điện thoại", grammar: "Vているところ", data: { parts: ["電話している", "彼女は今、", "ところだ。", "居間で"], correct: ["彼女は今、", "居間で", "電話している", "ところだ。"] } },

        // ついでに
        { id: 31, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nhân tiện đi bưu điện, tôi gửi thư cho bạn", grammar: "ついでに", data: { parts: ["友達に", "出した。", "郵便局に", "行った", "ついでに、", "手紙を"], correct: ["郵便局に", "行った", "ついでに、", "友達に", "手紙を", "出した。"] } },

        // ～最中に
        { id: 32, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Điện thoại reo đúng lúc tôi đang ăn cơm", grammar: "～最中に", data: { parts: ["電話が", "鳴った。", "食べている", "最中に、", "ご飯を"], correct: ["ご飯を", "食べている", "最中に、", "電話が", "鳴った。"] } },

        // ～たとたん
        { id: 33, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Cô ấy vừa nghe tin đó thì bật khóc", grammar: "～たとたん", data: { parts: ["泣き出した。", "彼女は", "知らせを", "聞いたとたん、", "その"], correct: ["彼女は", "その", "知らせを", "聞いたとたん、", "泣き出した。"] } },

        // Vたきり
        { id: 34, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Kể từ lần đó gặp nhau, chúng tôi chưa gặp lại", grammar: "Vたきり", data: { parts: ["連絡が", "あの一度", "会ったきり、", "取れない。"], correct: ["あの一度", "会ったきり、", "連絡が", "取れない。"] } },

        // Vます+たて
        { id: 35, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Cô ấy không thích cá vừa mới làm xong", grammar: "Vます+たて", data: { parts: ["好きではない。", "彼女は", "魚が", "作りたての"], correct: ["彼女は", "作りたての", "魚が", "好きではない。"] } },

        // Vます+上がる/上げる
        { id: 36, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi đã đọc xong cuốn tiểu thuyết này trong một ngày", grammar: "Vます+上げる", data: { parts: ["一日で", "この小説を", "読み上げた。"], correct: ["この小説を", "一日で", "読み上げた。"] } },

        // ==============================================================================================
        // 3. Bài tập biến đổi câu (13 câu)
        // ==============================================================================================

        // うち（に）
        { id: 37, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'うちに': 'Trước khi quên, hãy ghi chú lại.'", grammar: "うちに", data: { correct_answer: "忘れないうちに、メモしておこう。", hint: "Dùng thể phủ định Vnai + うちに" } },

        // 間/間に
        { id: 38, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '間': 'Trong suốt 3 giờ, tôi học tiếng Nhật.'", grammar: "間", data: { correct_answer: "3時間の間、ずっと日本語を勉強した。", hint: "Dùng N + の間 + ずっと" } },

        // てからでないと/てからでなければ
        { id: 39, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'てからでなければ': 'Nếu không kiểm tra thực tế, không thể tin được.'", grammar: "てからでなければ", data: { correct_answer: "実際に見てからでなければ、信じられない。", hint: "Dùng Vてからでなければ" } },

        // Vる/Vている/Vたところ
        { id: 40, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vる/Vている/Vたところ': 'Ông Tanaka đang ăn tối.'", grammar: "Vているところ", data: { correct_answer: "田中さんは今、晩ご飯を食べているところだ。", hint: "Dùng Vているところ" } },
        { id: 41, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vる/Vている/Vたところ': 'Bộ phim sắp bắt đầu.'", grammar: "Vるところ", data: { correct_answer: "映画はもうすぐ始まるところです。", hint: "Dùng Vる + ところ" } },
        { id: 42, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vる/Vている/Vたところ': 'Tôi vừa hoàn thành bài tập về nhà.'", grammar: "Vたところ", data: { correct_answer: "宿題を終えたところだ。", hint: "Dùng Vた + ところ" } },

        // ついでに
        { id: 43, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'ついでに': 'Nhân tiện đi siêu thị, mua tạp chí đi.'", grammar: "ついでに", data: { correct_answer: "スーパーへ行くついでに、雑誌を買ってきて。", hint: "Dùng Vる/Nの + ついでに" } },

        // ～最中に
        { id: 44, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～最中に': 'Đúng lúc đang học, đứa em trai ồn ào.'", grammar: "～最中に", data: { correct_answer: "勉強している最中に、弟がうるさくした。", hint: "Dùng Vている + 最中に" } },

        // ～たとたん
        { id: 45, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～たとたん': 'Vừa bước ra khỏi nhà, trời bắt đầu mưa.'", grammar: "～たとたん", data: { correct_answer: "家を出たとたん、雨が降り出した。", hint: "Dùng Vた + とたん" } },

        // Vたきり
        { id: 46, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vたきり': 'Sau khi nói 'Tạm biệt', anh ấy không quay lại nữa.'", grammar: "Vたきり", data: { correct_answer: "「さよなら」と言ったきり、戻ってこなかった。", hint: "Dùng Vたきり" } },

        // Vます+たて
        { id: 47, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vます+たて': 'Món ăn vừa mới nấu xong ngon nhất.'", grammar: "Vます+たて", data: { correct_answer: "作りたての料理が一番美味しい。", hint: "Dùng Vます+たて + N" } },

        // Vます+かけ
        { id: 48, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vます+かけ': 'Tôi không thể uống hết cốc cà phê đang uống dở.'", grammar: "Vます+かけ", data: { correct_answer: "飲みかけのコーヒーが飲めない。", hint: "Dùng Vます+かけ + N" } },

        // Vます+上がる/上げる
        { id: 49, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vます+上がる': 'Sau 3 ngày, cuối cùng tôi cũng đọc xong cuốn sách dày.'", grammar: "Vます+上がる", data: { correct_answer: "3日かけて、やっと厚い本を読み上がった。", hint: "Dùng Vます+上がる" } },

        // ==============================================================================================
        // 4. Bài tập điền trợ từ (12 câu)
        // ==============================================================================================

        // うち（に）
        { id: 50, type: EXERCISE_TYPE.type4, question: "覚えている（＿＿）書き留めておこう。", grammar: "うちに", data: { sentence: "覚えている（＿＿）書き留めておこう。", options: ["うちに", "からに", "ほどに", "さえに"], answer: 0 } },

        // 間/間に
        { id: 51, type: EXERCISE_TYPE.type4, question: "夏休み（＿＿）旅行に行く予定です。", grammar: "間に", data: { sentence: "夏休み（＿＿）旅行に行く予定です。", options: ["の間に", "のうちに", "のたびに", "ばかりに"], answer: 0 } },

        // てからでないと/てからでなければ
        { id: 52, type: EXERCISE_TYPE.type4, question: "よく考えて（＿＿）、結論は出せない。", grammar: "てからでなければ", data: { sentence: "よく考えて（＿＿）、結論は出せない。", options: ["からでなければ", "たびに", "うちに", "ついでに"], answer: 0 } },

        // Vる/Vている/Vたところ
        { id: 53, type: EXERCISE_TYPE.type4, question: "今、出かけようとする（＿＿）です。", grammar: "Vるところ", data: { sentence: "今、出かけようとする（＿＿）です。", options: ["ところ", "ばかり", "きり", "まで"], answer: 0 } },
        { id: 54, type: EXERCISE_TYPE.type4, question: "先生は廊下を歩いている（＿＿）に会いました。", grammar: "Vているところ", data: { sentence: "先生は廊下を歩いている（＿＿）に会いました。", options: ["ところ", "最中", "うちに", "かわり"], answer: 0 } },

        // ついでに
        { id: 55, type: EXERCISE_TYPE.type4, question: "散歩の（＿＿）に、牛乳を買った。", grammar: "ついでに", data: { sentence: "散歩の（＿＿）に、牛乳を買った。", options: ["ついで", "最中", "間", "きり"], answer: 0 } },

        // ～最中に
        { id: 56, type: EXERCISE_TYPE.type4, question: "電話をしている（＿＿）に、急に切れた。", grammar: "～最中に", data: { sentence: "電話をしている（＿＿）に、急に切れた。", options: ["最中", "うちに", "ついで", "ばかり"], answer: 0 } },

        // ～たとたん
        { id: 57, type: EXERCISE_TYPE.type4, question: "ドアを開けた（＿＿）、猫が飛び出していった。", grammar: "～たとたん", data: { sentence: "ドアを開けた（＿＿）、猫が飛び出していった。", options: ["とたん", "うちに", "きり", "まで"], answer: 0 } },

        // ～から～にかけて
        { id: 58, type: EXERCISE_TYPE.type4, question: "東京（＿＿）大阪（＿＿）は、雨の予報だ。", grammar: "～から～にかけて", data: { sentence: "東京（から）大阪（＿＿）は、雨の予報だ。", options: ["にかけて", "の間に", "についで", "きりに"], answer: 0 } },

        // Vたきり
        { id: 59, type: EXERCISE_TYPE.type4, question: "彼は部屋に入った（＿＿）、出てこない。", grammar: "Vたきり", data: { sentence: "彼は部屋に入った（＿＿）、出てこない。", options: ["きり", "ばかり", "ながら", "あげ"], answer: 0 } },

        // Vてはじめて
        { id: 60, type: EXERCISE_TYPE.type4, question: "海外へ行って（＿＿）、日本の良さがわかった。", grammar: "Vてはじめて", data: { sentence: "海外へ行って（＿＿）、日本の良さがわかった。", options: ["はじめて", "ばかりに", "たびに", "ついでに"], answer: 0 } },

        // Vます+たて
        { id: 61, type: EXERCISE_TYPE.type4, question: "焼きた（＿＿）のパンを食べる。", grammar: "Vます+たて", data: { sentence: "焼きた（＿＿）のパンを食べる。", options: ["て", "ところ", "うち", "きり"], answer: 0 } }
    ],
    [GRAMMAR_GROUP.group2]: [
        // ==============================================================================================
        // 1. Bài tập chọn đúng cấu trúc ngữ pháp (26 câu)
        // ==============================================================================================

        // てからでないと/てからでなければ
        { id: 101, type: EXERCISE_TYPE.type1, question: "Nếu không thảo luận kỹ lưỡng, chúng ta không thể đưa ra quyết định.", grammar: "てからでないと", data: { options: ["よく話し合ってからでないと、決めることはできない。", "よく話し合っているうちに、決めることはできない。", "よく話し合ったところで、決めることはできない。"], answer: 0 } },
        { id: 102, type: EXERCISE_TYPE.type1, question: "Nếu không có sự cho phép của sếp, tôi không thể nghỉ việc.", grammar: "てからでなければ", data: { options: ["上司の許可をもらってからでなければ、休めない。", "上司の許可をもらうばかりに、休めない。", "上司の許可をもらうついでに、休めない。"], answer: 0 } },

        // ～ため(に)/～ためだ
        { id: 103, type: EXERCISE_TYPE.type1, question: "Bản báo cáo có nhiều lỗi là bởi vì đã không xem và sửa kĩ.", grammar: "～ためだ", data: { options: ["報告書にミスが多かったのは、よく見直しをしなかったためだろう。", "報告書にミスが多かったのは、よく見直しをしなかったおかげだろう。", "報告書にミスが多かったのは、よく見直しをしなかったせいでだろう。"], answer: 0 } },
        { id: 104, type: EXERCISE_TYPE.type1, question: "Tôi chuyển chỗ ở vì công việc.", grammar: "～ために", data: { options: ["仕事のために、引っ越しをしました。", "仕事にとって、引っ越しをしました。", "仕事のおかげで、引っ越しをしました。"], answer: 0 } },

        // ～によって
        { id: 105, type: EXERCISE_TYPE.type1, question: "Công trường không thể sản xuất chiếu tatami do thiếu nguyên liệu.", grammar: "～によって", data: { options: ["材料不足によって、たたみの生産はもうできなくなった。", "材料不足によって、たたみの生産はもうできるはずだ。", "材料不足のおかげで、たたみの生産はもうできなくなった。"], answer: 0 } },
        { id: 106, type: EXERCISE_TYPE.type1, question: "Nhờ vào việc học ngoại ngữ mà chúng ta có thể hiểu được cách suy nghĩ của con người đất nước đó.", grammar: "～によって", data: { options: ["外国語を学ぶことによって、その国の人たちの考え方も知ることができる。", "外国語を学ぶことばかりに、その国の人たちの考え方も知ることができる。", "外国語を学ぶことなら、その国の人たちの考え方も知ることができる。"], answer: 0 } },

        // ～から/ことから
        { id: 107, type: EXERCISE_TYPE.type1, question: "Vì khuân mặt giống nhau nên tôi biết ngay hai người họ là bố con.", grammar: "～ことから", data: { options: ["顔がよく似ていることから、二人は親子だとすぐにわかった。", "顔がよく似ているなら、二人は親子だとすぐにわかった。", "顔がよく似ているせいで、二人は親子だとすぐにわかった。"], answer: 0 } },
        { id: 108, type: EXERCISE_TYPE.type1, question: "Từ việc trời có mây đen, có thể phán đoán là trời sắp mưa.", grammar: "～から", data: { options: ["空が暗いことから、雨が降りそうだ。", "空が暗いばかりに、雨が降りそうだ。", "空が暗いおかげで、雨が降りそうだ。"], answer: 0 } },

        // おかげだ/おかげで
        { id: 109, type: EXERCISE_TYPE.type1, question: "Việc quyết định làm cho một công ty tốt là nhờ có thầy.", grammar: "おかげだ", data: { options: ["いい会社に就職が決まったのは先生のおかげです。", "いい会社に就職が決まったのは先生のせいです。", "いい会社に就職が決まったのは先生のためです。"], answer: 0 } },
        { id: 110, type: EXERCISE_TYPE.type1, question: "Nhờ có sự giúp đỡ của bạn bè mà tôi đã vượt qua khó khăn.", grammar: "おかげで", data: { options: ["友達が助けてくれたおかげで、困難を乗り越えられた。", "友達が助けてくれたために、困難を乗り越えられた。", "友達が助けてくれたせいで、困難を乗り越えられた。"], answer: 0 } },

        // せいで/せいだ
        { id: 111, type: EXERCISE_TYPE.type1, question: "Do gần đây rất bận nên tôi khá mệt mỏi.", grammar: "せいで", data: { options: ["最近、忙しかったせいで、かなり疲れている。", "最近、忙しかったおかげで、かなり疲れている。", "最近、忙しかったために、かなり疲れている。"], answer: 0 } },
        { id: 112, type: EXERCISE_TYPE.type1, question: "Tất cả là tại anh mà buổi tiệc đã bị hủy.", grammar: "せいだ", data: { options: ["パーティーが中止になったのは、あなたのせいだ。", "パーティーが中止になったのは、あなたのおかげだ。", "パーティーが中止になったのは、あなたにとってだ。"], answer: 0 } },

        // のだから/んだから
        { id: 113, type: EXERCISE_TYPE.type1, question: "Vì cậu còn trẻ con, nên không hiểu chuyện cũng phải thôi.", grammar: "のだから", data: { options: ["まだ子供なのだから、わからなくても仕方がないでしょう。", "まだ子供なにかわりに、わからなくても仕方がないでしょう。", "まだ子供なきり、わからなくても仕方がないでしょう。"], answer: 0 } },
        { id: 114, type: EXERCISE_TYPE.type1, question: "Vì đã hứa rồi nên đương nhiên phải giữ lời.", grammar: "んだから", data: { options: ["約束したんだから、守るのは当然だ。", "約束したおかげで、守るのは当然だ。", "約束したばかりに、守るのは当然だ。"], answer: 0 } },

        // ～(の)なら
        { id: 115, type: EXERCISE_TYPE.type1, question: "Nếu biết sự thật, xin anh hãy cho tôi biết.", grammar: "～のなら", data: { options: ["真相を知っているのなら、私に教えてほしい。", "真相を知っているついでに、私に教えてほしい。", "真相を知っていることに、私に教えてほしい。"], answer: 0 } },
        { id: 116, type: EXERCISE_TYPE.type1, question: "Nếu anh muốn mua cái này, thì nên mua ngay bây giờ.", grammar: "～なら", data: { options: ["これを買うなら、今すぐ買ったほうがいい。", "これを買ったきり、今すぐ買ったほうがいい。", "これのせいで、今すぐ買ったほうがいい。"], answer: 0 } },

        // ～ては/～(の)では
        { id: 117, type: EXERCISE_TYPE.type1, question: "Nếu 500 yên một giờ cho công việc này thì sẽ không tìm được người làm.", grammar: "～では", data: { options: ["この仕事に時給500円では人が見つかりません。", "この仕事に時給500円なら人が見つかりません。", "この仕事に時給500円さえ人が見つかりません。"], answer: 0 } },
        { id: 118, type: EXERCISE_TYPE.type1, question: "Nếu cứ tiếp tục ăn nhiều như vậy, bạn sẽ bị béo phì mất.", grammar: "～ては", data: { options: ["そんなに食べていては、太ってしまうよ。", "そんなに食べているうちに、太ってしまうよ。", "そんなに食べているせいで、太ってしまうよ。"], answer: 0 } },

        // ～さえ～ば/～さえ～なら
        { id: 119, type: EXERCISE_TYPE.type1, question: "Chỉ cần có anh ở bên cạnh, ngoài ra em không cần gì cả.", grammar: "～さえ～ば", data: { options: ["あなたさえそばにいてくだされば、ほかにはなにもいりません。", "あなたがそばにいるなら、ほかにはなにもいりません。", "あなたがそばにいるばかりに、ほかにはなにもいりません。"], answer: 0 } },
        { id: 120, type: EXERCISE_TYPE.type1, question: "Chỉ cần không có lỗi là được.", grammar: "～さえ～なら", data: { options: ["間違いさえなければ、問題ない。", "間違いは当然、問題ない。", "間違いのせいで、問題ない。"], answer: 0 } },

        // たとえ～ても/たとえ～でも
        { id: 121, type: EXERCISE_TYPE.type1, question: "Cho dù những người xung quanh có phản đối thế nào đi nữa thì tôi vẫn muốn trở thành một ca sĩ chuyên nghiệp.", grammar: "たとえ～ても", data: { options: ["たとえ周りの人たちにどんなに反対されても、僕はプロの歌手になりたい。", "周りの人たちに反対されたおかげで、僕はプロの歌手になりたい。", "周りの人たちに反対されたなら、僕はプロの歌手になりたい。"], answer: 0 } },
        { id: 122, type: EXERCISE_TYPE.type1, question: "Cho dù là người nổi tiếng thì cũng không thể làm mọi thứ mình thích.", grammar: "たとえ～でも", data: { options: ["たとえ有名人でも、好きなことばかりはできない。", "有名人なら、好きなことばかりはできない。", "有名人のせいで、好きなことばかりはできない。"], answer: 0 } },

        // ばかりに
        { id: 123, type: EXERCISE_TYPE.type1, question: "Chỉ tại không có việc làm mà tôi bị vợ coi thường.", grammar: "ばかりに", data: { options: ["働きがないばかりに、妻にバカにされている。", "働きがないおかげで、妻にバカにされている。", "働きがないとしても、妻にバカにされている。"], answer: 0 } },
        { id: 124, type: EXERCISE_TYPE.type1, question: "Chỉ vì nói một lời ngớ ngẩn mà bị cả lớp cười nhạo.", grammar: "ばかりに", data: { options: ["うっかり一言言ったばかりに、クラス中から笑われた。", "うっかり一言言ったついでに、クラス中から笑われた。", "うっかり一言言ったおかげで、クラス中から笑われた。"], answer: 0 } },

        // ～(んだ)もの/もん
        { id: 125, type: EXERCISE_TYPE.type1, question: "Hôm nay thi không làm được bài. Ấy là vì không học, nên đành vậy thôi.", grammar: "～もん", data: { options: ["勉強しなかっただもん、仕方がない。", "勉強しなかったのなら、仕方がない。", "勉強しなかったにもかかわらず、仕方がない。"], answer: 0 } },
        { id: 126, type: EXERCISE_TYPE.type1, question: "Tôi muốn đi chơi. (vì hôm nay là cuối tuần mà)", grammar: "～もの", data: { options: ["今日は週末なんだもの、遊びに行きたい。", "今日は週末なのに、遊びに行きたい。", "今日は週末だからといって、遊びに行きたい。"], answer: 0 } },


        // ==============================================================================================
        // 2. Bài Tập Sắp Xếp Câu (10 câu)
        // ==============================================================================================

        // てからでないと/てからでなければ
        { id: 127, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nếu không hỏi ý kiến chuyên gia, tôi không thể bắt đầu", grammar: "てからでないと", data: { parts: ["始められない。", "専門家に", "聞いて", "からでないと、"], correct: ["専門家に", "聞いて", "からでないと、", "始められない。"] } },

        // ～ために
        { id: 128, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi đang tiết kiệm tiền để mua nhà", grammar: "～ために", data: { parts: ["お金を", "ために、", "家を", "貯めている。", "買う"], correct: ["家を", "買う", "ために、", "お金を", "貯めている。"] } },

        // ～によって
        { id: 129, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tùy vào kết quả mà cách xử lý sẽ khác nhau", grammar: "～によって", data: { parts: ["異なります。", "対応が", "結果", "によって、"], correct: ["結果", "によって、", "対応が", "異なります。"] } },

        // おかげで
        { id: 130, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nhờ có cô ấy hướng dẫn mà tôi đã đến được đích", grammar: "おかげで", data: { parts: ["目的地に", "彼女の", "おかげで、", "たどり着けた。", "案内"], correct: ["彼女の", "案内", "のおかげで、", "目的地に", "たどり着けた。"] } },

        // せいで
        { id: 131, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tại tôi đến muộn mà chúng tôi bị lỡ chuyến tàu", grammar: "せいで", data: { parts: ["電車に", "私が", "遅れた", "乗り遅れた。", "せいで、"], correct: ["私が", "遅れた", "せいで、", "電車に", "乗り遅れた。"] } },

        // ～のなら
        { id: 132, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nếu không muốn làm, thì không cần làm", grammar: "～のなら", data: { parts: ["やらなくても", "のなら、", "やりたくない", "いい。"], correct: ["やりたくない", "のなら、", "やらなくても", "いい。"] } },

        // ～ては
        { id: 133, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nếu cứ ngủ như thế này thì thi không đỗ được", grammar: "～ては", data: { parts: ["合格できない。", "こんなに", "寝ていては、", "試験に"], correct: ["こんなに", "寝ていては、", "試験に", "合格できない。"] } },

        // ～さえ～ば
        { id: 134, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Chỉ cần có tiền là có thể làm được mọi thứ", grammar: "～さえ～ば", data: { parts: ["何でも", "お金さえ", "できる。", "あれば、"], correct: ["お金さえ", "あれば、", "何でも", "できる。"] } },

        // たとえ～ても
        { id: 135, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Cho dù trời mưa to thì cuộc thi vẫn được tổ chức", grammar: "たとえ～ても", data: { parts: ["試合は", "たとえ", "降っても、", "行われる。", "大雨が"], correct: ["たとえ", "大雨が", "降っても、", "試合は", "行われる。"] } },

        // ばかりに
        { id: 136, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Chỉ vì bất cẩn mà tôi bị thương nặng", grammar: "ばかりに", data: { parts: ["大けがを", "ばかりに、", "うっかりした", "してしまった。"], correct: ["うっかりした", "ばかりに、", "大けがを", "してしまった。"] } },

        // ==============================================================================================
        // 3. Bài tập biến đổi câu (13 câu)
        // ==============================================================================================

        // てからでないと/てからでなければ
        { id: 137, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'てからでないと': 'Nếu không kiểm tra chi phí, không thể ký hợp đồng.'", grammar: "てからでないと", data: { correct_answer: "費用を確認してからでないと、契約できない。", hint: "Dùng Vてからでないと" } },

        // ～ため(に)/～ためだ
        { id: 138, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ために': 'Tôi đi du học vì muốn học tiếng Nhật chuyên sâu.'", grammar: "～ために", data: { correct_answer: "日本語を深く学ぶために、留学した。", hint: "Dùng Vるために" } },
        { id: 139, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ためだ': 'Cái máy bị hỏng là do lỗi của người vận hành.'", grammar: "～ためだ", data: { correct_answer: "機械が故障したのは、作業員のミスがあったためだ。", hint: "Dùng Nがあったためだ" } },

        // ～によって
        { id: 140, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～によって': 'Tùy theo thời tiết mà lịch trình có thể thay đổi.'", grammar: "～によって", data: { correct_answer: "天気によって、スケジュールが変更になることがある。", hint: "Dùng Nによって" } },
        { id: 141, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～によって': 'Bằng cách cải tiến phương pháp, hiệu suất công việc đã tăng lên.'", grammar: "～によって", data: { correct_answer: "やり方を工夫することによって、仕事の効率が上がった。", hint: "Dùng Vることによって" } },

        // おかげだ/おかげで
        { id: 142, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'おかげで': 'Nhờ có sự giúp đỡ của bạn bè mà tôi đã vượt qua được kỳ thi.'", grammar: "おかげで", data: { correct_answer: "友達が手伝ってくれたおかげで、試験に受かった。", hint: "Dùng Vてくれたおかげで" } },

        // せいで/せいだ
        { id: 143, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'せいで': 'Tại anh không báo trước mà tôi bị trễ hẹn.'", grammar: "せいで", data: { correct_answer: "あなたが連絡しなかったせいで、待ち合わせに遅れた。", hint: "Dùng Vなかったせいで" } },

        // のだから/んだから
        { id: 144, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'のだから': 'Vì đã là người lớn rồi, hãy tự chịu trách nhiệm.'", grammar: "のだから", data: { correct_answer: "大人なのだから、自分で責任を取りなさい。", hint: "Dùng N + なのだから" } },

        // ～(の)なら
        { id: 145, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～のなら': 'Nếu có thông tin gì, hãy cho tôi biết càng sớm càng tốt.'", grammar: "～のなら", data: { correct_answer: "何か情報があるのなら、早く教えてください。", hint: "Dùng Vる + のなら" } },

        // ～さえ～ば
        { id: 146, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～さえ～ば': 'Chỉ cần có máy tính, tôi có thể làm việc ở bất cứ đâu.'", grammar: "～さえ～ば", data: { correct_answer: "パソコンさえあれば、どこでも仕事ができる。", hint: "Dùng Nさえあれば" } },

        // たとえ～ても/たとえ～でも
        { id: 147, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'たとえ～ても': 'Cho dù bị cười nhạo, tôi vẫn không thay đổi ý kiến.'", grammar: "たとえ～ても", data: { correct_answer: "たとえ笑われても、意見は変えない。", hint: "Dùng たとえ Vても" } },

        // ばかりに
        { id: 148, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'ばかりに': 'Chỉ vì tin lời anh ta mà tôi bị lừa.'", grammar: "ばかりに", data: { correct_answer: "彼の言葉を信じたばかりに、騙されてしまった。", hint: "Dùng Vたばかりに" } },

        // ～(んだ)もの/もん
        { id: 149, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～もん': 'Tôi không muốn ăn rau. (vì tôi ghét rau)'", grammar: "～もん", data: { correct_answer: "野菜は食べたくないよ。だって、嫌いだもん。", hint: "Dùng Nだもん (dạng thân mật)" } },

        // ==============================================================================================
        // 4. Bài tập điền trợ từ (12 câu)
        // ==============================================================================================

        // ～ために
        { id: 150, type: EXERCISE_TYPE.type4, question: "彼は家族（＿＿）、一生懸命働いている。", grammar: "～ために", data: { sentence: "彼は家族（＿＿）、一生懸命働いている。", options: ["のために", "のおかげ", "のせいで", "のこと"], answer: 0 } },

        // ～によって
        { id: 151, type: EXERCISE_TYPE.type4, question: "経験（＿＿）、物事の考え方が変わる。", grammar: "～によって", data: { sentence: "経験（＿＿）、物事の考え方が変わる。", options: ["によって", "につれて", "のとおり", "にもかかわらず"], answer: 0 } },

        // ～から/ことから
        { id: 152, type: EXERCISE_TYPE.type4, question: "彼の態度（＿＿）、機嫌が悪いことがわかる。", grammar: "～ことから", data: { sentence: "彼の態度（＿＿）、機嫌が悪いことがわかる。", options: ["から", "まで", "こそ", "なら"], answer: 0 } },

        // おかげだ/おかげで
        { id: 153, type: EXERCISE_TYPE.type4, question: "皆さんの協力（＿＿）、無事にプロジェクトが終わった。", grammar: "おかげで", data: { sentence: "皆さんの協力（＿＿）、無事にプロジェクトが終わった。", options: ["のおかげで", "のせいで", "のために", "によって"], answer: 0 } },

        // せいで/せいだ
        { id: 154, type: EXERCISE_TYPE.type4, question: "大雨（＿＿）、電車が遅れてしまった。", grammar: "せいで", data: { sentence: "大雨（＿＿）、電車が遅れてしまった。", options: ["のせいで", "のおかげで", "によって", "のため"], answer: 0 } },

        // のだから/んだから
        { id: 155, type: EXERCISE_TYPE.type4, question: "もう夜遅い（＿＿）、静かにしてください。", grammar: "のだから", data: { sentence: "もう夜遅い（＿＿）、静かにしてください。", options: ["のだから", "のなら", "なら", "さえ"], answer: 0 } },

        // ～(の)なら
        { id: 156, type: EXERCISE_TYPE.type4, question: "あなたが反対する（＿＿）、この計画は諦めます。", grammar: "～のなら", data: { sentence: "あなたが反対する（＿＿）、この計画は諦めます。", options: ["のなら", "ばかりに", "せいで", "ても"], answer: 0 } },

        // ～ては/～(の)では
        { id: 157, type: EXERCISE_TYPE.type4, question: "そんなに急い（＿＿）、事故を起こすよ。", grammar: "～ては", data: { sentence: "そんなに急い（＿＿）、事故を起こすよ。", options: ["でては", "でなら", "でさえ", "でこそ"], answer: 0 } },

        // ～さえ～ば/～さえ～なら
        { id: 158, type: EXERCISE_TYPE.type4, question: "電話番号（＿＿）わかれば、連絡できる。", grammar: "～さえ～ば", data: { sentence: "電話番号（＿＿）わかれば、連絡できる。", options: ["さえ", "まで", "こそ", "でも"], answer: 0 } },

        // たとえ～ても/たとえ～でも
        { id: 159, type: EXERCISE_TYPE.type4, question: "たとえ失敗し（＿＿）、私は諦めない。", grammar: "たとえ～ても", data: { sentence: "たとえ失敗し（＿＿）、私は諦めない。", options: ["ても", "ながら", "ばかり", "に"], answer: 0 } },

        // ばかりに
        { id: 160, type: EXERCISE_TYPE.type4, question: "一言多い（＿＿）、上司に怒られた。", grammar: "ばかりに", data: { sentence: "一言多い（＿＿）、上司に怒られた。", options: ["ばかりに", "おかげで", "ためで", "にして"], answer: 0 } },

        // ～(んだ)もの/もん
        { id: 161, type: EXERCISE_TYPE.type4, question: "疲れた（＿＿）、早く帰りたい。", grammar: "～もの", data: { sentence: "疲れた（＿＿）、早く帰りたい。", options: ["んだもの", "ては", "からで", "として"], answer: 0 } },
    ],
    [GRAMMAR_GROUP.group3]: [
        // ==============================================================================================
        // 1. Bài tập chọn đúng cấu trúc ngữ pháp (32 câu)
        // ==============================================================================================

        // とおり(に/だ)/どおり(に/だ)
        { id: 201, type: EXERCISE_TYPE.type1, question: "Trên đời mọi chuyện không xảy ra theo như mình nghĩ.", grammar: "とおり(に/だ)", data: { options: ["人生は自分の思うとおりにはいかない。", "人生は自分の思うたびににはいかない。", "人生は自分の思うこそにはいかない。"], answer: 0 } },
        { id: 202, type: EXERCISE_TYPE.type1, question: "Tôi đã làm theo đúng hướng dẫn của cô giáo.", grammar: "どおり(に/だ)", data: { options: ["先生が言われたとおりに、宿題をしました。", "先生が言われたついでに、宿題をしました。", "先生が言われたばかりか、宿題をしました。"], answer: 0 } },
        { id: 203, type: EXERCISE_TYPE.type1, question: "Học tập không phải lúc nào cũng thuận lợi như kế hoạch.", grammar: "とおり(に/だ)", data: { options: ["勉強は計画どおりにいかないこともある。", "勉強は計画のせいでいかないこともある。", "勉強は計画のおかげでいかないこともある。"], answer: 0 } },

        // によって/によっては
        { id: 204, type: EXERCISE_TYPE.type1, question: "Tùy vào từng quốc gia mà phong tục khác nhau.", grammar: "によって", data: { options: ["国によって習慣が違う。", "国と違って習慣が違う。", "国にして習慣が違う。"], answer: 0 } },
        { id: 205, type: EXERCISE_TYPE.type1, question: "Ngày mai tùy vào từng vùng, mà có vùng có thể sẽ mưa.", grammar: "によっては", data: { options: ["明日は、所によっては、雨が降るかもしれない。", "明日は、所にとって、雨が降るかもしれない。", "明日は、所の反面、雨が降るかもしれない。"], answer: 0 } },
        { id: 206, type: EXERCISE_TYPE.type1, question: "Tùy vào cách suy nghĩ mà hạnh phúc cũng khác nhau.", grammar: "によって", data: { options: ["考え方によって、幸せの感じ方も変わる。", "考え方にかけて、幸せの感じ方も変わる。", "考え方ばかりに、幸せの感じ方も変わる。"], answer: 0 } },

        // たびに
        { id: 207, type: EXERCISE_TYPE.type1, question: "Cứ mỗi lần leo núi là trời lại mưa.", grammar: "たびに", data: { options: ["山に行くたびに雨に降られる。", "山に行くかわりに雨に降られる。", "山に行く最中に雨に降られる。"], answer: 0 } },
        { id: 208, type: EXERCISE_TYPE.type1, question: "Cứ mỗi lần gặp anh ấy là tôi lại nhớ đến chuyện cũ.", grammar: "たびに", data: { options: ["彼に会うたびに、昔のことを思い出す。", "彼に会う一方、昔のことを思い出す。", "彼に会うというより、昔のことを思い出す。"], answer: 0 } },

        // ば、～ほど
        { id: 209, type: EXERCISE_TYPE.type1, question: "Đồ càng nhiều thì sắp xếp càng vất vả.", grammar: "ば、～ほど", data: { options: ["物が増えれば増えるほど整理が大変になる。", "物が増えるから増えるほど整理が大変になる。", "物が増えるについで増えるほど整理が大変になる。"], answer: 0 } },
        { id: 210, type: EXERCISE_TYPE.type1, question: "Tiếng Nhật càng học thì càng thấy thú vị.", grammar: "ば、～ほど", data: { options: ["日本語は勉強すればするほど面白くなる。", "日本語は勉強するたびに面白くなる。", "日本語は勉強する一方面白くなる。"], answer: 0 } },

        // ～に対して
        { id: 211, type: EXERCISE_TYPE.type1, question: "Dùng kính ngữ với người trên.", grammar: "～に対して", data: { options: ["目上の人に対して、敬語を使います。", "目上の人に比べて、敬語を使います。", "目上の人によって、敬語を使います。"], answer: 0 } },
        { id: 212, type: EXERCISE_TYPE.type1, question: "Trái ngược với ở Osaka trời mưa lớn thì Tokyou thời tiết đẹp.", grammar: "～に対して", data: { options: ["昨日は大阪では大雨だったのに対して、東京はいい天気だった。", "昨日は大阪では大雨だったたびに、東京はいい天気だった。", "昨日は大阪では大雨だったついでに、東京はいい天気だった。"], answer: 0 } },

        // ～反面
        { id: 213, type: EXERCISE_TYPE.type1, question: "Cuộc sống thành phố có nhiều điều thú vị, mặt khác thì cũng nhiều căng thẳng.", grammar: "～反面", data: { options: ["都会の生活は面白いことが多い反面、ストレスも多い。", "都会の生活は面白いことが多いに対して、ストレスも多い。", "都会の生活は面白いことが多いにもかかわらず、ストレスも多い。"], answer: 0 } },
        { id: 214, type: EXERCISE_TYPE.type1, question: "Món ăn này tuy rẻ, nhưng mặt khác thì hương vị lại không được ngon.", grammar: "～反面", data: { options: ["この料理は安い反面、味がイマイチだ。", "この料理は安いとしても、味がイマイチだ。", "この料理は安いばかりに、味がイマイチだ。"], answer: 0 } },

        // 一方(で)
        { id: 215, type: EXERCISE_TYPE.type1, question: "Trong buổi họp, một mặt thì nói ý kiến của bản thân, mặt khác thì hãy nghe cả ý kiến của người khác nữa.", grammar: "一方(で)", data: { options: ["会議では自分の意見を言う一方で、他の人の話もよく聞いてください。", "会議では自分の意見を言うばかりか、他の人の話もよく聞いてください。", "会議では自分の意見を言うたびに、他の人の話もよく聞いてください。"], answer: 0 } },
        { id: 216, type: EXERCISE_TYPE.type1, question: "Con trai tôi học ở trường, mặt khác thì cũng giúp đỡ công việc nhà.", grammar: "一方(で)", data: { options: ["息子は学校で勉強する一方で、家事も手伝っている。", "息子は学校で勉強することにかけて、家事も手伝っている。", "息子は学校で勉強するとおり、家事も手伝っている。"], answer: 0 } },

        // というより
        { id: 217, type: EXERCISE_TYPE.type1, question: "Cô ấy có cảm giác là chạy hơn là đi.", grammar: "というより", data: { options: ["歩くというより走るという感じだ。", "歩くたびに走るという感じだ。", "歩く一方走るという感じだ。"], answer: 0 } },
        { id: 218, type: EXERCISE_TYPE.type1, question: "Nên nói là 'kinh doanh' hơn là 'công việc phụ'.", grammar: "というより", data: { options: ["副業というより、もはやビジネスだ。", "副業のせいで、もはやビジネスだ。", "副業にもかかわらず、もはやビジネスだ。"], answer: 0 } },

        // ～かわりに
        { id: 219, type: EXERCISE_TYPE.type1, question: "Bù lại cho việc bạn Ly dạy tiếng Anh thì tôi giúp việc cho bạn Ly.", grammar: "～かわりに", data: { options: ["リーさんに英語を教えてもっらっているかわりに、リーさんの仕事を手伝っている。", "リーさんに英語を教えてもっらっている一方、リーさんの仕事を手伝っている。", "リーさんに英語を教えてもっらっているとおり、リーさんの仕事を手伝っている。"], answer: 0 } },
        { id: 220, type: EXERCISE_TYPE.type1, question: "Tôi làm thêm vào ban ngày, thay vào đó thì buổi tối được rảnh rỗi.", grammar: "～かわりに", data: { options: ["昼間にアルバイトをするかわりに、夜は自由な時間が多い。", "昼間にアルバイトをする反面、夜は自由な時間が多い。", "昼間にアルバイトをするたびに、夜は自由な時間が多い。"], answer: 0 } },

        // (かの)ようだ/のようだ
        { id: 221, type: EXERCISE_TYPE.type1, question: "Hôm nay thời tiết ấm áp cứ như là mùa xuân đã đến vậy.", grammar: "(かの)ようだ", data: { options: ["今日は暖かくて、まるで春が来たかのようだ。", "今日は暖かくて、春が来たばかりだ。", "今日は暖かくて、春が来たというより。"], answer: 0 } },

        // ～ように (So sánh)
        { id: 222, type: EXERCISE_TYPE.type1, question: "Giống như con người, đối với thực vật thì dinh dưỡng cùng cần thiết.", grammar: "～ように", data: { options: ["人間のように、植物にも栄養が必要だ。", "人間のたびに、植物にも栄養が必要だ。", "人間のせいで、植物にも栄養が必要だ。"], answer: 0 } },

        // ように (Như những gì đã nói)
        { id: 223, type: EXERCISE_TYPE.type1, question: "Như những gì đã nói từ trước, tuần sau tôi không có ở Nhật Bản.", grammar: "ように", data: { options: ["前にも話したように、来週は私が日本にいません。", "前にも話したたびに、来週は私が日本にいません。", "前にも話したわけだ、来週は私が日本にいません。"], answer: 0 } },

        // 。。も。。ば。。も
        { id: 224, type: EXERCISE_TYPE.type1, question: "Anh ấy bị bệnh tim nặng, vậy mà rượu cũng uống, thuốc cũng hút.", grammar: "。。も。。ば。。も", data: { options: ["彼は心臓が悪いくせに酒も飲めば煙草も吸う。", "彼は心臓が悪いくせに酒を飲む一方、煙草も吸う。", "彼は心臓が悪いくせに酒を飲むかわりに、煙草も吸う。"], answer: 0 } },

        // Vたまま/ Vますっぱなし
        { id: 225, type: EXERCISE_TYPE.type1, question: "Tôi để tivi bật nguyên đó rồi đi ngủ mất.", grammar: "Vますっぱなし", data: { options: ["テレビをつけっぱなしで寝てしました。", "テレビをつけたきりで寝てしました。", "テレビをつける一方で寝てしました。"], answer: 0 } },
        { id: 226, type: EXERCISE_TYPE.type1, question: "Cô ấy đứng nguyên đó mà không nói một lời nào.", grammar: "Vたまま", data: { options: ["彼女は立ったまま、何も言わなかった。", "彼女は立っているうちに、何も言わなかった。", "彼女は立ったかわりに、何も言わなかった。"], answer: 0 } },

        // ～ふりをする
        { id: 227, type: EXERCISE_TYPE.type1, question: "Anh ta giả vờ như hiểu biết về chính trị lắm, nhưng tôi nghĩ thật sự anh ta chẳng biết gì.", grammar: "～ふりをする", data: { options: ["彼は政治について知っているふりをするが、本当は知らないと思う。", "彼は政治について知っているくせに、本当は知らないと思う。", "彼は政治について知っているたびに、本当は知らないと思う。"], answer: 0 } },
        { id: 228, type: EXERCISE_TYPE.type1, question: "Mặc dù anh ấy không hiểu nhưng lại giả vờ đã hiểu.", grammar: "～ふりをする", data: { options: ["彼は分かっていないのに、分かったふりをした。", "彼は分かっていないのに、分かったとおりにした。", "彼は分かっていないのに、分かったばかりか。"], answer: 0 } },

        // ～くせに
        { id: 229, type: EXERCISE_TYPE.type1, question: "Mặc dù biết vậy mà anh ta không nói với tôi.", grammar: "～くせに", data: { options: ["知っているくせに、教えてくれなかった。", "知っているかわりに、教えてくれなかった。", "知っているばかりに、教えてくれなかった。"], answer: 0 } },
        { id: 230, type: EXERCISE_TYPE.type1, question: "Mặc dù là con gái, vậy mà cô ấy lại không nấu ăn được.", grammar: "～くせに", data: { options: ["女のくせに、料理ができない。", "女と違って、料理ができない。", "女にかわって、料理ができない。"], answer: 0 } },

        // Thêm 2 câu trắc nghiệm để đủ 32 câu
        { id: 231, type: EXERCISE_TYPE.type1, question: "Trái ngược với vẻ ngoài mạnh mẽ, anh ấy lại là người rất nhạy cảm.", grammar: "～に対して", data: { options: ["強い外見に反して、彼はとても感受性が強い。", "強い外見を一方、彼はとても感受性が強い。", "強い外見にかけて、彼はとても感受性が強い。"], answer: 0 } },
        { id: 232, type: "Chọn đúng cấu trúc ngữ trúc pháp", question: "Nên nói là 'chuyên nghiệp' hơn là 'người làm thêm'.", grammar: "というより", data: { options: ["アルバイトというより、プロだ。", "アルバイトのせいで、プロだ。", "アルバイトのおかげで、プロだ。"], answer: 0 } },


        // ==============================================================================================
        // 2. Bài Tập Sắp Xếp Câu (16 câu)
        // ==============================================================================================

        // とおり(に/だ)/どおり(に/だ)
        { id: 233, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Cuộc sống không phải lúc nào cũng diễn ra theo như kế hoạch", grammar: "どおり(に/だ)", data: { parts: ["人生は", "いかない", "計画", "ものだ。", "どおりに"], correct: ["人生は", "計画", "どおりに", "いかない", "ものだ。"] } },

        // によって/によっては
        { id: 234, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tùy vào nhiệt độ mà màu sắc của lá cây thay đổi", grammar: "によって", data: { parts: ["温度", "色", "が変わる。", "によって、", "葉の"], correct: ["温度", "によって、", "葉の", "色", "が変わる。"] } },
        { id: 235, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tùy trường hợp mà việc hoàn tiền là không thể", grammar: "によっては", data: { parts: ["返金できない", "場合", "こともある。", "によっては、"], correct: ["場合", "によっては、", "返金できない", "こともある。"] } },

        // たびに
        { id: 236, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Cứ mỗi lần nhìn thấy bức ảnh đó, tôi lại khóc", grammar: "たびに", data: { parts: ["その写真を", "出る。", "たびに、", "涙が", "見る"], correct: ["その写真を", "見る", "たびに、", "涙が", "出る。"] } },

        // ば、～ほど
        { id: 237, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Càng luyện tập thì càng giỏi", grammar: "ば、～ほど", data: { parts: ["上手になる。", "練習", "すれば", "する", "ほど"], correct: ["練習", "すれば", "する", "ほど、", "上手になる。"] } },

        // ～に対して
        { id: 238, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Anh ấy rất lịch sự với phụ nữ", grammar: "～に対して", data: { parts: ["に対して、", "彼は", "とても", "丁寧だ。", "女性"], correct: ["彼は", "女性", "に対して、", "とても", "丁寧だ。"] } },

        // ～反面
        { id: 239, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Máy tính tiện lợi, mặt khác thì dễ bị lộ thông tin cá nhân", grammar: "～反面", data: { parts: ["個人情報が", "パソコンは", "漏れやすい。", "便利な", "反面、"], correct: ["パソコンは", "便利な", "反面、", "個人情報が", "漏れやすい。"] } },

        // 一方(で)
        { id: 240, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Giá cả tăng lên, mặt khác thì thu nhập lại không tăng", grammar: "一方(で)", data: { parts: ["給料は", "上がる", "一方で、", "物価が", "上がらない。"], correct: ["物価が", "上がる", "一方で、", "給料は", "上がらない。"] } },

        // というより
        { id: 241, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nên nói là 'công trình nghệ thuật' hơn là 'hàng hóa'", grammar: "というより", data: { parts: ["芸術作品だ。", "というより、", "商品"], correct: ["商品", "というより、", "芸術作品だ。"] } },

        // ～かわりに
        { id: 242, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi không tham gia tiệc, thay vào đó tôi sẽ mua quà", grammar: "～かわりに", data: { parts: ["プレゼントを", "パーティーに", "参加しない", "買っていく。", "かわりに、"], correct: ["パーティーに", "参加しない", "かわりに、", "プレゼントを", "買っていく。"] } },

        // (かの)ようだ/のようだ
        { id: 243, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Cô ấy trông như là một thiên thần", grammar: "のようだ", data: { parts: ["彼女は", "天使の", "まるで", "ようだ。"], correct: ["彼女は", "まるで", "天使の", "ようだ。"] } },

        // ～ように (So sánh)
        { id: 244, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi thích những bộ phim kinh dị như 'The Ring'", grammar: "～ような", data: { parts: ["映画が", "「リング」", "ホラー", "の", "ような", "好きだ。"], correct: ["「リング」", "の", "ような", "ホラー", "映画が", "好きだ。"] } },

        // Vたまま/ Vますっぱなし
        { id: 245, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Anh ta đã ngủ quên mà vẫn mặc nguyên quần áo", grammar: "Vたまま", data: { parts: ["彼は", "着た", "寝てしまった。", "服を", "まま、"], correct: ["彼は", "服を", "着た", "まま、", "寝てしまった。"] } },

        // ～ふりをする
        { id: 246, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi giả vờ không nghe thấy tiếng chuông cửa", grammar: "～ふりをする", data: { parts: ["私は", "音が", "インターホンの", "聞こえない", "ふりをした。"], correct: ["私は", "インターホンの", "音が", "聞こえない", "ふりをした。"] } },

        // ～くせに
        { id: 247, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Mặc dù biết nhưng lại giả vờ không biết", grammar: "～くせに", data: { parts: ["知らない", "くせに、", "知っている", "ふりをする。"], correct: ["知っている", "くせに、", "知らない", "ふりをする。"] } },

        // 。。も。。ば。。も
        { id: 248, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Cửa hàng này thì rẻ cũng có mà ngon cũng có", grammar: "。。も。。ば。。も", data: { parts: ["美味しい", "この店は", "ものもある。", "もあれば、", "安いもの"], correct: ["この店は", "安いもの", "もあれば、", "美味しい", "ものもある。"] } },


        // ==============================================================================================
        // 3. Bài tập biến đổi câu (16 câu)
        // ==============================================================================================

        // とおり(に/だ)/どおり(に/だ)
        { id: 249, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'とおりに': 'Hãy làm theo đúng như những gì tôi nói.'", grammar: "とおり(に/だ)", data: { correct_answer: "私が言うとおりに、してください。", hint: "Dùng Vる + とおりに" } },

        // によって/によっては
        { id: 250, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'によって': 'Tùy vào từng người mà sở thích khác nhau.'", grammar: "によって", data: { correct_answer: "人によって、趣味は異なります。", hint: "Dùng Nによって" } },
        { id: 251, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'によっては': 'Tùy trường hợp mà việc thay đổi lịch trình là cần thiết.'", grammar: "によっては", data: { correct_answer: "場合によっては、スケジュールの変更が必要だ。", hint: "Dùng Nによっては" } },

        // たびに
        { id: 252, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'たびに': 'Cứ mỗi lần tôi hát, mọi người lại cười.'", grammar: "たびに", data: { correct_answer: "私が歌うたびに、みんなが笑う。", hint: "Dùng Vるたびに" } },

        // ば、～ほど
        { id: 253, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'ば、～ほど': 'Càng tìm hiểu về anh ấy thì càng thích.'", grammar: "ば、～ほど", data: { correct_answer: "彼について知れば知るほど、好きになる。", hint: "Dùng VばVるほど" } },

        // ～に対して
        { id: 254, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～に対して': 'Phải lịch sự với khách hàng.'", grammar: "～に対して", data: { correct_answer: "お客様に対して、丁寧に接しなければならない。", hint: "Dùng Nに対して" } },

        // ～反面
        { id: 255, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～反面': 'Công việc này lương cao, mặt khác thì áp lực cũng lớn.'", grammar: "～反面", data: { correct_answer: "この仕事は給料が高い反面、プレッシャーも大きい。", hint: "Dùng NがVる/Aい/Anaな 反面" } },

        // 一方(で)
        { id: 256, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '一方(で)': 'Trong khi dân số già đi, số lượng trẻ em lại giảm.'", grammar: "一方(で)", data: { correct_answer: "人口が減っている一方で、高齢化が進んでいる。", hint: "Dùng Vている一方で" } },

        // というより
        { id: 257, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'というより': 'Anh ấy nên nói là 'tài năng' hơn là 'may mắn'.'", grammar: "というより", data: { correct_answer: "運がいいというより、才能がある。", hint: "Dùng Nというより N" } },

        // ～かわりに
        { id: 258, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～かわりに': 'Tôi làm việc thay cho đồng nghiệp, đổi lại anh ta sẽ làm hộ tôi vào ngày mai.'", grammar: "～かわりに", data: { correct_answer: "同僚のかわりに、今日私が働く。明日は彼が私の仕事をする。", hint: "Dùng Nの + かわりに" } },

        // (かの)ようだ/のようだ
        { id: 259, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '(かの)ようだ': 'Nó la hét như thể thế giới sắp kết thúc.'", grammar: "(かの)ようだ", data: { correct_answer: "世界が終わったかのように叫んだ。", hint: "Dùng Vたかのように" } },

        // ～ように (So sánh)
        { id: 260, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ように': 'Tôi muốn có một công việc thú vị giống như anh.'", grammar: "～ように", data: { correct_answer: "あなたのように、私も面白い仕事が欲しい。", hint: "Dùng Nのように" } },

        // Vたまま/ Vますっぱなし
        { id: 261, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vますっぱなし': 'Đừng để đèn bật nguyên đó mà đi ra ngoài.'", grammar: "Vますっぱなし", data: { correct_answer: "電気をつけっぱなしで出かけないでください。", hint: "Dùng Vますっぱなしで" } },

        // ～ふりをする
        { id: 262, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ふりをする': 'Cô ấy giả vờ như là đang ngủ.'", grammar: "～ふりをする", data: { correct_answer: "彼女は寝ているふりをした。", hint: "Dùng Vているふりをする" } },

        // ～くせに
        { id: 263, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～くせに': 'Mặc dù là sinh viên, vậy mà không chịu học.'", grammar: "～くせに", data: { correct_answer: "学生のくせに、勉強しない。", hint: "Dùng Nのくせに" } },

        // 。。も。。ば。。も
        { id: 264, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '。。も。。ば。。も': 'Trong bữa tiệc, người hát cũng có mà người nhảy cũng có.'", grammar: "。。も。。ば。。も", data: { correct_answer: "パーティーでは、歌う人もいれば、踊る人もいる。", hint: "Dùng Vる人もいれば Vる人もいる" } },


        // ==============================================================================================
        // 4. Bài tập điền trợ từ (16 câu)
        // ==============================================================================================

        // とおり(に/だ)/どおり(に/だ)
        { id: 265, type: EXERCISE_TYPE.type4, question: "私の予想（＿＿）、結果は違っていた。", grammar: "とおり(に/だ)", data: { sentence: "私の予想（＿＿）、結果は違っていた。", options: ["とおり", "ばかり", "に", "から"], answer: 0 } },

        // によって/によっては
        { id: 266, type: EXERCISE_TYPE.type4, question: "先生（＿＿）は、厳しい人もいる。", grammar: "によっては", data: { sentence: "先生（＿＿）は、厳しい人もいる。", options: ["によっては", "に対して", "のおかげ", "のせいで"], answer: 0 } },

        // たびに
        { id: 267, type: EXERCISE_TYPE.type4, question: "試験の（＿＿）、緊張する。", grammar: "たびに", data: { sentence: "試験の（＿＿）、緊張する。", options: ["たびに", "一方", "反面", "に"], answer: 0 } },

        // ば、～ほど
        { id: 268, type: EXERCISE_TYPE.type4, question: "考えれば考える（＿＿）、わからなくなる。", grammar: "ば、～ほど", data: { sentence: "考えれば考える（＿＿）、わからなくなる。", options: ["ほど", "ついで", "まで", "きり"], answer: 0 } },

        // ～に対して
        { id: 269, type: EXERCISE_TYPE.type4, question: "弟（＿＿）、姉はとても大人しい。", grammar: "～に対して", data: { sentence: "弟（＿＿）、姉はとても大人しい。", options: ["に対して", "にもかかわらず", "についで", "からには"], answer: 0 } },
        { id: 270, type: EXERCISE_TYPE.type4, question: "彼は女性（＿＿）、親切だ。", grammar: "～に対して", data: { sentence: "彼は女性（＿＿）、親切だ。", options: ["に対して", "のように", "たびに", "のくせ"], answer: 0 } },

        // ～反面
        { id: 271, type: EXERCISE_TYPE.type4, question: "彼は優し（＿＿）、少し気が弱い。", grammar: "～反面", data: { sentence: "彼は優し（＿＿）、少し気が弱い。", options: ["い反面", "い一方", "いというより", "いまま"], answer: 0 } },

        // 一方(で)
        { id: 272, type: EXERCISE_TYPE.type4, question: "地球温暖化が進む（＿＿）、異常気象が増えている。", grammar: "一方(で)", data: { sentence: "地球温暖化が進む（＿＿）、異常気象が増えている。", options: ["一方で", "反面", "たびに", "にかわり"], answer: 0 } },

        // というより
        { id: 273, type: EXERCISE_TYPE.type4, question: "それはミス（＿＿）、事故に近い。", grammar: "というより", data: { sentence: "それはミス（＿＿）、事故に近い。", options: ["というより", "のとおり", "のまま", "にかわり"], answer: 0 } },

        // ～かわりに
        { id: 274, type: EXERCISE_TYPE.type4, question: "私が運転する（＿＿）、あなたは地図を見てください。", grammar: "～かわりに", data: { sentence: "私が運転する（＿＿）、あなたは地図を見てください。", options: ["かわりに", "たびに", "せいで", "一方"], answer: 0 } },

        // (かの)ようだ/のようだ
        { id: 275, type: EXERCISE_TYPE.type4, question: "その話は、まるで夢（＿＿）だ。", grammar: "のようだ", data: { sentence: "その話は、まるで夢（＿＿）だ。", options: ["のようだ", "の反面", "のついで", "にも"], answer: 0 } },

        // ～ように (So sánh)
        { id: 276, type: EXERCISE_TYPE.type4, question: "彼（＿＿）、私も頑張りたい。", grammar: "～ように", data: { sentence: "彼（＿＿）、私も頑張りたい。", options: ["のように", "のたびに", "に対して", "のくせ"], answer: 0 } },

        // Vたまま/ Vますっぱなし
        { id: 277, type: EXERCISE_TYPE.type4, question: "靴を履いた（＿＿）部屋に入った。", grammar: "Vたまま", data: { sentence: "靴を履いた（＿＿）部屋に入った。", options: ["まま", "きり", "たて", "ばかり"], answer: 0 } },

        // ～ふりをする
        { id: 278, type: EXERCISE_TYPE.type4, question: "知らな（＿＿）ふりをした。", grammar: "～ふりをする", data: { sentence: "知らな（＿＿）ふりをした。", options: ["いふり", "いように", "いかわりに", "いばかり"], answer: 0 } },

        // ～くせに
        { id: 279, type: EXERCISE_TYPE.type4, question: "子供の（＿＿）、生意気だ。", grammar: "～くせに", data: { sentence: "子供の（＿＿）、生意気だ。", options: ["くせに", "たびに", "まま", "とおり"], answer: 0 } },

        // 。。も。。ば。。も
        { id: 280, type: EXERCISE_TYPE.type4, question: "彼女はピアノ（＿＿）弾けば、歌（＿＿）歌う。", grammar: "。。も。。ば。。も", data: { sentence: "彼女はピアノ（も）弾けば、歌（＿＿）歌う。", options: ["も", "ば", "に", "と"], answer: 0 } },
    ],
    [GRAMMAR_GROUP.group4]: [
        // ==============================================================================================
        // 1. Bài tập chọn đúng cấu trúc ngữ pháp (44 câu)
        // ==============================================================================================

        // ぐらい/くらい/ほど
        { id: 301, type: EXERCISE_TYPE.type1, question: "Hãy cho tôi nghỉ chí ít ngày chủ nhật.", grammar: "ぐらい", data: { options: ["日曜日ぐらい休ませてください。", "日曜日たびに休ませてください。", "日曜日ばかりに休ませてください。"], answer: 0 } },
        { id: 302, type: EXERCISE_TYPE.type1, question: "Có một cô bé cỡ khoảng con gái tôi đang khóc.", grammar: "ぐらい", data: { options: ["うちの娘ぐらいの女の子が泣いいた。", "うちの娘ばかりの女の子が泣いいた。", "うちの娘のせいで女の子が泣いいた。"], answer: 0 } },
        { id: 303, type: EXERCISE_TYPE.type1, question: "Bánh mì của cửa hàng này ngon đến mức ngày nào tôi cũng muốn ăn.", grammar: "くらい", data: { options: ["毎日食べたいくらいだ。", "毎日食べたい一方でだ。", "毎日食べたいばかりだ。"], answer: 0 } },
        { id: 304, type: EXERCISE_TYPE.type1, question: "Tôi nghĩ không có điều gì vui vẻ bằng việc nấu ăn.", grammar: "くらい～Nはない", data: { options: ["私は料理を作ることぐらい楽しいことはないと思っています。", "私は料理を作るたびに楽しいことはないと思っています。", "私は料理を作るのなら楽しいことはないと思っています。"], answer: 0 } },
        { id: 305, type: EXERCISE_TYPE.type1, question: "Nếu phải nhờ hắn giúp thì thà còn chết còn hơn.", grammar: "ぐらいなら/くらいなら", data: { options: ["あいつに助けてもらうくらいなら、死んだほうがました。", "あいつに助けてもらったばかりに、死んだほうがました。", "あいつに助けてもらうおかげで、死んだほうがました。"], answer: 0 } },

        // Nに限る
        { id: 306, type: EXERCISE_TYPE.type1, question: "Quả nhiên là xem phim ở rạp chiếu phim là nhất.", grammar: "Nに限る", data: { options: ["やっぱり映画は映画館で見るに限る。", "やっぱり映画は映画館で見るというより。", "やっぱり映画は映画館で見るほどだ。"], answer: 0 } },
        { id: 307, type: EXERCISE_TYPE.type1, question: "Khi mệt, không gì bằng ngủ một giấc.", grammar: "Nに限る", data: { options: ["疲れた時は、寝るに限る。", "疲れた時は、寝るはずがない。", "疲れた時は、寝るとしても。"], answer: 0 } },

        // N+さえ
        { id: 308, type: EXERCISE_TYPE.type1, question: "Trong tủ lạnh đến ngay cả quả trứng cũng không có.", grammar: "N+さえ", data: { options: ["冷蔵庫には卵さえ入っていない。", "冷蔵庫には卵ばかり入っていない。", "冷蔵庫には卵のように入っていない。"], answer: 0 } },
        { id: 309, type: EXERCISE_TYPE.type1, question: "Đến cả tên tôi anh ta cũng không nhớ nổi.", grammar: "N+さえ", data: { options: ["私の名前さえ覚えていない。", "私の名前ばかり覚えていない。", "私の名前のとおり覚えていない。"], answer: 0 } },

        // N+でも
        { id: 310, type: EXERCISE_TYPE.type1, question: "Chuyện như thế ngay cả đứa trẻ con cũng biết.", grammar: "N+でも", data: { options: ["そんなことは子供でも知っている。", "そんなことは子供さえ知っている。", "そんなことは子供のくせに知っている。"], answer: 0 } },
        { id: 311, type: EXERCISE_TYPE.type1, question: "Chúng ta đi uống những thứ như trà có được không?", grammar: "N+でも", data: { options: ["お茶でも飲みましょうか。", "お茶こそ飲みましょうか。", "お茶すら飲みましょうか。"], answer: 0 } },

        // も
        { id: 312, type: EXERCISE_TYPE.type1, question: "Đi học mà hoàn toàn không được nghỉ một ngày nào.", grammar: "も", data: { options: ["一日も休まないで学校に通った。", "一日くらい休まないで学校に通った。", "一日でも休まないで学校に通った。"], answer: 0 } },
        { id: 313, type: EXERCISE_TYPE.type1, question: "Đến ngay cả trên đỉnh ngọn núi cao như thế mà cũng có cửa hàng.", grammar: "も", data: { options: ["こんなに高い山の上にも店がある。", "こんなに高い山の上まで店がある。", "こんなに高い山の上こそ店がある。"], answer: 0 } },

        // まで
        { id: 314, type: EXERCISE_TYPE.type1, question: "Tôi gửi thiệp chúc tết tới cả những người tôi chưa bao giờ gặp.", grammar: "まで", data: { options: ["会ったことがない人まで年賀状を出した。", "会ったことがない人さえ年賀状を出した。", "会ったことがない人こそ年賀状を出した。"], answer: 0 } },
        { id: 315, type: EXERCISE_TYPE.type1, question: "Cô ấy đã khóc đến mức không thể nhìn thấy xung quanh.", grammar: "まで", data: { options: ["彼女は周りが見えなくなるまで泣いた。", "彼女は周りが見えなくなるばかりに泣いた。", "彼女は周りが見えなくなるのなら泣いた。"], answer: 0 } },

        // N+でも/など/なんか/なんて
        { id: 316, type: EXERCISE_TYPE.type1, question: "Chẳng hạn như bộ trang phục này thì thế nào. Hợp đó.", grammar: "など", data: { options: ["この服などはいかがですか。", "この服ばかりかはいかがですか。", "この服まではいかがですか。"], answer: 0 } },
        { id: 317, type: EXERCISE_TYPE.type1, question: "Tôi không muốn làm những thứ như giảm cân.", grammar: "なんか", data: { options: ["ダイエットなんかしたくない。", "ダイエットさえしたくない。", "ダイエットこそしたくない。"], answer: 0 } },
        { id: 318, type: EXERCISE_TYPE.type1, question: "Thật kinh khủng khi làm những việc như vậy.", grammar: "なんて", data: { options: ["そんなことをするなんて、ひどい。", "そんなことをするというより、ひどい。", "そんなことをするとおり、ひどい。"], answer: 0 } },

        // ～にとって
        { id: 319, type: EXERCISE_TYPE.type1, question: "Đối với phụ nữ trẻ thì mua sắm là một thú vui.", grammar: "～にとって", data: { options: ["若い女性にとって買い物は楽しいことです。", "若い女性にかわって買い物は楽しいことです。", "若い女性に対して買い物は楽しいことです。"], answer: 0 } },
        { id: 320, type: EXERCISE_TYPE.type1, question: "Đối với anh ta, gia đình là tất cả.", grammar: "～にとって", data: { options: ["彼にとって、家族がすべてだ。", "彼は家族ばかりか、すべてだ。", "彼は家族として、すべてだ。"], answer: 0 } },

        // ～として
        { id: 321, type: EXERCISE_TYPE.type1, question: "Tôi sử dụng cốc cà phê như là một bình hoa.", grammar: "～として", data: { options: ["私はコーヒーカップを花びんとして使っています。", "私はコーヒーカップを花びんのように使っています。", "私はコーヒーカップを花びんだらけ使っています。"], answer: 0 } },
        { id: 322, type: EXERCISE_TYPE.type1, question: "Với tư cách là người chịu trách nhiệm, tôi phải xin lỗi.", grammar: "～として", data: { options: ["責任者として、謝罪しなければならない。", "責任者のおかげで、謝罪しなければならない。", "責任者なのに、謝罪しなければならない。"], answer: 0 } },

        // ことがある/こともある
        { id: 323, type: EXERCISE_TYPE.type1, question: "Vợ tôi có lúc tôi nói chuyện cũng không trả lời lại.", grammar: "ことがある", data: { options: ["妻は僕が話しかけも返事をしないことがある。", "妻は僕が話しかけてばかりいることがある。", "妻は僕が話しかけてもいいことがある。"], answer: 0 } },
        { id: 324, type: EXERCISE_TYPE.type1, question: "Thỉnh thoảng tôi đi đến nhà hàng đó.", grammar: "こともある", data: { options: ["あのレストランに行くこともある。", "あのレストランに行くべきだ。", "あのレストランに行くしかない。"], answer: 0 } },

        // N (+ trợ từ) ばかり
        { id: 325, type: EXERCISE_TYPE.type1, question: "Gần đây, về khuya, tôi nhận được toàn là những cú điện thoại đáng ngờ.", grammar: "ばかり", data: { options: ["夜遅く変な電話ばかりかかってくる。", "夜遅く変な電話さえかかってくる。", "夜遅く変な電話までもかかってくる。"], answer: 0 } },
        { id: 326, type: EXERCISE_TYPE.type1, question: "Anh ấy ngủ suốt ngày.", grammar: "Vてばかりいる", data: { options: ["彼は寝てばかりいる。", "彼は寝ることばかりだ。", "彼は寝るにかぎる。"], answer: 0 } },

        // ばかりか=ばかりでなく
        { id: 327, type: EXERCISE_TYPE.type1, question: "Không chỉ đồng nghiệp, mà cả gia đình cũng coi thường tôi.", grammar: "ばかりか", data: { options: ["会社の同僚ばかりか家族までが私をバカにしている。", "会社の同僚どころか家族までが私をバカにしている。", "会社の同僚とした家族までが私をバカにしている。"], answer: 0 } },
        { id: 328, type: EXERCISE_TYPE.type1, question: "Anh Yamada không những nói được tiếng Anh mà cả tiếng Trung Quốc.", grammar: "ばかりでなく", data: { options: ["山田さんは英語ばかりでなく中国語も話せる。", "山田さんは英語にして中国語も話せる。", "山田さんは英語にかわって中国語も話せる。"], answer: 0 } },

        // Vるばかりだ
        { id: 329, type: EXERCISE_TYPE.type1, question: "Bệnh tình của bố tôi vẫn cứ xấu đi.", grammar: "Vるばかりだ", data: { options: ["父の病気は悪くなるばかりでした。", "父の病気は悪くなったきりでした。", "父の病気は悪くなったところででした。"], answer: 0 } },
        { id: 330, type: EXERCISE_TYPE.type1, question: "Tôi đã chuẩn bị xong hành lí, chỉ còn chờ lên đường.", grammar: "Vるばかりだ", data: { options: ["荷物もみんな用意して、すぐにも出かけるばかりです。", "荷物もみんな用意して、すぐにも出かけるしかないです。", "荷物もみんな用意して、すぐにも出かけるべきです。"], answer: 0 } },

        // ～にすぎない
        { id: 331, type: EXERCISE_TYPE.type1, question: "Nó chỉ là một đứa trẻ, không thể sống một mình được.", grammar: "～にすぎない", data: { options: ["彼はただ子供にすぎないから、一人暮らすことをできないよ。", "彼はただ子供なのに、一人暮らすことをできないよ。", "彼はただ子供にかけて、一人暮らすことをできないよ。"], answer: 0 } },

        // ～しかない/～ほか(は)ない
        { id: 332, type: EXERCISE_TYPE.type1, question: "Không sửa được máy tính nên không còn cách nào khác phải mua cái mới.", grammar: "～しかない", data: { options: ["パソコンを直せないから、新しいのを買うしかない。", "パソコンを直せないから、新しいのを買うに限る。", "パソコンを直せないから、新しいのを買うところだ。"], answer: 0 } },
        { id: 333, type: EXERCISE_TYPE.type1, question: "Tôi không muốn làm, nhưng vì là mệnh lệnh của cấp trên, nên đành phải tuân theo.", grammar: "～ほか(は)ない", data: { options: ["上司の命令なので、従うほかはない。", "上司の命令なので、従うくらいなら。", "上司の命令なので、従うまでだ。"], answer: 0 } },

        // N+きり/N+っきり
        { id: 334, type: EXERCISE_TYPE.type1, question: "Tôi muốn nói chuyện chỉ có 2 người (chúng ta).", grammar: "N+きり", data: { options: ["2人っきりで話したいです。", "2人だけに話したいです。", "2人にかけて話したいです。"], answer: 0 } },

        // N+だらけ
        { id: 335, type: EXERCISE_TYPE.type1, question: "Vì ngày nào cũng chơi bóng nên người đấy viết thương (đầy thương tích).", grammar: "N+だらけ", data: { options: ["毎日サッカーをしているので、傷だらけになった。", "毎日サッカーをしているので、傷ばかりになった。", "毎日サッカーをしているので、傷としてもなった。"], answer: 0 } },

        // Vます+きる/切れる
        { id: 336, type: EXERCISE_TYPE.type1, question: "Cơm nhiều quá, tôi không ăn hết được.", grammar: "Vます+切れる", data: { options: ["ご飯の量が多くて、食べきれなかった。", "ご飯の量が多くて、食べきりだった。", "ご飯の量が多くて、食べながらだ。"], answer: 0 } },
        { id: 337, type: EXERCISE_TYPE.type1, question: "Tôi đã hoàn toàn quên đi chuyện đó.", grammar: "Vます+きる", data: { options: ["そのことはすっかり忘れきった。", "そのことはすっかり忘れるほどだ。", "そのことはすっかり忘れるばかりか。"], answer: 0 } },

        // Vます+通す
        { id: 338, type: EXERCISE_TYPE.type1, question: "Anh ta dù bị nói cái gì, cũng chỉ im lặng suốt.", grammar: "Vます+通す", data: { options: ["彼は何を聞かれても、黙り通した。", "彼は何を聞かれても、黙るばかりだ。", "彼は何を聞かれても、黙るにかけてだ。"], answer: 0 } },

        // Thêm 6 câu trắc nghiệm để đủ 44 câu

        // Vてばかりいる
        { id: 339, type: EXERCISE_TYPE.type1, question: "Con gái tôi suốt ngày chỉ xem TV.", grammar: "Vてばかりいる", data: { options: ["娘はテレビを見てばかりいる。", "娘はテレビを見るしかない。", "娘はテレビを見るほどだ。"], answer: 0 } },

        // ～にとって
        { id: 340, type: EXERCISE_TYPE.type1, question: "Đối với tôi, thành công là không quan trọng.", grammar: "～にとって", data: { options: ["私にとって、成功は重要ではない。", "私にかけて、成功は重要ではない。", "私に反面、成功は重要ではない。"], answer: 0 } },

        // ～として
        { id: 341, type: EXERCISE_TYPE.type1, question: "Anh ấy là người mẫu ảnh bán thời gian.", grammar: "～として", data: { options: ["彼はアルバイトとしてモデルをしている。", "彼はアルバイトのつもりでモデルをしている。", "彼はアルバイトのくせにモデルをしている。"], answer: 0 } },

        // ことがある/こともある
        { id: 342, type: EXERCISE_TYPE.type1, question: "Đôi khi tôi quên cả tên người quen.", grammar: "こともある", data: { options: ["知人の名前を忘れてしまうこともある。", "知人の名前を忘れてしまうしかない。", "知人の名前を忘れてしまうわけだ。"], answer: 0 } },

        // Vるばかりだ (Xu hướng)
        { id: 343, type: EXERCISE_TYPE.type1, question: "Số người mắc bệnh này cứ tăng lên.", grammar: "Vるばかりだ", data: { options: ["この病気になる人が増えるばかりだ。", "この病気になる人が増えるほかない。", "この病気になる人が増えるほどだ。"], answer: 0 } },

        // Nに限る
        { id: 344, type: EXERCISE_TYPE.type1, question: "Lúc đau ốm, nên ăn những món nhẹ nhàng là tốt nhất.", grammar: "Nに限る", data: { options: ["病気のときは、さっぱりしたものを食べるに限る。", "病気のときは、さっぱりしたものを食べるべきだ。", "病気のときは、さっぱりしたものを食べるというより。"], answer: 0 } },

        // ==============================================================================================
        // 2. Bài Tập Sắp Xếp Câu (22 câu)
        // ==============================================================================================

        // ぐらい/ほど
        { id: 345, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Không có điều gì chán ghét bằng thi cử", grammar: "ほど～ Nはない", data: { parts: ["嫌な", "テスト", "ものはない", "ほど"], correct: ["テスト", "ほど", "嫌な", "ものはない"] } },

        // ぐらいなら/くらいなら
        { id: 346, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nếu phải đi bộ xa như vậy, thà tôi đi taxi còn hơn", grammar: "ぐらいなら/くらいなら", data: { parts: ["タクシーに", "歩く", "くらいなら、", "そんなに", "乗ったほうがいい。", "遠くまで"], correct: ["そんなに", "遠くまで", "歩く", "くらいなら、", "タクシーに", "乗ったほうがいい。"] } },

        // Nに限る
        { id: 347, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Sau khi tắm, uống bia lạnh là tuyệt nhất", grammar: "Nに限る", data: { parts: ["冷たい", "に限る。", "風呂上りは、", "ビールを", "飲む"], correct: ["風呂上りは、", "冷たい", "ビールを", "飲む", "に限る。"] } },

        // N+さえ
        { id: 348, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Anh ta không có tiền đến mức không có cả cơm ăn", grammar: "N+さえ", data: { parts: ["ご飯", "食べる", "お金が", "彼は", "ない。", "さえ"], correct: ["彼は", "ご飯", "さえ", "食べる", "お金が", "ない。"] } },

        // N+でも
        { id: 349, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Ngay cả người không biết gì cũng có thể làm được", grammar: "N+でも", data: { parts: ["人でも", "できる。", "何も", "知らない"], correct: ["何も", "知らない", "人でも", "できる。"] } },

        // も
        { id: 350, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi không có chút hứng thú nào với những chuyện đó", grammar: "も", data: { parts: ["興味が", "そんな話", "少しも", "ない。", "には、"], correct: ["そんな話", "には、", "少しも", "興味が", "ない。"] } },

        // まで
        { id: 351, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi đã quên cả những thứ đơn giản nhất", grammar: "まで", data: { parts: ["簡単な", "しまった。", "こと", "忘れて", "まで、"], correct: ["簡単な", "こと", "まで、", "忘れて", "しまった。"] } },

        // N+でも/など/なんか/なんて
        { id: 352, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi không hiểu những thứ phức tạp như máy tính", grammar: "なんて", data: { parts: ["複雑な", "ものは", "分からない。", "パソコン", "なんて"], correct: ["パソコン", "なんて", "複雑な", "ものは", "分からない。"] } },

        // ～にとって
        { id: 353, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Đối với tôi, sức khỏe là quan trọng nhất", grammar: "～にとって", data: { parts: ["私", "大切だ。", "健康が", "にとって、", "一番"], correct: ["私", "にとって、", "健康が", "一番", "大切だ。"] } },

        // ～として
        { id: 354, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Với tư cách là giáo viên, tôi phải hành động nghiêm túc", grammar: "～として", data: { parts: ["行動", "として、", "教師", "しなければならない。", "真剣に"], correct: ["教師", "として、", "真剣に", "行動", "しなければならない。"] } },

        // ことがある/こともある
        { id: 355, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Dù là người lớn cũng có lúc phạm lỗi", grammar: "こともある", data: { parts: ["犯す", "大人でも", "ことがある。", "間違いを"], correct: ["大人でも", "間違いを", "犯す", "ことがある。"] } },

        // N (+ trợ từ) ばかり
        { id: 356, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Công việc này chỉ toàn là những công việc đơn giản", grammar: "ばかり", data: { parts: ["作業", "この仕事は", "ばかりだ。", "簡単な"], correct: ["この仕事は", "簡単な", "作業", "ばかりだ。"] } },

        // Vてばかりいる
        { id: 357, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Mặc dù bị thương nhưng anh ấy cứ cười suốt", grammar: "Vてばかりいる", data: { parts: ["彼は", "笑って", "いる。", "怪我を", "ばかり", "したのに、"], correct: ["怪我を", "したのに、", "彼は", "笑って", "ばかり", "いる。"] } },

        // ばかりか=ばかりでなく
        { id: 358, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Không chỉ tôi mà cả gia đình tôi cũng lo lắng", grammar: "ばかりか", data: { parts: ["私", "家族", "心配した。", "ばかりか", "までが"], correct: ["私", "ばかりか", "家族", "までが", "心配した。"] } },

        // Vるばかりだ
        { id: 359, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Sau khi mở cửa hàng, khách hàng cứ giảm dần", grammar: "Vるばかりだ", data: { parts: ["客が", "減る", "ばかりだ。", "店を", "開いてから、"], correct: ["店を", "開いてから、", "客が", "減る", "ばかりだ。"] } },

        // ～にすぎない
        { id: 360, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi chỉ là một thành viên của nhóm", grammar: "～にすぎない", data: { parts: ["チームの", "私は", "すぎない。", "一員に"], correct: ["私は", "チームの", "一員に", "すぎない。"] } },

        // ～しかない/～ほか(は)ない
        { id: 361, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nếu không có tiền thì không còn cách nào khác ngoài việc đi bộ", grammar: "～しかない", data: { parts: ["歩く", "お金が", "しかない。", "ないなら、"], correct: ["お金が", "ないなら、", "歩く", "しかない。"] } },

        // N+きり/N+っきり
        { id: 362, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Cô ấy sống một mình kể từ khi tốt nghiệp", grammar: "N+きり", data: { parts: ["卒業", "彼女は", "きり、", "一人暮らしだ。", "して"], correct: ["彼女は", "卒業", "して", "きり、", "一人暮らしだ。"] } },

        // N+だらけ
        { id: 363, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Sau cơn mưa, đường phố lầy lội đầy bùn", grammar: "N+だらけ", data: { parts: ["泥", "道は", "後、", "だらけだ。", "雨の"], correct: ["雨の", "後、", "道は", "泥", "だらけだ。"] } },

        // Vます+きる/切れる
        { id: 364, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi đã đọc hết toàn bộ cuốn tiểu thuyết này trong một đêm", grammar: "Vます+きる", data: { parts: ["読み", "この小説を", "切った。", "一晩で"], correct: ["この小説を", "一晩で", "読み", "切った。"] } },

        // Vます+通す
        { id: 365, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi quyết tâm làm việc này đến cùng", grammar: "Vます+通す", data: { parts: ["最後まで", "この仕事を", "つもりだ。", "やり", "通す"], correct: ["この仕事を", "最後まで", "やり", "通す", "つもりだ。"] } },

        // Thêm 1 câu sắp xếp để đủ 22 câu
        // N+きり/N+っきり
        { id: 366, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Chỉ có hai chúng tôi trong phòng", grammar: "N+っきり", data: { parts: ["二人", "部屋には", "だった。", "っきり"], correct: ["部屋には", "二人", "っきり", "だった。"] } },


        // ==============================================================================================
        // 3. Bài tập biến đổi câu (22 câu)
        // ==============================================================================================

        // ぐらい/ほど
        { id: 367, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'ほど': 'Tôi rất yêu bạn, muốn chết đi được.'", grammar: "ほど", data: { correct_answer: "死ぬほど君を愛している。", hint: "Dùng Vるほど" } },
        { id: 368, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'くらいなら': 'Nếu phải xin lỗi anh ta thì tôi thà bỏ việc.'", grammar: "くらいなら", data: { correct_answer: "彼に謝るくらいなら、仕事をやめる。", hint: "Dùng Vるくらいなら" } },

        // Nに限る
        { id: 369, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Nに限る': 'Khi làm việc, nên tập trung là tốt nhất.'", grammar: "Nに限る", data: { correct_answer: "仕事中は集中するに限る。", hint: "Dùng Vるに限る" } },

        // N+さえ
        { id: 370, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'N+さえ': 'Ngay cả chữ cái đơn giản tôi cũng không thể đọc được.'", grammar: "N+さえ", data: { correct_answer: "簡単な文字さえ読めない。", hint: "Dùng NさえVる" } },

        // N+でも
        { id: 371, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'N+でも': 'Nên uống thứ gì đó lạnh, chẳng hạn như nước ép.'", grammar: "N+でも", data: { correct_answer: "ジュースでも何か冷たいものを飲みなさい。", hint: "Dùng Nでも" } },

        // も
        { id: 372, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'も': 'Anh ấy không nói một lời nào trong cuộc họp.'", grammar: "も", data: { correct_answer: "彼は会議で一言も話さなかった。", hint: "Dùng Nも Vない" } },

        // まで
        { id: 373, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'まで': 'Cô ấy ngủ đến trưa mới dậy.'", grammar: "まで", data: { correct_answer: "彼女は昼まで寝ていた。", hint: "Dùng NまでVる" } },

        // N+など/なんか/なんて
        { id: 374, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'なんか': 'Tôi ghét những thứ như côn trùng.'", grammar: "なんか", data: { correct_answer: "虫なんか嫌いだ。", hint: "Dùng Nなんか" } },

        // ～にとって
        { id: 375, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～にとって': 'Đối với một vận động viên, tập luyện hàng ngày là không thể thiếu.'", grammar: "～にとって", data: { correct_answer: "アスリートにとって、日々の練習は欠かせない。", hint: "Dùng Nにとって" } },

        // ～として
        { id: 376, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～として': 'Tôi tham gia sự kiện này với tư cách là người tình nguyện.'", grammar: "～として", data: { correct_answer: "ボランティアとしてこのイベントに参加した。", hint: "Dùng Nとして" } },

        // ことがある/こともある
        { id: 377, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'ことがある': 'Đôi khi tôi đi uống rượu với đồng nghiệp.'", grammar: "ことがある", data: { correct_answer: "時々、同僚とお酒を飲みに行くことがある。", hint: "Dùng Vる + ことがある" } },

        // N (+ trợ từ) ばかり
        { id: 378, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'N+ばかり': 'Trong phòng chỉ có sách.'", grammar: "ばかり", data: { correct_answer: "部屋には本ばかりだ。", hint: "Dùng Nばかりだ" } },

        // Vてばかりいる
        { id: 379, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vてばかりいる': 'Anh ấy chỉ phàn nàn mà không làm gì.'", grammar: "Vてばかりいる", data: { correct_answer: "彼は文句を言ってばかりで、何もやらない。", hint: "Dùng Vてばかりいる" } },

        // ばかりか=ばかりでなく
        { id: 380, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'ばかりでなく': 'Anh ấy không chỉ đá bóng giỏi mà còn học giỏi nữa.'", grammar: "ばかりでなく", data: { correct_answer: "彼はサッカーが上手なばかりでなく、勉強もできる。", hint: "Dùng Anaなばかりでなく" } },

        // Vるばかりだ
        { id: 381, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vるばかりだ': 'Tình hình công ty cứ xấu đi.'", grammar: "Vるばかりだ", data: { correct_answer: "会社の状況は悪くなるばかりだ。", hint: "Dùng Vるばかりだ" } },

        // ～にすぎない
        { id: 382, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～にすぎない': 'Đây chỉ là một ví dụ nhỏ.'", grammar: "～にすぎない", data: { correct_answer: "これは単なる一つの例にすぎない。", hint: "Dùng Nにすぎない" } },

        // ～しかない/～ほか(は)ない
        { id: 383, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ほか(は)ない': 'Đã hỏng rồi, đành phải vứt đi thôi.'", grammar: "～ほか(は)ない", data: { correct_answer: "壊れてしまったから、捨てるほかない。", hint: "Dùng Vるほかない" } },

        // N+きり/N+っきり
        { id: 384, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'N+っきり': 'Tôi muốn nói chuyện riêng chỉ có hai người.'", grammar: "N+っきり", data: { correct_answer: "二人っきりで話がしたい。", hint: "Dùng Nっきりで" } },

        // N+だらけ
        { id: 385, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'N+だらけ': 'Chiếc xe bị bẩn đầy bùn.'", grammar: "N+だらけ", data: { correct_answer: "車は泥だらけになっていた。", hint: "Dùng Nだらけ" } },

        // Vます+きる/切れる
        { id: 386, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vます+きる': 'Tôi đã sử dụng hết tiền một cách triệt để.'", grammar: "Vます+きる", data: { correct_answer: "お金を使いきった。", hint: "Dùng Vます+きる" } },

        // Vます+通す
        { id: 387, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vます+通す': 'Tôi đã xem hết bộ phim này từ đầu đến cuối.'", grammar: "Vます+通す", data: { correct_answer: "この映画を最後まで見通した。", hint: "Dùng Vます+通す" } },

        // Thêm 1 câu biến đổi để đủ 22 câu
        // Vてばかりいる
        { id: 388, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vてばかりいる': 'Anh ấy cứ uống rượu suốt nên không khỏe.'", grammar: "Vてばかりいる", data: { correct_answer: "彼は酒を飲んでばかりいるので、体調が悪い。", hint: "Dùng Vてばかりいる" } },


        // ==============================================================================================
        // 4. Bài tập điền trợ từ (22 câu)
        // ==============================================================================================

        // ぐらい/ほど
        { id: 389, type: EXERCISE_TYPE.type4, question: "疲れすぎて、何もする（＿＿）元気がない。", grammar: "ぐらい", data: { sentence: "疲れすぎて、何もする（＿＿）元気がない。", options: ["くらい", "こそ", "まで", "ばかり"], answer: 0 } },
        { id: 390, type: EXERCISE_TYPE.type4, question: "富士山（＿＿）の高さの山に登ってみたい。", grammar: "ぐらい", data: { sentence: "富士山（＿＿）の高さの山に登ってみたい。", options: ["くらい", "しか", "とって", "として"], answer: 0 } },
        { id: 391, type: EXERCISE_TYPE.type4, question: "彼（＿＿）嫌な人はいない。", grammar: "ほど", data: { sentence: "彼（＿＿）嫌な人はいない。", options: ["ほど", "さえ", "まで", "くらいなら"], answer: 0 } },

        // Nに限る
        { id: 392, type: EXERCISE_TYPE.type4, question: "夏は冷たいビールを飲む（＿＿）。", grammar: "Nに限る", data: { sentence: "夏は冷たいビールを飲む（＿＿）。", options: ["に限る", "のばかり", "というより", "としても"], answer: 0 } },

        // N+さえ
        { id: 393, type: EXERCISE_TYPE.type4, question: "簡単な計算（＿＿）できない。", grammar: "N+さえ", data: { sentence: "簡単な計算（＿＿）できない。", options: ["さえ", "だけ", "しか", "ほど"], answer: 0 } },

        // N+でも
        { id: 394, type: EXERCISE_TYPE.type4, question: "お茶（＿＿）飲みながら話しましょう。", grammar: "N+でも", data: { sentence: "お茶（＿＿）飲みながら話しましょう。", options: ["でも", "しか", "こそ", "ばかり"], answer: 0 } },

        // も
        { id: 395, type: EXERCISE_TYPE.type4, question: "彼は約束を（＿＿）守らない。", grammar: "も", data: { sentence: "彼は約束を（＿＿）守らない。", options: ["も", "さえ", "まで", "こそ"], answer: 0 } },

        // まで
        { id: 396, type: EXERCISE_TYPE.type4, question: "先生（＿＿）気がつかなかった間違いだ。", grammar: "まで", data: { sentence: "先生（＿＿）気がつかなかった間違いだ。", options: ["まで", "こそ", "さえ", "でも"], answer: 0 } },

        // N+など/なんか/なんて
        { id: 397, type: EXERCISE_TYPE.type4, question: "あんなひどいこと、彼（＿＿）するはずがない。", grammar: "なんて", data: { sentence: "あんなひどいこと、彼（＿＿）するはずがない。", options: ["なんて", "として", "にとって", "ばかり"], answer: 0 } },

        // ～にとって
        { id: 398, type: EXERCISE_TYPE.type4, question: "健康（＿＿）、一番大切なことだ。", grammar: "～にとって", data: { sentence: "健康（＿＿）、一番大切なことだ。", options: ["にとって", "に比べて", "に反して", "の反面"], answer: 0 } },

        // ～として
        { id: 399, type: EXERCISE_TYPE.type4, question: "彼をリーダー（＿＿）選出した。", grammar: "～として", data: { sentence: "彼をリーダー（＿＿）選出した。", options: ["として", "ばかりに", "さえ", "まで"], answer: 0 } },

        // ことがある/こともある
        { id: 400, type: EXERCISE_TYPE.type4, question: "一人で悩む（＿＿）ありません。", grammar: "ことはない", data: { sentence: "一人で悩む（＿＿）ありません。", options: ["こと", "限り", "まま", "ほど"], answer: 0 } },

        // N (+ trợ từ) ばかり
        { id: 401, type: EXERCISE_TYPE.type4, question: "テーブルの上には、お菓子（＿＿）だ。", grammar: "ばかり", data: { sentence: "テーブルの上には、お菓子（＿＿）だ。", options: ["ばかり", "きり", "だけ", "さえ"], answer: 0 } },

        // Vてばかりいる
        { id: 402, type: EXERCISE_TYPE.type4, question: "子供はゲームをし（＿＿）いる。", grammar: "Vてばかりいる", data: { sentence: "子供はゲームをし（＿＿）いる。", options: ["てばかり", "てさえ", "てまで", "たきり"], answer: 0 } },

        // ばかりか=ばかりでなく
        { id: 403, type: EXERCISE_TYPE.type4, question: "雨（＿＿）風も強くなってきた。", grammar: "ばかりか", data: { sentence: "雨（＿＿）風も強くなってきた。", options: ["ばかりか", "ほど", "まで", "くらい"], answer: 0 } },

        // Vるばかりだ
        { id: 404, type: EXERCISE_TYPE.type4, question: "彼の日本語は上達する（＿＿）だ。", grammar: "Vるばかりだ", data: { sentence: "彼の日本語は上達する（＿＿）だ。", options: ["ばかり", "ほど", "きり", "ばかりか"], answer: 0 } },

        // ～にすぎない
        { id: 405, type: EXERCISE_TYPE.type4, question: "その情報は噂（＿＿）にすぎない。", grammar: "～にすぎない", data: { sentence: "その情報は噂（＿＿）にすぎない。", options: ["に", "と", "が", "も"], answer: 0 } },

        // ～しかない/～ほか(は)ない
        { id: 406, type: EXERCISE_TYPE.type4, question: "この状況では、待つ（＿＿）。", grammar: "～しかない", data: { sentence: "この状況では、待つ（＿＿）。", options: ["しかない", "ほど", "べきだ", "つもりだ"], answer: 0 } },

        // N+きり/N+っきり
        { id: 407, type: EXERCISE_TYPE.type4, question: "彼とは一度会った（＿＿）だ。", grammar: "N+きり", data: { sentence: "彼とは一度会った（＿＿）だ。", options: ["きり", "ぐらい", "まで", "ても"], answer: 0 } },

        // N+だらけ
        { id: 408, type: EXERCISE_TYPE.type4, question: "間違（＿＿）のレポートを提出した。", grammar: "N+だらけ", data: { sentence: "間違（＿＿）のレポートを提出した。", options: ["いだらけ", "いばかり", "いほど", "いに"], answer: 0 } },

        // Vます+きる/切れる
        { id: 409, type: EXERCISE_TYPE.type4, question: "この小説は難しくて、読み（＿＿）ない。", grammar: "Vます+切れる", data: { sentence: "この小説は難しくて、読み（＿＿）ない。", options: ["きれ", "あげ", "だし", "かけ"], answer: 0 } },

        // Vます+通す
        { id: 410, type: EXERCISE_TYPE.type4, question: "私は自分の意見を言い（＿＿）。", grammar: "Vます+通す", data: { sentence: "私は自分の意見を言い（＿＿）。", options: ["通した", "きった", "あげた", "かけた"], answer: 0 } },
    ],
    [GRAMMAR_GROUP.group5]: [
        // ==============================================================================================
        // 1. Bài tập chọn đúng cấu trúc ngữ pháp (8 câu)
        // ==============================================================================================

        // させてもらいたい/させていただきたい/させてほしい
        { id: 411, type: EXERCISE_TYPE.type1, question: "Cho phép tôi làm việc này (thể hiện sự khiêm tốn, mong muốn).", grammar: "させていただきたい", data: { options: ["この件は僕に任せていただきたいです。", "この件は僕に任せるつもりだ。", "この件は僕に任せればいい。"], answer: 0 } },
        { id: 412, type: EXERCISE_TYPE.type1, question: "Hãy để cho tôi đi! (Thể hiện ý muốn mạnh mẽ)", grammar: "させてほしい", data: { options: ["私に行かせてほしいんです。", "私は行くべきだ。", "私は行くしかない。"], answer: 0 } },
        { id: 413, type: EXERCISE_TYPE.type1, question: "Tôi muốn sếp cho phép tôi tham gia dự án đó.", grammar: "させてもらいたい", data: { options: ["上司にそのプロジェクトに参加させてもらいたい。", "上司にそのプロジェクトに参加させようとする。", "上司にそのプロジェクトに参加するしかない。"], answer: 0 } },

        // ことにする/ことにしている
        { id: 414, type: EXERCISE_TYPE.type1, question: "Vì tủ lạnh bị hỏng, nên tôi quyết định mua cái mới.", grammar: "ことにした", data: { options: ["冷蔵庫が壊れたので、新しいのを買うことにした。", "冷蔵庫が壊れたので、新しいのを買うわけだ。", "冷蔵庫が壊れたので、新しいのを買うべきだ。"], answer: 0 } },
        { id: 415, type: EXERCISE_TYPE.type1, question: "Tôi quyết định từ tháng sau sẽ không ăn đồ ngọt nữa.", grammar: "ことにした", data: { options: ["来月から甘いものを食べないことにした。", "来月から甘いものを食べないようにしている。", "来月から甘いものを食べるしかない。"], answer: 0 } },

        // ～ようにする/～ようにしている
        { id: 416, type: EXERCISE_TYPE.type1, question: "Tôi cố gắng ăn đồ mình tự nấu càng nhiều càng tốt (thói quen cố gắng duy trì).", grammar: "～ようにしている", data: { options: ["私はなるべく自分で料理を作って食べるようにしている。", "私はなるべく自分で料理を作ることになった。", "私はなるべく自分で料理を作ろうとした。"], answer: 0 } },
        { id: 417, type: EXERCISE_TYPE.type1, question: "Từ giờ trở đi, tôi sẽ cố gắng không đến muộn.", grammar: "～ようにする", data: { options: ["これからは遅刻しないようにする。", "これからは遅刻しないことにした。", "これからは遅刻しないというより。"], answer: 0 } },

        // (よ)うとする
        { id: 418, type: EXERCISE_TYPE.type1, question: "Khi tôi đang định ra ngoài, thì trời đổ mưa lớn.", grammar: "(よ)うとした", data: { options: ["家を出ようとしたとき、突然大雨が降り出した。", "家を出ることにしたとき、突然大雨が降り出した。", "家を出るばかりに、突然大雨が降り出した。"], answer: 0 } },

        // ==============================================================================================
        // 2. Bài Tập Sắp Xếp Câu (4 câu)
        // ==============================================================================================

        // ことにする/ことにしている
        { id: 419, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi quyết định mỗi ngày chạy bộ 30 phút", grammar: "ことにした", data: { parts: ["毎日", "ことにした。", "30分", "ジョギング", "する"], correct: ["毎日", "30分", "ジョギング", "する", "ことにした。"] } },

        // ～ようにする/～ようにしている
        { id: 420, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi cố gắng ngủ 7 tiếng mỗi đêm", grammar: "～ようにしている", data: { parts: ["寝る", "ように", "毎晩", "している。", "7時間"], correct: ["毎晩", "7時間", "寝る", "ように", "している。"] } },

        // (よ)うとする
        { id: 421, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Anh ấy định mở cửa sổ nhưng lại thôi", grammar: "(よ)うとした", data: { parts: ["開け", "たが、", "彼は", "やめた。", "窓を", "ようとし"], correct: ["彼は", "窓を", "開け", "ようとし", "たが、", "やめた。"] } },

        // させてもらいたい
        { id: 422, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi muốn được cho phép tham dự cuộc họp đó", grammar: "させてもらいたい", data: { parts: ["その会議に", "出席", "させ", "もらいたい。"], correct: ["その会議に", "出席", "させ", "てもらいたい。"] } },


        // ==============================================================================================
        // 3. Bài tập biến đổi câu (4 câu)
        // ==============================================================================================

        // させてもらいたい/させていただきたい/させてほしい
        { id: 423, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'させていただきたい': 'Tôi xin phép được trình bày ý kiến của mình.'", grammar: "させていただきたい", data: { correct_answer: "自分の意見を発表させていただきたいです。", hint: "Dùng Vさせ + ていただきたい" } },

        // ことにする/ことにしている
        { id: 424, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'ことにしている': 'Tôi có thói quen uống cà phê vào mỗi buổi sáng.'", grammar: "ことにしている", data: { correct_answer: "毎朝コーヒーを飲むことにしている。", hint: "Dùng Vる + ことにしている" } },

        // ～ようにする/～ようにしている
        { id: 425, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ようにする': 'Hãy cố gắng nhớ mặt những người đã gặp.'", grammar: "～ようにする", data: { correct_answer: "会った人の顔を覚えるようにしなさい。", hint: "Dùng Vる + ようにする" } },

        // (よ)うとする
        { id: 426, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '(よ)うとした': 'Tôi vừa mở máy tính thì nó bị treo (đơ).'", grammar: "(よ)うとした", data: { correct_answer: "パソコンをつけようとしたら、フリーズした。", hint: "Dùng Vようとしたら" } },

        // ==============================================================================================
        // 4. Bài tập điền trợ từ (4 câu)
        // ==============================================================================================

        // させてもらいたい/させてほしい
        { id: 427, type: EXERCISE_TYPE.type4, question: "彼（＿＿）は、この仕事を任せてほしい。", grammar: "させてほしい", data: { sentence: "彼（に）は、この仕事を任せて（＿＿）。", options: ["ほしい", "たい", "しまう", "あげる"], answer: 0 } },

        // ことにする/ことにしている
        { id: 428, type: EXERCISE_TYPE.type4, question: "健康のため、毎日野菜を食べる（＿＿）している。", grammar: "ことにしている", data: { sentence: "健康のため、毎日野菜を食べる（＿＿）している。", options: ["こと", "よう", "つもり", "べき"], answer: 0 } },

        // ～ようにする/～ようにしている
        { id: 429, type: EXERCISE_TYPE.type4, question: "日本語の新聞が読める（＿＿）努力する。", grammar: "～ようにする", data: { sentence: "日本語の新聞が読める（＿＿）努力する。", options: ["ように", "ことに", "つもりで", "ばかりに"], answer: 0 } },

        // (よ)うとする
        { id: 430, type: EXERCISE_TYPE.type4, question: "子供は一生懸命立ち（＿＿）したが、立てなかった。", grammar: "（よ）うとする", data: { sentence: "子供は一生懸命立ち（＿＿）したが、立てなかった。", options: ["とう", "こと", "よう", "べく"], answer: 0 } },
    ],
    [GRAMMAR_GROUP.group6]: [
        // ==============================================================================================
        // 1. Bài tập chọn đúng cấu trúc ngữ pháp (16 câu)
        // ==============================================================================================

        // てもらいたい/ていただきたい/てほしい
        { id: 501, type: EXERCISE_TYPE.type1, question: "Tôi muốn bố mẹ nhiều tuổi rồi còn làm việc quá sức.", grammar: "てほしい", data: { options: ["年を取った親にはもう無理をしてほしくない。", "年を取った親にはもう無理をするべきだ。", "年を取った親にはもう無理をするしかない。"], answer: 0 } },
        { id: 502, type: EXERCISE_TYPE.type1, question: "Tôi muốn bạn xem giúp tôi tài liệu này.", grammar: "ていただきたい", data: { options: ["この書類、ちょっと見ていただきたいいんですが。", "この書類、ちょっと見ることにしているんですが。", "この書類、ちょっと見るつもりだんですが。"], answer: 0 } },

        // ～といい/～ばいい/～たらいい
        { id: 503, type: EXERCISE_TYPE.type1, question: "Mong sao đứa con sắp ra đời là một đứa con trai.", grammar: "～たらいい", data: { options: ["生まれてくる子が男の子だったらいいのだが。", "生まれてくる子が男の子であるべきだ。", "生まれてくる子が男の子であるわけだ。"], answer: 0 } },
        { id: 504, type: EXERCISE_TYPE.type1, question: "Tôi nghĩ lúc trẻ cứ việc chịu nhiều khó nhọc.", grammar: "～たらいい", data: { options: ["若いうちに色々苦労したらいいと思う。", "若いうちに色々苦労するしかないと思う。", "若いうちに色々苦労することにすると思う。"], answer: 0 } },

        // 命令(しろ)/禁止(な)
        { id: 505, type: EXERCISE_TYPE.type1, question: "Bố tôi đã được bác sĩ bảo là cấm uống rượu.", grammar: "禁止(な)", data: { options: ["父は医者にお酒を飲むなと言われている。", "父は医者にお酒を飲むようにと言われている。", "父は医者にお酒を飲むことだと言われている。"], answer: 0 } },
        { id: 506, type: EXERCISE_TYPE.type1, question: "Tôi đã nhờ bạn bè hãy giúp tôi chuyển nhà.", grammar: "命令(しろ)", data: { options: ["引っ越しを手伝ってくれと友達に頼んだ。", "引っ越しを手伝うべきだと友達に頼んだ。", "引っ越しを手伝わないわけにはいかないと友達に頼んだ。"], answer: 0 } },

        // ～こと
        { id: 507, type: EXERCISE_TYPE.type1, question: "Khi nào nghỉ nhất định phải liên lạc với nhà trường.", grammar: "～こと", data: { options: ["休む時、必ず学校に連絡すること。", "休む時、必ず学校に連絡したい。", "休む時、必ず学校に連絡したらどうか。"], answer: 0 } },
        { id: 508, type: EXERCISE_TYPE.type1, question: "Không được nói chuyện riêng trong lớp học.", grammar: "～こと", data: { options: ["授業中は私語をしないこと。", "授業中は私語をしないようにしている。", "授業中は私語をしないわけではない。"], answer: 0 } },

        // ～べきだ/～べき/～べきではない
        { id: 509, type: EXERCISE_TYPE.type1, question: "Vì đây là việc quan trong, chúng ta nên thảo luận rồi quyết định.", grammar: "～べきだ", data: { options: ["もう少し話し合ってから決めるべきだ。", "もう少し話し合ってから決めるしかない。", "もう少し話し合ってから決めることになっている。"], answer: 0 } },
        { id: 510, type: EXERCISE_TYPE.type1, question: "Vì đã mất công để vào công ty, đừng nên từ bỏ dễ dàng thế chứ.", grammar: "～べきではない", data: { options: ["せっかく入った会社なのだから、簡単に辞めるべきではない。", "せっかく入った会社なのだから、簡単に辞めることではない。", "せっかく入った会社なのだから、簡単に辞めるしかない。"], answer: 0 } },

        // ～たらどうか
        { id: 511, type: EXERCISE_TYPE.type1, question: "Nếu anh lo lắng cho tình trạng cơ thể, thì thử một lần đi khám sức khỏe xem sao.", grammar: "～たらどうか", data: { options: ["一度健康診断を受けたらどうでしょうか。", "一度健康診断を受けるべきだ。", "一度健康診断を受けることにする。"], answer: 0 } },
        { id: 512, type: EXERCISE_TYPE.type1, question: "Anh nên thử nói chuyện trực tiếp với người đó xem sao.", grammar: "～たらどうか", data: { options: ["直接、その人に話してみたらどうか。", "直接、その人に話すことにする。", "直接、その人に話すしかない。"], answer: 0 } },

        // ことはない
        { id: 513, type: EXERCISE_TYPE.type1, question: "Câu hỏi của phỏng vấn dễ nên không cần phải lo lắng như thế đâu.", grammar: "ことはない", data: { options: ["そんなに心配することはありませんよ。", "そんなに心配するしかないですよ。", "そんなに心配するわけではないですよ。"], answer: 0 } },
        { id: 514, type: EXERCISE_TYPE.type1, question: "Không cần thiết phải nộp đơn ngay lập tức.", grammar: "ことはない", data: { options: ["今すぐ申し込む必要はない。", "今すぐ申し込むべきではない。", "今すぐ申し込むわけにはいかない。"], answer: 0 } },

        // ～よう(に)いう/注意する/頼む
        { id: 515, type: EXERCISE_TYPE.type1, question: "Tôi đã được bảo là hãy trở về nhà ngay.", grammar: "～よう(に)いう", data: { options: ["すぐ家に帰るように言われました。", "すぐ家に帰るべきだと言われました。", "すぐ家に帰るしかないと言われました。"], answer: 0 } },
        { id: 516, type: EXERCISE_TYPE.type1, question: "Tôi đã lưu ý anh ta là từ giờ trở đi đừng có đi trễ.", grammar: "～よう(に)注意する", data: { options: ["これからは遅刻しないように注意しておきます。", "これからは遅刻しないことだと注意しておきます。", "これからは遅刻しないべきだと注意しておきます。"], answer: 0 } },

        // ==============================================================================================
        // 2. Bài Tập Sắp Xếp Câu (8 câu)
        // ==============================================================================================

        // てもらいたい/ていただきたい/てほしい
        { id: 517, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi muốn bạn giúp đỡ tôi một chút về việc này", grammar: "てもらいたい", data: { parts: ["手伝って", "この件について", "もらいたい。", "少し"], correct: ["この件について", "少し", "手伝って", "もらいたい。"] } },

        // ～たらいい
        { id: 518, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi nên chọn cái nào thì tốt đây", grammar: "～たらいい", data: { parts: ["いいでしょうか。", "どちらを", "選んだら"], correct: ["どちらを", "選んだら", "いいでしょうか。"] } },

        // 命令(しろ)/禁止(な)
        { id: 519, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Cấm chạm vào vật trưng bày", grammar: "禁止(な)", data: { parts: ["触れるな。", "展示物に"], correct: ["展示物に", "触れるな。"] } },

        // ～こと
        { id: 520, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Đồ ăn còn thừa phải ăn hết", grammar: "～こと", data: { parts: ["残さず", "こと。", "最後まで", "食べること", "全部"], correct: ["残さず", "全部", "食べること", "こと。", "最後まで"] } }, // Cần sửa parts, hoặc dùng cấu trúc đơn giản hơn

        // ～べきだ/～べきではない
        { id: 521, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi không nên nói điều đó", grammar: "～べきではない", data: { parts: ["なかった。", "べき", "そんなことは", "言う", "では"], correct: ["そんなことは", "言う", "べき", "では", "なかった。"] } },

        // ～たらどうか
        { id: 522, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Bạn nên thử hỏi ý kiến của người lớn xem sao", grammar: "～たらどうか", data: { parts: ["聞いて", "年上の", "どう", "人に", "みたら", "意見を", "か。"], correct: ["年上の", "人に", "意見を", "聞いて", "みたら", "どうか。"] } },

        // ことはない
        { id: 523, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Không cần phải vội vàng", grammar: "ことはない", data: { parts: ["ことは", "急ぐ", "ない。"], correct: ["急ぐ", "こと", "は", "ない。"] } }, // Hoặc 急ぐことはない

        // ～よう(に)いう/注意する/頼む
        { id: 524, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi đã nhờ anh ta hãy đến đúng giờ", grammar: "～よう(に)頼む", data: { parts: ["彼に", "頼んだ。", "時間通りに", "来る", "ように"], correct: ["彼に", "時間通りに", "来る", "ように", "頼んだ。"] } },

        // ==============================================================================================
        // 3. Bài tập biến đổi câu (8 câu)
        // ==============================================================================================

        // てもらいたい/てほしい
        { id: 525, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'てほしい': 'Tôi muốn bạn giữ lời hứa.'", grammar: "てほしい", data: { correct_answer: "約束を守ってほしい。", hint: "Dùng Vてほしい" } },

        // ～ばいい
        { id: 526, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ばいい': 'Bạn có thể làm theo cách bạn thích.'", grammar: "～ばいい", data: { correct_answer: "好きなようにやればいい。", hint: "Dùng Vばいい" } },

        // 命令(しろ)/禁止(な)
        { id: 527, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '命令形': 'Nhanh chóng làm (công việc này)!'", grammar: "命令(しろ)", data: { correct_answer: "早くやれ！", hint: "Dùng Vろ" } },

        // ～こと
        { id: 528, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vないこと' (Lệnh cấm): 'Không được sử dụng điện thoại di động trong bệnh viện.'", grammar: "～こと", data: { correct_answer: "病院内では携帯電話を使用しないこと。", hint: "Dùng Vないこと" } },

        // ～べきだ/～べきではない
        { id: 529, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～べきだ': 'Sau khi kiểm tra kỹ, bạn nên gửi nó đi.'", grammar: "～べきだ", data: { correct_answer: "よく確認してから送るべきだ。", hint: "Dùng Vるべきだ" } },

        // ～たらどうか
        { id: 530, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～たらどうか': 'Anh nên nghỉ ngơi một chút xem sao.'", grammar: "～たらどうか", data: { correct_answer: "少し休んだらどうですか。", hint: "Dùng Vたらどうか" } },

        // ことはない
        { id: 531, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'ことはない': 'Không cần phải đi mua đồ ăn.'", grammar: "ことはない", data: { correct_answer: "食べ物を買いに行くことはない。", hint: "Dùng Vることはない" } },

        // ～よう(に)いう/注意する/頼む
        { id: 532, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ように注意する': 'Tôi nhắc anh ấy phải cẩn thận khi lái xe.'", grammar: "～よう(に)注意する", data: { correct_answer: "彼に運転には気をつけるように注意した。", hint: "Dùng Vるように注意した" } },

        // ==============================================================================================
        // 4. Bài tập điền trợ từ (8 câu)
        // ==============================================================================================

        // てもらいたい/てほしい
        { id: 533, type: EXERCISE_TYPE.type4, question: "この本を読んで（＿＿）。", grammar: "てほしい", data: { sentence: "この本を読んで（＿＿）。", options: ["ほしい", "しかない", "はず", "べき"], answer: 0 } },

        // ～ばいい
        { id: 534, type: EXERCISE_TYPE.type4, question: "疲れたら休め（＿＿）。", grammar: "～ばいい", data: { sentence: "疲れたら休め（＿＿）。", options: ["ばいい", "のこと", "べきだ", "のなら"], answer: 0 } },

        // 命令(しろ)/禁止(な)
        { id: 535, type: EXERCISE_TYPE.type4, question: "ここにゴミを捨てる（＿＿）。", grammar: "禁止(な)", data: { sentence: "ここにゴミを捨てる（＿＿）。", options: ["な", "べき", "こと", "はず"], answer: 0 } },

        // ～こと
        { id: 536, type: EXERCISE_TYPE.type4, question: "明日の会議には、遅刻しない（＿＿）。", grammar: "～こと", data: { sentence: "明日の会議には、遅刻しない（＿＿）。", options: ["こと", "べき", "はず", "なら"], answer: 0 } },

        // ～べきだ/～べきではない
        { id: 537, type: EXERCISE_TYPE.type4, question: "感謝の気持ちは伝える（＿＿）。", grammar: "～べきだ", data: { sentence: "感謝の気持ちは伝える（＿＿）。", options: ["べきだ", "ことだ", "までだ", "しかない"], answer: 0 } },

        // ～たらどうか
        { id: 538, type: EXERCISE_TYPE.type4, question: "新しいパソコンを（＿＿）どうですか。", grammar: "～たらどうか", data: { sentence: "新しいパソコンを（買ったら）どうですか。", options: ["買ったら", "買うべき", "買うなら", "買うこと"], answer: 0 } },

        // ことはない
        { id: 539, type: EXERCISE_TYPE.type4, question: "そんなに慌てる（＿＿）ありません。", grammar: "ことはない", data: { sentence: "そんなに慌てる（＿＿）ありません。", options: ["こと", "べき", "まで", "はず"], answer: 0 } },

        // ～よう(に)いう/注意する/頼む
        { id: 540, type: EXERCISE_TYPE.type4, question: "静か（＿＿）するようにお願いした。", grammar: "～よう(に)頼む", data: { sentence: "静か（に）するようにお願いした。", options: ["に", "と", "が", "を"], answer: 0 } },
    ],
    [GRAMMAR_GROUP.group7]: [
        // ==============================================================================================
        // 1. Bài tập chọn đúng cấu trúc ngữ pháp (22 câu)
        // ==============================================================================================

        // わけだ
        { id: 601, type: EXERCISE_TYPE.type1, question: "Từ đây đi đến ga Tokyou mất một tiếng rưỡi à. Vậy là nếu xuất phát từ bây giờ thì 9h sẽ đến nơi.", grammar: "わけだ", data: { options: ["じゃ今から出れば9時に着くわけだ。", "じゃ今から出れば9時に着くべきだ。", "じゃ今から出れば9時に着くしかない。"], answer: 0 } },
        { id: 602, type: EXERCISE_TYPE.type1, question: "Vì tôi đã làm việc cả ngày không nghỉ, nên mệt là điều đương nhiên.", grammar: "わけだ", data: { options: ["一日中働いていたのだから、疲れているわけだ。", "一日中働いていたのだから、疲れているつもりだ。", "一日中働いていたのだから、疲れているものか。"], answer: 0 } },

        // ～はずがない/～わけがない
        { id: 603, type: EXERCISE_TYPE.type1, question: "Cửa hàng đó ngày hôm nay chắc chắn không nghỉ. Vì tôi đã gọi điện xác nhận rồi.", grammar: "～はずがない", data: { options: ["あの店が今日休みのはずはありません。", "あの店が今日休むというわけではない。", "あの店が今日休むことはない。"], answer: 0 } },
        { id: 604, type: EXERCISE_TYPE.type1, question: "Một người không học hành gì như anh ta thì không thể đỗ kỳ thi được.", grammar: "～わけがない", data: { options: ["彼のように全く勉強しない人が、合格できるわけがない。", "彼のように全く勉強しない人が、合格できるつもりだ。", "彼のように全く勉強しない人が、合格できるとしたら。"], answer: 0 } },

        // ～とは限らない
        { id: 605, type: EXERCISE_TYPE.type1, question: "Người dạy tiếng Nhật không nhất thiết phải là người Nhật.", grammar: "～とは限らない", data: { options: ["日本語を教えているのは日本人とは限らない。", "日本語を教えているのは日本人であるべきだ。", "日本語を教えているのは日本人にすぎない。"], answer: 0 } },
        { id: 606, type: EXERCISE_TYPE.type1, question: "Món ăn đắt tiền chưa chắc đã ngon.", grammar: "～とは限らない", data: { options: ["高い料理が必ずしも美味しいとは限らない。", "高い料理が美味しいわけだ。", "高い料理が美味しいつもりだ。"], answer: 0 } },

        // ～わけではない/～というわけではない/～のではない
        { id: 607, type: EXERCISE_TYPE.type1, question: "Nhà hàng này lúc nào cũng đầy khách, nhưng điều đó không có nghĩa là đặc biệt ngon.", grammar: "～わけではない", data: { options: ["特別においしいわけではない。", "特別においしいはずがない。", "特別においしいに違いない。"], answer: 0 } },
        { id: 608, type: EXERCISE_TYPE.type1, question: "Không phải tôi ghét công việc này, chỉ là tôi không quen thôi.", grammar: "～わけではない", data: { options: ["この仕事が嫌いなわけではない。", "この仕事が嫌いではないつもりだ。", "この仕事が嫌いではないものか。"], answer: 0 } },

        // わけにはいかない
        { id: 609, type: EXERCISE_TYPE.type1, question: "Tôi hơi bị sốt, nhưng vì hôm nay có một cuộc họp quan trọng, nên tôi không thể nghỉ làm.", grammar: "わけにはいかない", data: { options: ["仕事を休むわけにはいかない。", "仕事を休まないわけではない。", "仕事を休むべきだ。"], answer: 0 } },
        { id: 610, type: EXERCISE_TYPE.type1, question: "Dù rất muốn đi chơi nhưng tôi không thể đi vì có việc phải làm.", grammar: "わけにはいかない", data: { options: ["遊びに行きたいけど、やる事があるから行くわけにはいかない。", "遊びに行きたいけど、やる事があるから行くつもりではない。", "遊びに行きたいけど、やる事があるから行くはずがない。"], answer: 0 } },

        // ～つもりだ
        { id: 611, type: EXERCISE_TYPE.type1, question: "Tôi năm nay đã 77 tuổi, nhưng tôi cứ nghĩ rằng mình vẫn còn trẻ lắm.", grammar: "～つもりだ", data: { options: ["私はまだまだ若いつもりです。", "私はまだまだ若いわけだ。", "私はまだまだ若いはずがない。"], answer: 0 } },
        { id: 612, type: EXERCISE_TYPE.type1, question: "Tôi cứ nghĩ rằng đã khóa cửa rồi.", grammar: "～つもりだ", data: { options: ["鍵をかけた“つもり”でいた。", "鍵をかけた“わけ”でいた。", "鍵をかけた“はず”でいた。"], answer: 0 } },

        // ～に決まっている
        { id: 613, type: EXERCISE_TYPE.type1, question: "Tôi chắc chắn bố mẹ cậu sẽ phản đối việc cậu đi du lịch nước ngoài một mình.", grammar: "～に決まっている", data: { options: ["親に反対されるに決まっている。", "親に反対されるわけだ。", "親に反対されるかもしれない。"], answer: 0 } },
        { id: 614, type: EXERCISE_TYPE.type1, question: "Nếu không luyện tập thì chắc chắn sẽ thua.", grammar: "～に決まっている", data: { options: ["練習しなければ、負けるに決まっている。", "練習しなければ、負けるわけがない。", "練習しなければ、負けるべきだ。"], answer: 0 } },

        // ～に違いない
        { id: 615, type: EXERCISE_TYPE.type1, question: "Không thấy ô của tôi đâu. Chắc chắn là ai đó đã cầm rồi.", grammar: "～に違いない", data: { options: ["誰かが持っていたに違いない。", "誰かが持っていたわけだ。", "誰かが持っていたつもりだ。"], answer: 0 } },
        { id: 616, type: EXERCISE_TYPE.type1, question: "Hôm nay cô ấy không đến. Chắc chắn là bị ốm rồi.", grammar: "～に違いない", data: { options: ["彼女は来なかった。病気に違いない。", "彼女は来なかった。病気というわけではない。", "彼女は来なかった。病気であるべきだ。"], answer: 0 } },

        // ～おそれがある
        { id: 617, type: EXERCISE_TYPE.type1, question: "Nếu động đất lớn xảy ra, e là tòa nhà này sẽ đổ.", grammar: "～おそれがある", data: { options: ["この建物が倒れるおそれがある。", "この建物が倒れるわけだ。", "この建物が倒れるつもりだ。"], answer: 0 } },
        { id: 618, type: EXERCISE_TYPE.type1, question: "Nếu không tuân thủ luật lệ, e rằng sẽ bị phạt.", grammar: "～おそれがある", data: { options: ["ルールを守らないと、罰せられるおそれがある。", "ルールを守らないと、罰せられるべきだ。", "ルールを守らないと、罰せられることはない。"], answer: 0 } },

        // ～ものか/もんか
        { id: 619, type: EXERCISE_TYPE.type1, question: "Nhiều việc như thế này thì có đến mai cũng nhất định không xong được.", grammar: "～ものか", data: { options: ["明日までに終わるものか。", "明日までに終わるつもりだ。", "明日までに終わるわけだ。"], answer: 0 } },
        { id: 620, type: EXERCISE_TYPE.type1, question: "Tôi sẽ không bao giờ đến cái nhà hàng đắt đỏ đó nữa đâu!", grammar: "～もんか", data: { options: ["あんな高い店、二度と行くもんか。", "あんな高い店、二度と行くべきだ。", "あんな高い店、二度と行くしかない。"], answer: 0 } },

        // ～としたら/～とすれば
        { id: 621, type: EXERCISE_TYPE.type1, question: "Giả sử chuyện đó có thật, thì tôi rất vui.", grammar: "～としたら", data: { options: ["その話が本当だとしたら、うれしいです。", "その話が本当だというわけではない。", "その話が本当だはずがない。"], answer: 0 } },
        { id: 622, type: EXERCISE_TYPE.type1, question: "Giả sử mọi thứ diễn ra theo đúng kế hoạch, thì chúng ta sẽ đỗ.", grammar: "～とすれば", data: { options: ["すべて計画通りだとすれば、私たちは合格する。", "すべて計画通りだとすれば、私たちは合格するはずがない。", "すべて計画通りだとすれば、私たちは合格することはない。"], answer: 0 } },


        // ==============================================================================================
        // 2. Bài Tập Sắp Xếp Câu (11 câu)
        // ==============================================================================================

        // わけだ
        { id: 623, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Ah, vậy ra cô ấy là người chịu trách nhiệm, thảo nào", grammar: "わけだ", data: { parts: ["ああ、", "責任者", "彼女が", "という", "わけだ。"], correct: ["ああ、", "彼女が", "責任者", "という", "わけだ。"] } },

        // ～はずがない/～わけがない
        { id: 624, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Không thể có chuyện anh ấy nói dối", grammar: "～はずがない", data: { parts: ["嘘を", "はずが", "彼が", "ない。", "つく"], correct: ["彼が", "嘘を", "つく", "はずが", "ない。"] } },

        // ～とは限らない
        { id: 625, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Người có bằng cấp chưa chắc đã là người làm việc giỏi", grammar: "～とは限らない", data: { parts: ["仕事が", "限らない。", "資格が", "ある人が", "できるとは"], correct: ["資格が", "ある人が", "仕事が", "できるとは", "限らない。"] } },

        // ～わけではない
        { id: 626, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Không phải tôi không thích món này", grammar: "～わけではない", data: { parts: ["嫌いな", "ではない。", "この料理が", "わけ"], correct: ["この料理が", "嫌いな", "わけ", "ではない。"] } },

        // わけにはいかない
        { id: 627, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi không thể làm ngơ trước vấn đề đó", grammar: "わけにはいかない", data: { parts: ["その問題", "見て見ぬ", "わけにはいかない。", "ふりを", "をする"], correct: ["その問題", "を見て見ぬ", "ふりを", "する", "わけにはいかない。"] } },

        // ～つもりだ
        { id: 628, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi cứ nghĩ rằng mình đã tắt máy tính rồi", grammar: "～つもりだ", data: { parts: ["切った", "つもり", "パソコンの", "だった。", "電源を"], correct: ["パソコンの", "電源を", "切った", "つもり", "だった。"] } },

        // ～に決まっている
        { id: 629, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nếu nói thế, chắc chắn anh ấy sẽ tức giận", grammar: "～に決まっている", data: { parts: ["彼が", "言ったら、", "そんなことを", "に決まっている。", "怒る"], correct: ["そんなことを", "言ったら、", "彼が", "怒る", "に決まっている。"] } },

        // ～に違いない
        { id: 630, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Đã muộn thế này, chắc chắn là họ đã đi ngủ rồi", grammar: "～に違いない", data: { parts: ["きっと", "に違いない。", "こんな", "もう", "寝た", "時間だから、"], correct: ["こんな", "時間だから、", "きっと", "もう", "寝た", "に違いない。"] } },

        // ～おそれがある
        { id: 631, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: E là giá cả sẽ tăng thêm nữa", grammar: "～おそれがある", data: { parts: ["さらに", "おそれが", "物価が", "上がる", "ある。"], correct: ["さらに", "物価が", "上がる", "おそれが", "ある。"] } },

        // ～ものか
        { id: 632, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi sẽ không bao giờ mắc lỗi như thế nữa đâu! ", grammar: "～ものか", data: { parts: ["する", "二度と", "こんな", "ものか。", "ミス、"], correct: ["こんな", "ミス、", "二度と", "する", "ものか。"] } },

        // ～としたら
        { id: 633, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Giả sử không có tiền, bạn sẽ làm gì? ", grammar: "～としたら", data: { parts: ["どうしますか。", "お金が", "ない", "としたら、"], correct: ["お金が", "ない", "としたら、", "どうしますか。"] } },


        // ==============================================================================================
        // 3. Bài tập biến đổi câu (11 câu)
        // ==============================================================================================

        // わけだ
        { id: 634, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'わけだ': 'Cứ 100 yên thì được giảm 5 yên. Vậy là được giảm 5% rồi.'", grammar: "わけだ", data: { correct_answer: "100円で5円安くなる。つまり、5パーセント引きになるわけだ。", hint: "Dùng Nになるわけだ" } },

        // ～はずがない/～わけがない
        { id: 635, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～はずがない': 'Không có chuyện tôi quên sinh nhật của cô ấy.'", grammar: "～はずがない", data: { correct_answer: "彼女の誕生日を忘れるはずがない。", hint: "Dùng Vるはずがない" } },

        // ～とは限らない
        { id: 636, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～とは限らない': 'Người nói tiếng Anh trôi chảy chưa chắc đã là người Anh.'", grammar: "～とは限らない", data: { correct_answer: "英語がペラペラな人がイギリス人とは限らない。", hint: "Dùng Nとは限らない" } },

        // ～わけではない/～のではない
        { id: 637, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～わけではない': 'Không phải là tôi không thích, chỉ là tôi không thể ăn được nhiều.'", grammar: "～わけではない", data: { correct_answer: "嫌いなわけではないが、たくさんは食べられない。", hint: "Dùng Anaなわけではない" } },

        // わけにはいかない
        { id: 638, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'わけにはいかない': 'Tôi không thể nói bí mật này cho người khác.'", grammar: "わけにはいかない", data: { correct_answer: "この秘密を他の人に話すわけにはいかない。", hint: "Dùng Vるわけにはいかない" } },

        // ～つもりだ
        { id: 639, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～つもりだ': 'Tôi cứ nghĩ rằng mình đã chuẩn bị đầy đủ rồi.'", grammar: "～つもりだ", data: { correct_answer: "十分に準備したつもりだった。", hint: "Dùng Vた + つもりだった" } },

        // ～に決まっている
        { id: 640, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～に決まっている': 'Việc đó chắc chắn là thành công.'", grammar: "～に決まっている", data: { correct_answer: "そのことは成功するに決まっている。", hint: "Dùng Vるに決まっている" } },

        // ～に違いない
        { id: 641, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～に違いない': 'Cái ví bị mất ở đâu đó trong nhà rồi.'", grammar: "～に違いない", data: { correct_answer: "財布は家のどこかに落ちたに違いない。", hint: "Dùng Vたに違いない" } },

        // ～おそれがある
        { id: 642, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～おそれがある': 'E rằng dự án sẽ bị hoãn lại.'", grammar: "～おそれがある", data: { correct_answer: "プロジェクトは延期になるおそれがある。", hint: "Dùng Nになるおそれがある" } },

        // ～ものか/もんか
        { id: 643, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～もんか': 'Tôi sẽ không bao giờ làm lại công việc cực khổ đó nữa đâu!'", grammar: "～もんか", data: { correct_answer: "あんな大変な仕事、二度とやるもんか。", hint: "Dùng Vるもんか" } },

        // ～としたら/～とすれば
        { id: 644, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～としたら': 'Nếu như anh ấy là gián điệp, thì mọi chuyện sẽ rất tệ.'", grammar: "～としたら", data: { correct_answer: "彼がスパイだとしたら、大変なことになる。", hint: "Dùng Nだとしたら" } },


        // ==============================================================================================
        // 4. Bài tập điền trợ từ (11 câu)
        // ==============================================================================================

        // わけだ
        { id: 645, type: EXERCISE_TYPE.type4, question: "昨日寝ていないから、眠い（＿＿）。", grammar: "わけだ", data: { sentence: "昨日寝ていないから、眠い（＿＿）。", options: ["わけだ", "はずだ", "つもりだ", "べきだ"], answer: 0 } },

        // ～はずがない/～わけがない
        { id: 646, type: EXERCISE_TYPE.type4, question: "あの真面目な彼が、そんなミスをする（＿＿）がない。", grammar: "～わけがない", data: { sentence: "あの真面目な彼が、そんなミスをする（＿＿）がない。", options: ["わけ", "はず", "つもり", "こと"], answer: 0 } },

        // ～とは限らない
        { id: 647, type: EXERCISE_TYPE.type4, question: "頑張れば、必ず成功する（＿＿）は限らない。", grammar: "～とは限らない", data: { sentence: "頑張れば、必ず成功する（＿＿）は限らない。", options: ["と", "の", "に", "を"], answer: 0 } },

        // ～わけではない/～のではない
        { id: 648, type: EXERCISE_TYPE.type4, question: "日本語を話せない（＿＿）ではない。", grammar: "～わけではない", data: { sentence: "日本語を話せない（＿＿）ではない。", options: ["わけ", "つもり", "はず", "こと"], answer: 0 } },

        // わけにはいかない
        { id: 649, type: EXERCISE_TYPE.type4, question: "上司の頼みを断る（＿＿）いかない。", grammar: "わけにはいかない", data: { sentence: "上司の頼みを断る（＿＿）いかない。", options: ["わけに", "はずに", "つもりで", "ことに"], answer: 0 } },

        // ～つもりだ
        { id: 650, type: EXERCISE_TYPE.type4, question: "私はもう十分にお金を払った（＿＿）だ。", grammar: "～つもりだ", data: { sentence: "私はもう十分にお金を払った（＿＿）だ。", options: ["つもり", "はず", "わけ", "べき"], answer: 0 } },

        // ～に決まっている
        { id: 651, type: EXERCISE_TYPE.type4, question: "そんなに遅れたら、間に合わない（＿＿）決まっている。", grammar: "～に決まっている", data: { sentence: "そんなに遅れたら、間に合わない（＿＿）決まっている。", options: ["に", "と", "が", "は"], answer: 0 } },

        // ～に違いない
        { id: 652, type: EXERCISE_TYPE.type4, question: "彼の顔色から、何かあった（＿＿）違いない。", grammar: "～に違いない", data: { sentence: "彼の顔色から、何かあった（＿＿）違いない。", options: ["に", "と", "が", "は"], answer: 0 } },

        // ～おそれがある
        { id: 653, type: EXERCISE_TYPE.type4, question: "台風で大きな被害がでる（＿＿）おそれがある。", grammar: "～おそれがある", data: { sentence: "台風で大きな被害がでる（＿＿）おそれがある。", options: ["おそれ", "こと", "はず", "つもり"], answer: 0 } },

        // ～ものか/もんか
        { id: 654, type: EXERCISE_TYPE.type4, question: "あの人にだけは、負ける（＿＿）。", grammar: "～もんか", data: { sentence: "あの人にだけは、負ける（＿＿）。", options: ["もんか", "わけだ", "はずだ", "つもりだ"], answer: 0 } },

        // ～としたら/～とすれば
        { id: 655, type: EXERCISE_TYPE.type4, question: "もし私が社長（＿＿）、どうしますか。", grammar: "～としたら", data: { sentence: "もし私が社長（＿＿）、どうしますか。", options: ["だとしたら", "だはずが", "だわけが", "だばかりに"], answer: 0 } },
    ],
    [GRAMMAR_GROUP.group8]: [
        // ==============================================================================================
        // 1. Bài tập chọn đúng cấu trúc ngữ pháp (10 câu)
        // ==============================================================================================

        // ～ということだ/～とのことだ
        { id: 701, type: EXERCISE_TYPE.type1, question: "Theo như thông báo của thành phố, thì nghe nói con đường này sẽ bắt đầu được thi công từ tuần sau.", grammar: "～ということだ", data: { options: ["この道路は来週から工事が始まるということです。", "この道路は来週から工事が始まるはずがない。", "この道路は来週から工事が始まるものか。"], answer: 0 } },
        { id: 702, type: EXERCISE_TYPE.type1, question: "Tôi nghe nói là anh Yamada đã chuyển công tác đến Osaka.", grammar: "～とのことだ", data: { options: ["山田さんが大阪に転勤したとのことだ。", "山田さんが大阪に転勤したつもりだ。", "山田さんが大阪に転勤したわけではない。"], answer: 0 } },

        // ～と言われている
        { id: 703, type: EXERCISE_TYPE.type1, question: "Người ta nói rằng nếu uống nước ở con suối đó thì sẽ trẻ lại.", grammar: "～と言われている", data: { options: ["この泉の水を飲めば若がえると言われている。", "この泉の水を飲めば若がえるに決まっている。", "この泉の水を飲むべきだと言われている。"], answer: 0 } },
        { id: 704, type: EXERCISE_TYPE.type1, question: "Tòa nhà này được cho là đã được xây dựng từ 100 năm trước.", grammar: "～と言われている", data: { options: ["この建物は100年前に建てられたと言われている。", "この建物は100年前に建てられたわけだ。", "この建物は100年前に建てられたとしたら。"], answer: 0 } },

        // ～とか
        { id: 705, type: EXERCISE_TYPE.type1, question: "Nghe đâu cô con gái nhà hàng xóm tháng tới sẽ tổ chức đám cưới thì phải.", grammar: "～とか", data: { options: ["隣の娘さんは来月結婚式を挙げるとか。", "隣の娘さんは来月結婚式を挙げるべきだ。", "隣の娘さんは来月結婚式を挙げるものか。"], answer: 0 } },
        { id: 706, type: EXERCISE_TYPE.type1, question: "Anh có nghe nói là tuần sau có một buổi hòa nhạc nào đó không?", grammar: "～とか", data: { options: ["来週、どこかでコンサートがあるとか聞きましたか。", "来週、どこかでコンサートがあるわけではない。", "来週、どこかでコンサートがあるはずがない。"], answer: 0 } },

        // って～
        { id: 707, type: EXERCISE_TYPE.type1, question: "Anh ta nói rằng sẽ đến ngay.", grammar: "って～", data: { options: ["彼はすぐ来るって言っています。", "彼はすぐ来ることにしているって言っています。", "彼はすぐ来るというわけではないって言っています。"], answer: 0 } },
        { id: 708, type: EXERCISE_TYPE.type1, question: "Bạn đã nói là đã gặp cô ấy hôm qua đúng không?", grammar: "って～", data: { options: ["昨日彼女に会ったって言ってたよね。", "昨日彼女に会うつもりだって言ってたよね。", "昨日彼女に会うべきだって言ってたよね。"], answer: 0 } },

        // ～という
        { id: 709, type: EXERCISE_TYPE.type1, question: "Nghe nói vùng này ngày xưa là một thảo nguyên rộng lớn.", grammar: "～という", data: { options: ["この辺りは昔、広い野原だったという。", "この辺りは昔、広い野原だったわけだ。", "この辺りは昔、広い野原だったつもりだ。"], answer: 0 } },
        { id: 710, type: EXERCISE_TYPE.type1, question: "Người ta nói rằng việc thay đổi môi trường là rất quan trọng.", grammar: "～という", data: { options: ["環境を変えることはとても大切だという。", "環境を変えることはとても大切だとしたら。", "環境を変えることはとても大切だべきだ。"], answer: 0 } },

        // ==============================================================================================
        // 2. Bài Tập Sắp Xếp Câu (5 câu)
        // ==============================================================================================

        // ～ということだ/～とのことだ
        { id: 711, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi nghe nói cửa hàng đó sẽ đóng cửa vào tháng sau", grammar: "～とのことだ", data: { parts: ["その店は", "とのことだ。", "来月", "閉店", "する"], correct: ["その店は", "来月", "閉店", "する", "とのことだ。"] } },

        // ～と言われている
        { id: 712, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Ăn sáng được cho là tốt cho sức khỏe", grammar: "～と言われている", data: { parts: ["朝ご飯は", "良いと", "体に", "言われている。"], correct: ["朝ご飯は", "体に", "良いと", "言われている。"] } },

        // ～とか
        { id: 713, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nghe đâu anh ấy đã nghỉ việc ở công ty", grammar: "～とか", data: { parts: ["彼が", "とか。", "会社を", "辞めた"], correct: ["彼が", "会社を", "辞めた", "とか。"] } },

        // って～
        { id: 714, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Anh ấy nói là 'Tôi sẽ không đến.' ", grammar: "って～", data: { parts: ["「行かない」", "って", "彼は", "言った。"], correct: ["彼は", "「行かない」", "って", "言った。"] } },

        // ～という
        { id: 715, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Nghe nói người ta đã tìm thấy một di tích cổ ở đây", grammar: "～という", data: { parts: ["この場所に", "という。", "見つかった", "古い", "遺跡が"], correct: ["この場所に", "古い", "遺跡が", "見つかった", "という。"] } },

        // ==============================================================================================
        // 3. Bài tập biến đổi câu (5 câu)
        // ==============================================================================================

        // ～ということだ/～とのことだ
        { id: 716, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ということだ': 'Tôi nghe nói là ngày mai trời sẽ mưa.'", grammar: "～ということだ", data: { correct_answer: "明日は雨が降るということだ。", hint: "Dùng Vる + ということだ" } },

        // ～と言われている
        { id: 717, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～と言われている': 'Thành phố này nổi tiếng là an toàn.'", grammar: "～と言われている", data: { correct_answer: "この街は安全だと言われている。", hint: "Dùng Anaだ + と言われている" } },

        // ～とか
        { id: 718, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～とか': 'Nghe đâu anh Tanaka bị cảm rồi.'", grammar: "～とか", data: { correct_answer: "田中さんは風邪をひいたとか。", hint: "Dùng Vた + とか" } },

        // って～
        { id: 719, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'って～': 'Cô ấy nói là không cần.'", grammar: "って～", data: { correct_answer: "彼女は「いらない」って言ってた。", hint: "Dùng Vない + って" } },

        // ～という
        { id: 720, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～という': 'Nghe nói cuốn sách này được bán rất chạy.'", grammar: "～という", data: { correct_answer: "この本はとても売れているという。", hint: "Dùng Vている + という" } },

        // ==============================================================================================
        // 4. Bài tập điền trợ từ (5 câu)
        // ==============================================================================================

        // ～ということだ/～とのことだ
        { id: 721, type: EXERCISE_TYPE.type4, question: "ニュースによると、戦争が終わった（＿＿）だ。", grammar: "～ということだ", data: { sentence: "ニュースによると、戦争が終わった（＿＿）だ。", options: ["ということ", "というより", "というわけ", "というはず"], answer: 0 } },

        // ～と言われている
        { id: 722, type: EXERCISE_TYPE.type4, question: "この山には神様がいる（＿＿）言われている。", grammar: "～と言われている", data: { sentence: "この山には神様がいる（＿＿）言われている。", options: ["と", "に", "が", "も"], answer: 0 } },

        // ～とか
        { id: 723, type: EXERCISE_TYPE.type4, question: "部長は病気で入院した（＿＿）。", grammar: "～とか", data: { sentence: "部長は病気で入院した（＿＿）。", options: ["とか", "って", "という", "わけだ"], answer: 0 } },

        // って～
        { id: 724, type: EXERCISE_TYPE.type4, question: "田中さん、会議は明日（＿＿）言ってたよ。", grammar: "って～", data: { sentence: "田中さん、会議は明日（＿＿）言ってたよ。", options: ["だって", "にとって", "とすれば", "のなら"], answer: 0 } },

        // ～という
        { id: 725, type: EXERCISE_TYPE.type4, question: "昔、この国は島だった（＿＿）。", grammar: "～という", data: { sentence: "昔、この国は島だった（＿＿）。", options: ["という", "べきだ", "つもりだ", "わけだ"], answer: 0 } },
    ],
    [GRAMMAR_GROUP.group9]: [
        // ==============================================================================================
        // 1. Bài tập chọn đúng cấu trúc ngữ pháp (6 câu)
        // ==============================================================================================

        // ないわけにはいかない
        { id: 801, type: EXERCISE_TYPE.type1, question: "Vì có khách nên tôi không thể không mời họ vào nhà.", grammar: "ないわけにはいかない", data: { options: ["客が来たので、家に招かないわけにはいかない。", "客が来たので、家に招くことにしている。", "客が来たので、家に招くべきではない。"], answer: 0 } },
        { id: 802, type: EXERCISE_TYPE.type1, question: "Tôi không thể không tham gia bữa tiệc của sếp.", grammar: "ないわけにはいかない", data: { options: ["上司のパーティーには参加しないわけにはいかない。", "上司のパーティーには参加してもいいはずだ。", "上司のパーティーには参加することはない。"], answer: 0 } },

        // ～ないことはない
        { id: 803, type: EXERCISE_TYPE.type1, question: "Từ đây để nhà ga không phải là không thể đi bộ, nhưng khá tốn thời gian.", grammar: "～ないことはない", data: { options: ["これから駅まで歩けないことはないが、かなり時間がかかりますよ。", "これから駅まで歩くしかないが、かなり時間がかかりますよ。", "これから駅まで歩くわけにはいかないが、かなり時間がかかりますよ。"], answer: 0 } },
        { id: 804, type: EXERCISE_TYPE.type1, question: "Không phải là tôi không thể làm được việc đó, nhưng tôi không muốn.", grammar: "～ないことはない", data: { options: ["その仕事ができないことはないが、やりたくない。", "その仕事はするべきではないが、やりたくない。", "その仕事はするはずがないが、やりたくない。"], answer: 0 } },

        // ～ことは～が～
        { id: 805, type: EXERCISE_TYPE.type1, question: "Tuy đọc thì có đọc thật đấy nhưng mà hoàn toàn không hiểu gì.", grammar: "～ことは～が～", data: { options: ["読んだことは読んだが、全然分からない。", "読んだはずがないが、全然分からない。", "読んだわけではないが、全然分からない。"], answer: 0 } },
        { id: 806, type: EXERCISE_TYPE.type1, question: "Tuy rẻ thì có rẻ thật đấy, nhưng chất lượng không được tốt.", grammar: "～ことは～が～", data: { options: ["安いことは安いが、品質は良くない。", "安いわけではないが、品質は良くない。", "安いに違いないが、品質は良くない。"], answer: 0 } },

        // ==============================================================================================
        // 2. Bài Tập Sắp Xếp Câu (3 câu)
        // ==============================================================================================

        // ないわけにはいかない
        { id: 807, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Vì đã nhận tiền rồi nên không thể không làm", grammar: "ないわけにはいかない", data: { parts: ["いかない。", "やらない", "お金を", "もらったので、", "わけには"], correct: ["お金を", "もらったので、", "やらない", "わけには", "いかない。"] } },

        // ～ないことはない
        { id: 808, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Không phải là không có khả năng chiến thắng, nhưng rất khó", grammar: "～ないことはない", data: { parts: ["難しい。", "ないことは", "勝て", "ないが、"], correct: ["勝て", "ないことは", "ないが、", "難しい。"] } },

        // ～ことは～が～
        { id: 809, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tuy đẹp thì có đẹp thật đấy, nhưng tôi không thể mua", grammar: "～ことは～が～", data: { parts: ["きれいな", "ことは", "買えない。", "きれいだが、"], correct: ["きれいな", "ことは", "きれいだが、", "買えない。"] } },

        // ==============================================================================================
        // 3. Bài tập biến đổi câu (3 câu)
        // ==============================================================================================

        // ないわけにはいかない
        { id: 810, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'ないわけにはいかない': 'Dù tôi không muốn, tôi vẫn phải đi đến bệnh viện.'", grammar: "ないわけにはいかない", data: { correct_answer: "行きたくないが、病院へ行かないわけにはいかない。", hint: "Dùng Vない + わけにはいかない" } },

        // ～ないことはない
        { id: 811, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ないことはない': 'Không phải là không hiểu, nhưng cần thêm giải thích.'", grammar: "～ないことはない", data: { correct_answer: "理解できないことはないが、もっと説明が必要だ。", hint: "Dùng Vる/Vない + ことはない" } },

        // ～ことは～が～
        { id: 812, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ことは～が～': 'Tuy nhanh thì có nhanh thật đấy, nhưng nó không an toàn.'", grammar: "～ことは～が～", data: { correct_answer: "速いことは速いが、安全ではない。", hint: "Dùng AいことはAいが" } },

        // ==============================================================================================
        // 4. Bài tập điền trợ từ (3 câu)
        // ==============================================================================================

        // ないわけにはいかない
        { id: 813, type: EXERCISE_TYPE.type4, question: "参加し（＿＿）わけにはいかない。", grammar: "ないわけにはいかない", data: { sentence: "参加し（＿＿）わけにはいかない。", options: ["ない", "た", "る", "ても"], answer: 0 } },

        // ～ないことはない
        { id: 814, type: EXERCISE_TYPE.type4, question: "食べ（＿＿）ことはないが、美味しくない。", grammar: "～ないことはない", data: { sentence: "食べ（＿＿）ことはないが、美味しくない。", options: ["られない", "た", "る", "るべき"], answer: 0 } },

        // ～ことは～が～
        { id: 815, type: EXERCISE_TYPE.type4, question: "便利（＿＿）は便利だが、高すぎる。", grammar: "～ことは～が～", data: { sentence: "便利（＿＿）は便利だが、高すぎる。", options: ["なこと", "である", "に", "を"], answer: 0 } },
    ],
    [GRAMMAR_GROUP.group10]: [
        // ==============================================================================================
        // 1. Bài tập chọn đúng cấu trúc ngữ pháp (26 câu)
        // ==============================================================================================

        // こそ
        { id: 901, type: EXERCISE_TYPE.type1, question: "Chính bởi vì là cha mẹ nên mới mắng nghiêm khắc đứa con của mình.", grammar: "こそ", data: { options: ["親だからこそ自分の子を厳しくしかるのだ。", "親だとすれば自分の子を厳しくしかるのだ。", "親であるばかりに自分の子を厳しくしかるのだ。"], answer: 0 } },
        { id: 902, type: EXERCISE_TYPE.type1, question: "Tôi muốn làm việc cùng anh (chính anh).", grammar: "こそ", data: { options: ["あなたこそ、一緒に仕事をしたい人です。", "あなたのように、一緒に仕事をしたい人です。", "あなただって、一緒に仕事をしたい人です。"], answer: 0 } },

        // など/なんか/なんて
        { id: 903, type: EXERCISE_TYPE.type1, question: "Chẳng hạn như bộ trang phục này thì thế nào. Hợp đó.", grammar: "など", data: { options: ["この服などはいかがですか。", "この服こそはいかがですか。", "この服ばかりかはいかがですか。"], answer: 0 } },
        { id: 904, type: EXERCISE_TYPE.type1, question: "Tôi không muốn làm những thứ như giảm cân (coi nhẹ).", grammar: "なんか", data: { options: ["ダイエットなんかしたくない。", "ダイエットにしてしたくない。", "ダイエットによるとしたくない。"], answer: 0 } },
        { id: 905, type: EXERCISE_TYPE.type1, question: "Thật kinh khủng khi làm những việc như vậy (cảm thán, coi thường).", grammar: "なんて", data: { options: ["そんなことをするなんて、ひどい。", "そんなことをするというより、ひどい。", "そんなことをするにかけて、ひどい。"], answer: 0 } },

        // ～について
        { id: 906, type: EXERCISE_TYPE.type1, question: "Xin lỗi, tôi muốn hỏi về thủ tục nhập học.", grammar: "～について", data: { options: ["入学手続きについて聞きたいのですが。", "入学手続きに比べて聞きたいのですが。", "入学手続きをはじめ聞きたいのですが。"], answer: 0 } },
        { id: 907, type: EXERCISE_TYPE.type1, question: "Bài báo này viết về vấn đề môi trường.", grammar: "～について", data: { options: ["この記事は環境問題について書かれている。", "この記事は環境問題とともに書かれている。", "この記事は環境問題をはじめ書かれている。"], answer: 0 } },

        // ～ように (Mục đích)
        { id: 908, type: EXERCISE_TYPE.type1, question: "Để có thể ngủ được thì tôi đã uống một chút rượu vang.", grammar: "～ように", data: { options: ["よく眠れるようにワインを少し飲んだ。", "よく眠れるほどワインを少し飲んだ。", "よく眠れるばかりかワインを少し飲んだ。"], answer: 0 } },
        { id: 909, type: EXERCISE_TYPE.type1, question: "Hãy dọn dẹp để không còn bụi bẩn.", grammar: "～ように", data: { options: ["ほこりが残らないように掃除してください。", "ほこりが残らないことか掃除してください。", "ほこりが残らないわけだ掃除してください。"], answer: 0 } },

        // ～がる
        { id: 910, type: EXERCISE_TYPE.type1, question: "Hắn ta lúc nào cũng muốn biết số tiền lương của tôi (chủ ngữ ngôi 3).", grammar: "～がる", data: { options: ["彼はいつも私の給料の額を知りたがっている。", "彼はいつも私の給料の額を知りたい。", "彼はいつも私の給料の額を知るべきだ。"], answer: 0 } },
        { id: 911, type: EXERCISE_TYPE.type1, question: "Đứa bé rất sợ chó.", grammar: "～がる", data: { options: ["赤ちゃんは犬を怖がっている。", "赤ちゃんは犬を怖いに違いない。", "赤ちゃんは犬を怖いものか。"], answer: 0 } },

        // ～てたまらない/～てならない/～てしょうがない
        { id: 912, type: EXERCISE_TYPE.type1, question: "Nếu không dùng điều hòa thì rất nóng (nóng không chịu được).", grammar: "～てたまらない", data: { options: ["暑くてたまらない。", "暑いことか。", "暑いらしい。"], answer: 0 } },
        { id: 913, type: EXERCISE_TYPE.type1, question: "Tôi rất lo lắng về người về đang sống ở xa (cảm giác tự nhiên).", grammar: "～てならない", data: { options: ["母のことを心配してならない。", "母のことを心配するとおりだ。", "母のことを心配するべきだ。"], answer: 0 } },
        { id: 914, type: EXERCISE_TYPE.type1, question: "Cô đơn không chịu nổi.", grammar: "～てしょうがない", data: { options: ["さびしくてしょうがない。", "さびしいふりをする。", "さびしくてもいい。"], answer: 0 } },

        // ～ことか/ことに/ことだ
        { id: 915, type: EXERCISE_TYPE.type1, question: "Nếu mà đỗ thì thật là vui biết mấy (cảm thán).", grammar: "～ことか", data: { options: ["合格できたら、どんなにうれしいことか。", "合格できたら、どんなにうれしいわけだ。", "合格できたら、どんなにうれしいはずがない。"], answer: 0 } },

        // ～を通じて/～を通して
        { id: 916, type: EXERCISE_TYPE.type1, question: "Thông qua việc chơi thể thao, trẻ em có thể học được rất nhiều điều.", grammar: "～を通して", data: { options: ["子供たちはスポーツを通して、いろいろなことを学ぶことができる。", "子供たちはスポーツに反面、いろいろなことを学ぶことができる。", "子供たちはスポーツのせいで、いろいろなことを学ぶことができる。"], answer: 0 } },
        { id: 917, type: EXERCISE_TYPE.type1, question: "Sự kiện này được tổ chức suốt một năm.", grammar: "～を通じて", data: { options: ["このイベントは一年間を通じて行われる。", "このイベントは一年間に比べて行われる。", "このイベントは一年間ばかりか行われる。"], answer: 0 } },

        // ～をこめて
        { id: 918, type: EXERCISE_TYPE.type1, question: "Tôi đã viết bài hát này với tất cả ước nguyện về hòa bình gửi gắm trong đó.", grammar: "～をこめて", data: { options: ["平和へのお願いをこめて、この歌を作りました。", "平和へのお願いをとして、この歌を作りました。", "平和へのお願いをたびに、この歌を作りました。"], answer: 0 } },

        // N1はもちろん、N2も
        { id: 919, type: EXERCISE_TYPE.type1, question: "Anh ấy, nói được tiếng anh là điều đương nhiên, nhưng anh ấy còn nói được tiếng Pháp.", grammar: "N1はもちろん、N2も", data: { options: ["彼は英語はもちろん、フランス語も話せる。", "彼は英語ばかりか、フランス語も話せる。", "彼は英語に限らず、フランス語も話せる。"], answer: 0 } },
        { id: 920, type: EXERCISE_TYPE.type1, question: "Không chỉ người lớn, mà trẻ em cũng thích bộ phim này.", grammar: "N1はもちろん、N2も", data: { options: ["大人だけでなく、子供もこの映画が好きだ。", "大人こそ、子供もこの映画が好きだ。", "大人にすぎない、子供もこの映画が好きだ。"], answer: 0 } },

        // Nをはじめ(として)
        { id: 921, type: EXERCISE_TYPE.type1, question: "Năm nay chúng ta hãy cùng leo các núi nổi tiếng ở các nơi, mà trước tiên là núi Phú Sĩ.", grammar: "Nをはじめ(として)", data: { options: ["富士山をはじめ、各地の有名な山に登りましょう。", "富士山と違って、各地の有名な山に登りましょう。", "富士山のように、各地の有名な山に登りましょう。"], answer: 0 } },

        // Vます+出す
        { id: 922, type: EXERCISE_TYPE.type1, question: "Anh ấy nhìn thấy khuân mặt của tôi thì đột nhiên bật cười.", grammar: "Vます+出す", data: { options: ["彼は私の顔を見ると、突然笑い出した。", "彼は私の顔を見ると、笑うべきだ。", "彼は私の顔を見ると、笑うしかない。"], answer: 0 } },

        // Vます+がち
        { id: 923, type: EXERCISE_TYPE.type1, question: "Dạo này tôi rất hay quên.", grammar: "Vます+がち", data: { options: ["最近、忘れがちだ。", "最近、忘れにくい。", "最近、忘れにすぎない。"], answer: 0 } },
        { id: 924, type: EXERCISE_TYPE.type1, question: "Cô ấy có khuynh hướng bị ốm vào mùa đông.", grammar: "Vます+がち", data: { options: ["彼女は冬になると病気がちだ。", "彼女は冬になると病気というより。", "彼女は冬になると病気であるべきだ。"], answer: 0 } },

        // Thêm 2 câu trắc nghiệm để đủ 26 câu
        { id: 925, type: EXERCISE_TYPE.type1, question: "Việc đó thật là đáng tiếc biết bao! (cảm thán)", grammar: "～ことだ", data: { options: ["そのことがどんなに残念なことだ！", "そのことがどんなに残念なはずがない！", "そのことがどんなに残念なわけだ！"], answer: 0 } },
        { id: 926, type: EXERCISE_TYPE.type1, question: "Tôi muốn có được thông tin về việc làm thêm (về vấn đề).", grammar: "～について", data: { options: ["アルバイトについて情報が欲しい。", "アルバイトにかけて情報が欲しい。", "アルバイトこそ情報が欲しい。"], answer: 0 } },

        // ==============================================================================================
        // 2. Bài Tập Sắp Xếp Câu (13 câu)
        // ==============================================================================================

        // こそ
        { id: 927, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Chính tại thời điểm này, chúng ta cần sự hợp tác", grammar: "こそ", data: { parts: ["こそ、", "協力が", "今", "必要だ。"], correct: ["今", "こそ、", "協力が", "必要だ。"] } },

        // ～について
        { id: 928, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Họ đang thảo luận về dự án mới", grammar: "～について", data: { parts: ["新しい", "話し合っている。", "彼らは", "プロジェクト", "について"], correct: ["彼らは", "新しい", "プロジェクト", "について", "話し合っている。"] } },

        // ～ように (Mục đích)
        { id: 929, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi đặt báo thức để không ngủ quên", grammar: "～ように", data: { parts: ["アラームを", "寝坊", "ように、", "しない", "かけた。"], correct: ["寝坊", "しない", "ように、", "アラームを", "かけた。"] } },

        // ～がる
        { id: 930, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Anh ấy muốn uống nước trái cây lạnh", grammar: "～がる", data: { parts: ["飲み", "彼は", "冷たい", "たがっている。", "ジュースを"], correct: ["彼は", "冷たい", "ジュースを", "飲み", "たがっている。"] } },

        // ～てたまらない
        { id: 931, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi nhớ quê hương đến nỗi không chịu được", grammar: "～てたまらない", data: { parts: ["恋しくて", "故郷が", "たまらない。"], correct: ["故郷が", "恋しくて", "たまらない。"] } },

        // ～ことか
        { id: 932, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi đã cảm ơn anh ấy biết bao! ", grammar: "～ことか", data: { parts: ["彼に", "どんなに", "感謝した", "ことか。"], correct: ["どんなに", "彼に", "感謝した", "ことか。"] } },

        // ～を通じて
        { id: 933, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Chúng tôi quen nhau qua một người bạn", grammar: "～を通じて", data: { parts: ["友達を", "知り合った。", "通じて、"], correct: ["友達を", "通じて、", "知り合った。"] } },

        // ～をこめて
        { id: 934, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi đã viết bức thư này với tất cả lòng biết ơn", grammar: "～をこめて", data: { parts: ["この手紙を", "こめて、", "感謝の", "書いた。", "気持ちを"], correct: ["感謝の", "気持ちを", "こめて、", "この手紙を", "書いた。"] } },

        // N1はもちろん、N2も
        { id: 935, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tối hôm qua không chỉ có rượu mà còn có cả bia", grammar: "N1はもちろん、N2も", data: { parts: ["お酒は", "ビールも", "はもちろん、", "夜は", "あった。", "昨日"], correct: ["昨日", "の", "夜は、", "お酒は", "もちろん、", "ビールも", "あった。"] } },

        // Nをはじめ(として)
        { id: 936, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Tôi thích các loại quả, đặc biệt là dâu tây", grammar: "Nをはじめ(として)", data: { parts: ["果物が", "私は", "イチゴを", "好きだ。", "はじめ、"], correct: ["私は", "イチゴを", "はじめ、", "果物が", "好きだ。"] } },

        // Vます+出す
        { id: 937, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Em bé bắt đầu khóc òa lên", grammar: "Vます+出す", data: { parts: ["赤ちゃんが", "出した。", "泣き"], correct: ["赤ちゃんが", "泣き", "出した。"] } },

        // Vます+がち
        { id: 938, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Gần đây tôi hay đến muộn", grammar: "Vます+がち", data: { parts: ["遅刻し", "がちだ。", "最近、"], correct: ["最近、", "遅刻し", "がちだ。"] } },

        // Thêm 1 câu sắp xếp để đủ 13 câu
        // N+など
        { id: 939, type: EXERCISE_TYPE.type2, question: "Sắp xếp câu: Chúng ta nên thử những thứ như pizza hoặc sushi", grammar: "N+など", data: { parts: ["ピザや", "試して", "寿司", "べきだ。", "みる", "など"], correct: ["ピザや", "寿司", "など", "試して", "みる", "べきだ。"] } },


        // ==============================================================================================
        // 3. Bài tập biến đổi câu (13 câu)
        // ==============================================================================================

        // こそ
        { id: 940, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'こそ': 'Chính lúc khó khăn này, tôi cần sự giúp đỡ của bạn.'", grammar: "こそ", data: { correct_answer: "大変な時こそ、あなたの助けが必要だ。", hint: "Dùng N + こそ" } },

        // など/なんか/なんて
        { id: 941, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'なんて': 'Những thứ như lời xin lỗi thì không cần.'", grammar: "なんて", data: { correct_answer: "謝罪なんていらない。", hint: "Dùng N + なんて" } },

        // ～について
        { id: 942, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～について': 'Tôi đang tìm kiếm thông tin về Nhật Bản.'", grammar: "～について", data: { correct_answer: "日本について情報を探している。", hint: "Dùng N + について" } },

        // ～ように (Mục đích)
        { id: 943, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ように': 'Tôi học chăm chỉ để có thể đỗ kỳ thi.'", grammar: "～ように", data: { correct_answer: "試験に合格できるように一生懸命勉強する。", hint: "Dùng Vる + ように" } },

        // ～がる
        { id: 944, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～がる': 'Con mèo nhà tôi rất thích cá.'", grammar: "～がる", data: { correct_answer: "うちの猫は魚を食べたがっている。", hint: "Dùng Vたがる" } },

        // ～てたまらない/～てならない/～てしょうがない
        { id: 945, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～てならない': 'Tôi cảm thấy rất nhớ bạn.'", grammar: "～てならない", data: { correct_answer: "あなたに会いたくてならない。", hint: "Dùng Vたくてならない" } },

        // ～ことか/ことに/ことだ
        { id: 946, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～ことだ' (Cảm thán): 'Thật là một cảnh đẹp biết bao!'", grammar: "～ことだ", data: { correct_answer: "なんて素晴らしい景色なことだ！", hint: "Dùng N/Anaな + ことだ" } },

        // ～を通じて/～を通して
        { id: 947, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～を通して': 'Tôi đã học được văn hóa Nhật Bản thông qua anime.'", grammar: "～を通して", data: { correct_answer: "アニメを通して、日本の文化を学んだ。", hint: "Dùng N + を通して" } },

        // ～をこめて
        { id: 948, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng '～をこめて': 'Tôi tặng bó hoa này với tất cả tình yêu.'", grammar: "～をこめて", data: { correct_answer: "愛を込めて、この花束を贈ります。", hint: "Dùng N + をこめて" } },

        // N1はもちろん、N2も
        { id: 949, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'N1はもちろん、N2も': 'Anh ấy không chỉ có kinh nghiệm mà còn có kỹ năng nữa.'", grammar: "N1はもちろん、N2も", data: { correct_answer: "彼は経験はもちろん、スキルもある。", hint: "Dùng Nはもちろん、Nも" } },

        // Nをはじめ(として)
        { id: 950, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Nをはじめ': 'Các nước châu Á, mà tiêu biểu là Hàn Quốc, đã tổ chức sự kiện này.'", grammar: "Nをはじめ(として)", data: { correct_answer: "韓国をはじめ、アジアの国々がイベントを開催した。", hint: "Dùng Nをはじめ" } },

        // Vます+出す
        { id: 951, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vます+出す': 'Tôi đột nhiên hét lên.'", grammar: "Vます+出す", data: { correct_answer: "急に叫び出した。", hint: "Dùng Vます+出す" } },

        // Vます+がち
        { id: 952, type: EXERCISE_TYPE.type3, question: "Biến đổi câu sau dùng 'Vます+がち': 'Người cao tuổi hay bị quên.'", grammar: "Vます+がち", data: { correct_answer: "お年寄りは忘れがちだ。", hint: "Dùng Vます+がち" } },

        // ==============================================================================================
        // 4. Bài tập điền trợ từ (13 câu)
        // ==============================================================================================

        // こそ
        { id: 953, type: EXERCISE_TYPE.type4, question: "今（＿＿）チャンスだ。", grammar: "こそ", data: { sentence: "今（＿＿）チャンスだ。", options: ["こそ", "でも", "なら", "しか"], answer: 0 } },

        // など/なんか/なんて
        { id: 954, type: EXERCISE_TYPE.type4, question: "旅行（＿＿）行きたい。", grammar: "など", data: { sentence: "旅行（＿＿）行きたい。", options: ["など", "こそ", "まで", "ほど"], answer: 0 } },
        { id: 955, type: EXERCISE_TYPE.type4, question: "あいつ（＿＿）話したくない。", grammar: "なんか", data: { sentence: "あいつ（＿＿）話したくない。", options: ["なんか", "だって", "さえ", "こそ"], answer: 0 } },

        // ～について
        { id: 956, type: EXERCISE_TYPE.type4, question: "将来の夢（＿＿）話した。", grammar: "～について", data: { sentence: "将来の夢（＿＿）話した。", options: ["について", "をこめて", "をはじめ", "のもと"], answer: 0 } },

        // ～ように (Mục đích)
        { id: 957, type: EXERCISE_TYPE.type4, question: "聞こえる（＿＿）大きな声で話した。", grammar: "～ように", data: { sentence: "聞こえる（＿＿）大きな声で話した。", options: ["ように", "ことに", "ばかりに", "はずが"], answer: 0 } },

        // ～がる
        { id: 958, type: EXERCISE_TYPE.type4, question: "子供はキャンディを食べ（＿＿）いる。", grammar: "～がる", data: { sentence: "子供はキャンディを食べ（＿＿）いる。", options: ["たがって", "たいと", "るつもり", "るはず"], answer: 0 } },

        // ～てたまらない/～てならない/～てしょうがない
        { id: 959, type: EXERCISE_TYPE.type4, question: "結果が気に（＿＿）ならない。", grammar: "～てならない", data: { sentence: "結果が気に（＿＿）ならない。", options: ["なって", "して", "すぎて", "てばかり"], answer: 0 } },

        // ～ことか/ことに/ことだ
        { id: 960, type: EXERCISE_TYPE.type4, question: "富士山の美しさ（＿＿）！", grammar: "～ことか", data: { sentence: "富士山の美しさ（＿＿）！", options: ["よことか", "のことか", "ことか", "だことか"], answer: 0 } },

        // ～を通じて/～を通して
        { id: 961, type: EXERCISE_TYPE.type4, question: "彼は音楽（＿＿）人々と交流した。", grammar: "～を通して", data: { sentence: "彼は音楽（＿＿）人々と交流した。", options: ["を通して", "をこめて", "をはじめ", "にも"], answer: 0 } },

        // ～をこめて
        { id: 962, type: EXERCISE_TYPE.type4, question: "感謝（＿＿）の気持ち（＿＿）書いた手紙だ。", grammar: "～をこめて", data: { sentence: "感謝（＿＿）気持ちを込めて書いた手紙だ。", options: ["の", "に", "が", "は"], answer: 0 } },

        // N1はもちろん、N2も
        { id: 963, type: EXERCISE_TYPE.type4, question: "日本語（＿＿）、韓国語（＿＿）話せる。", grammar: "N1はもちろん、N2も", data: { sentence: "日本語（は）もちろん、韓国語（＿＿）話せる。", options: ["も", "だって", "さえ", "まで"], answer: 0 } },

        // Nをはじめ(として)
        { id: 964, type: EXERCISE_TYPE.type4, question: "東京（＿＿）、日本の大都市は人が多い。", grammar: "Nをはじめ(として)", data: { sentence: "東京（＿＿）、日本の大都市は人が多い。", options: ["をはじめ", "に比べて", "など", "にとって"], answer: 0 } },

        // Vます+がち
        { id: 965, type: EXERCISE_TYPE.type4, question: "彼は約束を忘れ（＿＿）だ。", grammar: "Vます+がち", data: { sentence: "彼は約束を忘れ（＿＿）だ。", options: ["がち", "出す", "きり", "にすぎない"], answer: 0 } },
    ]
};
