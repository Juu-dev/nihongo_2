import React, { useState, useCallback, useEffect } from 'react';
import { EXERCISE_TYPE } from '../../data/exercise_data';
import ExerciseNavigator from './ExerciseNavigator';
import MultipleChoice from './MultipleChoice';
import FillInTheBlank from './FillInTheBlank';
import SentenceRearrangement from './SentenceRearrangement';
import Transformation from './Transformation';

/**
 * Component chính quản lý luồng và trạng thái của các bài tập trong một nhóm ngữ pháp.
 */
function ExerciseView({ groupName, exercises, grammarData, navigateBack }) {

    // --- State Management ---
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [exerciseStatus, setExerciseStatus] = useState(
        Array(exercises.length).fill(null) // [null, 'correct', 'incorrect']
    );
    const [userAnswers, setUserAnswers] = useState(
        Array(exercises.length).fill(null) // Lưu đáp án thô của người dùng
    );
    const [feedback, setFeedback] = useState(null);

    // ✨ STATE MỚI: Thống kê điểm số
    const [scoreStats, setScoreStats] = useState({
        completed: 0,
        correct: 0,
        incorrect: 0,
    });

    const totalExercises = exercises.length;
    const currentExercise = exercises[currentExerciseIndex];

    // Reset trạng thái khi chuyển nhóm
    useEffect(() => {
        setExerciseStatus(Array(exercises.length).fill(null));
        setUserAnswers(Array(exercises.length).fill(null));
        setCurrentExerciseIndex(0);
        setFeedback(null);
        // ✨ RESET THỐNG KÊ
        setScoreStats({ completed: 0, correct: 0, incorrect: 0 });
    }, [groupName, exercises.length]);

    // --- Utility Functions ---

    // Lấy chi tiết ngữ pháp cho Feedback
    const getGrammarDetail = useCallback((grammarTitle) => {
        // Tìm kiếm chính xác
        let detail = grammarData.find(g => g.title === grammarTitle);

        // Nếu không tìm thấy, tìm kiếm bằng cách so sánh chuỗi con (phòng trường hợp cấu trúc bị rút gọn)
        if (!detail) {
            detail = grammarData.find(g => g.title.includes(grammarTitle));
        }
        return detail;
    }, [grammarData]);

    // Hàm chuyển bài tập
    const goToExercise = useCallback((index) => {
        if (index >= 0 && index < totalExercises) {
            setCurrentExerciseIndex(index);
            // Lấy lại feedback nếu câu hỏi đã được trả lời
            if (exerciseStatus[index] !== null) {
                const isCorrect = exerciseStatus[index] === 'correct';
                const nextExercise = exercises[index];
                const detail = getGrammarDetail(nextExercise.grammar);
                setFeedback({ isCorrect, detail });
            } else {
                setFeedback(null);
            }
        }
    }, [totalExercises, exerciseStatus, exercises, getGrammarDetail]);

    // Hàm chuyển bài tiếp theo
    const nextExercise = useCallback(() => {
        goToExercise(currentExerciseIndex + 1);
    }, [currentExerciseIndex, goToExercise]);

    // Hàm chuyển bài trước đó
    const previousExercise = useCallback(() => {
        goToExercise(currentExerciseIndex - 1);
    }, [currentExerciseIndex, goToExercise]);

    // ✨ Hàm cập nhật thống kê điểm số
    const updateScoreStats = useCallback((isCorrect, prevStatus) => {
        setScoreStats(prevStats => {
            const newStats = { ...prevStats };

            // 1. Kiểm tra nếu câu hỏi này đã được trả lời trước đó (để tránh đếm lại)
            if (prevStatus === null) {
                newStats.completed += 1;
            } else {
                // Nếu đã trả lời và người dùng kiểm tra lại:
                // Trừ đi trạng thái cũ nếu khác trạng thái mới
                if (prevStatus === 'correct' && !isCorrect) {
                    newStats.correct -= 1;
                    newStats.incorrect += 1;
                } else if (prevStatus === 'incorrect' && isCorrect) {
                    newStats.incorrect -= 1;
                    newStats.correct += 1;
                }
                return newStats;
            }

            // 2. Cập nhật trạng thái mới
            if (isCorrect) {
                newStats.correct += 1;
            } else {
                newStats.incorrect += 1;
            }
            return newStats;
        });
    }, []);


    // Hàm kiểm tra đáp án
    const checkAnswer = useCallback(() => {
        const userAnswer = userAnswers[currentExerciseIndex];
        const prevStatus = exerciseStatus[currentExerciseIndex]; // Lấy trạng thái trước khi cập nhật
        let isCorrect = false;

        // Logic kiểm tra câu trả lời
        switch (currentExercise.type) {
            case EXERCISE_TYPE.type1: // Chọn đúng cấu trúc ngữ pháp (MultipleChoice)
                isCorrect = userAnswer !== null && userAnswer === currentExercise.data.answer;
                break;

            case EXERCISE_TYPE.type2: // Sắp xếp câu (SentenceRearrangement)
                const userOrder = userAnswer || [];
                const correctOrder = currentExercise.data.correct;
                isCorrect = userOrder.length === correctOrder.length && userOrder.every((val, index) => val === correctOrder[index]);
                break;

            case EXERCISE_TYPE.type3: // Bài tập biến đổi câu (Transformation)
                const userInput = (userAnswer || "").trim();
                const correctAnswer = currentExercise.data.correct_answer.trim();
                isCorrect = userInput === correctAnswer;
                break;

            case EXERCISE_TYPE.type4: // Bài tập điền trợ từ (FillInTheBlank)
                const correctParticle = currentExercise.data.options[currentExercise.data.answer];
                isCorrect = userAnswer === correctParticle;
                break;

            default:
                isCorrect = false;
        }

        // Cập nhật trạng thái bài tập
        setExerciseStatus(prev => {
            const newStatus = [...prev];
            newStatus[currentExerciseIndex] = isCorrect ? 'correct' : 'incorrect';
            return newStatus;
        });

        // ✨ CẬP NHẬT THỐNG KÊ
        updateScoreStats(isCorrect, prevStatus);

        // Tạo feedback
        const detail = getGrammarDetail(currentExercise.grammar);
        setFeedback({ isCorrect, detail });

    }, [currentExerciseIndex, currentExercise, userAnswers, exerciseStatus, getGrammarDetail, updateScoreStats]);

    // Render chi tiết ngữ pháp trong Feedback
    const renderGrammarDetail = (detail) => {
        if (!detail) {
            return <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-white"><p className="text-sm">Không tìm thấy chi tiết ngữ pháp.</p></div>;
        }

        return (
            <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-white">
                <h4 className="text-lg font-bold text-gray-800 border-b pb-1 mb-2">Ngữ Pháp: {detail.title}</h4>
                <p className="text-sm"><strong>Cấu trúc:</strong> <span className="font-mono text-pink-700">{detail.structure}</span></p>
                <p className="text-sm"><strong>Ý nghĩa:</strong> {detail.meaning}</p>
                <p className="text-sm"><strong>Ví dụ:</strong> {detail.examples[0].original} →　{detail.examples[0].translate}</p>
            </div>
        );
    };

    // Render nội dung bài tập theo loại
    const renderExerciseContent = useCallback(() => {
        // Hàm callback để các component con update đáp án
        const handleAnswerChange = (answer) => {
            setUserAnswers(prev => {
                const newAnswers = [...prev];
                newAnswers[currentExerciseIndex] = answer;
                return newAnswers;
            });
            // Reset feedback khi người dùng thay đổi câu trả lời
            setFeedback(null);
        };
        const currentAnswer = userAnswers[currentExerciseIndex];
        const answered = exerciseStatus[currentExerciseIndex] !== null;
        const correct = exerciseStatus[currentExerciseIndex] === 'correct';

        // Tạo một đối tượng props chung
        const commonProps = {
            exercise: currentExercise,
            initialAnswer: currentAnswer,
            onAnswerChange: handleAnswerChange,
            isAnswered: answered,
            isCorrect: correct,
        };

        switch (currentExercise.type) {
            case EXERCISE_TYPE.type1:
                return <MultipleChoice {...commonProps} />;
            case EXERCISE_TYPE.type4:
                return <FillInTheBlank {...commonProps} />;
            case EXERCISE_TYPE.type2:
                return <SentenceRearrangement {...commonProps} />;
            case EXERCISE_TYPE.type3:
                return <Transformation {...commonProps} />;
            default:
                return <p className="text-red-500">Dạng bài tập không xác định.</p>;
        }
    }, [currentExercise, currentExerciseIndex, exerciseStatus, userAnswers]);

    // ✨ Component hiển thị thống kê điểm số
    const renderScoreStats = () => {
        const percentage = totalExercises > 0
            ? Math.round((scoreStats.correct / totalExercises) * 100)
            : 0;

        return (
            <div className="bg-white p-4 rounded-xl shadow-lg border border-indigo-100 mb-6">
                <h3 className="text-xl font-bold mb-3 border-b pb-2">
                    Thống kê Luyện tập
                </h3>
                <div className="flex justify-around text-center">
                    <div>
                        <p className="text-3xl font-extrabold text-indigo-600">{scoreStats.correct}</p>
                        <p className="text-sm text-gray-500">Đúng</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold text-red-500">{scoreStats.incorrect}</p>
                        <p className="text-sm text-gray-500">Sai</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold text-gray-400">{totalExercises - scoreStats.completed}</p>
                        <p className="text-sm text-gray-500">Chưa làm</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold text-green-600">{percentage}%</p>
                        <p className="text-sm text-gray-500">Tỉ lệ Đúng</p>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-green-500 h-2.5 rounded-full"
                            style={{ width: `${percentage}%` }}
                            role="progressbar"
                            aria-valuenow={percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            </div>
        );
    };


    // --- Main Render ---

    if (exercises.length === 0) {
        return (
            <>
                <button onClick={() => navigateBack()} className="back-button text-gray-500 mb-4 inline-flex items-center">
                    Quay lại danh sách mẫu câu
                </button>
                <h2 className="text-2xl font-semibold mb-6 text-gray-700">Luyện Tập: {groupName}</h2>
                <p className="text-gray-600">Hiện tại chưa có bài tập nào cho nhóm này. Vui lòng thử nhóm khác!</p>
            </>
        );
    }

    return (
        <>
            <button onClick={() => navigateBack()} className="back-button text-gray-500 mb-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Quay lại danh sách mẫu câu
            </button>
            <h2 className="text-2xl font-semibold mb-3 text-gray-700">Luyện Tập: {groupName}</h2>

            {/* ✨ HIỂN THỊ THỐNG KÊ */}

            <div className="absolute right-0 top-[15%] w-1/5 h-1/5 px-3"> {/* Cần điều chỉnh lại vị trí top nếu cần */}
                {renderScoreStats()}
            </div>


            <div className="absolute left-0 top-[15%] w-1/5 h-1/5 px-3"> {/* Cần điều chỉnh lại vị trí top nếu cần */}
                <ExerciseNavigator
                    total={totalExercises}
                    currentIndex={currentExerciseIndex}
                    status={exerciseStatus}
                    onNavigate={goToExercise}
                />
            </div>

            <div className="mb-6 text-sm text-gray-500 mt-4">
                Bài {currentExerciseIndex + 1} / {totalExercises} - Dạng: <span className="font-bold text-pink-600">{currentExercise.type}</span>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-pink-200 space-y-4">
                <p className="text-xl font-medium text-gray-800">{currentExercise.question}</p>

                <div id="exercise-content">
                    {renderExerciseContent()}
                </div>

                {/* Feedback Area */}
                {feedback && (
                    <div className={`pt-4 border-t mt-4`}>
                        <div className={`p-3 rounded-lg ${feedback.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            <p className="font-bold">{feedback.isCorrect ? 'Đáp án Chính Xác! 🎉' : 'Đáp án Chưa Chính Xác.'}</p>
                        </div>
                        {renderGrammarDetail(feedback.detail)}
                    </div>
                )}


                <div className="flex justify-between items-center pt-4 border-t">
                    <button
                        onClick={previousExercise}
                        disabled={currentExerciseIndex === 0}
                        className={`bg-gray-400 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ${currentExerciseIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'}`}
                    >
                        &larr; Quay lại
                    </button>

                    {exerciseStatus[currentExerciseIndex] !== null ? (
                        <span className={`font-bold ${exerciseStatus[currentExerciseIndex] === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                            Đã {exerciseStatus[currentExerciseIndex] === 'correct' ? 'Đúng' : 'Sai'}
                        </span>
                    ) : (
                        <button
                            onClick={checkAnswer}
                            // Disabled nếu người dùng chưa chọn đáp án nào (Simple check)
                            disabled={userAnswers[currentExerciseIndex] === null || (Array.isArray(userAnswers[currentExerciseIndex]) && userAnswers[currentExerciseIndex].length === 0)}
                            className="bg-emerald-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-emerald-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Kiểm tra
                        </button>
                    )}

                    <button
                        onClick={nextExercise}
                        disabled={currentExerciseIndex === totalExercises - 1}
                        className={`bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ${currentExerciseIndex === totalExercises - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-600'}`}
                    >
                        Bài tiếp &rarr;
                    </button>
                </div>
            </div>
        </>
    );
}

export default ExerciseView;
