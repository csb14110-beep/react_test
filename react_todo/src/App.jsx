import React, { useState } from 'react';
import TodoList from './compocents/TodoList';
import Scheduler from './compocents/Scheduler';

function App() {
  const [tab, setTab] = useState('todo');

  const tabBase = 'px-3 py-2 text-sm font-medium transition';
  const tabOn = 'bg-gray-900 text-white';
  const tabOff = 'bg-white text-gray-700 hover:bg-gray-50';

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-5xl py-6">
        <header className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">플래너</h1>
            <p className="mt-1 text-sm text-gray-600">Todo + 한 달 스케줄을 한 곳에서 관리하세요.</p>
          </div>

          <div className="inline-flex overflow-hidden rounded-md border border-gray-300 bg-white">
            <button
              type="button"
              className={`${tabBase} ${tab === 'todo' ? tabOn : tabOff}`}
              onClick={() => setTab('todo')}
            >
              Todo
            </button>
            <button
              type="button"
              className={`${tabBase} ${tab === 'schedule' ? tabOn : tabOff}`}
              onClick={() => setTab('schedule')}
            >
              1개월 스케줄
            </button>
          </div>
        </header>

        {tab === 'todo' ? <TodoList /> : <Scheduler />}
      </div>
    </div>
  );
};

export default App
