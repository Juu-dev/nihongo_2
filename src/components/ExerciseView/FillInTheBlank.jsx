import React, { useState, useEffect } from 'react';

// Dạng 4: Bài tập điền trợ từ
function FillInTheBlank({ exercise, initialAnswer, onAnswerChange, isAnswered, isCorrect }) {
    const sentenceParts = exercise.data.sentence.split('（＿＿）');
    const correctParticle = exercise.data.options[exercise.data.answer];

    // State cục bộ: Dùng initialAnswer từ prop, hoặc '...' nếu chưa có
    const [selectedParticle, setSelectedParticle] = useState(initialAnswer || '...');

    // Đồng bộ state cục bộ khi bài tập thay đổi
    useEffect(() => {
        setSelectedParticle(initialAnswer || '...');
    }, [exercise.id, initialAnswer]);

    const handleSelect = (particle) => {
        if (isAnswered) return;
        setSelectedParticle(particle);
        onAnswerChange(particle); // Báo cáo lên component cha
    };

    // Style cho ô trống
    const slotContent = isAnswered ? correctParticle : selectedParticle;
    let slotClass = 'bg-pink-100 text-pink-800'; // Mặc định
    if (isAnswered) {
        slotClass = isCorrect ? 'bg-green-200 text-green-800 border-green-500' : 'bg-red-200 text-red-800 border-red-500';
    }

    return (
        <div className="space-y-3">
            {/* Hiển thị câu */}
            <div className="text-xl bg-white p-3 rounded-md border">
                {sentenceParts[0]}
                <span className={`inline-block px-2 py-1 rounded-md min-w-[50px] text-center font-bold border ${slotClass}`}>
                    {slotContent}
                </span>
                {sentenceParts[1]}
            </div>

            {/* Tùy chọn */}
            <div id="particle-options" className="flex flex-wrap gap-2 pt-2">
                {isAnswered ? (
                    <p className="text-sm text-gray-500">Đã trả lời.</p>
                ) : (
                    exercise.data.options.map((opt, index) => {
                        const isSelected = opt === selectedParticle;
                        return (
                            <button
                                key={index}
                                onClick={() => handleSelect(opt)}
                                disabled={isAnswered}
                                className={`
                                    bg-yellow-300 text-gray-800 font-bold py-1 px-3 rounded-md transition duration-150 
                                    ${isAnswered ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-400'}
                                    ${isSelected && !isAnswered ? 'ring-2 ring-pink-500' : ''}
                                `}
                            >
                                {opt}
                            </button>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default FillInTheBlank;
