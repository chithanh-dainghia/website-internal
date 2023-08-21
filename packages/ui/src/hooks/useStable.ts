import { useRef } from "react";

export default function useStable(fn: any) {
  const ref = useRef<{ value: any } | null>(null);

  if (ref.current === null) {
    const value = fn();
    ref.current = {
      value,
    };

    return value;
  } else {
    return ref.current.value;
  }
}
