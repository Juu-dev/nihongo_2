import React from 'react';

// 2. Render View Danh sách Ngữ Pháp trong Nhóm
function GrammarListView({ groupName, listData, exerciseCount, navigateTo, navigateBack }) {
    return (
        <>
            <button onClick={navigateBack} className="back-button text-gray-500 mb-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20"
                     fill="currentColor">
                    <path fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"/>
                </svg>
                Quay lại danh sách nhóm
            </button>

            {/* Cập nhật: Thêm flex-wrap và gap để hỗ trợ responsive */}
            <div className="flex justify-between items-center mb-6 border-b pb-2 flex-wrap gap-2">
                <h2 className="text-2xl font-semibold text-gray-700">{groupName}</h2>

                {/* Gom nhóm các nút chức năng */}
                <div className="flex gap-2">
                    {/* --- NÚT FLASHCARD MỚI --- */}
                    <button
                        onClick={() => navigateTo('flashcard', groupName)}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center"
                    >
                        {/* SVG icon Flashcard */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1.5" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path
                                d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm10 2a1 1 0 11-2 0 1 1 0 012 0zM6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"/>
                        </svg>
                        Học Flashcard
                    </button>

                    {/* Nút Luyện Tập (Đã có) */}
                    <button
                        onClick={() => navigateTo('exercise', groupName)}
                        className="bg-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 flex items-center"
                    >
                        {/* SVG icon Luyện tập */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1.5" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm11 3a1 1 0 011 1v4a1 1 0 11-2 0V6a1 1 0 011-1zM5 5a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1zm6 4a1 1 0 100 2h4a1 1 0 100-2h-4z"
                                  clipRule="evenodd"/>
                        </svg>
                        Luyện Tập ({exerciseCount})
                    </button>
                </div>
            </div>

            <div className="h-[65vh] overflow-y-auto pr-1">
                <ul className="space-y-3">
                    {listData.map(item => (
                        <li
                            key={item.id}
                            onClick={() => navigateTo('detail', groupName, item.id)}
                            className="p-4 bg-gray-50 rounded-lg border-l-4 border-emerald-500 hover:bg-emerald-50 transition duration-200 cursor-pointer"
                        >
                            <p className="text-lg font-bold text-gray-800">{item.title}</p>
                            <p className="text-sm text-gray-500 truncate">{item.meaning.split('/')[0].trim()}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default GrammarListView;
