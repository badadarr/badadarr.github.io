const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function parseYM(ym: string | null): Date {
  if (!ym) return new Date();
  const [y, m] = ym.split("-").map(Number);
  return new Date(y, m - 1, 1);
}

export function monthsBetween(start: string, end: string | null): number {
  const s = parseYM(start);
  const e = parseYM(end);
  return Math.max(
    0,
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()),
  );
}

export function formatDuration(totalMonths: number): string {
  if (totalMonths <= 0) return "< 1 mo";
  const yrs = Math.floor(totalMonths / 12);
  const mos = totalMonths % 12;
  const parts: string[] = [];
  if (yrs > 0) parts.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
  if (mos > 0) parts.push(`${mos} mo${mos > 1 ? "s" : ""}`);
  return parts.join(" ");
}

export function formatYM(ym: string | null): string {
  if (!ym) return "Present";
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

export function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}
