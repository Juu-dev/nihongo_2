import React, { useState, useCallback, useMemo } from 'react';
import { GRAMMAR_DATA } from './data/grammar_data';
import { EXERCISE_DATA } from './data/exercise_data';

import GroupView from './components/GroupView';
import GrammarListView from './components/GrammarListView';
import GrammarDetailView from './components/GrammarDetailView';
import ExerciseView from './components/ExerciseView/ExerciseView';
import FlashcardView from './components/FlashcardView';

// --- Khởi tạo trạng thái ban đầu ---
const initialState = {
    view: 'groups', // 'groups', 'list', 'detail', 'exercise', 'flashcard'
    selectedGroup: null,
    selectedGrammarId: null,
};

// Hàm nhóm dữ liệu
const groupData = () => {
    return GRAMMAR_DATA.reduce((acc, item) => {
        if (!acc[item.group]) acc[item.group] = [];
        acc[item.group].push(item);
        return acc;
    }, {});
};

function App() {
    const [state, setState] = useState(initialState);
    const groupedData = useMemo(() => groupData(), []);

    // Điều hướng giữa các views
    const navigateTo = useCallback((view, groupName = null, grammarId = null) => {
        setState(prev => ({
            ...prev,
            view,
            selectedGroup: groupName,
            selectedGrammarId: grammarId,
        }));
    }, []);

    // Quay lại view trước đó
    const navigateBack = useCallback(() => {
        setState(prev => {
            if (prev.view === 'detail' || prev.view === 'exercise' || prev.view === 'flashcard') {
                return { ...prev, view: 'list', selectedGrammarId: null };
            } else if (prev.view === 'list') {
                return { ...initialState };
            }
            return prev;
        });
    }, []);

    // --- Logic Render View ---
    const renderView = () => {
        // Không cần kiểm tra isAuthReady nữa

        switch (state.view) {
            case 'list':
                return (
                    <GrammarListView
                        groupName={state.selectedGroup}
                        listData={groupedData[state.selectedGroup] || []}
                        exerciseCount={EXERCISE_DATA[state.selectedGroup]?.length || 0}
                        navigateTo={navigateTo}
                        navigateBack={navigateBack}
                    />
                );
            case 'detail':
                const detailItem = GRAMMAR_DATA.find(g => g.id === state.selectedGrammarId);
                return (
                    <GrammarDetailView
                        item={detailItem}
                        navigateBack={navigateBack}
                    />
                );
            case 'exercise':
                return (
                    <ExerciseView
                        groupName={state.selectedGroup}
                        exercises={EXERCISE_DATA[state.selectedGroup] || []}
                        grammarData={GRAMMAR_DATA}
                        navigateBack={navigateBack}
                    />
                );
            case 'flashcard':
                return (
                    <FlashcardView
                        groupName={state.selectedGroup}
                        grammarList={groupedData[state.selectedGroup] || []}
                        navigateBack={navigateBack}
                    />
                );

            case 'groups':
            default:
                return (
                    <GroupView
                        groupedData={groupedData}
                        navigateTo={navigateTo}
                    />
                );
        }
    };

    return (
        <div id="app" className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden min-h-[70vh] max-h-[95vh] mt-4">
            <header className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white shadow-lg">
                <h1 className="text-3xl font-extrabold tracking-tight">Hệ thống Ngữ pháp N3</h1>
                <p className="text-sm opacity-90 mt-1">Học theo nhóm chức năng, flashcards và làm bài tập</p>
            </header>

            <div id="content-area" className="p-6">
                {renderView()}
            </div>
        </div>
    );
}

export default App;
