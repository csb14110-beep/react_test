import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MonthGrid from './scheduler/MonthGrid';
import DaySchedule from './scheduler/DaySchedule';
import { addMonths, dateKey, parseDateKey, startOfMonth } from './scheduler/date';

const STORAGE_KEY = 'react_todo_month_schedule_v1';

function safeLoad() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function safeSave(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore (private mode 등)
  }
}

const Scheduler = () => {
  const [cursorMonth, setCursorMonth] = useState(() => startOfMonth(new Date()));
  const [selectedDateKey, setSelectedDateKey] = useState(() => dateKey(new Date()));
  const [items, setItems] = useState(() => safeLoad());

  useEffect(() => {
    safeSave(items);
  }, [items]);

  const countsByDate = useMemo(() => {
    const map = {};
    for (const it of items) {
      if (!it?.date) continue;
      map[it.date] = (map[it.date] || 0) + 1;
    }
    return map;
  }, [items]);

  const selectedItems = useMemo(
    () => items.filter((it) => it.date === selectedDateKey),
    [items, selectedDateKey]
  );

  const goPrev = () => {
    const next = addMonths(cursorMonth, -1);
    setCursorMonth(next);
    setSelectedDateKey(dateKey(next));
  };

  const goNext = () => {
    const next = addMonths(cursorMonth, 1);
    setCursorMonth(next);
    setSelectedDateKey(dateKey(next));
  };

  const selectDate = (key) => {
    setSelectedDateKey(key);
    const d = parseDateKey(key);
    setCursorMonth(startOfMonth(d));
  };

  const goToday = (todayKey) => {
    setSelectedDateKey(todayKey);
    setCursorMonth(startOfMonth(parseDateKey(todayKey)));
  };

  const createItem = (draft) => {
    const newItem = {
      id: uuidv4(),
      date: selectedDateKey,
      title: draft.title,
      startTime: draft.startTime || '',
      endTime: draft.endTime || '',
      note: draft.note || '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    setItems((prev) => [...prev, newItem]);
  };

  const updateItem = (id, draft) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id
          ? {
              ...it,
              date: selectedDateKey,
              title: draft.title,
              startTime: draft.startTime || '',
              endTime: draft.endTime || '',
              note: draft.note || '',
              updatedAt: Date.now(),
            }
          : it
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_380px]">
      <MonthGrid
        cursorMonth={cursorMonth}
        selectedDateKey={selectedDateKey}
        countsByDate={countsByDate}
        onSelectDateKey={selectDate}
        onPrevMonth={goPrev}
        onNextMonth={goNext}
        onToday={goToday}
      />

      <DaySchedule
        selectedDateKey={selectedDateKey}
        items={selectedItems}
        onCreate={createItem}
        onUpdate={updateItem}
        onDelete={deleteItem}
      />
    </div>
  );
};

export default Scheduler;

