import { useEffect, useState } from "react";

/**
 * Subscribes to a media query; safe for SSR (defaults to `defaultMatches`).
 */
export function useMatchMedia(query: string, defaultMatches = false): boolean {
  const getMatches = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : defaultMatches;

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
