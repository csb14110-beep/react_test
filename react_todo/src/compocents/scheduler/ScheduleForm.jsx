import React, { useEffect, useMemo, useState } from 'react';

const emptyDraft = (dateKey) => ({
  title: '',
  startTime: '',
  endTime: '',
  note: '',
  date: dateKey,
});

const ScheduleForm = ({ dateKey, initialValue, onCancel, onSubmit }) => {
  const [draft, setDraft] = useState(() => emptyDraft(dateKey));

  useEffect(() => {
    if (initialValue) setDraft({ ...initialValue });
    else setDraft(emptyDraft(dateKey));
  }, [dateKey, initialValue]);

  const isEditing = Boolean(initialValue?.id);

  const titleError = useMemo(() => {
    if (!draft.title.trim()) return '제목을 입력해 주세요.';
    return '';
  }, [draft.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleError) return;
    onSubmit({
      ...draft,
      title: draft.title.trim(),
      note: draft.note.trim(),
      date: dateKey,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="mb-3 text-sm font-semibold text-gray-800">
        {isEditing ? '일정 수정' : '일정 추가'}
      </div>

      <label className="block text-xs font-medium text-gray-600">제목</label>
      <input
        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-800"
        value={draft.title}
        onChange={(e) => setDraft((prev) => ({ ...prev, title: e.target.value }))}
        placeholder="예) 회의 / 운동 / 과제"
      />
      {titleError ? <div className="mt-1 text-xs text-red-600">{titleError}</div> : null}

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div>
          <label className="block text-xs font-medium text-gray-600">시작</label>
          <input
            type="time"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-800"
            value={draft.startTime || ''}
            onChange={(e) => setDraft((prev) => ({ ...prev, startTime: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600">끝</label>
          <input
            type="time"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-800"
            value={draft.endTime || ''}
            onChange={(e) => setDraft((prev) => ({ ...prev, endTime: e.target.value }))}
          />
        </div>
      </div>

      <div className="mt-3">
        <label className="block text-xs font-medium text-gray-600">메모</label>
        <textarea
          className="mt-1 h-24 w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-800"
          value={draft.note}
          onChange={(e) => setDraft((prev) => ({ ...prev, note: e.target.value }))}
          placeholder="필요한 메모를 남겨두세요."
        />
      </div>

      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          type="button"
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          onClick={onCancel}
        >
          취소
        </button>
        <button
          type="submit"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          저장
        </button>
      </div>
    </form>
  );
};

export default ScheduleForm;

