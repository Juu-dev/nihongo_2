import React from 'react';

// 1. Render View Nhóm Ngữ Pháp
function GroupView({ groupedData, navigateTo }) {
    const groupNames = Object.keys(groupedData);

    return (
        <>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Các Nhóm Ngữ Pháp N3</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {groupNames.map(groupName => {
                    const count = groupedData[groupName].length;
                    return (
                        <div
                            key={groupName}
                            onClick={() => navigateTo('list', groupName)}
                            className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:border-emerald-500 cursor-pointer transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-emerald-600 mb-1">{groupName}</h3>
                            <p className="text-sm text-gray-500">{count} mẫu ngữ pháp</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default GroupView;
