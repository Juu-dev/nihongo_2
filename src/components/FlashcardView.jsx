import React, { useState, useEffect, useCallback, useMemo } from 'react';

// --- Hằng số ANKI (Đơn giản hóa Learning/Relearning) ---
const INITIAL_EASE = 2.5; // Ease Factor ban đầu (250%)
const MIN_EASE = 1.3; // Ease Factor tối thiểu (130%)
const STORAGE_KEY = 'n3_grammar_srs_data';

// Steps tính bằng NGÀY (phân số của ngày)
const LEARNING_STEPS = [0.0035, 0.0069]; // 5 mins, 10 mins
const RELEARNING_STEPS = [0.0069, 1]; // 10 mins, 1 day

// Rating changes for Ease Factor (EF)
const EASE_CHANGES = {
    'Again': -0.20,
    'Hard': -0.15,
    'Good': 0.00,
    'Easy': +0.15,
};

/**
 * Lấy dữ liệu SRS từ localStorage
 */
const getSrsDataFromLocalStorage = () => {
    // ... (Giữ nguyên)
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            const parsed = JSON.parse(data);
            for (const id in parsed) {
                // Chuyển due_date từ chuỗi ISO về đối tượng Date
                parsed[id].due_date = new Date(parsed[id].due_date);
            }
            return parsed;
        }
    } catch (e) {
        console.error("Error reading SRS data from localStorage", e);
    }
    return {};
};

/**
 * Lưu dữ liệu SRS vào localStorage
 */
const saveSrsDataToLocalStorage = (data) => {
    // ... (Giữ nguyên)
    try {
        const serializableData = {};
        for (const id in data) {
            serializableData[id] = {
                ...data[id],
                // Chuyển due_date về chuỗi ISO 8606 trước khi lưu
                due_date: data[id].due_date.toISOString(),
            };
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(serializableData));
    } catch (e) {
        console.error("Error saving SRS data to localStorage", e);
    }
};


/**
 * Tính toán SRS logic dựa trên thuật toán SM-2 mô phỏng Anki.
 */
const calculateSRS = (item, rating) => {
    // ... (Giữ nguyên)
    let { ease, interval, phase, stepIndex, lapses } = item;
    let newInterval = interval;
    let newPhase = phase;
    let newStepIndex = stepIndex;
    let newLapses = lapses;

    // --- 1. Tính Ease Factor Mới ---
    let newEase = ease;
    if (rating === 'Again') {
        newEase = Math.max(MIN_EASE, ease + EASE_CHANGES['Again']);
        if (phase === 'review') newLapses += 1;
    } else if (rating === 'Hard') {
        newEase = Math.max(MIN_EASE, ease + EASE_CHANGES['Hard']);
    } else if (rating === 'Good') {
        newEase = Math.max(MIN_EASE, ease + EASE_CHANGES['Good']);
    } else if (rating === 'Easy') {
        newEase = Math.min(3.0, ease + EASE_CHANGES['Easy']);
    }

    // --- 2. Tính Interval Mới và Phase ---
    const currentSteps = (phase === 'new' ? LEARNING_STEPS : RELEARNING_STEPS);
    let daysToAdd = 0;

    if (phase === 'new' || phase === 'relearning') {
        // --- Learning/Relearning Phase ---
        if (rating === 'Again') {
            newStepIndex = 0;
            newInterval = currentSteps[0];
            newPhase = 'relearning';
        } else if (rating === 'Hard') {
            newInterval = currentSteps[newStepIndex];
        } else if (rating === 'Good') {
            newStepIndex++;
            if (newStepIndex >= currentSteps.length) {
                newPhase = 'review';
                newInterval = 1;
            } else {
                newInterval = currentSteps[newStepIndex];
            }
        } else if (rating === 'Easy') {
            newPhase = 'review';
            newInterval = 4;
            newStepIndex = 0;
        }

    } else if (phase === 'review') {
        // --- Review Phase (SM-2 Modified) ---
        if (rating === 'Again') {
            newPhase = 'relearning';
            newStepIndex = 0;
            newInterval = RELEARNING_STEPS[0];
        } else if (rating === 'Hard') {
            newInterval = interval * 1.2;
        } else if (rating === 'Good') {
            newInterval = interval * newEase;
        } else if (rating === 'Easy') {
            newInterval = interval * newEase * 1.3;
        }

        if (newInterval < 1) newInterval = 1;

        // --- Fuzzing (± 5% đến 15%) ---
        const fuzz = 1 + (Math.random() * 0.10 + 0.05) * (Math.random() > 0.5 ? 1 : -1);
        newInterval *= fuzz;
    }

    // --- 3. Tính Due Date ---
    const newDueDate = new Date();

    if (newInterval < 1) {
        // Xử lý interval dưới 1 ngày (phút/giờ)
        const minutesToAdd = Math.round(newInterval * 24 * 60);
        newDueDate.setMinutes(newDueDate.getMinutes() + minutesToAdd);
    } else {
        // Xử lý interval từ 1 ngày trở lên
        daysToAdd = Math.round(newInterval);
        newDueDate.setDate(newDueDate.getDate() + daysToAdd);
    }

    // Tránh lỗi interval nhỏ hơn 0.0035 (5 phút)
    newInterval = Math.max(0.0035, newInterval);

    return {
        newEase: parseFloat(newEase.toFixed(2)),
        newInterval: parseFloat(newInterval.toFixed(4)),
        newDueDate: newDueDate,
        newPhase: newPhase,
        newStepIndex: newStepIndex,
        newLapses: newLapses,
    };
};


