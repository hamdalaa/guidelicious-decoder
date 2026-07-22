// Tiny module-level bus so only one header selector popover is open at a time.
let current: string | null = null;
const listeners = new Set<(id: string | null) => void>();

export function openSelector(id: string | null) {
  current = id;
  listeners.forEach((l) => l(id));
}

export function getOpenSelector() {
  return current;
}

export function subscribeSelector(fn: (id: string | null) => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
