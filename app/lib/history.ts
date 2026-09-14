export type FormulaMode = "generate" | "fix" | "explain" | "optimize";

export type FormulaHistoryItem = {
  id: string;
  mode: FormulaMode;
  request: string;
  formula: string;
  explanation: string;
  tool: string;
  createdAt: string;
};

const MAX_HISTORY_ITEMS = 100;

function storageKey(userId: string) {
  return `everyformula-history:${userId}`;
}

export function readFormulaHistory(userId: string): FormulaHistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const value = JSON.parse(localStorage.getItem(storageKey(userId)) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function saveFormulaHistory(userId: string, item: FormulaHistoryItem) {
  const history = readFormulaHistory(userId);
  localStorage.setItem(storageKey(userId), JSON.stringify([item, ...history].slice(0, MAX_HISTORY_ITEMS)));
}

export function deleteFormulaHistoryItem(userId: string, id: string) {
  const history = readFormulaHistory(userId).filter((item) => item.id !== id);
  localStorage.setItem(storageKey(userId), JSON.stringify(history));
  return history;
}

