import { useEffect, useRef } from "react";

export function useDebounce() {
  const debounceTimeoutRef = useRef<number | null>(null);

  const clearDebounce = () => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = null;
    }
  };

  const debounce = (callback: () => void, timeout: number) => {
    debounceTimeoutRef.current = setTimeout(() => {
      callback();
      debounceTimeoutRef.current = null;
    }, timeout);
  };

  useEffect(() => {
    clearDebounce();
  }, []);

  return { debounce, clearDebounce };
}
