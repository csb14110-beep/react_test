import React, { useMemo, useState } from 'react';
import { formatKoreanDate } from './date';
import ScheduleForm from './ScheduleForm';

function sortByTime(a, b) {
  const at = a.startTime || '99:99';
  const bt = b.startTime || '99:99';
  if (at < bt) return -1;
  if (at > bt) return 1;
  return a.title.localeCompare(b.title);
}

function timeLabel(item) {
  if (item.startTime && item.endTime) return `${item.startTime} ~ ${item.endTime}`;
  if (item.startTime) return item.startTime;
  if (item.endTime) return `~ ${item.endTime}`;
  return '시간 없음';
}

const DaySchedule = ({ selectedDateKey, items, onCreate, onUpdate, onDelete }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const sorted = useMemo(() => [...items].sort(sortByTime), [items]);

  const openCreate = () => {
    setEditing(null);
    setIsFormOpen(true);
  };

  const openEdit = (item) => {
    setEditing(item);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditing(null);
  };

  const handleSubmit = (draft) => {
    if (editing?.id) onUpdate(editing.id, draft);
    else onCreate(draft);
    closeForm();
  };

  return (
    <aside className="space-y-3">
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-sm font-semibold text-gray-900">선택한 날짜</div>
            <div className="mt-1 text-sm text-gray-600">{formatKoreanDate(selectedDateKey)}</div>
          </div>
          <button
            type="button"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
            onClick={openCreate}
          >
            일정 추가
          </button>
        </div>
      </div>

      {isFormOpen ? (
        <ScheduleForm
          dateKey={selectedDateKey}
          initialValue={editing}
          onCancel={closeForm}
          onSubmit={handleSubmit}
        />
      ) : null}

      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <div className="mb-3 text-sm font-semibold text-gray-900">일정 목록</div>
        {sorted.length === 0 ? (
          <div className="text-sm text-gray-500">이 날짜에는 일정이 없어요.</div>
        ) : (
          <ul className="space-y-2">
            {sorted.map((item) => (
              <li key={item.id} className="rounded-md border border-gray-200 p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-gray-900">{item.title}</div>
                    <div className="mt-1 text-xs text-gray-600">{timeLabel(item)}</div>
                    {item.note ? (
                      <div className="mt-2 whitespace-pre-wrap text-sm text-gray-700">
                        {item.note}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-50"
                      onClick={() => openEdit(item)}
                    >
                      수정
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-50"
                      onClick={() => onDelete(item.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default DaySchedule;

