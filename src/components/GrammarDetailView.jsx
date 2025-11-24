import React from 'react';

// 3. Render View Chi tiết Ngữ Pháp
function GrammarDetailView({ item, navigateBack }) {
    if (!item) {
        return (
            <div className="p-6">
                <p className="text-red-500">Không tìm thấy ngữ pháp này.</p>
                <button onClick={navigateBack} className="back-button text-gray-500 mt-4 inline-flex items-center">
                    Quay lại
                </button>
            </div>
        );
    }

    return (
        <>
            <button onClick={navigateBack} className="back-button text-gray-500 mb-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Quay lại danh sách mẫu câu
            </button>

            <div className="space-y-6">
                {/* Tiêu đề */}
                <h2 className="text-3xl font-extrabold text-teal-600 border-b-4 border-emerald-500 pb-2">{item.title}</h2>

                {/* Nhóm */}
                <div className="p-3 bg-emerald-50 rounded-lg">
                    <p className="text-sm font-medium text-emerald-700">Nhóm chức năng:</p>
                    <p className="text-lg font-semibold text-emerald-800">{item.group}</p>
                </div>

                {/* Cấu trúc */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                    <p className="text-base font-medium text-gray-700 mb-2">Cấu trúc:</p>
                    <pre
                        className="bg-gray-800 text-yellow-300 p-3 rounded-md overflow-x-auto text-sm sm:text-base whitespace-pre-wrap">{item.structure}</pre>
                </div>

                {/* Ý nghĩa */}

                <div className="space-y-6 h-[37vh] overflow-y-scroll">
                    <div className="bg-green-50 p-4 rounded-lg shadow-md border-l-4 border-green-500">
                        <p className="text-lg font-bold text-green-700 mb-2 inline-flex items-center">
                            Ý nghĩa:
                        </p>
                        <p className="text-xl italic text-green-900 leading-relaxed">{item.meaning}</p>
                    </div>

                    {/* Ví dụ */}
                    <div className="bg-blue-50 rounded-lg border-l-4 border-blue-400 p-4 rounded-r-lg">
                        <p className="text-lg font-bold text-blue-800 mb-2 inline-flex items-center">
                            Ví dụ:
                        </p>
                        {item.examples.map((example, index) => (
                            <>
                                <p className="text-lg italic text-blue-900">{example.original}</p>
                                <p className="text-lg italic text-blue-900 mb-3">→ {example.translate}</p>
                            </>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}

export default GrammarDetailView;
