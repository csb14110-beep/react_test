import React from 'react';
import { buildMonthGrid, dateKey, isToday } from './date';

const DOW_KO = ['일', '월', '화', '수', '목', '금', '토'];

function monthTitle(cursorMonth) {
  return new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long' }).format(cursorMonth);
}

const MonthGrid = ({
  cursorMonth,
  selectedDateKey,
  countsByDate,
  onSelectDateKey,
  onPrevMonth,
  onNextMonth,
  onToday,
}) => {
  const days = buildMonthGrid(cursorMonth, 0);

  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 hover:bg-gray-50"
            onClick={onPrevMonth}
          >
            이전
          </button>
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 hover:bg-gray-50"
            onClick={onNextMonth}
          >
            다음
          </button>
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 hover:bg-gray-50"
            onClick={() => onToday(dateKey(new Date()))}
          >
            오늘
          </button>
        </div>

        <h2 className="text-base font-semibold text-gray-800">{monthTitle(cursorMonth)}</h2>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-500">
        {DOW_KO.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {days.map(({ date, key, inMonth }) => {
          const isSelected = key === selectedDateKey;
          const count = countsByDate[key] || 0;
          const today = isToday(date);

          const base =
            'h-20 w-full rounded-md border px-2 py-2 text-left transition focus:outline-none focus:ring-2 focus:ring-gray-400';
          const muted = inMonth ? 'bg-white text-gray-800' : 'bg-gray-50 text-gray-400';
          const selected = isSelected ? 'border-gray-800 ring-1 ring-gray-800' : 'border-gray-200';
          const todayBadge = today ? 'after:ml-2 after:inline-block after:rounded-full after:bg-gray-800 after:px-2 after:py-0.5 after:text-[10px] after:text-white after:content-["오늘"]' : '';

          return (
            <button
              key={key}
              type="button"
              className={`${base} ${muted} ${selected}`}
              onClick={() => onSelectDateKey(key)}
              aria-label={`${key} 선택`}
            >
              <div className={`text-sm font-semibold ${todayBadge}`}>{date.getDate()}</div>
              <div className="mt-1 text-xs text-gray-500">
                {count > 0 ? `일정 ${count}개` : ' '}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MonthGrid;