/**
 * Component hiển thị Flashcard (kiểu Anki)
 */
function FlashcardView({ groupName, grammarList, navigateBack }) {
    const [userSrsData, setUserSrsData] = useState({});
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // --- Data Fetching từ localStorage ---
    useEffect(() => {
        const data = getSrsDataFromLocalStorage();
        setUserSrsData(data);
        setIsLoading(false);
    }, []);

    // --- Logic Lọc thẻ và Xử lý Thẻ hiện tại ---
    const now = useMemo(() => new Date(), []);

    const cardData = useMemo(() => {
        return grammarList.map(item => {
            const srs = userSrsData[item.id] || {
                id: item.id,
                ease: INITIAL_EASE,
                interval: 0,
                due_date: new Date(0),
                phase: 'new',
                lapses: 0,
                stepIndex: 0,
            };
            srs.due_date = srs.due_date instanceof Date ? srs.due_date : new Date(srs.due_date);

            return { ...item, srs };
        });
    }, [grammarList, userSrsData]);

    // Lọc ra các thẻ cần ôn tập hôm nay
    const dueCards = useMemo(() => {
        return cardData.filter(card => card.srs.due_date.getTime() <= now.getTime());
    }, [cardData, now]);

    const totalDueCards = dueCards.length;
    const currentCard = dueCards[currentCardIndex];
    const totalCardsInGroup = grammarList.length;

    // Reset thẻ về mặt trước khi chuyển thẻ
    useEffect(() => {
        setIsFlipped(false);
        setCurrentCardIndex(0);
    }, [groupName, dueCards.length]);

    // --- Hàm điều hướng và SRS ---

    const handleReview = useCallback((rating) => {
        if (isSaving || !currentCard) return;

        setIsSaving(true);
        try {
            const newSrs = calculateSRS(currentCard.srs, rating);
            if (!newSrs) throw new Error("Lỗi tính toán SRS.");

            const itemToSave = {
                id: currentCard.id,
                ease: newSrs.newEase,
                interval: newSrs.newInterval,
                due_date: newSrs.newDueDate,
                phase: newSrs.newPhase,
                stepIndex: newSrs.newStepIndex,
                lapses: newSrs.newLapses,
            };

            // 1. Cập nhật state cục bộ
            setUserSrsData(prev => ({
                ...prev,
                [currentCard.id]: itemToSave
            }));

            // 2. Cập nhật localStorage
            const updatedData = {
                ...getSrsDataFromLocalStorage(),
                [currentCard.id]: itemToSave
            };
            saveSrsDataToLocalStorage(updatedData);

            // 3. Chuyển sang thẻ tiếp theo
            if (totalDueCards > 1) {
                const nextIndex = currentCardIndex >= dueCards.length - 1 ? 0 : currentCardIndex;
                setCurrentCardIndex(nextIndex);
            } else {
                setCurrentCardIndex(0);
            }

            setIsSaving(false);
            setIsFlipped(false); // Reset trạng thái lật thẻ sau khi đánh giá

        } catch (error) {
            console.error("Lỗi khi xử lý SRS data:", error);
            setIsSaving(false);
        }
    }, [currentCard, isSaving, totalDueCards, dueCards, currentCardIndex]);

    // --- Keyboard Shortcuts (Phím tắt) ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isSaving || totalDueCards === 0) return;

            // Lật thẻ: Space / Enter
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                if (!isFlipped) {
                    setIsFlipped(true);
                } else if (e.key === 'Enter') {
                    // Enter = Good (khi đã lật)
                    handleReview('Good');
                }
            }

            // Đánh giá: 1, 2, 3, 4 (chỉ khi đã lật)
            if (isFlipped) {
                switch (e.key) {
                    case '1':
                        e.preventDefault();
                        handleReview('Again');
                        break;
                    case '2':
                        e.preventDefault();
                        handleReview('Hard');
                        break;
                    case '3':
                        e.preventDefault();
                        handleReview('Good');
                        break;
                    case '4':
                        e.preventDefault();
                        handleReview('Easy');
                        break;
                    default:
                        break;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFlipped, isSaving, handleReview, totalDueCards]);

    // Hàm định dạng ngày/thời gian
    const formatDueDate = (date) => date.toLocaleString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    // Hàm tính thời gian ôn tiếp theo (cho các nút)
    const calculateNextTime = (rating) => {
        if (!currentCard) return '-';
        const tempSrs = calculateSRS(currentCard.srs, rating);
        if (!tempSrs) return '-';

        const intervalInDays = tempSrs.newInterval;

        if (intervalInDays < 1) {
            const minutes = Math.round(intervalInDays * 24 * 60);
            if (minutes < 60) return `${minutes} phút`;
            return `${Math.round(minutes / 60)} giờ`;
        } else if (intervalInDays === 1) {
            return '1 ngày';
        } else {
            return `${Math.round(intervalInDays)} ngày`;
        }
    };


    // --- Render Loading / No Cards / Main ---
    if (isLoading) {
        return (
            <div className="text-center p-12">
                <p className="text-gray-500 font-semibold text-lg">Đang tải dữ liệu SRS từ trình duyệt...</p>
                <div className="mt-4 animate-spin text-4xl text-blue-500">⚙️</div>
            </div>
        );
    }

    if (totalDueCards === 0) {
        return (
            <>
                <button onClick={navigateBack} className="back-button text-gray-500 mb-4 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Quay lại
                </button>
                <h2 className="text-2xl font-semibold mb-6 text-gray-700">Học Flashcard: {groupName}</h2>
                <div className="p-8 bg-green-100 border-l-4 border-green-500 rounded-lg">
                    <h3 className="text-xl font-bold text-green-700">🎉 Hoàn thành ôn tập hôm nay!</h3>
                    <p className="mt-2 text-gray-600">Bạn đã ôn tập xong {totalCardsInGroup} thẻ cần thiết của nhóm này. Dữ liệu sẽ được lưu trong trình duyệt.</p>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        onClick={navigateBack}
                        className="bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-emerald-600 transition duration-300"
                    >
                        Trở lại danh sách mẫu câu
                    </button>
                </div>
            </>
        );
    }

    const nextDueText = formatDueDate(currentCard.srs.due_date);
    const isLeech = currentCard?.srs?.lapses >= 3;

    return (
        <div className="w-full">
            <button onClick={navigateBack} className="back-button text-gray-500 mb-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Quay lại danh sách mẫu câu
            </button>
            <h2 className="text-2xl font-semibold mb-3 text-gray-700">Học Flashcard: {groupName}</h2>

            {/* Thanh tiến độ */}
            <div className="mb-4">
                <p className="text-center text-sm text-gray-500 mb-1">
                    Thẻ cần ôn: {totalDueCards} | Đã ôn: {totalCardsInGroup - dueCards.length}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${((totalCardsInGroup - totalDueCards) / totalCardsInGroup) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Cảnh báo Leech */}
            {isLeech && (
                <div className="p-3 mb-4 bg-red-100 border-l-4 border-red-500 text-red-800 rounded-lg">
                    ⚠️ Thẻ này được gắn cờ **Leech** ({currentCard.srs.lapses} lần quên). Hãy xem lại thật kỹ!
                </div>
            )}

            {/* Vùng chứa thẻ (Sử dụng absolute/relative cho animation) */}
            <div className="w-full h-[400px] relative">

                {/* CARD SURFACE - FRONT (Câu hỏi) */}
                {/* Thay đổi: Loại bỏ transition-all duration-500 và translate-y/opacity-0, chỉ dùng opacity/pointer-events cơ bản */}
                <div
                    className={`absolute w-full h-full bg-gray-50 border-2 border-gray-300 rounded-xl shadow-lg p-6 overflow-y-auto ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    onClick={() => !isSaving && setIsFlipped(true)}
                >
                    <div className={`space-y-4`}>
                        {/* BACK TITLE: Chỉ giữ lại transition cho TITLE. */}
                        <h3 className={`text-3xl font-extrabold text-blue-700 border-b pb-2 mb-4 transition-all duration-500`}>
                            {currentCard.title}
                        </h3>

                        <p className="absolute bottom-4 left-4 text-xs text-gray-500">
                            {currentCard.srs.phase === 'new' ? 'NEW' : (currentCard.srs.phase === 'relearning' ? 'RELEARN' : 'REVIEW')}
                        </p>
                    </div>
                </div>

                {/* CARD SURFACE - BACK (Đáp án) */}
                {/* Thay đổi: Loại bỏ transition-all duration-500 và translate-y, chỉ dùng opacity/pointer-events cơ bản */}
                <div
                    className={`absolute w-full h-full bg-gray-50 border-2 border-gray-300 rounded-xl shadow-lg p-6 overflow-y-auto ${!isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    onClick={() => !isSaving && setIsFlipped(false)}
                >
                    <div className={`space-y-4`}>
                        {/* BACK TITLE: Chỉ giữ lại transition cho TITLE. */}
                        <h3 className={`text-3xl font-extrabold text-blue-700 border-b pb-2 mb-4 transition-all duration-500`}>
                            {currentCard.title}
                        </h3>

                        {/* Nội dung còn lại sẽ hiện/ẩn tức thời */}
                        <div className={`${!isFlipped ? 'hidden' : ''}`}>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Cấu trúc:</p>
                                <pre className="bg-gray-800 text-yellow-300 p-2 rounded-md text-sm whitespace-pre-wrap">{currentCard.structure}</pre>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm font-medium text-gray-500">Ý nghĩa:</p>
                                <p className="text-lg text-gray-800">{currentCard.meaning}</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm font-medium text-gray-500">Ví dụ:</p>
                                <p className="text-base italic text-gray-700">{currentCard.examples[0].original}</p>
                                <p className="text-base italic text-gray-700">→ {currentCard.examples[0].translate}</p>
                            </div>
                            {/*<div className="pt-4 border-t border-gray-200">*/}
                            {/*    <p className="text-xs text-gray-500">Thông tin ôn tập:</p>*/}
                            {/*    <p className="text-sm font-medium text-gray-600">Ease: {currentCard.srs.ease} | Interval: {Math.round(currentCard.srs.interval)} ngày</p>*/}
                            {/*    <p className="text-sm font-medium text-gray-600">Đến hạn tiếp theo: {nextDueText}</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>

            {/* Vùng nút SRS */}
            {isFlipped && (
                <div className="mt-4 space-y-3">
                    <p className="text-center text-sm font-semibold text-gray-700">Đánh giá mức độ ghi nhớ:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <SrsButton rating="Again" onClick={handleReview} isSaving={isSaving} color="bg-red-500" nextTime={calculateNextTime('Again')} shortcut="1" />
                        <SrsButton rating="Hard" onClick={handleReview} isSaving={isSaving} color="bg-yellow-500" nextTime={calculateNextTime('Hard')} shortcut="2" />
                        <SrsButton rating="Good" onClick={handleReview} isSaving={isSaving} color="bg-emerald-500" nextTime={calculateNextTime('Good')} shortcut="3" />
                        <SrsButton rating="Easy" onClick={handleReview} isSaving={isSaving} color="bg-blue-500" nextTime={calculateNextTime('Easy')} shortcut="4" />
                    </div>
                    {isSaving && <div className="text-center text-sm text-gray-500">Đang lưu kết quả...</div>}
                </div>
            )}

            {!isFlipped && (
                <div className="mt-4 space-y-3">
                    <p className="text-center text-sm font-semibold text-gray-700">Đánh giá mức độ ghi nhớ:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {/* Các nút này bị disabled, chỉ là placeholder */}
                        <SrsButton rating="Again" isSaving={true} color="bg-red-500"
                                   nextTime={calculateNextTime('Again')} shortcut="1"/>
                        <SrsButton rating="Hard" isSaving={true} color="bg-yellow-500"
                                   nextTime={calculateNextTime('Hard')} shortcut="2"/>
                        <SrsButton rating="Good" isSaving={true} color="bg-emerald-500"
                                   nextTime={calculateNextTime('Good')} shortcut="3"/>
                        <SrsButton rating="Easy" isSaving={true} color="bg-blue-500"
                                   nextTime={calculateNextTime('Easy')} shortcut="4"/>
                    </div>
                    {isSaving && <div className="text-center text-sm text-gray-500">Đang lưu kết quả...</div>}
                </div>
            )}

            {/* Cảnh báo lưu trữ */}
            <div className="mt-8 text-center text-xs text-gray-400 p-2 bg-gray-100 rounded-lg">
                <p>⚠️ Dữ liệu ôn tập (SRS) được lưu trữ **cục bộ trong trình duyệt** của bạn. Nếu bạn xóa bộ nhớ trình
                    duyệt hoặc chuyển sang thiết bị khác, dữ liệu sẽ bị mất.</p>
            </div>
        </div>
    );
}

// Component phụ cho nút SRS (Cập nhật để hiển thị shortcut)
const SrsButton = ({rating, onClick, isSaving, color, nextTime, shortcut}) => (
    <button
        onClick={onClick ? () => onClick(rating) : null}
        disabled={!onClick || isSaving}
        className={`${color} text-white font-bold py-3 px-2 rounded-lg shadow-md hover:opacity-80 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex flex-col justify-center items-center`}
    >
        <span className="text-base">{rating} ({shortcut})</span>
        <div className="text-xs mt-1 opacity-70">({nextTime})</div>
    </button>
);

export default FlashcardView;
