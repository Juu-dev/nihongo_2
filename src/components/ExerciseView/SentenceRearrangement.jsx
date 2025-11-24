import React, {useState, useEffect, useCallback, useMemo} from 'react';

// Dạng 2: Sắp xếp câu (Sentence Rearrangement)
function SentenceRearrangement({ exercise, initialAnswer, onAnswerChange, isAnswered, isCorrect }) {
    const correctOrder = exercise.data.correct;
    const initialParts = useMemo(() => {
        // Trộn ngẫu nhiên các phần nếu chưa trả lời và chưa có đáp án lưu
        if (isAnswered) return [];
        if (initialAnswer && initialAnswer.length > 0) {
            // Nếu có đáp án lưu, các từ đã được sắp xếp sẽ nằm trong target
            // Logic ở đây giả định initialAnswer chỉ chứa các từ đã chọn,
            // và các từ còn lại sẽ nằm trong source.
            return correctOrder.filter(part => !initialAnswer.includes(part)).sort(() => Math.random() - 0.5);
        }
        return [...correctOrder].sort(() => Math.random() - 0.5);
    }, [correctOrder, isAnswered, initialAnswer]);

    // State quản lý các từ trong khu vực nguồn (chưa sắp xếp)
    const [sourceParts, setSourceParts] = useState(isAnswered ? [] : initialParts);
    // State quản lý các từ trong khu vực thả (đã sắp xếp)
    const [targetParts, setTargetParts] = useState(isAnswered ? correctOrder : initialAnswer || []);

    // Đồng bộ state khi bài tập thay đổi
    useEffect(() => {
        if (isAnswered) {
            setSourceParts([]);
            setTargetParts(correctOrder);
        } else {
            const parts = [...correctOrder];
            if (initialAnswer && initialAnswer.length > 0) {
                // Tái tạo trạng thái nếu có đáp án lưu
                setTargetParts(initialAnswer);
                setSourceParts(parts.filter(p => !initialAnswer.includes(p)));
            } else {
                // Trạng thái ban đầu: các từ đã trộn
                setSourceParts(parts.sort(() => Math.random() - 0.5));
                setTargetParts([]);
            }
        }
    }, [exercise.id, isAnswered, correctOrder, initialAnswer]);


    // Hàm di chuyển từ Source -> Target
    const moveToTarget = useCallback((partToMove, index) => {
        if (isAnswered) return;

        // Xóa khỏi Source
        setSourceParts(prev => prev.filter((_, i) => i !== index));

        // Thêm vào Target
        setTargetParts(prev => {
            const newTarget = [...prev, partToMove];
            onAnswerChange(newTarget); // Cập nhật lên App state
            return newTarget;
        });
    }, [isAnswered, onAnswerChange]);

    // Hàm di chuyển từ Target -> Source (Quay lại)
    const moveToSource = useCallback((partToMove, index) => {
        if (isAnswered) return;

        // Xóa khỏi Target
        setTargetParts(prev => {
            const newTarget = prev.filter((_, i) => i !== index);
            onAnswerChange(newTarget); // Cập nhật lên App state
            return newTarget;
        });

        // Thêm vào Source
        setSourceParts(prev => [...prev, partToMove]);
    }, [isAnswered, onAnswerChange]);


    const dropAreaClass = isAnswered
        ? (isCorrect ? 'border-solid border-green-500 bg-green-50' : 'border-solid border-red-500 bg-red-50')
        : 'border-dashed border-blue-400';

    return (
        <div className="space-y-4">
            <p className="text-sm text-gray-600">Nhấn vào các từ để sắp xếp câu theo thứ tự đúng.</p>

            {/* Drop Area / Target */}
            <div
                id={`drop-area-${exercise.id}`}
                className={`flex flex-wrap gap-2 p-3 bg-white rounded-lg border-2 ${dropAreaClass} min-h-[50px]`}
            >
                {targetParts.map((part, index) => (
                    <span
                        key={`${part}-${index}`} // Key unique
                        onClick={() => moveToSource(part, index)}
                        className={`
                            drag-item font-bold py-1 px-3 rounded-full shadow-sm transition duration-150 
                            ${isAnswered ? (isCorrect ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-red-500 text-white cursor-not-allowed') : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'}
                        `}
                    >
                        {part}
                    </span>
                ))}
            </div>

            {/* Drag Source / Source */}
            <div id={`drag-source-${exercise.id}`} className="flex flex-wrap gap-2 p-3 bg-gray-100 rounded-lg shadow-inner min-h-[50px]">
                {isAnswered ? (
                    <p className="text-sm text-gray-500">Đã hoàn thành bài tập.</p>
                ) : (
                    sourceParts.map((part, index) => (
                        <span
                            key={`${part}-${index}`}
                            onClick={() => moveToTarget(part, index)}
                            className="drag-item bg-teal-400 text-white font-bold py-1 px-3 rounded-full shadow-sm hover:bg-teal-500 transition duration-150 cursor-pointer"
                        >
                            {part}
                        </span>
                    ))
                )}
            </div>
        </div>
    );
}

export default SentenceRearrangement;
