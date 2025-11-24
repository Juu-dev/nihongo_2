import React from 'react';

// Hàm tạo Question Navigator
function ExerciseNavigator({ total, currentIndex, status, onNavigate }) {
    // status là mảng: [null, 'correct', 'incorrect']
    const items = Array.from({ length: total }, (_, i) => i);

    return (
        // 1. CONTAINER MỚI: Dùng nền trắng hoặc nền nhạt, bo góc sâu, và đổ bóng nhẹ.
        // Đặt Max-width để nó không bị kéo quá rộng khi dùng trên thanh bên.
        <div className="max-w-xs p-4 bg-white rounded-2xl shadow-xl border border-gray-200">
            <h4 className="text-xl font-bold mb-3 border-b pb-2">
                Danh sách Bài tập
            </h4>

            <div className="flex flex-wrap gap-3 justify-start">
                {items.map(index => {
                    let colorClass = 'bg-gray-200 text-gray-700 hover:bg-gray-300'; // Chưa làm/Mặc định
                    let ringClass = '';

                    if (status[index] === 'correct') {
                        // Màu xanh lá cây mờ hơn, hiện đại hơn
                        colorClass = 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200';
                    } else if (status[index] === 'incorrect') {
                        // Màu đỏ mờ hơn
                        colorClass = 'bg-red-100 text-red-700 hover:bg-red-200';
                    }

                    // 2. TRẠNG THÁI HIỆN TẠI: Gây chú ý bằng màu sắc chủ đạo (Pink/Indigo) và ring.
                    if (index === currentIndex) {
                        // Thay đổi thành màu tím/hồng mạnh để match với ExerciseView
                        colorClass = 'bg-indigo-600 text-white shadow-md shadow-indigo-300';
                        ringClass = 'ring-2 ring-offset-2 ring-indigo-400';
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => onNavigate(index)}
                            // Tăng kích thước nút lên w-9 h-9 cho dễ bấm hơn
                            className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold transition duration-200 transform hover:scale-105 ${colorClass} ${ringClass}`}
                            title={`Bài tập số ${index + 1}`}
                        >
                            {index + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default ExerciseNavigator;
