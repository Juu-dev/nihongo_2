import React, { useState, useEffect, useCallback } from 'react';

// Dạng 3: Bài tập biến đổi câu (Transformation)
function Transformation({ exercise, initialAnswer, onAnswerChange, isAnswered, isCorrect }) {
    const correctText = exercise.data.correct_answer;

    // State cục bộ để quản lý input
    const [inputValue, setInputValue] = useState(initialAnswer || '');

    // Đồng bộ state cục bộ khi bài tập thay đổi
    useEffect(() => {
        setInputValue(initialAnswer || '');
    }, [exercise.id, initialAnswer]);

    const handleInputChange = useCallback((e) => {
        const value = e.target.value;
        setInputValue(value);
        onAnswerChange(value); // Cập nhật lên App state
    }, [onAnswerChange]);

    let highlightClass = '';
    if (isAnswered) {
        highlightClass = isCorrect
            ? 'border-green-500 ring-green-200 bg-green-50'
            : 'border-red-500 ring-red-200 bg-red-50';
    }

    return (
        <div className="space-y-2">
            <p className="text-sm text-gray-600">Viết lại câu theo yêu cầu:</p>
            <textarea
                id={`transformation-input-${exercise.id}`}
                rows="3"
                className={`w-full p-3 border rounded-lg focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition duration-150 ${isAnswered ? 'cursor-not-allowed' : 'border-gray-300' } ${highlightClass}`}
                placeholder="Viết câu đã biến đổi vào đây..."
                disabled={isAnswered}
                value={inputValue}
                onChange={handleInputChange}
            ></textarea>

            {/* Hiển thị gợi ý nếu chưa trả lời hoặc không phải đáp án đúng */}
            {!isAnswered || !isCorrect ? (
                <p className="text-sm text-yellow-700 bg-yellow-100 p-2 rounded">
                    **Gợi ý:** {exercise.data.hint}
                </p>
            ) : null}

            {/* Hiển thị đáp án đúng nếu trả lời sai */}
            {isAnswered && !isCorrect && (
                <div className="bg-green-100 p-2 rounded border border-green-400">
                    <p className="text-sm font-semibold text-green-800">Đáp án chính xác:</p>
                    <p className="text-base font-mono text-green-900">{correctText}</p>
                </div>
            )}
        </div>
    );
}

export default Transformation;
