import { useEffect } from "react";

export const useClickOutsideMultiple = (refs, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Check if the click is contained by any of the provided refs
      const isContained = refs.some(
        (ref) => ref.current && ref.current.contains(event.target),
      );
      if (isContained) {
        return;
      }
      // If not contained by any ref, call the handler
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
};
