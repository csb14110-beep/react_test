export function pad2(n) {
  return String(n).padStart(2, '0');
}

export function dateKey(date) {
  const y = date.getFullYear();
  const m = pad2(date.getMonth() + 1);
  const d = pad2(date.getDate());
  return `${y}-${m}-${d}`;
}

export function parseDateKey(key) {
  const [y, m, d] = key.split('-').map((v) => Number(v));
  return new Date(y, m - 1, d);
}

export function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function addMonths(cursorMonth, delta) {
  return new Date(cursorMonth.getFullYear(), cursorMonth.getMonth() + delta, 1);
}

export function isSameMonth(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

export function isToday(date) {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

export function startOfWeek(date, weekStartsOn = 0) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = d.getDay(); // 0(Sun) - 6(Sat)
  const diff = (day - weekStartsOn + 7) % 7;
  d.setDate(d.getDate() - diff);
  return d;
}

export function buildMonthGrid(cursorMonth, weekStartsOn = 0) {
  const first = startOfMonth(cursorMonth);
  const gridStart = startOfWeek(first, weekStartsOn);

  const days = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(
      gridStart.getFullYear(),
      gridStart.getMonth(),
      gridStart.getDate() + i
    );
    days.push({
      date,
      key: dateKey(date),
      inMonth: isSameMonth(date, cursorMonth),
    });
  }
  return days;
}

export function formatKoreanDate(key) {
  const date = parseDateKey(key);
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  }).format(date);
}

