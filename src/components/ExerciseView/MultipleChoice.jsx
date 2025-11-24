import React, { useState, useEffect, useMemo } from 'react';

// Dạng 1: Chọn đúng cấu trúc ngữ pháp
function MultipleChoice({ exercise, initialAnswer, onAnswerChange, isAnswered }) {
    // State cục bộ để quản lý lựa chọn
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(initialAnswer);
    const correctOptionOriginalIndex = exercise.data.answer;

    // --- LOGIC ĐẢO VÀ ÁNH XẠ ĐÁP ÁN MỚI ---
    const { shuffledOptions, originalIndexMap, correctOptionShuffledIndex } = useMemo(() => {
        const originalOptions = exercise.data.options;
        // 1. Tạo mảng các cặp [option, originalIndex]
        const indexedOptions = originalOptions.map((option, index) => ({ option, originalIndex: index }));

        // 2. Hàm đảo ngẫu nhiên Fisher-Yates (hoặc đơn giản hơn)
        // Tạo một bản sao để đảo ngẫu nhiên
        const shuffledIndexedOptions = [...indexedOptions];
        for (let i = shuffledIndexedOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledIndexedOptions[i], shuffledIndexedOptions[j]] = [shuffledIndexedOptions[j], shuffledIndexedOptions[i]];
        }

        // 3. Chuẩn bị dữ liệu để sử dụng
        const shuffledOptions = shuffledIndexedOptions.map(item => item.option);

        // 4. Tạo Map ánh xạ vị trí mới (shuffledIndex) sang vị trí gốc (originalIndex)
        // và tìm vị trí mới của đáp án đúng
        const originalIndexMap = new Map(); // Map: shuffledIndex -> originalIndex
        let correctOptionShuffledIndex = -1;

        shuffledIndexedOptions.forEach((item, shuffledIndex) => {
            originalIndexMap.set(shuffledIndex, item.originalIndex);
            if (item.originalIndex === correctOptionOriginalIndex) {
                correctOptionShuffledIndex = shuffledIndex;
            }
        });

        return { shuffledOptions, originalIndexMap, correctOptionShuffledIndex };
        // Dùng exercise.id để đảm bảo việc đảo chỉ xảy ra 1 lần cho mỗi câu hỏi
        // và không thay đổi khi component re-render (trừ khi exercise.id đổi)
    }, [exercise.id, correctOptionOriginalIndex, exercise.data.options]);

    // --- ĐỒNG BỘ STATE ---
    useEffect(() => {
        // initialAnswer (vị trí gốc) cần được chuyển đổi sang vị trí đã đảo
        // dựa trên originalIndexMap, nhưng vì initialAnswer là vị trí đã chọn
        // từ trước, ta cần tìm vị trí đã đảo tương ứng.

        // Cách đơn giản và hiệu quả nhất là giữ initialAnswer như là vị trí gốc
        // và chỉ chuyển đổi khi cần báo cáo/render. Tuy nhiên, vì bạn muốn
        // component con quản lý lựa chọn, ta phải làm như sau:

        let shuffledInitialAnswer = -1;
        if (initialAnswer !== null && initialAnswer !== undefined) {
            // Tìm vị trí đã đảo tương ứng với initialAnswer (vị trí gốc)
            for (const [shuffledIdx, originalIdx] of originalIndexMap.entries()) {
                if (originalIdx === initialAnswer) {
                    shuffledInitialAnswer = shuffledIdx;
                    break;
                }
            }
        }

        setSelectedOptionIndex(shuffledInitialAnswer);
    }, [exercise.id, initialAnswer, originalIndexMap]);


    // --- HÀM XỬ LÝ SỰ KIỆN ---
    const handleSelect = (shuffledIndex) => {
        if (isAnswered) return;

        // 1. Cập nhật state cục bộ bằng VỊ TRÍ ĐÃ ĐẢO (shuffledIndex)
        setSelectedOptionIndex(shuffledIndex);

        // 2. Lấy VỊ TRÍ GỐC (originalIndex) để báo cáo lên component cha
        const originalIndex = originalIndexMap.get(shuffledIndex);

        // 3. Báo cáo lên component cha bằng VỊ TRÍ GỐC (để đáp án gốc vẫn là nguồn chân lý)
        onAnswerChange(originalIndex);
    };

    // --- RENDER ---
    return (
        <div className="space-y-2" data-question-id={exercise.id}>
            {shuffledOptions.map((option, shuffledIndex) => {
                let classHighlight = '';
                const isSelected = shuffledIndex === selectedOptionIndex;

                // Lấy vị trí gốc của đáp án hiện tại để so sánh với đáp án đúng gốc
                const currentOptionOriginalIndex = originalIndexMap.get(shuffledIndex);

                if (isAnswered) {
                    if (currentOptionOriginalIndex === correctOptionOriginalIndex) {
                        classHighlight = 'ring-2 ring-green-500 bg-green-50'; // Đáp án đúng
                    } else if (isSelected) {
                        classHighlight = 'ring-2 ring-red-500 bg-red-50'; // Đáp án sai đã chọn
                    }
                }

                return (
                    <label
                        key={shuffledIndex} // Key dùng vị trí đã đảo
                        onClick={() => handleSelect(shuffledIndex)}
                        className={`flex items-center p-3 rounded-lg border cursor-pointer transition duration-150
                            ${!!classHighlight ? classHighlight : "bg-white" }
                            ${isAnswered ? 'cursor-not-allowed' : 'hover:bg-emerald-50'}
                        `}
                    >
                        <input
                            type="radio"
                            name={`mcq_option_${exercise.id}`}
                            value={shuffledIndex}
                            checked={isSelected}
                            readOnly={true}
                            disabled={isAnswered}
                            className="form-radio h-5 w-5 text-emerald-600 checked:bg-emerald-600"
                        />
                        <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                );
            })}
        </div>
    );
}

export default MultipleChoice;
